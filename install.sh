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

echo "⚙️  Ajustes de macOS (Dock, hot corners, energía)… (puede pedir contraseña)"
sh "$DOTFILES/macos-defaults.sh"

echo "🦀 Compilando komorebi-for-mac (mi fork con ajustes personales)…"
# El binario 'komorebi' que ejecuto es mi build del fork, no el de brew.
# brew solo aporta el CLI 'komorebic' en el PATH. Lo lanzo con 'rset' (.zshrc).
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
echo "     Arráncalo con 'rset' (definido en .zshrc). No uso autostart vía launchd."

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
