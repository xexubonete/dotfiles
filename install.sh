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

echo "🔧 Git: configura tu nombre/email con"
echo "      sh git/setup_gitconfig.sh \"Tu Nombre\" tu@email"

echo
echo "✅ Hecho. Arranca el gestor de ventanas con:"
echo "      komorebic start --bar"
echo "   (concede permiso de Grabación de pantalla a komorebi la primera vez)"
