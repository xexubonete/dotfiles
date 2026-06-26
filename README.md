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
5. Compila el fork de komorebi, lo **firma** con un certificado estable y deja los **LaunchAgents** listos (komorebi y apps de inicio).
6. Recuerda configurar Git con `git/setup_gitconfig.sh "Nombre" email`.

komorebi arranca **solo al iniciar sesión** (LaunchAgent). La primera vez hay
que concederle *Accesibilidad* y *Grabación de pantalla* (`install.sh` te abre
los paneles). Gracias a la firma estable, esos permisos **persisten entre
recompilaciones** (ver más abajo).

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

Uso un **fork propio compilado** (`~/dev/komorebi-for-mac`, rama `mac-tweaks`),
no el binario de Homebrew. brew solo aporta el CLI `komorebic` en el PATH.

**Archivos de config:**

- `komorebi/komorebi.json` — config principal (layouts, paddings, `ignore_rules`, `initial_workspace_rules`, bordes). Incluye `global_work_area_offset: { top: -2, bottom: -2 }` para **pegar las ventanas a la barra de menús** (quita el hueco que deja macOS).
- `komorebi/applications.json` — reglas por aplicación.
- `komorebi/komorebi.bar.json` — la barra.
- Los atajos viven en `skhd/skhdrc` (skhd lee `~/.skhdrc`).

**Arranque automático (LaunchAgents):**

- `komorebi/com.lgug2z.komorebi.plist` — arranca komorebi al iniciar sesión (`RunAtLoad`, sin `KeepAlive` para no chocar con `rset`).
- `komorebi/com.xexu.startup.plist` — ejecuta `startup.sh`, que abre las apps del entorno (Space 1: WhatsApp, Música, Mail, Discord, Ghostty, Claude · Space 2: Brave) y, **cuando todas tienen ventana, reinicia komorebi**. Motivo: si komorebi ya está corriendo, cada ventana le llega como evento suelto en orden aleatorio y el grid sale distinto cada vez; al reiniciarlo con todo abierto las enumera de golpe (orden estable) → mismo layout que `rset`, consistente.
- `install.sh` rellena las rutas y carga ambos con `launchctl`.

**Firma estable (`komorebi/setup-codesign.sh`):**

`cargo` firma el binario *ad-hoc* (la firma cambia en cada build) y macOS revoca
*Accesibilidad*/*Grabación de pantalla* tras cada recompilación. El script firma
el binario con un **certificado autofirmado propio** (`komorebi-selfsigned`, en
el llavero), dándole una identidad estable → los permisos se conceden **una vez**
y persisten entre builds. `install.sh` lo crea y firma; en cada Mac se genera su
propio certificado.

**Aliases (`.zshrc`):**

- `rset` — reinicia komorebi (vía `launchctl`).
- `kbuild` — recompila el fork **y lo firma** (úsalo en vez de `cargo build` a pelo).
- `kstart` — abre las apps del entorno manualmente.

> Nota es_ES: las reglas para ignorar ventanas del sistema usan el **nombre
> localizado** (p. ej. `Centro de control`, `Ajustes del Sistema`). Si cambias el
> idioma de macOS hay que actualizar esos nombres en `ignore_rules`.

## Atajos de teclado (skhd)

Todo en [`skhd/skhdrc`](skhd/skhdrc) (skhd lee `~/.skhdrc`). Resumen de los más usados:

| Atajo | Acción |
|-------|--------|
| `ctrl + j / k / l / ñ` | Mover el foco izquierda / arriba / abajo / derecha |
| `ctrl + shift + [ ó ]` | Ciclar foco anterior / siguiente |
| `ctrl + shift + j/k/l/ñ` | Mover la ventana en esa dirección |
| `ctrl + shift + ⏎` | Promover ventana (hacerla principal) |
| `ctrl + 1…9` | Ir al workspace 1…9 |
| `ctrl + shift + 1…9` | Mover la ventana al workspace 1…9 |
| `ctrl + t` | Flotante on/off · `ctrl + f` monocle |
| `ctrl + shift + r` | Retile · `ctrl + p` pausar komorebi |
| **`cmd + q`** | **Cierre inteligente**: cierra solo la ventana enfocada si la app tiene varias; sale de la app si es la última |
| **`ctrl + q`** | Cierra **siempre solo** la ventana enfocada (no sale de la app) |
| **`cmd + ctrl + ⏎`** | Nueva ventana de Ghostty |
| **`cmd + ctrl + b`** | Nueva ventana de Brave |
| **`cmd + ctrl + w / m / s / i / c`** | Abrir/enfocar WhatsApp / Mail / Música / Discord / Claude |

Notas de diseño:

- **`cmd + q` inteligente**: macOS, por defecto, sale de la app entera (cierra todas sus ventanas). Este atajo lo redefine para que pulse el botón rojo de cerrar de la ventana frontal (vía Accessibility) cuando hay varias, y solo salga de la app cuando es la última ventana. Lleva un *debounce* (candado con `mkdir`, 1/seg) porque al **mantener pulsado** macOS auto-repite la tecla y, sin él, skhd encadenaría cierres y se cerrarían todas.
- **Lanzadores `cmd + ctrl + …`**: se eligió `cmd+ctrl` porque komorebi solo usa `ctrl`/`ctrl+shift` y no choca con atajos del sistema (se evitan `cmd+ctrl+F/Q/Espacio/D`, reservados por macOS). Ghostty y Brave abren **ventana nueva**; el resto son apps de ventana única (enfocan si ya están abiertas).

## legacy/

Setup anterior, ya no en uso (antes usaba yabai + sketchybar + borders):

- `legacy/yabai/`, `legacy/skhdrc-yabai`, `legacy/aerospace/`, `legacy/sketchybar/`.
- `legacy/sketchybar-system-stats/` (proyecto de terceros) está **gitignorado** por su tamaño; si revives sketchybar, recompílalo.

Se conserva por si alguna vez vuelvo a ese stack.

## Qué NO se reproduce solo (pasos manuales)

El repo deja un Mac nuevo al ~85-90%. Lo que hay que rematar a mano:

- **Permisos de macOS**: `install.sh` te abre los paneles de *Accesibilidad* y *Grabación de pantalla*; solo tienes que activar **komorebi** y **skhd** (1 clic cada uno). No se pueden conceder por script en un Mac con SIP activado — y **komorebi NO necesita SIP desactivado**, así que déjalo como viene (activado, más seguro). Gracias a la firma estable (`setup-codesign.sh`), esto es de **una sola vez**: recompilar con `kbuild` ya no revoca los permisos.
- **Sesiones/cuentas de apps**: Bitwarden, Teams, NordVPN, OneDrive, Notion, etc. (re-login).
- **Raycast** y **Rider/JetBrains**: su configuración se sincroniza por **su propia nube/cuenta**, no por este repo. Activa su sync nativo.
- **Ajustes de macOS** no incluidos en `macos-defaults.sh` (es un set curado: apariencia, Dock, hot corners, Finder; no captura cada toggle del sistema).
- **Apps fijadas en el Dock**: son las de macOS por defecto; no se versionan.

## Licencia

MIT.
