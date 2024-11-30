#!/usr/bin/env sh
defaults write com.apple.dock autohide-delay -float 0;
defaults write com.apple.dock autohide-time-modifier -int 0;
defaults delete com.apple.dock autohide-delay;
defaults write com.apple.dock autohide-delay -float 0;
defaults write com.apple.dock autohide-time-modifier -int 0;
defaults delete com.apple.dock autohide-time-modifier;
defaults write com.apple.dock autohide-time-modifier -int 0;
defaults write com.apple.dock autohide-time-modifier -int 1;
defaults delete com.apple.dock autohide-time-modifier;
defaults delete com.apple.dock autohide-time-modifier;
defaults write com.apple.dock autohide-time-modifier -float 0.15;
defaults delete com.apple.dock autohide-time-modifier;

killall Dock;

sudo pmset -a tcpkeepalive 0
sudo pmset -a tcpkeepalive 1
sudo pmset -a powernap 0
sudo pmset -a standbydelaylow 600
sudo pmset -a tcpkeepalive 1
sudo pmset -a tcpkeepalive 0

sudo nvram AutoBoot=%00
sudo nvram AutoBoot=%00.

defaults write com.apple.finder CreateDesktop -bool false

killall Finder