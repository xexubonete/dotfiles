# Dotfiles

Configuración de mi Mac (Apple Silicon): apps, CLIs y dotfiles, reproducible de
cero con Homebrew. El gestor de ventanas es **komorebi-for-mac** + **skhd**.

## Instalación en un Mac nuevo

```sh
git clone https://github.com/xexubonete/dotfiles.git
cd dotfiles
./install.sh
```

`install.sh` es idempotente:

1. Instala Homebrew si falta.
2. `brew bundle` con el [`Brewfile`](Brewfile): taps, CLIs, apps (casks) y extensiones de VS Code.
3. Enlaza (symlink) las configuraciones a su sitio, haciendo backup de lo que hubiera (`*.bak.<timestamp>`).
4. Aplica los ajustes de macOS de [`macos-defaults.sh`](macos-defaults.sh) (Dock, hot corners, energía).
5. Recuerda configurar Git con `git/setup_gitconfig.sh "Nombre" email`.

Después, arranca el gestor de ventanas:

```sh
komorebic start --bar   # concede Grabación de pantalla a komorebi la 1ª vez
```

## Estructura

| Carpeta / archivo      | Qué es | Destino |
|------------------------|--------|---------|
| `Brewfile`             | Apps, CLIs y extensiones de VS Code | `brew bundle` |
| `zsh/.zshrc`           | Shell (oh-my-zsh, starship, aliases, funciones) | `~/.zshrc` |
| `skhd/skhdrc`          | Atajos de teclado (lanzan comandos de komorebi) | `~/.skhdrc` |
| `komorebi/`            | Config de komorebi-for-mac | `~/.config/komorebi/` |
| `ghostty/`             | Terminal Ghostty | `~/Library/Application Support/com.mitchellh.ghostty/` |
| `vscode/settings.json` | Ajustes de VS Code (extensiones → Brewfile) | `~/Library/Application Support/Code/User/` |
| `git/`                 | Plantilla de `.gitconfig` + script de setup | `~/.gitconfig` |
| `macos-defaults.sh`    | `defaults write` de macOS | — |
| `gitch.sh`             | Utilidad propia de Git | — |
| `legacy/`              | Setup antiguo (yabai, aerospace, sketchybar, borders) — ver abajo | — |

## komorebi (gestor de ventanas)

- `komorebi/komorebi.json` — config principal (layouts, paddings, `ignore_rules`).
- `komorebi/applications.json` — reglas por aplicación.
- `komorebi/komorebi.bar.json` — la barra (`komorebic start --bar`).
- Los atajos viven en `skhd/skhdrc` (skhd lee `~/.skhdrc`).

> Nota es_ES: las reglas para ignorar ventanas del sistema usan el **nombre
> localizado** (p. ej. `Centro de control`, `Ajustes del Sistema`). Si cambias el
> idioma de macOS hay que actualizar esos nombres en `ignore_rules`.

## legacy/

Setup anterior, ya no en uso (antes usaba yabai + sketchybar + borders):

- `legacy/yabai/`, `legacy/skhdrc-yabai`, `legacy/aerospace/`, `legacy/sketchybar/`.
- `legacy/sketchybar-system-stats/` (proyecto de terceros) está **gitignorado** por su tamaño; si revives sketchybar, recompílalo.

Se conserva por si alguna vez vuelvo a ese stack.

## Licencia

MIT.
