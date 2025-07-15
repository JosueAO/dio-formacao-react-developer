# Script de Deploy para DIO Blog - Windows PowerShell

Write-Host "🚀 Preparando deployment do DIO Blog..." -ForegroundColor Green

# Verificar se as variáveis de ambiente estão configuradas
if (!(Test-Path ".env.local")) {
  Write-Host "❌ Arquivo .env.local não encontrado!" -ForegroundColor Red
  Write-Host "📋 Copie .env.example para .env.local e configure suas variáveis" -ForegroundColor Yellow
  exit 1
}

# Instalar dependências
Write-Host "📦 Instalando dependências..." -ForegroundColor Blue
npm install

if ($LASTEXITCODE -ne 0) {
  Write-Host "❌ Falha na instalação das dependências!" -ForegroundColor Red
  exit 1
}

# Executar linting
Write-Host "🔍 Executando linting..." -ForegroundColor Blue
npm run lint

# Build do projeto
Write-Host "🏗️ Fazendo build do projeto..." -ForegroundColor Blue
npm run build

# Testar se o build foi bem-sucedido
if ($LASTEXITCODE -eq 0) {
  Write-Host "✅ Build concluído com sucesso!" -ForegroundColor Green
  Write-Host "🌐 O projeto está pronto para deploy!" -ForegroundColor Green
  Write-Host ""
  Write-Host "📚 Próximos passos:" -ForegroundColor Cyan
  Write-Host "- Para Netlify: Conecte seu repositório no dashboard" -ForegroundColor White
  Write-Host "- Para Vercel: Execute 'npx vercel' ou conecte no dashboard" -ForegroundColor White
  Write-Host "- Para deploy manual: Execute 'npm start' em produção" -ForegroundColor White
}
else {
  Write-Host "❌ Falha no build!" -ForegroundColor Red
  exit 1
}
