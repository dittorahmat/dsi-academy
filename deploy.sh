#!/bin/bash

# ==============================================================================
# Script Deploy Otomatis DSI Academy via Cron (Pull-based Deployment)
# ==============================================================================

PROJECT_DIR="/home/ubuntu/dsi-academy"
BRANCH="main"
LOG_FILE="$PROJECT_DIR/deploy.log"
TARGET_DIR="/var/www/academy"

cd "$PROJECT_DIR" || { echo "$(date): Gagal masuk ke folder proyek $PROJECT_DIR" >> "$LOG_FILE"; exit 1; }

# Load NVM environment agar cron memiliki akses ke node & npm
export NVM_DIR="$HOME/.nvm"
if [ -s "$NVM_DIR/nvm.sh" ]; then
    \. "$NVM_DIR/nvm.sh"
fi

# Fallback path jika nvm tidak aktif
export PATH="/home/ubuntu/.nvm/versions/node/v22.22.3/bin:/usr/local/bin:/usr/bin:/bin:$PATH"

# Verifikasi dependensi binary
if ! command -v git &> /dev/null || ! command -v npm &> /dev/null; then
    echo "$(date): Error - git atau npm tidak ditemukan di PATH." >> "$LOG_FILE"
    exit 1
fi

# Ambil metadata terbaru dari remote repository
git fetch origin "$BRANCH" > /dev/null 2>&1

LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse "origin/$BRANCH")

if [ "$LOCAL" != "$REMOTE" ]; then
    echo "$(date): [Deploy Started] Perubahan terdeteksi ($LOCAL -> $REMOTE)" >> "$LOG_FILE"

    # Reset ke remote commit terbaru
    git reset --hard "origin/$BRANCH" >> "$LOG_FILE" 2>&1

    # Install dependensi jika ada perubahan package.json
    npm install >> "$LOG_FILE" 2>&1

    # Build proyek Vite
    npm run build >> "$LOG_FILE" 2>&1

    if [ -d "$PROJECT_DIR/dist" ]; then
        # Sinkronkan dist ke DocumentRoot web server
        sudo rsync -av --delete "$PROJECT_DIR/dist/" "$TARGET_DIR/" >> "$LOG_FILE" 2>&1
        sudo chown -R www-data:www-data "$TARGET_DIR" >> "$LOG_FILE" 2>&1

        # Reload Apache
        sudo systemctl reload apache2 >> "$LOG_FILE" 2>&1

        echo "$(date): [Deploy Success] Website berhasil diperbarui dan direload." >> "$LOG_FILE"
    else
        echo "$(date): [Deploy Failed] Folder dist tidak ditemukan setelah build!" >> "$LOG_FILE"
        exit 1
    fi
else
    # Tidak ada perubahan
    exit 0
fi
