# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH="$HOME/.oh-my-zsh"

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="amuse"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
# zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.

plugins=(
git
zsh-autosuggestions
node
npm
pnpm
brew
dotnet
)

source $ZSH/oh-my-zsh.sh

omz update

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"
alias ll="ls --color -la -h"
alias ls="ls --color -la -h"
alias git="g"
# Function to restart skhd using LaunchAgents (proper macOS way)
restart_skhd() {
    echo "Restarting skhd services via LaunchAgents..."
    
    # Stop all skhd LaunchAgents
    launchctl unload ~/Library/LaunchAgents/com.koekeishiya.skhd.plist 2>/dev/null
    launchctl unload ~/Library/LaunchAgents/com.usuario.skhd.plist 2>/dev/null
    
    # Kill any remaining processes
    pkill -9 -f skhd 2>/dev/null
    
    # Wait for processes to terminate
    sleep 2
    
    # Clean up PID files
    rm -f /tmp/skhd_*.pid 2>/dev/null
    
    echo "Starting skhd services..."
    
    # Start the primary skhd service
    launchctl load ~/Library/LaunchAgents/com.koekeishiya.skhd.plist 2>/dev/null
    
    # Give it time to start
    sleep 2
    
    # Verify skhd is running
    local running_processes=$(ps aux | grep "[s]khd" | wc -l)
    if [ $running_processes -eq 1 ]; then
        echo "Skhd service restarted successfully! (1 process running)"
        echo "Active LaunchAgents:"
        launchctl list | grep skhd
    elif [ $running_processes -gt 1 ]; then
        echo "Warning: Multiple skhd processes detected ($running_processes processes)"
        ps aux | grep "[s]khd"
    else
        echo "Error: skhd failed to start. Trying alternative service..."
        launchctl load ~/Library/LaunchAgents/com.usuario.skhd.plist 2>/dev/null
        sleep 1
        if pgrep -f "skhd" > /dev/null; then
            echo "Skhd started with alternative service!"
        else
            echo "Error: Unable to start skhd with any method"
        fi
    fi
}

# Function to reset all window management services
reset_wm() {
    yabai --stop-service > /dev/null 2>&1
    yabai --start-service > /dev/null 2>&1
    brew services restart sketchybar > /dev/null 2>&1
    restart_skhd
    echo "All services reset!"
}

# Alias for backward compatibility
alias reset=reset_wm
alias gitch=~/gitch.sh

eval "$(/opt/homebrew/bin/brew shellenv)"
eval "$(starship init zsh)"

#HOMEBREW
export PATH="/opt/homebrew/bin:$PATH"
export PATH="$PATH:/Applications/Rider.app/Contents/MacOS"
. /opt/homebrew/opt/asdf/libexec/asdf.sh
fpath=(${ASDF_DIR}/libexec/completions $fpath)
autoload -Uz compinit && compinit


export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# bun completions
[ -s "/Users/xexu/.bun/_bun" ] && source "/Users/xexu/.bun/_bun"

