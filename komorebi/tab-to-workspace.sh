#!/bin/bash
# Saca la pestaña actual del navegador a su propia ventana y la manda a un escritorio.
#
# Uso:  tab-to-workspace.sh <indice de escritorio 0-5>
#
# El indice va en base 0, igual que en komorebic y que el resto de skhdrc: 0 es el
# escritorio 1.
#
# SAFARI NO ESTA CUBIERTO, a proposito. Esto solo funciona con Brave (y valdria igual
# para Chrome o cualquier Chromium, cambiando el nombre de la app). Safari no tiene menu
# "Pestana": su equivalente vive en el menu "Ventana", con otro nombre, asi que la
# busqueda de abajo no lo encuentra y el atajo no hace nada. Sin verificar -- Safari no
# estaba abierto cuando se escribio esto -- pero es la razon esperada. Si algun dia hace
# falta, es anadir ese menu y ese nombre a las listas de pulsar().
#
# Por que por el menu y no por AppleScript del navegador: "Mover pestana a ventana
# nueva" mueve la pestana de verdad, con su historial y su estado. Recrearla abriendo
# una ventana nueva con la misma URL la recarga entera, pierde el scroll, lo que
# hubiera escrito en un formulario y la sesion de lo que estuviera reproduciendo.
set -u

export PATH="/usr/bin:/bin:/usr/sbin:/sbin:$HOME/.local/bin:/opt/homebrew/bin"

APP="Brave Browser"
DESTINO="${1:-}"

if [ -z "$DESTINO" ]; then
    echo "uso: $(basename "$0") <indice de escritorio 0-5>" >&2
    exit 2
fi

# Solo si el navegador esta delante. Con cualquier otra cosa enfocada este atajo no
# tiene nada que sacar, y no debe hacer nada.
frente=$(osascript -e 'tell application "System Events" to get name of first process whose frontmost is true' 2>/dev/null)

if [ "$frente" != "$APP" ]; then
    exit 0
fi

# Lo que komorebi sabe ahora mismo: cuantas ventanas conoce y cual esta enfocada.
# Las dos cosas juntas identifican la ventana nueva sin tener que adivinar: aparece
# una mas, y el foco pasa a ella.
instantanea() {
    komorebic state 2>/dev/null | python3 -c '
import json, sys

try:
    estado = json.load(sys.stdin)
except Exception:
    print("-1 -1")
    raise SystemExit

total = 0
enfocada = -1

for monitor in estado["monitors"]["elements"]:
    for indice, ws in enumerate(monitor["workspaces"]["elements"]):
        contenedores = ws["containers"]["elements"]

        for pos, contenedor in enumerate(contenedores):
            ventanas = contenedor["windows"]["elements"]
            total += len(ventanas)

            es_el_foco = (
                indice == monitor["workspaces"]["focused"]
                and pos == ws["containers"]["focused"]
            )

            if es_el_foco and ventanas:
                enfocada = ventanas[contenedor["windows"]["focused"]]["id"]

print(total, enfocada)
'
}

read -r antes_total antes_foco <<<"$(instantanea)"

# El nombre del menu va en el idioma del navegador, asi que se prueban los dos.
# Y se mira si esta activo antes de pulsarlo: con una sola pestana abierta la opcion
# existe pero esta deshabilitada, y no hay nada que sacar.
# Solo la salida real: osascript escribe ruido suyo por stderr ("ApplePersistence"),
# y mezclarlo con el resultado hacía que no casara ningún caso de los de abajo.
salida=$(osascript <<'APPLESCRIPT' 2>/dev/null | tail -1
on pulsar(nombresMenu, nombresItem)
    tell application "System Events" to tell process "Brave Browser"
        repeat with nm in nombresMenu
            repeat with ni in nombresItem
                try
                    set elItem to menu item (ni as text) of menu 1 of menu bar item (nm as text) of menu bar 1

                    if enabled of elItem then
                        click elItem
                        return "ok"
                    else
                        return "deshabilitado"
                    end if
                end try
            end repeat
        end repeat
    end tell

    return "no encontrado"
end pulsar

pulsar({"Pestaña", "Tab"}, {"Mover pestaña a ventana nueva", "Move Tab to New Window"})
APPLESCRIPT
)

case "$salida" in
    ok) ;;
    deshabilitado)
        echo "la ventana tiene una sola pestaña: no hay nada que sacar" >&2
        exit 0
        ;;
    *)
        echo "no se encontró la opción de menú para sacar la pestaña: $salida" >&2
        exit 1
        ;;
esac

# Esperar a que komorebi vea la ventana nueva y le dé el foco.
#
# Sin esto, move-to-workspace actuaría sobre la ventana que estuviera enfocada antes
# -- la que se acaba de quedar sin la pestaña -- y mandaría al escritorio la ventana
# equivocada. Se comprueban las dos cosas: que hay una ventana más y que el foco ha
# cambiado.
for _ in $(seq 1 40); do
    sleep 0.05
    read -r total foco <<<"$(instantanea)"

    if [ "$total" -gt "$antes_total" ] && [ "$foco" != "$antes_foco" ] && [ "$foco" != "-1" ]; then
        listo=1
        break
    fi
done

if [ "${listo:-0}" != "1" ]; then
    echo "la pestaña salió, pero komorebi no llegó a registrar la ventana nueva" >&2
    exit 1
fi

# Si el destino es donde ya estamos, la ventana está en su sitio.
actual=$(komorebic state 2>/dev/null | python3 -c '
import json, sys
print(json.load(sys.stdin)["monitors"]["elements"][0]["workspaces"]["focused"])' 2>/dev/null)

if [ "$actual" = "$DESTINO" ]; then
    exit 0
fi

komorebic move-to-workspace "$DESTINO"
