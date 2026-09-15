#!/usr/bin/env python3
"""Borra una conversación de Claude Code por su nombre.

    csrm life

Usa el nombre que se ve en `/resume`: el que hayas puesto tú al renombrar
(`custom-title` en el .jsonl) y, si no lo tiene, el que genera Claude (`ai-title`).
Busca por substring, así que basta un trozo.

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
    """Ids cortos de las sesiones en marcha, para no borrarlas de debajo de los pies."""
    try:
        salida = subprocess.run(["claude", "agents", "--all", "--json"],
                                capture_output=True, text=True, timeout=15).stdout
        return {s.get("id") for s in json.loads(salida)
                if s.get("status") in ("busy", "idle", "running")} - {None, ""}
    except (OSError, ValueError, subprocess.SubprocessError):
        return set()


def rastro(jsonl: Path):
    uuid = jsonl.stem
    yield jsonl
    for p in (jsonl.with_suffix(""),
              RAIZ / "file-history" / uuid,
              RAIZ / "jobs" / uuid[:8]):
        if p.is_dir():
            yield p


def peso(p: Path) -> int:
    if p.is_file():
        return p.stat().st_size
    return sum(f.stat().st_size for f in p.rglob("*") if f.is_file())


def main() -> int:
    if len(sys.argv) < 2:
        print("uso: csrm <nombre>", file=sys.stderr)
        return 2

    busqueda = " ".join(sys.argv[1:]).strip().lower()

    # El proyecto se deriva del directorio actual igual que lo hace Claude.
    carpeta = RAIZ / "projects" / str(Path.cwd()).replace("/", "-")
    if not carpeta.is_dir():
        print(f"no hay sesiones para {Path.cwd()}", file=sys.stderr)
        return 1

    en_marcha = vivas()
    casan = []
    for jsonl in sorted(carpeta.glob("*.jsonl"), key=lambda p: -p.stat().st_mtime):
        titulo = titulo_de(jsonl)
        if busqueda in titulo.lower() or jsonl.stem.startswith(busqueda):
            casan.append((jsonl, titulo))

    if not casan:
        print(f'nada casa con "{busqueda}".')
        return 1

    borrables = [(j, t) for j, t in casan
                 if j.stem != YO and j.stem[:8] not in en_marcha]

    if not borrables:
        j, t = casan[0]
        razon = "es la sesión en curso" if j.stem == YO \
            else f"está viva — `claude stop {j.stem[:8]}` primero"
        print(f'"{t}" no se puede borrar: {razon}.')
        return 1

    # Con varias no se puede adivinar cuál, y esto no tiene vuelta atrás.
    if len(borrables) > 1:
        print(f"{len(borrables)} coinciden:\n")
        for i, (j, t) in enumerate(borrables, 1):
            print(f"  {i}. {tam(j.stat().st_size):>5}  {t}")
        try:
            with open("/dev/tty") as tty:
                print("\n¿Cuál? (número, o enter para cancelar): ", end="", flush=True)
                elegido = tty.readline().strip()
        except OSError:
            elegido = input("\n¿Cuál? (número, o enter para cancelar): ").strip()
        if not elegido:
            return 1
        try:
            borrables = [borrables[int(elegido) - 1]]
        except (ValueError, IndexError):
            print("no es un número de la lista.")
            return 1

    jsonl, titulo = borrables[0]
    total = 0
    for p in rastro(jsonl):
        total += peso(p)
        try:
            p.unlink() if p.is_file() else shutil.rmtree(p)
        except OSError as e:
            print(f"  no pude borrar {p}: {e}", file=sys.stderr)

    print(f'borrada: {titulo}  ({tam(total)})')
    return 0


if __name__ == "__main__":
    sys.exit(main())
