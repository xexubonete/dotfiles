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
STAMP="/tmp/komorebi-wake.stamp"

# Un mismo despertar llega dos veces: sleepwatcher avisa por la pantalla (-W) y por
# el sistema (-w), y cerrar la tapa dispara ambos. Reiniciar komorebi dos veces
# seguidas se ve. No es un temporizador para tapar nada -- son dos avisos del sistema
# para un único hecho físico, y ocho segundos separan de sobra un despertar del
# siguiente.
if [ -f "$STAMP" ]; then
    since=$(( $(date +%s) - $(stat -f%m "$STAMP") ))
    [ "$since" -lt 8 ] && exit 0
fi

# Hasta cinco minutos esperando la contraseña; pasado eso, no se reinicia nada,
# porque significa que el equipo se quedó despierto y bloqueado sin nadie.
i=0
# El espaciado alrededor del igual no es fijo en la salida de ioreg, de ahí que
# el patrón lo contemple: con espacios literales no encajaba nunca, y el bucle
# se saltaba entero dando la pantalla por desbloqueada.
while ioreg -n Root -d1 -r | grep -qE '"CGSSessionScreenIsLocked"[[:space:]]*=[[:space:]]*Yes'; do
    [ $i -ge 1500 ] && exit 0
    # Cinco veces por segundo: la espera es lo que tardes en teclear la contraseña,
    # y comprobar sólo una vez por segundo añadía hasta un segundo entero justo al
    # final, que es el momento en que se nota.
    sleep 0.2
    i=$((i + 1))
done

# Un margen corto mientras macOS termina de recomponer. Eran dos segundos puestos
# por precaución y sin medir: komorebi tarda ~1s en enumerar las ventanas, así que
# esa precaución era la mitad de la espera total.
sleep 0.4

touch "$STAMP"

exec "$DOTFILES/komorebi/restart.sh"
