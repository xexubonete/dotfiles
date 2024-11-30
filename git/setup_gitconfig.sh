#!/bin/bash

# Pedir el nombre de usuario y correo como argumentos
if [ $# -ne 2 ]; then
  echo "Uso: $0 <nombre_de_usuario> <correo_electronico>"
  exit 1
fi

USERNAME=$1
EMAIL=$2

# Archivo .gitconfig
GITCONFIG=~/.gitconfig

# Crear o sobrescribir el archivo .gitconfig con el contenido
cat > "$GITCONFIG" <<EOF
# Change the credentials to the real ones
# This is Git's per-user configuration file.
[user]
	name = $USERNAME
	email = $EMAIL
[alias]
	st = status
	ch = checkout
	cm = commit
	rb = rebase
	rt = reset
	st = status --short --branch
	lg = log --graph --abbrev-commit --decorate --format=format:'%C(bold blue)%h%C(reset) - %C(bold green)(%ar)%C(reset) %C(white)%s%C(reset) %C(dim white)- %an%C(reset)%C(bold yellow)%d%C(reset)' --all
	df = diff -w --word-diff=color --ignore-space-at-eol
[pull]
	ff = only
[http]
# To push large files or heavy amount of kB 
	postBuffer = 524288000
EOF

echo "Archivo .gitconfig configurado con éxito:"
echo "Nombre de usuario: $USERNAME"
echo "Correo electrónico: $EMAIL"