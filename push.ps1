#!/usr/bin/env powershell

cd c:\rcb-guessing-game

# Remove git folder if exists
if (Test-Path .git) {
    Remove-Item -Path .git -Recurse -Force
}

# Initialize fresh git repo
git init

# Configure git
git config user.email "dev@example.com"
git config user.name "Developer"

# Stage all files
git add .

# Commit with message
git commit -m "feat: Cricket Masters Guessing Game - Complete Project

- 25 cricket players with detailed clues
- Modern responsive UI with animations
- Interactive hint system
- Achievement-based scoring system
- Progress tracking and statistics
- Mobile-friendly design"

# Add remote
git remote add origin https://github.com/KRITHIKA780/RCB-PLAYER-GUESS-GAME.git

# Force push to main branch
git push -u origin main --force

Write-Host "Successfully pushed to GitHub!" -ForegroundColor Green
