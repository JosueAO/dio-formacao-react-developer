#!/bin/bash

echo "🚀 Preparando deployment do DIO Blog..."

# Verificar se as variáveis de ambiente estão configuradas
if [ ! -f .env.local ]; then
    echo "❌ Arquivo .env.local não encontrado!"
    echo "📋 Copie .env.example para .env.local e configure suas variáveis"
    exit 1
fi

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

# Executar linting
echo "🔍 Executando linting..."
npm run lint

# Build do projeto
echo "🏗️ Fazendo build do projeto..."
npm run build

# Testar se o build foi bem-sucedido
if [ $? -eq 0 ]; then
    echo "✅ Build concluído com sucesso!"
    echo "🌐 O projeto está pronto para deploy!"
    echo ""
    echo "📚 Próximos passos:"
    echo "- Para Netlify: Conecte seu repositório no dashboard"
    echo "- Para Vercel: Execute 'npx vercel' ou conecte no dashboard"
    echo "- Para deploy manual: Execute 'npm start' em produção"
else
    echo "❌ Falha no build!"
    exit 1
fi
