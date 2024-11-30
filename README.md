# Dotfiles

This repository contains my shell script to set up essential tools, applications, and development environments on a macOS system using Homebrew. The script requires two parameters: a username and an email address.

## Prerequisites

- [Homebrew](https://brew.sh/)

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/xexubonete/dotfiles.git
    cd dotfiles
    ```

2. Make the script executable:

    ```sh
    chmod +x install.sh
    ```

3. Run the script with your username and email as parameters:

    ```sh
    ./install.sh <username> <email>
    ```

## Script Description

The `install.sh` script performs the following actions:

1. Checks that two parameters (username and email) are provided.
2. Installs Homebrew if it is not already installed.
3. Executes the `macConfig.sh` script to configure the macOS system.
4. Configures Git using the `setup_gitconfig.sh` script with the provided username and email.
5. Installs various tools and applications using Homebrew.
6. Installs code editors and development tools.
7. Sets up the environment by installing `yabai`, `borders`, and `sketchybar`, and copies the corresponding configuration files to the home directory.

## Tools Installed

- displaylink
- bitwarden
- warp
- postman
- chatgpt
- discord
- nordvpn
- vlc
- notion
- orbstack
- onedrive
- pgadmin4
- postgresql
- whatsapp

## Code Editors

- Xcode Command Line Tools
- Visual Studio Code
- Rider

## Environment Setup

- yabai
- borders
- sketchybar

Configuration files for `yabai`, `sketchybar` and `.zshrc` are copied to the home directory.

## Contributing

Contributions are welcome! Open an issue or submit a pull request.

## License

This project is licensed under the MIT License.
