#!/usr/bin/env bash
# Instalación de los dotfiles de Jesús (xexu) en un Mac (Apple Silicon).
#
#   git clone https://github.com/xexubonete/dotfiles.git
#   cd dotfiles && ./install.sh
#
# Idempotente: se puede ejecutar varias veces. Hace copia de seguridad de
# cualquier config existente que no sea ya un symlink (sufijo .bak.<timestamp>).
set -euo pipefail

DOTFILES="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🍺 Homebrew…"
if ! command -v brew >/dev/null 2>&1; then
  /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
fi
eval "$(/opt/homebrew/bin/brew shellenv)"

echo "📦 brew bundle (taps, CLIs, apps y extensiones de VS Code)…"
brew bundle --file="$DOTFILES/Brewfile"

echo "🐚 oh-my-zsh + plugins (los necesita .zshrc)…"
if [ ! -d "$HOME/.oh-my-zsh" ]; then
  RUNZSH=no KEEP_ZSHRC=yes sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)" "" --unattended
fi
ZSH_CUSTOM="${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}"
if [ ! -d "$ZSH_CUSTOM/plugins/zsh-autosuggestions" ]; then
  git clone --depth=1 https://github.com/zsh-users/zsh-autosuggestions "$ZSH_CUSTOM/plugins/zsh-autosuggestions"
fi

# enlaza <ruta-en-repo> -> <destino-en-el-sistema>
link() {
  local src="$DOTFILES/$1" dst="$2"
  mkdir -p "$(dirname "$dst")"
  if [ -e "$dst" ] && [ ! -L "$dst" ]; then
    mv "$dst" "$dst.bak.$(date +%s)"
    echo "  (backup) $dst → $dst.bak.*"
  fi
  ln -sfn "$src" "$dst"
  echo "  $dst → $src"
}

echo "🔗 Enlazando configuraciones…"
# Shell
link zsh/.zshrc                  "$HOME/.zshrc"
# .zshenv lo leen TAMBIÉN los shells no interactivos, que es como skhd lanza los
# atajos ('zsh -c'). Ahí se pone ~/.local/bin delante del PATH para que los
# atajos usen mi komorebic, no otro.
link zsh/.zshenv                 "$HOME/.zshenv"
# sleepwatcher ejecuta ~/.wakeup al despertar el equipo. Antes era un fichero
# suelto en el home, fuera de dotfiles, y llamaba a un komorebic de brew que ya
# no existe: llevaba meses sin hacer nada.
link komorebi/wakeup.sh          "$HOME/.wakeup"
# Atajos de teclado (skhd lee ~/.skhdrc; lanza los comandos de komorebi)
link skhd/skhdrc                 "$HOME/.skhdrc"
# Gestor de ventanas komorebi-for-mac
link komorebi/komorebi.json      "$HOME/.config/komorebi/komorebi.json"
link komorebi/applications.json  "$HOME/.config/komorebi/applications.json"
link komorebi/komorebi.bar.json  "$HOME/.config/komorebi/komorebi.bar.json"
# Terminal Ghostty
link ghostty/config.ghostty      "$HOME/Library/Application Support/com.mitchellh.ghostty/config.ghostty"
# VS Code (los ajustes; las extensiones ya se instalan con brew bundle)
link vscode/settings.json        "$HOME/Library/Application Support/Code/User/settings.json"
# Ajustes de Claude Code: permisos y los hooks que impiden que Claude haga commit,
# push, merge o apruebe PRs por su cuenta. El candado vive aparte en claude/, para
# poder quitarlo y devolverlo sin riesgo de perderlo (claude/git-guard.sh).
mkdir -p "$HOME/.claude"
# El candado y su interruptor sí van enlazados: son fijos.
link claude/full-git-guard.hooks.json "$HOME/.claude/full-git-guard.hooks.json"
link claude/git-guard.sh         "$HOME/.claude/git-guard.sh"
# settings.json NO se enlaza, se copia si no existe. Claude Code escribe en él, y
# quitar el candado para dejarle subir algo dejaría el repo modificado -- con el
# riesgo de commitear un settings.json sin candado y que un Mac nuevo naciera
# desprotegido. El repo guarda el estado inicial correcto; la máquina, el del momento.
if [ ! -f "$HOME/.claude/settings.json" ]; then
  cp "$DOTFILES/claude/settings.json" "$HOME/.claude/settings.json"
  echo "  ✅ Ajustes de Claude Code instalados (con el candado de git puesto)."
else
  echo "  ℹ️  ~/.claude/settings.json ya existe, no se toca. Compáralo con claude/settings.json."
fi

echo "⚙️  Ajustes de macOS (Dock, hot corners, energía)… (puede pedir contraseña)"
sh "$DOTFILES/macos-defaults.sh"

echo "🦀 Compilando komorebi-for-mac (mi fork con ajustes personales)…"
# komorebi NO se instala por brew: uso mi build del fork, y de él salen los TRES
# binarios (komorebi, komorebic, komorebi-bar). Así el daemon y el CLI van
# siempre del mismo commit. Lo lanzo con 'rset' (.zshrc).
KOMOREBI_SRC="$HOME/dev/komorebi-for-mac"
KOMOREBI_BRANCH="mac-tweaks"
KOMOREBI_REPO="https://github.com/xexubonete/komorebi-for-mac.git"
if [ ! -d "$KOMOREBI_SRC/.git" ]; then
  git clone --branch "$KOMOREBI_BRANCH" "$KOMOREBI_REPO" "$KOMOREBI_SRC"
else
  git -C "$KOMOREBI_SRC" fetch origin "$KOMOREBI_BRANCH"
  git -C "$KOMOREBI_SRC" checkout "$KOMOREBI_BRANCH"
  git -C "$KOMOREBI_SRC" pull --ff-only origin "$KOMOREBI_BRANCH" || true
fi
( cd "$KOMOREBI_SRC" && cargo build --release )
echo "  ✅ Binario en $KOMOREBI_SRC/target/release/komorebi"

# Firmar con un certificado autofirmado ESTABLE. cargo firma "ad-hoc" (la firma
# cambia en cada build) y macOS revoca Accesibilidad/Grabación de Pantalla tras
# cada recompilación. Con firma estable, los permisos se conceden una vez y
# persisten. Ver komorebi/setup-codesign.sh.
sh "$DOTFILES/komorebi/setup-codesign.sh" "$KOMOREBI_SRC/target/release/komorebi"

# Enlazar los binarios del fork en ~/.local/bin, que .zshenv pone al principio
# del PATH. Sin esto, 'komorebic' podría resolverse a otra copia del sistema y
# acabaríamos pilotando el daemon con un CLI de otro commit.
mkdir -p "$HOME/.local/bin"
for _bin in komorebi komorebic komorebi-bar; do
  ln -sfn "$KOMOREBI_SRC/target/release/$_bin" "$HOME/.local/bin/$_bin"
  echo "  $HOME/.local/bin/$_bin → $KOMOREBI_SRC/target/release/$_bin"
done

KOMOREBI_BIN="$KOMOREBI_SRC/target/release/komorebi"
KOMOREBI_CFG="$HOME/.config/komorebi/komorebi.json"
PLIST_DEST="$HOME/Library/LaunchAgents/com.lgug2z.komorebi.plist"
mkdir -p "$HOME/Library/LaunchAgents"
sed \
  -e "s|KOMOREBI_BINARY_PLACEHOLDER|$KOMOREBI_BIN|g" \
  -e "s|KOMOREBI_CONFIG_PLACEHOLDER|$KOMOREBI_CFG|g" \
  "$DOTFILES/komorebi/com.lgug2z.komorebi.plist" > "$PLIST_DEST"
launchctl unload "$PLIST_DEST" 2>/dev/null || true
launchctl load "$PLIST_DEST"
echo "  ✅ LaunchAgent instalado: komorebi arrancará automáticamente al iniciar sesión."
echo "     Para restartarlo: usa 'rset'. Para parar: launchctl unload $PLIST_DEST"

STARTUP_PLIST="$HOME/Library/LaunchAgents/com.xexu.startup.plist"
sed "s|STARTUP_SCRIPT_PLACEHOLDER|$DOTFILES/komorebi/startup.sh|g" \
  "$DOTFILES/komorebi/com.xexu.startup.plist" > "$STARTUP_PLIST"
launchctl unload "$STARTUP_PLIST" 2>/dev/null || true
launchctl load "$STARTUP_PLIST"
echo "  ✅ Script de inicio: abre las apps del entorno al iniciar sesión."

# Vigilante del bloqueo de sesión. Cubre el salvapantallas, donde no hay sueño del que
# despertar y sleepwatcher no avisa de nada: la sesión se bloquea con la pantalla
# encendida y komorebi se queda sin recolocar hasta que alguien lo reinicie.
LOCKWATCH_PLIST="$HOME/Library/LaunchAgents/com.xexu.lockwatch.plist"
sed "s|DOTFILES_PLACEHOLDER|$DOTFILES|g" \
  "$DOTFILES/komorebi/com.xexu.lockwatch.plist" > "$LOCKWATCH_PLIST"
launchctl bootout "gui/$(id -u)" "$LOCKWATCH_PLIST" 2>/dev/null || true
launchctl bootstrap "gui/$(id -u)" "$LOCKWATCH_PLIST"
echo "  ✅ Vigilante de bloqueo: recoloca las ventanas al desbloquear la sesión."

# sleepwatcher, que ejecuta ~/.wakeup al despertar el equipo y al despertar la pantalla.
# Faltaba: el binario venía en el Brewfile pero nadie instalaba su agente, así que en un
# Mac nuevo el entorno no se recolocaba al abrir la tapa y no había forma de saber por qué.
SLEEPWATCHER_PLIST="$HOME/Library/LaunchAgents/com.user.sleepwatcher.plist"
sed "s|DOTFILES_HOME|$HOME|g" \
  "$DOTFILES/komorebi/com.user.sleepwatcher.plist" > "$SLEEPWATCHER_PLIST"
launchctl bootout "gui/$(id -u)" "$SLEEPWATCHER_PLIST" 2>/dev/null || true
launchctl bootstrap "gui/$(id -u)" "$SLEEPWATCHER_PLIST"
echo "  ✅ sleepwatcher: recoloca las ventanas al despertar el equipo."

# Un sitio para lo que no debe viajar en un repo público.
if [ ! -f "$HOME/.zshrc.local" ]; then
  printf '%s\n' \
    '# Credenciales y ajustes de esta máquina. NO va a dotfiles: el repo es público.' \
    > "$HOME/.zshrc.local"
  echo "  ✅ Creado ~/.zshrc.local (vacío) para credenciales de trabajo."
fi

echo "🔐 Permisos de macOS: komorebi y skhd necesitan Accesibilidad y Grabación de pantalla."
echo "   Abro los paneles; añade/activa 'komorebi' y 'skhd' en cada lista."
open "x-apple.systempreferences:com.apple.preference.security?Privacy_Accessibility"  2>/dev/null || true
open "x-apple.systempreferences:com.apple.preference.security?Privacy_ScreenCapture"  2>/dev/null || true
if [ -t 0 ]; then printf "   Pulsa Enter cuando los hayas concedido… "; read -r _; fi

echo "🔧 Git: configura tu nombre/email con"
echo "      sh git/setup_gitconfig.sh \"Tu Nombre\" tu@email"

if [ -t 0 ]; then
  printf "🔑 ¿Iniciar sesión ahora en gh y az? [y/N] "; read -r _login
  case "$_login" in
    y|Y)
      command -v gh >/dev/null 2>&1 && gh auth login || true
      command -v az >/dev/null 2>&1 && az login   || true
      ;;
  esac
fi

echo
echo "✅ Hecho. komorebi quedará activo y arrancará solo al iniciar sesión."
echo "   (No hace falta desactivar SIP; con conceder Accesibilidad + Grabación de pantalla basta.)"
