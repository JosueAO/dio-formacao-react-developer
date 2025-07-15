# 🤝 Guia de Contribuição - DIO Blog

Obrigado por considerar contribuir com o DIO Blog! Este documento fornece diretrizes para contribuir com o projeto.

## 📋 Como Contribuir

### 🐛 Reportando Bugs

1. Verifique se o bug já foi reportado nas [Issues](../../issues)
2. Se não existe, crie uma nova issue com:
   - Título claro e descritivo
   - Descrição detalhada do problema
   - Passos para reproduzir
   - Comportamento esperado vs atual
   - Screenshots (se aplicável)
   - Informações do ambiente (OS, browser, Node.js version)

### 💡 Sugerindo Melhorias

1. Abra uma issue com o template de "Feature Request"
2. Descreva claramente a melhoria proposta
3. Explique por que seria útil para o projeto
4. Forneça exemplos de uso, se possível

### 🔧 Desenvolvendo

#### Preparando o Ambiente

1. Faça um fork do repositório
2. Clone seu fork:
   ```bash
   git clone https://github.com/seu-usuario/trilha-react-desafio-5.git
   cd trilha-react-desafio-5
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Configure o ambiente seguindo o `README.md`

#### Fluxo de Desenvolvimento

1. Crie uma branch para sua feature:
   ```bash
   git checkout -b feature/nome-da-feature
   ```
2. Faça suas alterações seguindo as [convenções](#-convenções-de-código)
3. Teste suas alterações:
   ```bash
   npm run dev
   npm run lint
   npm run build
   ```
4. Commit suas alterações:
   ```bash
   git commit -m "feat: adiciona nova funcionalidade"
   ```
5. Push para seu fork:
   ```bash
   git push origin feature/nome-da-feature
   ```
6. Abra um Pull Request

## 📝 Convenções de Código

### JavaScript/React

- Use **ES6+** e funcionalidades modernas
- Prefira **componentes funcionais** com hooks
- Use **destructuring** quando apropriado
- Nomeação em **camelCase** para variáveis e funções
- Nomeação em **PascalCase** para componentes
- Use **const** por padrão, **let** quando necessário

### CSS/Tailwind

- Use **Tailwind CSS** para estilização
- Prefira **classes utilitárias** ao CSS customizado
- Organize classes na ordem: layout, spacing, typography, colors, effects
- Use **dark:** prefix para suporte ao tema escuro

### Estrutura de Arquivos

```
components/
  ├── NomeDoComponente.js     # Componente principal
  └── NomeDoComponente.test.js # Testes (opcional)
pages/
  ├── index.js                # Páginas Next.js
  └── api/                    # API routes
utils/
  ├── funcao-util.js          # Funções utilitárias
  └── constantes.js           # Constantes
```

### Commits

Siga o padrão [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Mudanças na documentação
- `style:` Formatação, ponto e vírgula, etc
- `refactor:` Refatoração de código
- `test:` Adição ou correção de testes
- `chore:` Tarefas de manutenção

**Exemplos:**
```
feat: adiciona página de sobre
fix: corrige bug na paginação
docs: atualiza instruções de instalação
style: ajusta espaçamento do header
```

## 🧪 Testes

- Escreva testes para novas funcionalidades
- Mantenha cobertura de testes alta
- Execute os testes antes de fazer PR:
  ```bash
  npm run test
  ```

## 📚 Documentação

- Documente funções complexas com JSDoc
- Atualize o README.md se necessário
- Inclua exemplos de uso quando relevante
- Mantenha comentários concisos e úteis

## 🎯 Tipos de Contribuição

### 🌟 Funcionalidades Desejadas

- [ ] Sistema de comentários
- [ ] Busca de posts
- [ ] Categorias e tags
- [ ] Admin panel
- [ ] Sistema de usuários
- [ ] Newsletter
- [ ] PWA (Progressive Web App)
- [ ] Modo offline
- [ ] Compartilhamento social
- [ ] Analytics

### 🐛 Bugs Conhecidos

- [ ] Melhorar tratamento de erros da API
- [ ] Otimizar performance em listas grandes
- [ ] Corrigir responsividade em telas pequenas

### 📖 Documentação

- [ ] Guia de deployment avançado
- [ ] Tutorial de customização
- [ ] Exemplos de uso da API
- [ ] Vídeos tutoriais

## ✅ Checklist do Pull Request

Antes de submeter seu PR, verifique:

- [ ] Código segue as convenções do projeto
- [ ] Testes passam (`npm run test`)
- [ ] Build funciona (`npm run build`)
- [ ] Linting sem erros (`npm run lint`)
- [ ] Documentação atualizada (se necessário)
- [ ] Commit messages seguem o padrão
- [ ] PR tem título e descrição claros
- [ ] Screenshots incluídos (para mudanças visuais)

## 🚫 O que NÃO fazer

- ❌ Não faça commits diretamente na branch `main`
- ❌ Não inclua arquivos de configuração pessoal
- ❌ Não remova funcionalidades sem discussão
- ❌ Não faça PRs muito grandes (divida em partes menores)
- ❌ Não ignore as convenções de código

## 🏆 Reconhecimento

Contribuidores são reconhecidos no README.md e releases do projeto. Obrigado por ajudar a melhorar o DIO Blog!

## 📞 Dúvidas?

- Abra uma [Discussion](../../discussions) para dúvidas gerais
- Use [Issues](../../issues) para bugs e sugestões específicas
- Entre no Discord da DIO para bate-papo

## 📄 Licença

Ao contribuir, você concorda que suas contribuições serão licenciadas sob a mesma licença do projeto (MIT).

---

**Obrigado por contribuir! 🎉**
