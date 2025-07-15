# 🗃️ Configuração do Supabase para o DIO Blog

Este documento contém instruções detalhadas para configurar o Supabase como backend do seu blog.

## 📋 Pré-requisitos

- Conta no [Supabase](https://supabase.com)
- Conhecimento básico de SQL (opcional)

## 🚀 Passo a Passo

### 1. Criar Projeto no Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Faça login ou crie uma conta
3. Clique em "New Project"
4. Escolha sua organização
5. Preencha:
   - **Name**: `dio-blog` (ou nome de sua preferência)
   - **Database Password**: Senha forte para o banco
   - **Region**: Escolha a região mais próxima (ex: South America)
6. Clique em "Create new project"

### 2. Configurar a Tabela Posts

1. No painel do Supabase, vá para **SQL Editor**
2. Clique em **New Query**
3. Cole o conteúdo do arquivo `database/setup.sql` ou execute o script abaixo:

```sql
-- Criar a tabela posts
CREATE TABLE IF NOT EXISTS posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  body TEXT,
  content TEXT,
  slug VARCHAR(255),
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índices para melhor performance
CREATE INDEX IF NOT EXISTS posts_created_at_idx ON posts(created_at DESC);
CREATE INDEX IF NOT EXISTS posts_published_idx ON posts(published);
CREATE INDEX IF NOT EXISTS posts_slug_idx ON posts(slug);

-- Habilitar RLS (Row Level Security)
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;

-- Política para permitir leitura pública de posts publicados
CREATE POLICY "Posts publicados são visíveis publicamente" ON posts
  FOR SELECT USING (published = true);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para atualizar updated_at automaticamente
CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
```

4. Clique em **Run** para executar o script

### 3. Inserir Posts de Exemplo

Execute este script para adicionar alguns posts de exemplo:

```sql
INSERT INTO posts (title, description, body, content, slug) VALUES
(
  'Bem-vindo ao DIO Blog!',
  'Este é o primeiro post do nosso blog desenvolvido com Next.js e Supabase.',
  'Este é o conteúdo completo do primeiro post. Aqui você pode escrever sobre qualquer assunto relacionado ao desenvolvimento web, tecnologia ou qualquer tema de seu interesse.

Este blog foi desenvolvido usando tecnologias modernas como Next.js para o frontend e Supabase como backend. É um projeto prático do Bootcamp de React da DIO.

Algumas funcionalidades incluem:
- Design responsivo
- Tema escuro/claro
- SEO otimizado
- Performance melhorada

Fique à vontade para explorar o código e contribuir com melhorias!',
  'Este é o conteúdo completo do primeiro post...',
  'bem-vindo-ao-dio-blog'
),
(
  'Por que Next.js é Incrível',
  'Descubra as vantagens do Next.js para desenvolvimento React moderno.',
  'O Next.js é um framework React que revolucionou o desenvolvimento frontend...',
  'O Next.js é um framework React que revolucionou...',
  'por-que-nextjs-e-incrivel'
),
(
  'Supabase: O Firebase Open Source',
  'Conheça o Supabase e suas vantagens como Backend-as-a-Service.',
  'O Supabase se posiciona como uma alternativa open source ao Firebase...',
  'O Supabase se posiciona como uma alternativa...',
  'supabase-firebase-open-source'
);
```

### 4. Obter Credenciais da API

1. No painel do Supabase, vá para **Settings** > **API**
2. Encontre e copie:
   - **Project URL** (será algo como: `https://xxxxx.supabase.co`)
   - **anon/public key** (uma chave longa começando com `eyJ...`)

### 5. Configurar Variáveis de Ambiente

1. No seu projeto Next.js, abra o arquivo `.env.local`
2. Atualize as variáveis:

```env
# Configurações do Supabase
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima-aqui
```

3. Salve o arquivo
4. Reinicie o servidor de desenvolvimento (`npm run dev`)

## 🔒 Políticas de Segurança (RLS)

O Row Level Security (RLS) está habilitado por padrão. As políticas atuais permitem:

- ✅ **Leitura pública**: Qualquer pessoa pode ler posts publicados
- ❌ **Escrita restrita**: Apenas usuários autenticados podem criar/editar posts

Para adicionar posts pelo painel do Supabase:
1. Vá para **Database** > **Tables** > **posts**
2. Clique em **Insert row**
3. Preencha os campos e clique em **Save**

## 🛠️ Comandos Úteis

### Verificar estrutura da tabela:
```sql
\d posts
```

### Listar todos os posts:
```sql
SELECT * FROM posts ORDER BY created_at DESC;
```

### Contar posts:
```sql
SELECT COUNT(*) FROM posts WHERE published = true;
```

### Adicionar um novo post:
```sql
INSERT INTO posts (title, description, body, published) 
VALUES ('Novo Post', 'Descrição', 'Conteúdo do post', true);
```

## 🔧 Troubleshooting

### Erro: "relation posts does not exist"
- Verifique se executou o script SQL corretamente
- Confirme que está no projeto correto no Supabase

### Erro: "Invalid API key"
- Verifique se copiou a chave correta (anon/public)
- Confirme que a URL do projeto está correta
- Reinicie o servidor de desenvolvimento

### Posts não aparecem no site
- Verifique se os posts têm `published = true`
- Confirme que as variáveis de ambiente estão corretas
- Olhe o console do navegador para erros

### Erro de CORS
- Verifique se a URL no `.env.local` está correta
- Confirme que não há espaços extras nas variáveis

## 📞 Suporte

Se precisar de ajuda:
1. Verifique a [documentação do Supabase](https://supabase.com/docs)
2. Consulte o [Discord da DIO](https://discord.gg/dio)
3. Abra uma issue no repositório do projeto

## 🎯 Próximos Passos

Após configurar o Supabase:
1. ✅ Teste se os posts aparecem no blog
2. 📝 Adicione seus próprios posts
3. 🚀 Faça o deploy do projeto
4. 🔒 Configure autenticação (opcional)
5. 💾 Adicione backup automático (opcional)

---

💡 **Dica**: Mantenha suas credenciais do Supabase seguras e nunca as compartilhe publicamente!
