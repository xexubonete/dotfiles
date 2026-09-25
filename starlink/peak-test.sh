#!/usr/bin/env bash
# Measure the Starlink link at a given moment and append one line to a log.
#
# The question this exists to answer: is the "Residencial Max" plan, with its network
# priority, worth 20 euros a month more for cloud gaming? Priority only does anything
# when the cell is contended, so the answer lives at peak hours -- and every measurement
# taken at one in the morning says nothing about it.
#
# Three targets, pinged at the same time, because where the jitter appears is the whole
# point:
#
#   router  everything inside the house: USB adapter, dock, cable, router
#   sat     Starlink's gateway, one hop past the router: this is the satellite link
#   wan     the open internet, past Starlink's network
#
# Read the medians down that list. Measured on 2026-09-25 at 01:00: 1.1ms, 18.9ms,
# 18.9ms -- so the satellite hop is the whole latency and everything after it is free.
# A plan cannot change that hop. What a plan *can* change is what happens when the cell
# is busy, which is what this script is here to catch.
set -u

export PATH="/usr/bin:/bin:/usr/sbin:/sbin:/opt/homebrew/bin"

LOG="$HOME/Library/Logs/starlink-peak.log"

# Starlink's CGNAT gateway: the first hop past the router, on the ground station side.
SAT="100.64.0.1"
WAN="1.1.1.1"

# A minute per run. Long enough for a p99 to mean something, short enough that three
# runs a day are not an event.
COUNT=300
INTERVAL=0.2

# 25MB: enough to see whether the line is being throttled, small enough to run daily
# without thinking about it.
BYTES=25000000

router=$(route -n get default 2>/dev/null | awk '/gateway:/{print $2}')
iface=$(route -n get default 2>/dev/null | awk '/interface:/{print $2}')

if [ -z "$router" ]; then
    printf '%s  sin ruta por defecto: no se mide\n' "$(date '+%Y-%m-%d %H:%M')" >> "$LOG"
    exit 0
fi

tmp=$(mktemp -d)
trap 'rm -rf "$tmp"' EXIT

for target in "$router" "$SAT" "$WAN"; do
    ping -c "$COUNT" -i "$INTERVAL" "$target" > "$tmp/$target.txt" 2>&1 &
done
wait

# Median and worst case say more than an average: the average hides exactly the spikes
# that are felt as a stutter mid-game.
stats() {
    grep -oE 'time=[0-9.]+' "$tmp/$1.txt" 2>/dev/null | cut -d= -f2 | sort -n | awk '
        {a[NR] = $1}
        END {
            if (NR == 0) {printf "sin-respuesta"; exit}
            printf "%.1f/%.1f", a[int(NR * 0.5)], a[NR]
        }'
}

loss() {
    grep -oE '[0-9.]+% packet loss' "$tmp/$1.txt" 2>/dev/null | head -1 | cut -d% -f1
}

# Anything past 40ms is where a stutter starts to be visible in a stream.
spikes() {
    grep -oE 'time=[0-9.]+' "$tmp/$1.txt" 2>/dev/null | cut -d= -f2 | awk '$1 > 40' | wc -l | tr -d ' '
}

speed=$(curl --interface "$iface" -s -m 60 -o /dev/null -w '%{speed_download}' \
    "https://speed.cloudflare.com/__down?bytes=$BYTES" 2>/dev/null)
mbps=$(awk -v s="${speed:-0}" 'BEGIN {printf "%.0f", s * 8 / 1000000}')

if [ ! -f "$LOG" ]; then
    {
        echo "# Starlink, medido en distintos momentos del dia. Una linea por medicion."
        echo "# Cada punto: mediana/maximo en ms, y el porcentaje de paquetes perdidos."
        echo "# pico: pings por encima de 40ms de $COUNT. Al final, bajada real."
        echo
    } > "$LOG"
fi

printf '%s  %-4s | router %-11s | sat %-11s %4s%% | wan %-11s %4s%% pico:%-3s | %s Mbps\n' \
    "$(date '+%Y-%m-%d %H:%M')" \
    "$iface" \
    "$(stats "$router")" \
    "$(stats "$SAT")" "$(loss "$SAT")" \
    "$(stats "$WAN")" "$(loss "$WAN")" "$(spikes "$WAN")" \
    "$mbps" >> "$LOG"
