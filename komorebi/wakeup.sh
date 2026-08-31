#!/usr/bin/env bash
# Se ejecuta al despertar el equipo (sleepwatcher -w ~/.wakeup).
#
# Komorebi se queda desubicado tras suspender -- las pantallas se apagan y se
# vuelven a enumerar, y no siempre recupera el sitio de las ventanas -- así que
# había que hacer 'rset' a mano cada mañana. Esto lo hace por su cuenta.
#
# Despertar y desbloquear son dos cosas distintas: la tapa se abre y la
# contraseña llega cuando llega. Reordenar las ventanas con la pantalla aún
# bloqueada no sirve de nada, porque al desbloquear macOS vuelve a componer todo,
# así que primero se espera a que la sesión esté abierta de verdad.
set -u
export PATH="/usr/bin:/bin:/usr/sbin:/sbin:$HOME/.local/bin"

DOTFILES="${DOTFILES:-$HOME/dev/dotfiles}"

# Hasta cinco minutos esperando la contraseña; pasado eso, no se reinicia nada,
# porque significa que el equipo se quedó despierto y bloqueado sin nadie.
i=0
# El espaciado alrededor del igual no es fijo en la salida de ioreg, de ahí que
# el patrón lo contemple: con espacios literales no encajaba nunca, y el bucle
# se saltaba entero dando la pantalla por desbloqueada.
while ioreg -n Root -d1 -r | grep -qE '"CGSSessionScreenIsLocked"[[:space:]]*=[[:space:]]*Yes'; do
    [ $i -ge 300 ] && exit 0
    sleep 1
    i=$((i + 1))
done

# Un margen tras desbloquear: macOS todavía está recolocando ventanas por su
# cuenta, y reiniciar en medio deja el resultado a medias.
sleep 2

exec "$DOTFILES/komorebi/restart.sh"
