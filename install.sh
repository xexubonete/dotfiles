if [ $# -ne 2 ]; then
  echo "Uso: $0 <nombre_de_usuario> <correo_electronico>"
  exit 1
fi

USERNAME=$1
EMAIL=$2
# First of all, install Xcode
xcode-select --install

/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
echo >> /Users/xexu/.zprofile
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/xexu/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
brew --version

# Execute macConfig.sh script 
sh ./.macConfig.sh

# Execute setup_gitconfig.sh script
sh ./git/setup_gitconfig.sh "$USERNAME" "$EMAIL"

# Tools

brew install bitwarden
brew install warp
Brew install bruno

brew install chatgpt
brew install discord
brew install nordvpn

brew install notion
brew install google-chrome
brew install microsoft-teams
brew install orbstack
brew install --cask onedrive
brew install --cask pgadmin4
brew install postgresql
brew install whatsapp

# brew install displaylink
# brew install postman
# brew install vlc

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
cp -f ./zsh/.zshrc ~/
