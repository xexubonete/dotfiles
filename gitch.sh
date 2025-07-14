#!/bin/bash

# ANSI colors and styles
RED='\033[38;5;196m'  
BRIGHT_YELLOW='\033[38;5;226m'
GREEN='\033[0;32m'
MAGENTA='\033[38;5;201m'  # Lila/magenta para "Repository:"
BOLD='\033[1m'
RESET='\033[0m'

BASE_DIR=~/dev

echo -e "${BOLD}Checking for uncommitted changes in repositories inside $BASE_DIR${RESET}"
echo

for repo in "$BASE_DIR"/*; do
  if [ -d "$repo/.git" ]; then
    cd "$repo" || continue
    CHANGES=$(git status --porcelain)
    if [ -n "$CHANGES" ]; then
      echo -e "${BOLD}${MAGENTA}$(basename "$repo")${RESET}"
      while IFS= read -r line; do
        STATUS="${line:0:2}"
        FILE="${line:3}"

        # Color the letters M and D in the status
        COLORED_STATUS="${STATUS//M/${BRIGHT_YELLOW}M${RESET}}"
        COLORED_STATUS="${COLORED_STATUS//D/${RED}D${RESET}}"

        # File color based on status
        if [[ "$STATUS" == *M* ]]; then
        FILE_COLOR=$BRIGHT_YELLOW
        elif [[ "$STATUS" == *A* ]]; then
        FILE_COLOR=$GREEN
        elif [[ "$STATUS" == "??" || "$STATUS" == *D* ]]; then
        FILE_COLOR=$RED
        else
        FILE_COLOR=$RESET
        fi


        echo -e "  ${FILE_COLOR}${FILE}${RESET} -${BOLD}${COLORED_STATUS}${RESET}"
      done <<< "$CHANGES"
      echo
    fi
  fi
done
