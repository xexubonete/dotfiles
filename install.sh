if [ $# -ne 2 ]; then
  echo "Uso: $0 <nombre_de_usuario> <correo_electronico>"
  exit 1
fi

USER=$1
EMAIL=$2

echo "🔐 Configurando permisos de sudo..."
echo "$USER ALL=(ALL) NOPASSWD: ALL" | sudo tee /etc/sudoers.d/install_script
sudo chmod 0440 /etc/sudoers.d/install_script

# Pedir contraseña y mantener sudo activo
echo "🔐 Por favor, introduce tu contraseña para operaciones privilegiadas:"
sudo -v

echo "🚀 Iniciando script de instalación..."
echo "👤 Usuario: $USER"
echo "📧 Email: $EMAIL"

echo "📦 Instalando Xcode..."
xcode-select --install

echo "🍺 Instalando Homebrew..."
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Crear el archivo .zprofile si no existe
touch /Users/$USER/.zprofile

# Ahora podemos modificar los permisos y la propiedad
chmod +x /Users/$USER/.zprofile
sudo chown $USER /Users/$USER/.zprofile

# Añadir la configuración de Homebrew
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/$USER/.zprofile
eval "$(/opt/homebrew/bin/brew shellenv)"
brew --version

echo "🔄 Configurando taps de Homebrew..."
brew tap koekeishiya/formulae
brew tap FelixKratz/formulae

echo "⚙️ Ejecutando configuración de macOS..."
sh ./.macConfig.sh

echo "🔧 Configurando Git..."
sudo sh ./git/setup_gitconfig.sh "$USER" "$EMAIL"

echo "📱 Instalando aplicaciones..."
brew install bitwarden && echo "✅ Bitwarden instalado"
brew install warp && echo "✅ Warp instalado"
brew install bruno && echo "✅ Bruno instalado"
brew install chatgpt && echo "✅ ChatGPT instalado"
brew install discord && echo "✅ Discord instalado"
brew install nordvpn && echo "✅ NordVPN instalado"
brew install notion && echo "✅ Notion instalado"
brew install google-chrome && echo "✅ Chrome instalado"
brew install microsoft-teams && echo "✅ Teams instalado"
brew install orbstack && echo "✅ Orbstack instalado"
brew install --cask pgadmin4 && echo "✅ pgAdmin4 instalado"
brew install postgresql && echo "✅ PostgreSQL instalado"
brew install whatsapp && echo "✅ WhatsApp instalado"
brew install visual-studio-code && echo "✅ VS Code instalado"
brew install rider && echo "✅ Rider instalado"

echo "🛠️ Configurando entorno ZSH..."
brew install zsh
brew install starship
brew install utm
eval "$(starship init zsh)"
brew install --cask font-hack-nerd-font

echo "🔄 Cambiando shell por defecto a ZSH..."
chsh -s $(which zsh)
# Instalar oh-my-zsh sin ejecutar zsh automáticamente
RUNZSH=no sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

echo "🖥️ Instalando herramientas del entorno..."
brew tap koekeishiya/formulae
brew install koekeishiya/formulae/skhd && echo "✅ SKHD instalado"
brew install lua luarocks && echo "✅ Lua instalado"
brew install borders && echo "✅ Borders instalado"

echo "🪟 Instalando y configurando Yabai..."
brew install --HEAD koekeishiya/formulae/yabai
sudo visudo -f /private/etc/sudoers.d/yabai  
echo "$(whoami) ALL=(root) NOPASSWD: $(which yabai) --load-sa" | sudo tee /private/etc/sudoers.d/yabai
sudo chmod 644 /private/etc/sudoers.d/yabai

echo "📊 Instalando y configurando Sketchybar..."
brew install sketchybar --HEAD
cd /tmp && git clone https://github.com/FelixKratz/SbarLua.git && cd SbarLua && make install
brew services stop sketchybar && brew services start sketchybar
brew install --cask sf-symbols
brew tap FelixKratz/formulae

echo "📁 Moviendo archivos de configuración..."
mv /Users/$USER/Downloads/dotfiles/skhdrc /Users/$USER/.skhdrc
mv /Users/$USER/Downloads/dotfiles/yabairc /Users/$USER/.yabairc
mv /Users/$USER/Downloads/dotfiles/zshrc /Users/$USER/.zshrc
mv /Users/$USER/Downloads/dotfiles/gitch.sh /Users/$USER/gitch.sh
cp -r /Users/$USER/Downloads/dotfiles/sketchybar-system-stats/ /Users/$USER/.config/sketchybar-system-stats

echo "📂 Creando directorio de desarrollo..."
mkdir /Users/$USER/dev
git clone https://github.com/xexubonete/sketchybar.git /Users/$USER/.config/sketchybar

echo "🔄 Iniciando servicios..."
sudo yabai --install-service
sudo skhd --install-service
yabai --start-service
skhd --start-service

echo "🔒 Restaurando configuración de sudo..."
sudo rm /etc/sudoers.d/install_script

echo "✨ Instalación completada! ✨"

kill $KEEP_SUDO_PID 2>/dev/null
