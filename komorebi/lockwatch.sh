#!/usr/bin/env bash
# Vigila el bloqueo de sesión y recoloca las ventanas al desbloquear.
#
# sleepwatcher avisa de que el sistema despierta (-w) y de que la pantalla despierta
# (-W), y con eso se cubre cerrar la tapa. Pero el salvapantallas no es ninguna de las
# dos cosas: la sesión se bloquea con la pantalla encendida, no hay sueño del que
# despertar, y no llega ningún aviso. Medido: diez minutos de salvapantallas y ni un
# solo reinicio.
#
# Aquí no se espera a que avise nadie: se mira el estado del bloqueo y se actúa cuando
# cambia. Cubre cualquier forma de entrar -- contraseña, Touch ID o Apple Watch --
# porque lo que se consulta es si la sesión está bloqueada, no cómo se desbloqueó.
set -u
export PATH="/usr/bin:/bin:/usr/sbin:/sbin:$HOME/.local/bin"

DOTFILES="${DOTFILES:-$HOME/dev/dotfiles}"

locked() {
    ioreg -n Root -d1 -r | grep -qE '"CGSSessionScreenIsLocked"[[:space:]]*=[[:space:]]*Yes'
}

# El reparto de ventanas por escritorio, y una copia de seguridad.
#
# Komorebi reescribe ese fichero tras cada comando, y sabe callarse mientras el equipo
# duerme. Pero el salvapantallas no es dormir: la sesión se bloquea con la pantalla
# encendida y no llega ningún aviso, así que komorebi sigue escribiendo -- y mientras
# está bloqueado va perdiendo las ventanas de vista. Medido: siete ventanas quedaron
# en una, y al desbloquear no había de dónde restaurar.
#
# Mientras estás dentro, el fichero es de fiar y se copia. Al desbloquear se devuelve
# la copia antes de reiniciar komorebi. La ventana de riesgo es lo que tarde este bucle
# en notar el bloqueo, no los minutos que pases fuera.
SESSION="$HOME/Library/Application Support/komorebi/komorebi.session.json"
BACKUP="$HOME/Library/Application Support/komorebi/komorebi.session.unlocked.json"

was_locked=false

while true; do
    if locked; then
        was_locked=true
    elif [ "$was_locked" = true ]; then
        was_locked=false

        # Un margen corto mientras macOS termina de recomponer la pantalla.
        sleep 0.4

        if [ -f "$BACKUP" ]; then
            cp -f "$BACKUP" "$SESSION"
        fi

        # Por wakeup.sh, no directo: ahí está el descarte del aviso duplicado, para
        # cuando un mismo despertar llega también por sleepwatcher.
        "$DOTFILES/komorebi/wakeup.sh"
    fi

    if [ "$was_locked" = false ] && [ -f "$SESSION" ] \
        && [ "$SESSION" -nt "$BACKUP" ]; then
        cp -f "$SESSION" "$BACKUP"
    fi

    # Dos segundos: el coste es una consulta a ioreg, y nadie percibe la diferencia
    # entre reaccionar al instante o dos segundos después de teclear la contraseña.
    sleep 2
done
