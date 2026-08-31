#!/usr/bin/env bash
# Reinicio determinista de komorebi.
#
# Única fuente de verdad: lo usan 'rset' desde la terminal, el arranque de sesión
# (startup.sh) y el despertar del equipo (wakeup.sh). Antes cada uno tenía su
# propia copia, y las copias se quedaron atrás: startup.sh seguía usando
# 'launchctl unload', obsoleto desde macOS 10.11, y un pkill sin -x que además
# se llevaba por delante a komorebi-bar y komorebic.
set -u
export PATH="/usr/bin:/bin:/usr/sbin:/sbin:$HOME/.local/bin"

plist="$HOME/Library/LaunchAgents/com.lgug2z.komorebi.plist"
log="/tmp/komorebi.out.log"
domain="gui/$(id -u)"

# Rotar el registro si ha crecido. Se conserva la vuelta anterior: cuando algo va
# mal justo antes de un reinicio, ahí está lo que pasó.
if [ -f "$log" ] && [ "$(stat -f%z "$log")" -gt 5242880 ]; then
    mv -f "$log" "$log.1"
    echo "Log rotado (>5MB): $log.1"
fi

echo "Stopping komorebi..."
launchctl bootout "$domain" "$plist" 2>/dev/null
# -x: nombre exacto. Sin él, el patrón también mata komorebi-bar y komorebic.
pkill -9 -x komorebi 2>/dev/null

# Esperar a que muera de verdad en vez de dormir a ciegas: si el proceso sigue
# vivo cuando launchd arranca el siguiente, el nuevo aborta al ver que ya hay
# una instancia.
i=0
while pgrep -qx komorebi && [ $i -lt 50 ]; do
    sleep 0.1
    i=$((i + 1))
done

echo "Starting komorebi..."
launchctl bootstrap "$domain" "$plist" 2>/dev/null

# Y esperar a que esté listo, no un tiempo fijo: arrancar tarda lo que tarde
# según cuántas ventanas haya que enumerar.
i=0
while ! pgrep -qx komorebi && [ $i -lt 100 ]; do
    sleep 0.1
    i=$((i + 1))
done

if pgrep -qx komorebi; then
    komorebic retile 2>/dev/null
    echo "Komorebi reset complete!"
else
    echo "Error: komorebi no arrancó"
    exit 1
fi
