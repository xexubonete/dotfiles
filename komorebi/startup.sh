#!/usr/bin/env bash
# Abre las apps del entorno y luego REINICIA komorebi para que las coloque de
# forma determinista (igual que 'rset').
#
# Por qué el reinicio: si komorebi ya está corriendo cuando las apps abren, cada
# ventana le llega como un evento suelto en orden de apertura ALEATORIO, así que
# el grid sale distinto cada vez. Al reiniciar komorebi con todas las ventanas
# ya abiertas, las enumera de una vez en orden estable (CGWindowList) → mismo
# layout que 'rset', consistente.

apps=("WhatsApp" "Music" "Mail" "Discord" "Ghostty" "Claude" "Brave Browser")

for app in "${apps[@]}"; do
  open -a "$app"
done

# Esperar a que todas las apps estén corriendo (hasta ~20s) y luego un margen
# para que dibujen sus ventanas, antes de reiniciar komorebi.
for _ in $(seq 1 20); do
  running=0
  for app in "${apps[@]}"; do
    if osascript -e "application \"$app\" is running" 2>/dev/null | grep -q true; then
      running=$((running + 1))
    fi
  done
  [ "$running" -eq "${#apps[@]}" ] && break
  sleep 1
done

# Margen para que las ventanas existan en CGWindowList.
sleep 3

# Reiniciar komorebi (mismo camino que 'rset' y que el despertar).
exec "${DOTFILES:-$HOME/dev/dotfiles}/komorebi/restart.sh"
