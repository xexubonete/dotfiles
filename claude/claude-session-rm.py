#!/usr/bin/env python3
"""Borra una conversación de Claude Code por su nombre.

    csrm life

Usa el nombre que se ve en `/resume`: el que hayas puesto tú al renombrar
(`custom-title` en el .jsonl) y, si no lo tiene, el que genera Claude (`ai-title`).
Busca por substring, así que basta un trozo.

Si la sesión está viva la para primero, sin preguntar: borrar los ficheros por debajo
de un proceso vivo es pedir que los reescriba al salir. Lo único que no borra es la
sesión desde la que se ejecuta.

Claude Code no trae forma de borrarlas: `claude rm` borra la sesión en background (el
proceso), no la charla, y `/resume` solo reanuda, renombra, bifurca, busca y filtra.

Borra las cuatro cosas que deja una sesión, no solo la transcripción:

    projects/<proyecto>/<uuid>.jsonl   la conversación
    projects/<proyecto>/<uuid>/        resultados de herramientas guardados aparte
    file-history/<uuid>/               copias de los ficheros antes de cada edición
    jobs/<id corto>/                   el proceso, si se lanzó en background

Es Python y no bash a propósito: en bash el script se lee por stdin y la pregunta de
cuál borrar no podría leer la respuesta.
"""

import json
import os
import shutil
import subprocess
import sys
import time
from pathlib import Path

RAIZ = Path(os.environ.get("CLAUDE_CONFIG_DIR", Path.home() / ".claude"))
YO = os.environ.get("CLAUDE_CODE_SESSION_ID", "")


def tam(n: float) -> str:
    for unidad in ("B", "K", "M", "G"):
        if n < 1024:
            return f"{n:.0f}{unidad}"
        n /= 1024
    return f"{n:.0f}T"


def titulo_de(jsonl: Path) -> str:
    """Se filtra por substring antes de parsear: estos ficheros llegan a 67 MB y casi
    todas sus líneas son mensajes que no interesan."""
    propio = ai = prompt = None
    try:
        with jsonl.open(errors="ignore") as f:
            for linea in f:
                if not any(k in linea for k in
                           ('"custom-title"', '"ai-title"', '"lastPrompt"')):
                    continue
                try:
                    d = json.loads(linea)
                except json.JSONDecodeError:
                    continue
                tipo = d.get("type")
                if tipo == "custom-title":
                    # El nombre que pone el usuario al renombrar. Es EL que se ve en
                    # /resume, así que manda sobre el que genera Claude.
                    propio = d.get("customTitle") or propio
                elif tipo == "ai-title":
                    ai = d.get("aiTitle") or ai
                elif prompt is None and d.get("lastPrompt"):
                    # Las sesiones muy cortas no llegan a tener ninguno de los dos.
                    prompt = str(d["lastPrompt"])[:60]
    except OSError:
        pass
    return propio or ai or prompt or "(sin título)"


def vivas() -> set:
    """Ids cortos de las sesiones en marcha."""
    try:
        salida = subprocess.run(["claude", "agents", "--all", "--json"],
                                capture_output=True, text=True, timeout=15).stdout
        return {s.get("id") for s in json.loads(salida)
                if s.get("status") in ("busy", "idle", "running")} - {None, ""}
    except (OSError, ValueError, subprocess.SubprocessError):
        return set()


def parar(corto: str) -> bool:
    """Para una sesión viva y espera a que muera de verdad.

    Borrar los ficheros por debajo de un proceso vivo es pedir que los reescriba al
    salir, así que primero se para. Esto lo hace el script porque es lo que se le ha
    pedido: borrar la sesión, no explicar los dos pasos que hay que dar.
    """
    print(f"  parando {corto}…")
    try:
        subprocess.run(["claude", "stop", corto],
                       capture_output=True, text=True, timeout=30)
    except (OSError, subprocess.SubprocessError) as e:
        print(f"  no pude pararla: {e}", file=sys.stderr)
        return False

    # `claude stop` vuelve antes de que el proceso haya terminado del todo.
    for _ in range(30):
        if corto not in vivas():
            return True
        time.sleep(0.5)

    print(f"  sigue viva tras 15 s; no la borro.", file=sys.stderr)
    return False


def rastro(jsonl: Path):
    uuid = jsonl.stem
    yield jsonl
    for p in (jsonl.with_suffix(""),
              RAIZ / "file-history" / uuid,
              RAIZ / "jobs" / uuid[:8]):
        if p.is_dir():
            yield p


SIN_TERMINAL = object()   # no hay a quién preguntar
CANCELADO = object()      # Esc, o Ctrl+C


def interpretar(leer, hay_mas=lambda: False, eco=lambda b: None):
    """Traduce pulsaciones en respuesta: número, "" (todas) o CANCELADO.

    Separado de la terminal a propósito, para poder probarlo sin una. `leer` devuelve
    un byte (b"" si se acabó), `hay_mas` dice si queda algo pendiente de leer ya
    mismo, y `eco` pinta lo que el usuario teclea.
    """
    buf = ""
    while True:
        c = leer()
        if not c:
            return SIN_TERMINAL
        if c == b"\x1b":
            # Esc a secas cancela. Las flechas también empiezan por \x1b, así que si
            # viene algo detrás es una secuencia y se descarta, no una salida.
            if hay_mas():
                leer(); leer()
                continue
            return CANCELADO
        if c in (b"\r", b"\n"):
            return buf
        if c == b"\x03":                   # Ctrl+C
            return CANCELADO
        if c == b"\x7f":                   # borrar
            if buf:
                buf = buf[:-1]
                eco(b"\b \b")
            continue
        if c.isdigit():
            buf += c.decode()
            eco(c)


def elegir(texto: str):
    """Pregunta por la terminal, en modo crudo para que Esc llegue.

    Va por /dev/tty y no por stdin porque el modo `!` de Claude Code corre sin
    ninguno de los dos: ahí devuelve SIN_TERMINAL en vez de soltar una traza.
    """
    import select
    import termios
    import tty as tty_mod

    try:
        f = open("/dev/tty", "r+b", buffering=0)
    except OSError:
        return SIN_TERMINAL

    fd = f.fileno()
    try:
        previo = termios.tcgetattr(fd)
    except termios.error:
        f.close()
        return SIN_TERMINAL

    try:
        tty_mod.setcbreak(fd)
        f.write(texto.encode())
        return interpretar(
            leer=lambda: f.read(1),
            hay_mas=lambda: bool(select.select([fd], [], [], 0.05)[0]),
            eco=f.write,
        )
    finally:
        termios.tcsetattr(fd, termios.TCSADRAIN, previo)
        f.write(b"\n")
        f.close()


def peso(p: Path) -> int:
    if p.is_file():
        return p.stat().st_size
    return sum(f.stat().st_size for f in p.rglob("*") if f.is_file())


def main() -> int:
    args = sys.argv[1:]

    # --todas evita la pregunta cuando ya sabes que quieres todas las coincidencias, y
    # es lo único que funciona sin terminal.
    todas = any(a in ("--todas", "--all", "-t") for a in args)
    args = [a for a in args if a not in ("--todas", "--all", "-t")]

    if not args:
        print("uso: csrm [--todas] <nombre>", file=sys.stderr)
        return 2

    busqueda = " ".join(args).strip().lower()

    proyectos = RAIZ / "projects"
    if not proyectos.is_dir():
        print(f"no encuentro {proyectos}", file=sys.stderr)
        return 1

    # Todos los proyectos, no solo el del directorio actual: buscar una sesión por su
    # nombre no tiene por qué depender de dónde estés parado al escribir el comando.
    todos = [j for carpeta in proyectos.iterdir() if carpeta.is_dir()
             for j in carpeta.glob("*.jsonl")]

    en_marcha = vivas()
    casan = []
    for jsonl in sorted(todos, key=lambda p: -p.stat().st_mtime):
        titulo = titulo_de(jsonl)
        if busqueda in titulo.lower() or jsonl.stem.startswith(busqueda):
            casan.append((jsonl, titulo))

    if not casan:
        print(f'nada casa con "{busqueda}".')
        return 1

    # Estar viva no descalifica: se para y se borra. Lo único intocable es la sesión
    # desde la que se está ejecutando esto.
    borrables = [(j, t) for j, t in casan if j.stem != YO]

    if not borrables:
        print(f'"{casan[0][1]}" es la sesión en curso: no se borra a sí misma.')
        return 1

    # Con varias no se puede adivinar cuál, y esto no tiene vuelta atrás.
    if len(borrables) > 1 and not todas:
        print(f"{len(borrables)} coinciden:\n")
        for i, (j, t) in enumerate(borrables, 1):
            viva = "  · viva, se parará" if j.stem[:8] in en_marcha else ""
            # El proyecto desambigua cuando el mismo nombre está en varios sitios.
            proyecto = j.parent.name.replace("-Users-" + Path.home().name, "~")
            print(f"  {i}. {j.stem[:8]}  {tam(j.stat().st_size):>5}  "
                  f"{t}  [{proyecto}]{viva}")

        elegido = elegir("\nNúmero para una · Enter para todas · Esc para salir: ")

        if elegido is CANCELADO:
            print("cancelado.")
            return 1

        if elegido is SIN_TERMINAL:
            # El número depende de tener el listado delante; el id vale siempre.
            print("\nno puedo preguntar aquí (no hay terminal).")
            print(f"Repite con el id, o con --todas: "
                  f"csrm {borrables[0][0].stem[:8]}  ·  csrm --todas {busqueda}")
            return 1

        if elegido:                                  # un número: solo esa
            if not (1 <= int(elegido) <= len(borrables)):
                print("no es un número de la lista.")
                return 1
            borrables = [borrables[int(elegido) - 1]]
        # Enter a secas: se quedan todas.

    fallos = 0
    for jsonl, titulo in borrables:
        # Una que no se deja parar no aborta el resto: las demás sí se pueden borrar.
        if jsonl.stem[:8] in en_marcha and not parar(jsonl.stem[:8]):
            fallos += 1
            continue

        total = 0
        for p in rastro(jsonl):
            total += peso(p)
            try:
                p.unlink() if p.is_file() else shutil.rmtree(p)
            except OSError as e:
                print(f"  no pude borrar {p}: {e}", file=sys.stderr)

        print(f'borrada: {titulo}  ({tam(total)})')

    return 1 if fallos else 0


if __name__ == "__main__":
    sys.exit(main())
