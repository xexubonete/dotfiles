#!/usr/bin/env sh

# Configuración básica del Dock
defaults write com.apple.dock autohide -bool true                     # Auto-ocultar el Dock
defaults write com.apple.dock autohide-delay -float 0                 # Sin retraso al mostrar
defaults write com.apple.dock autohide-time-modifier -float 0.15      # Velocidad de animación
defaults write com.apple.dock minimize-to-application -bool true      # Minimizar ventanas en el icono de la app
defaults write com.apple.dock mru-spaces -bool false                  # No reordenar espacios automáticamente
defaults write com.apple.dock tilesize -int 36                        # Tamaño de los iconos

# Configuración de las esquinas activas (Hot Corners)
defaults write com.apple.dock wvous-tl-corner -int 4                 # Esquina superior izquierda: Desktop
defaults write com.apple.dock wvous-tr-corner -int 12                # Esquina superior derecha: Notification Center
defaults write com.apple.dock wvous-br-corner -int 1                 # Esquina inferior derecha: Dashboard
defaults write com.apple.dock wvous-tl-modifier -int 0               # Sin modificador para esquina superior izquierda
defaults write com.apple.dock wvous-tr-modifier -int 0               # Sin modificador para esquina superior derecha
defaults write com.apple.dock wvous-br-modifier -int 0               # Sin modificador para esquina inferior derecha

# Resto de configuraciones existentes
defaults write com.apple.finder CreateDesktop -bool false

# Configuraciones de energía
sudo pmset -a tcpkeepalive 0
sudo pmset -a powernap 0
sudo pmset -a standbydelaylow 600
sudo pmset -a tcpkeepalive 0

# Configuración de arranque
sudo nvram AutoBoot=%00

# Reiniciar servicios para aplicar cambios
killall Dock
killall Finder