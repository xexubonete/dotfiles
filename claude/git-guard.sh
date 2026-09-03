#!/usr/bin/env bash
# Quita y pone el candado de git de Claude, sin poder perderlo.
#
# El accidente que esto evita: el método anterior hacía `cp settings.json
# settings.json.bak` y luego recortaba el hook. Ejecutado dos veces, la segunda copia
# se hizo sobre el fichero ya recortado y la copia buena desapareció. El candado se
# recuperó de milagro, porque estaba guardado aparte.
#
# Aquí la definición del candado vive en un fichero propio que este script NUNCA
# escribe -- solo lo lee. Da igual cuántas veces lo ejecutes y en qué orden: el
# original no se puede tocar.
#
#   git-guard.sh off      lo quita
#   git-guard.sh on       lo devuelve
#   git-guard.sh          dice cómo está
set -euo pipefail

DIR="$HOME/.claude"
SETTINGS="$DIR/settings.json"
GUARD="$DIR/full-git-guard.hooks.json"   # solo lectura, es la fuente de verdad

[ -f "$GUARD" ] || { echo "Falta $GUARD, que es de donde sale el candado"; exit 1; }

python3 - "${1:-status}" "$SETTINGS" "$GUARD" <<'PY'
import json, sys

action, settings_path, guard_path = sys.argv[1:4]

# El candado de escritura de git. El de aprobar PRs no se toca: esa regla no se desactiva.
guard = json.load(open(guard_path))["hooks"]["PreToolUse"][0]["hooks"][1]
is_guard = lambda h: "commit|push|merge" in h.get("command", "")

settings = json.load(open(settings_path))
bash = next(
    (m for m in settings.setdefault("hooks", {}).setdefault("PreToolUse", [])
     if m.get("matcher") == "Bash"),
    None,
)

if bash is None:
    bash = {"matcher": "Bash", "hooks": []}
    settings["hooks"]["PreToolUse"].append(bash)

on = any(is_guard(h) for h in bash["hooks"])

if action == "status":
    print("candado de git:", "PUESTO" if on else "quitado")
    sys.exit(0)

if action == "off":
    bash["hooks"] = [h for h in bash["hooks"] if not is_guard(h)]
elif action == "on":
    if not on:
        bash["hooks"].append(guard)
else:
    print("uso: git-guard.sh [on|off]")
    sys.exit(1)

json.dump(settings, open(settings_path, "w"), indent=2, ensure_ascii=False)
print("candado de git:", "PUESTO" if action == "on" else "quitado")
PY
