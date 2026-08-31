# Se lee en TODOS los shells zsh, también los no interactivos.
# Importa porque skhd lanza los atajos con `zsh -c`, y ese shell no lee .zshrc:
# lo que se ponga aquí es lo único que ven los comandos de los atajos.

. "$HOME/.cargo/env"

export PATH="$HOME/dev/flutter/bin:$PATH"

# Binarios propios delante de los de Homebrew. Aquí vive el symlink a MI build de
# komorebi-for-mac (fork con parches, rama mac-tweaks), de modo que el CLI
# 'komorebic' y el daemon 'komorebi' salgan SIEMPRE del mismo commit. Si no, skhd
# resolvía 'komorebic' al de brew, que iba por detrás del daemon y ya no sabía
# emitir algunos comandos.
export PATH="$HOME/.local/bin:$PATH"
