if [ $# -ne 2 ]; then
  echo "Uso: $0 <nombre_de_usuario> <correo_electronico>"
  exit 1
fi

USER=$1
EMAIL=$2
# First of all, install Xcode
xcode-select --install

# Primero instalar Homebrew
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
chmod +x /Users/$USER/.zprofile
sudo chown $USER /Users/$USER/.zprofile
sudo echo >> /Users/$USER/.zprofile
sudo echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/$USER/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
brew --version

# Agrupar todos los taps al inicio
brew tap koekeishiya/formulae     # Para yabai y skhd
brew tap FelixKratz/formulae      # 

# Execute macConfig.sh script 
sh ./.macConfig.sh

# Execute setup_gitconfig.sh script
sudo sh ./git/setup_gitconfig.sh "$USER" "$EMAIL"

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

brew install --cask pgadmin4
brew install postgresql
brew install whatsapp

brew install visual-studio-code
brew install rider

brew install zsh
brew install starship
brew install utm
eval "$(starship init zsh)"
brew install --cask font-hack-nerd-font

chsh -s $(which zsh)
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Environment
brew tap koekeishiya/formulae
brew install koekeishiya/formulae/skhd
brew install lua luarocks
brew install borders

brew install --HEAD koekeishiya/formulae/yabai
sudo visudo -f /private/etc/sudoers.d/yabai  
echo "$(whoami) ALL=(root) NOPASSWD: $(which yabai) --load-sa" | sudo tee /private/etc/sudoers.d/yabai
sudo chmod 644 /private/etc/sudoers.d/yabai

rew install sketchybar --HEAD
cd /tmp && git clone https://github.com/FelixKratz/SbarLua.git && cd SbarLua && make install
brew services stop sketchybar && brew services start sketchybar
brew install --cask sf-symbols
brew tap FelixKratz/formulae


# cp -f ./yabai/.yabairc ~/
# cp -f ./sketchybar/ ~/
# cp -f .zshrc ~/
cp -f gitch.sh ~/

mv /Users/$USER/Downloads/dotfiles-main/skhdrc /Users/$USER/.skhdrc
mv /Users/$USER/Downloads/dotfiles-main/yabairc /Users/$USER/.yabairc
mv /Users/$USER/Downloads/dotfiles-main/.zshrc /Users/$USER/.zshrc

mkdir /Users/$USER/dev
git clone https://github.com/xexubonete/sketchybar.git /Users/$USER/.config/sketchybar
# cp -r sketchybar-lua/src ~/.config/sketchybar

sudo yabai --install-service
sudo skhd --install-service
yabai --start-service
skhd --start-service
