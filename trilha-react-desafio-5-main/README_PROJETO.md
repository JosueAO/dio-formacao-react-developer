# 🚀 DIO Blog - Next.js + Supabase

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Supabase](https://img.shields.io/badge/Supabase-181818?style=for-the-badge&logo=supabase&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

Um blog moderno e dinâmico desenvolvido como parte do **Bootcamp de React da DIO (Digital Innovation One)**. Este projeto utiliza Next.js para o frontend e Supabase como backend, oferecendo uma experiência completa de blog com design responsivo e tema escuro/claro.

## ✨ Características

- 🎨 **Design Moderno**: Interface limpa e responsiva com suporte a tema escuro
- 🚀 **Performance**: Otimizado com Next.js SSR/SSG
- 📱 **Mobile First**: Totalmente responsivo para todos os dispositivos
- 🗃️ **Backend Real**: Integração completa com Supabase
- 🔍 **SEO Otimizado**: Meta tags e estrutura otimizada para motores de busca
- ⚡ **Loading States**: Feedback visual durante carregamento
- 🛠️ **Tratamento de Erros**: Gestão robusta de erros e estados vazios

## 🛠️ Tecnologias Utilizadas

### Frontend
- **Next.js 13+** - Framework React com SSR/SSG
- **React 18** - Biblioteca JavaScript para interfaces
- **Tailwind CSS** - Framework CSS utility-first
- **MDX** - Markdown com componentes React

### Backend
- **Supabase** - Backend-as-a-Service
- **PostgreSQL** - Banco de dados (via Supabase)
- **RESTful API** - API automática do Supabase

### Ferramentas
- **Axios** - Cliente HTTP
- **ESLint** - Linter para qualidade de código
- **Cypress** - Testes end-to-end

## 🚀 Como Executar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn
- Conta no Supabase

### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/dio-blog-nextjs-supabase.git
cd dio-blog-nextjs-supabase
```

### 2. Instale as dependências
```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente
Copie o arquivo `.env.example` para `.env.local` e configure:

```bash
cp .env.example .env.local
```

Edite o `.env.local` com suas configurações:
```env
# Configurações do Blog
BLOG_NAME=Seu Blog
BLOG_TITLE=Título do Seu Blog
BLOG_FOOTER_TEXT=Texto do rodapé

# Configurações do Supabase
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima
```

### 4. Configure o banco de dados Supabase

Crie a tabela `posts` no seu projeto Supabase:

```sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  body TEXT,
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security) se necessário
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Política para permitir leitura pública
CREATE POLICY "Posts são visíveis publicamente" ON posts
  FOR SELECT USING (true);
```

### 5. Execute o projeto
```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📁 Estrutura do Projeto

```
├── components/           # Componentes React reutilizáveis
│   ├── ArrowIcon.js     # Ícone de seta
│   ├── ErrorMessage.js  # Componente de erro
│   ├── Footer.js        # Rodapé
│   ├── Header.js        # Cabeçalho
│   ├── Layout.js        # Layout principal
│   ├── LoadingSpinner.js # Spinner de loading
│   └── SEO.js           # Componente de SEO
├── pages/               # Páginas Next.js
│   ├── _app.js         # App wrapper
│   ├── _document.js    # Document customizado
│   ├── index.js        # Página inicial
│   └── posts/
│       └── [id].js     # Página individual do post
├── services/           # Configurações de API
│   └── api.js          # Cliente Supabase
├── styles/             # Estilos globais
│   └── globals.css     # CSS global
└── utils/              # Utilitários
    ├── global-data.js  # Dados globais
    └── mdx-utils.js    # Funções para posts
```

## 🎯 Funcionalidades Implementadas

### ✅ Completas
- [x] Listagem de posts na página inicial
- [x] Visualização individual de posts
- [x] Design responsivo com Tailwind CSS
- [x] Tema escuro/claro
- [x] Integração com Supabase
- [x] Tratamento de erros
- [x] Loading states
- [x] SEO otimizado
- [x] Formatação de datas em português

### 🚧 Melhorias Futuras
- [ ] Sistema de comentários
- [ ] Busca de posts
- [ ] Categorias e tags
- [ ] Admin panel para criar posts
- [ ] Sistema de usuários
- [ ] Newsletter

## 🔧 Scripts Disponíveis

```bash
npm run dev        # Executar em desenvolvimento
npm run build      # Build para produção
npm run start      # Executar em produção
npm run lint       # Executar linter
npm run export     # Exportar site estático
```

## 🌐 Deploy

### Netlify
1. Conecte seu repositório no Netlify
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Vercel
1. Conecte seu repositório na Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🎓 Sobre o Bootcamp DIO

Este projeto foi desenvolvido como parte do **Bootcamp de React da Digital Innovation One (DIO)**. O objetivo é colocar em prática os conceitos aprendidos sobre:

- React e Next.js
- Integração com APIs
- Gerenciamento de estado
- Boas práticas de desenvolvimento
- Deploy e produção

## 👨‍💻 Autor

Desenvolvido com ❤️ durante o Bootcamp DIO

---

⭐ Se este projeto te ajudou, deixe uma estrela no repositório!
