#!/usr/bin/env bash
# Comprueba que komorebi y skhd tienen de verdad los permisos de macOS, y si no,
# los pide las veces que haga falta hasta conseguirlos.
#
# Por qué existe: abrir el panel de Ajustes no concede nada. El instalador antiguo
# abría las dos ventanas, pedía un Enter y daba por hecho que el usuario había
# hecho su parte; si no la hacía, la instalación terminaba anunciando un entorno
# que no estaba en pie. Aquí no se asume nada: se verifica.
#
# Cómo se verifica, y por qué NO se consulta la API de permisos:
#   macOS atribuye una petición de permiso al proceso "responsable", que para algo
#   lanzado desde el terminal es el propio terminal. El mismo binario de komorebi
#   contesta "Grabación de Pantalla: falta" desde la shell y funciona perfectamente
#   bajo launchd. Preguntar por la API desde aquí haría pedir en bucle un permiso
#   que ya está dado. Así que se mira el comportamiento real del daemon:
#     - Accesibilidad  -> ¿sigue vivo? Sin ella komorebi y skhd abortan al arrancar.
#     - Grabación      -> ¿lee títulos de ventana? Es lo único que ese permiso aporta.
set -uo pipefail

KOMOREBI_BIN="${KOMOREBI_BIN:-$HOME/dev/komorebi-for-mac/target/release/komorebi}"
KOMOREBIC_BIN="${KOMOREBIC_BIN:-$HOME/dev/komorebi-for-mac/target/release/komorebic}"
PANEL_AX="x-apple.systempreferences:com.apple.preference.security?Privacy_Accessibility"
PANEL_SC="x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture"

# Un script no interactivo no puede esperar a nadie: mejor decirlo que fingir que
# ha quedado configurado.
interactive() { [ -t 0 ]; }

pause() {
  if interactive; then
    printf "   ↩︎  Pulsa Enter cuando lo hayas hecho… "
    read -r _
  fi
}

# ¿Está el daemon en pie? Si le falta Accesibilidad, komorebi sale con error al
# arrancar, así que seguir vivo unos segundos después es la prueba.
komorebi_running() { pgrep -qf "$KOMOREBI_BIN"; }

# ¿Lee títulos de ventana? Es exactamente lo que da la Grabación de Pantalla, y por
# tanto la única comprobación honesta de ese permiso.
#
# Devuelve: 0 tiene títulos, 1 no los tiene, 2 no hay ventanas que mirar (sin
# ventanas gestionadas no se puede concluir nada, y dar por fallado lo que no se ha
# podido medir dejaría al usuario peleando con un permiso que quizá ya tiene).
komorebi_reads_titles() {
  local state
  state="$("$KOMOREBIC_BIN" state 2>/dev/null)" || return 2
  printf '%s' "$state" | python3 -c '
import json, sys

try:
    state = json.load(sys.stdin)
except Exception:
    sys.exit(2)

titles = []

def walk(node):
    if isinstance(node, dict):
        if "title" in node:
            titles.append(node["title"])
        for value in node.values():
            walk(value)
    elif isinstance(node, list):
        for value in node:
            walk(value)

walk(state)

if not titles:
    sys.exit(2)
sys.exit(0 if any(t for t in titles) else 1)
'
}

restart_komorebi() {
  "$HOME/dev/dotfiles/komorebi/restart.sh" >/dev/null 2>&1 || true
  # El arranque no es instantáneo: hay que darle margen antes de juzgarlo.
  local i
  for i in $(seq 1 20); do
    komorebi_running && sleep 2 && return 0
    sleep 1
  done
  return 1
}

ensure_komorebi() {
  local attempt
  for attempt in $(seq 1 10); do
    restart_komorebi

    if ! komorebi_running; then
      echo
      echo "❌ komorebi no consigue arrancar, y casi siempre es la Accesibilidad."
      echo "   Sin ese permiso no puede mover ni redimensionar una sola ventana, así que"
      echo "   se cierra en lugar de quedarse como un proceso inútil."
      echo
      echo "   Te abro el panel. Pulsa el botón '+', y añade este binario:"
      echo "      $KOMOREBI_BIN"
      echo "   (en el diálogo de Finder, ⌘⇧G te deja pegar la ruta directamente)"
      echo "   Luego asegúrate de que su interruptor queda ENCENDIDO."
      open "$PANEL_AX" 2>/dev/null || true
      pause
      interactive || { echo "   (sesión no interactiva: no puedo esperar)"; return 1; }
      continue
    fi

    komorebi_reads_titles
    case $? in
      0)
        echo "✅ komorebi: Accesibilidad y Grabación de pantalla concedidas y funcionando."
        return 0
        ;;
      2)
        # Sin ventanas abiertas no hay títulos que leer, y no se puede distinguir de
        # un permiso ausente. Preferible admitirlo a mandar al usuario a Ajustes.
        echo "⚠️  komorebi está en pie, pero no hay ventanas abiertas con las que comprobar"
        echo "   la Grabación de pantalla. Abre alguna ventana y vuelve a lanzar:"
        echo "      sh ~/dev/dotfiles/komorebi/ensure-permissions.sh"
        return 0
        ;;
      *)
        echo
        echo "❌ komorebi funciona, pero NO lee los títulos de las ventanas: le falta la"
        echo "   Grabación de pantalla. Con ese permiso ausente komorebi coloca ventanas,"
        echo "   pero cualquier regla tuya que distinga por título deja de aplicarse en"
        echo "   silencio, que es la peor forma de fallar: parece que va bien."
        echo
        echo "   Te abro el panel. Añade con '+' o enciende el interruptor de:"
        echo "      $KOMOREBI_BIN"
        open "$PANEL_SC" 2>/dev/null || true
        pause
        interactive || { echo "   (sesión no interactiva: no puedo esperar)"; return 1; }
        ;;
    esac
  done

  echo "⚠️  Tras varios intentos komorebi sigue sin todos los permisos."
  echo "   Revisa /tmp/komorebi.err.log y vuelve a lanzar este script cuando quieras."
  return 1
}

# skhd aborta con "must be run with accessibility access!" si le falta el permiso,
# así que aquí también la prueba es que siga vivo.
skhd_running() { pgrep -qx skhd; }

ensure_skhd() {
  local attempt
  for attempt in $(seq 1 10); do
    skhd --restart-service >/dev/null 2>&1 || brew services restart skhd >/dev/null 2>&1 || true
    sleep 3

    if skhd_running; then
      echo "✅ skhd: Accesibilidad concedida, los atajos de teclado responden."
      return 0
    fi

    echo
    echo "❌ skhd no se mantiene en marcha, lo que significa que le falta Accesibilidad."
    echo "   skhd es quien escucha tus atajos de teclado: sin él, ningún atajo de komorebi"
    echo "   funciona, aunque komorebi esté perfecto."
    echo
    echo "   Te abro el panel. Añade con '+' o enciende el interruptor de:"
    echo "      $(command -v skhd || echo /opt/homebrew/bin/skhd)"
    open "$PANEL_AX" 2>/dev/null || true
    pause
    interactive || { echo "   (sesión no interactiva: no puedo esperar)"; return 1; }
  done

  echo "⚠️  Tras varios intentos skhd sigue sin arrancar. Revisa /tmp/skhd_$USER.err.log."
  return 1
}

echo "🔐 Comprobando permisos de macOS (no basta con abrir el panel: hay que verificarlo)…"
rc=0
ensure_komorebi || rc=1
ensure_skhd     || rc=1
exit "$rc"
