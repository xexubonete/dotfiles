#!/usr/bin/env sh
# Ajustes de macOS, capturados del Mac de Jesús (es_ES, Apple Silicon) el 2026-06-17.
# Aplicar con:  sh macos-defaults.sh   (pedirá sudo para energía/arranque)
# Cierra sesión o reinicia para que se apliquen del todo.

### Apariencia
defaults write -g AppleInterfaceStyle -string "Dark"                  # Modo oscuro
defaults write -g AppleShowAllExtensions -bool true                   # Mostrar todas las extensiones de archivo
defaults write -g ApplePersistence -bool false                        # No restaurar ventanas al reabrir apps
defaults write -g com.apple.swipescrolldirection -bool false          # Dirección de scroll NO natural (tradicional)
defaults write -g AppleFocusFollowsMouse -bool true                   # El foco sigue al ratón (como yabai), sin elevar la ventana

### Dock
defaults write com.apple.dock tilesize -int 16                        # Tamaño de iconos (tu valor real)
defaults write com.apple.dock largesize -int 16                       # Tamaño con magnificación
defaults write com.apple.dock magnification -bool false               # Sin magnificación
defaults write com.apple.dock autohide -bool true                     # Auto-ocultar
defaults write com.apple.dock autohide-delay -float 0                 # Sin retraso al mostrar (animación instantánea)
defaults write com.apple.dock minimize-to-application -bool true      # Minimizar al icono de la app
defaults write com.apple.dock mineffect -string "genie"               # Efecto de minimizar
defaults write com.apple.dock mru-spaces -bool false                  # No reordenar espacios automáticamente
defaults write com.apple.dock show-recents -bool false                # No mostrar apps recientes
defaults write com.apple.dock show-process-indicators -bool false     # Sin indicadores de proceso

### Esquinas activas (Hot Corners) — valores reales actuales
defaults write com.apple.dock wvous-tl-corner -int 1                  # Arriba izq: ninguna
defaults write com.apple.dock wvous-tl-modifier -int 0
defaults write com.apple.dock wvous-tr-corner -int 12                 # Arriba dcha: Centro de notificaciones
defaults write com.apple.dock wvous-tr-modifier -int 0
defaults write com.apple.dock wvous-br-corner -int 1                  # Abajo dcha: ninguna
defaults write com.apple.dock wvous-br-modifier -int 0

### Finder
defaults write com.apple.finder FXPreferredViewStyle -string "icnv"   # Vista de iconos
defaults write com.apple.finder CreateDesktop -bool false             # Ocultar iconos del escritorio

### Energía y arranque (requieren sudo)
sudo pmset -a tcpkeepalive 0
sudo pmset -a powernap 0
sudo pmset -a standbydelaylow 600
sudo nvram AutoBoot=%00                                               # No encender solo al abrir la tapa

### Aplicar
killall Dock 2>/dev/null
killall Finder 2>/dev/null
echo "Ajustes de macOS aplicados. Cierra sesión o reinicia para los que falten."
