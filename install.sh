#!/usr/bin/env sh

if [ $# -ne 2 ]; then
  echo "Uso: $0 <nombre_de_usuario> <correo_electronico>"
  exit 1
fi

USERNAME=$1
EMAIL=$2

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Execute macConfig.sh script 
sh ./.macConfig.sh

# Execute setup_gitconfig.sh script
sh ./git/setup_gitconfig.sh "$USERNAME" "$EMAIL"

# Tools
brew install displaylink
brew install bitwarden
brew install warp
brew install postman
brew install chatgpt
brew install discord
brew install nordvpn
brew install vlc
brew install notion
brew install orbstack
brew install --cask onedrive
brew install --cask pgadmin4
brew install postgresql
brew install whatsapp

# Code
xcode-select --install
brew install visual-studio-code
brew install rider

# Environment
brew install yabai
brew install borders
brew install sketchybar

cp -f ./yabai/.yabairc ~/
cp -f ./sketchybar ~/