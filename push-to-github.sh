#!/bin/bash

echo "🚀 Fazendo push do netlify.toml para GitHub..."
echo ""

cd /app

# Adicionar o arquivo
git add netlify.toml

# Commit
git commit -m "Add Netlify configuration file"

# Push
git push

echo ""
echo "✅ Pronto! O Netlify vai fazer deploy automático agora."
echo "Veja o progresso em: https://app.netlify.com/"
