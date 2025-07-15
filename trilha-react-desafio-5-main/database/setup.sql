-- Script SQL para criar a tabela posts no Supabase
-- Execute este script no SQL Editor do seu projeto Supabase

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

-- Inserir posts de exemplo (opcional)
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
  'O Next.js é um framework React que revolucionou o desenvolvimento frontend. Com recursos como Server-Side Rendering (SSR), Static Site Generation (SSG), e otimizações automáticas, ele oferece uma experiência de desenvolvimento excepcional.

Principais vantagens:
- Performance otimizada out-of-the-box
- SEO melhorado com SSR
- Roteamento automático baseado em arquivos
- Suporte nativo a CSS Modules e Styled JSX
- API Routes para backend
- Image Optimization automática

Este blog é um exemplo prático de como o Next.js pode ser usado para criar aplicações web modernas e performáticas.',
  'O Next.js é um framework React que revolucionou...',
  'por-que-nextjs-e-incrivel'
),
(
  'Supabase: O Firebase Open Source',
  'Conheça o Supabase e suas vantagens como Backend-as-a-Service.',
  'O Supabase se posiciona como uma alternativa open source ao Firebase, oferecendo um conjunto completo de ferramentas para desenvolvimento backend.

Principais recursos:
- Banco de dados PostgreSQL
- Authentication integrada
- APIs automáticas
- Real-time subscriptions
- Storage de arquivos
- Edge Functions

Neste projeto, utilizamos o Supabase para:
- Armazenar os posts do blog
- API REST automática
- Gerenciamento de dados

A integração foi simples e direta, permitindo focar no desenvolvimento frontend sem se preocupar com a complexidade do backend.',
  'O Supabase se posiciona como uma alternativa...',
  'supabase-firebase-open-source'
);

-- Verificar se os dados foram inseridos
SELECT * FROM posts ORDER BY created_at DESC;
