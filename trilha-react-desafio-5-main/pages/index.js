import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import ErrorMessage from '../components/ErrorMessage';
import SupabaseSetupInstructions from '../components/SupabaseSetupInstructions';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        
        {/* Mostrar instruções se não houver posts */}
        {(!posts || posts.length === 0) && <SupabaseSetupInstructions />}
        
        <ul className="w-full">
          {posts && posts.length > 0 ? (
            posts.map((post) => (
              <li
                key={post.id}
                className="md:first:rounded-t-lg md:last:rounded-b-lg backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 border-b-0 last:border-b hover:border-b hovered-sibling:border-t-0"
              >              <Link
                href={`/posts/${post.id}`}
                className="py-6 lg:py-10 px-6 lg:px-16 block focus:outline-none focus:ring-4"
              >
                {post.created_at && (
                  <p className="uppercase mb-3 font-bold opacity-60">
                    {new Date(post.created_at).toLocaleDateString('pt-BR')}
                  </p>
                )}
                <h2 className="text-2xl md:text-3xl">{post.title}</h2>
                {post.description ? (
                  <p className="mt-3 text-lg opacity-60">
                    {post.description}
                  </p>
                ) : post.body ? (
                  <p className="mt-3 text-lg opacity-60">
                    {post.body.length > 150 ? post.body.substring(0, 150) + '...' : post.body}
                  </p>
                ) : null}
                <ArrowIcon className="mt-4" />
              </Link>
              </li>
            ))
          ) : (
            <ErrorMessage 
              title="Nenhum post encontrado"
              message="Ainda não há posts publicados no blog. Volte em breve!"
              showBackButton={false}
            />
          )}
        </ul>
      </main>
      <Footer copyrightText={globalData.footerText} />
      <GradientBackground
        variant="large"
        className="fixed top-20 opacity-40 dark:opacity-60"
      />
      <GradientBackground
        variant="small"
        className="absolute bottom-0 opacity-20 dark:opacity-10"
      />
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const posts = await getPosts();
    const globalData = getGlobalData();

    return {
      props: {
        posts,
        globalData,
      },
    };
  } catch (error) {
    console.error('Erro ao carregar posts:', error);
    
    // Em caso de erro, retorna props vazias para não quebrar a página
    return {
      props: {
        posts: [],
        globalData: getGlobalData(),
      },
    };
  }
}
