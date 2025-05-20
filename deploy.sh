#!/bin/bash

echo "🚀 Przygotowanie do wdrożenia CV na Vercel..."

# Upewnij się, że masz zainstalowany vercel CLI
if ! command -v vercel &> /dev/null; then
    echo "Instalowanie Vercel CLI..."
    npm install -g vercel
fi

# Budowanie aplikacji
echo "📦 Budowanie aplikacji..."
npm run build

# Wdrożenie na Vercel
echo "🔼 Wdrażanie na Vercel..."
vercel --prod

echo "✅ Wdrożenie zakończone!" 