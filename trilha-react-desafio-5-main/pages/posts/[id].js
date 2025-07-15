import { getGlobalData } from '../../utils/global-data';
import {
  getPostBySlug,
} from '../../utils/mdx-utils';

import { MDXRemote } from 'next-mdx-remote';
import Head from 'next/head';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';
import CustomLink from '../../components/CustomLink';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';


const components = {
  a: CustomLink,
  Head,
};

export default function PostPage({
  posts,
  globalData,
}) {
  return (
    <Layout>
      <SEO
        title={`${posts.title} - ${globalData.name}`}
        description={posts.description}
      />
      <Header name={globalData.name} />
      <article className="px-6 md:px-0">
        <header>
          <h1 className="text-3xl md:text-5xl dark:text-white text-center mb-12">
            {posts?.title}
          </h1>
          {posts?.description && (
            <p className="text-xl mb-4 text-center opacity-70">{posts?.description}</p>
          )}
          {posts?.created_at && (
            <p className="text-center mb-8 opacity-60">
              Publicado em {new Date(posts.created_at).toLocaleDateString('pt-BR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </p>
          )}
        </header>
        <main>
          <article className="prose dark:prose-dark max-w-none">
            <div className="whitespace-pre-wrap">
              {posts?.body || posts?.content}
            </div>
          </article>
        </main>
        <div className="mt-12 text-center">
          <Link 
            href="/"
            className="inline-flex items-center text-sm opacity-60 hover:opacity-100 transition-opacity"
          >
            <ArrowIcon className="mr-2 transform rotate-180" />
            Voltar para o blog
          </Link>
        </div>
      </article>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="absolute -top-32 opacity-30 dark:opacity-50"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  try {
    const globalData = getGlobalData();
    const post = await getPostBySlug(params.id);
    
    // Se o post não foi encontrado, retorna 404
    if (!post) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        globalData,
        posts: post,
      },
    };
  } catch (error) {
    console.error('Erro ao carregar post:', error);
    return {
      notFound: true,
    };
  }
};

