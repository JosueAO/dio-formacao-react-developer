import Link from 'next/link';
import { getPosts } from '../utils/mdx-utils';
import { usePagination } from '../hooks/usePagination';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import ErrorMessage from '../components/ErrorMessage';
import SupabaseSetupInstructions from '../components/SupabaseSetupInstructions';
import Pagination from '../components/Pagination';
import { getGlobalData } from '../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  const {
    currentPage,
    totalPages,
    paginatedData: paginatedPosts,
    handlePageChange,
    totalItems
  } = usePagination(posts, 5);

  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      <main className="w-full">
        <h1 className="text-3xl lg:text-5xl text-center mb-12">
          {globalData.blogTitle}
        </h1>
        
        {/* Contador de posts */}
        {totalItems > 0 && (
          <div className="text-center mb-8">
            <p className="text-gray-600 dark:text-gray-400">
              {totalItems} post{totalItems !== 1 ? 's' : ''} encontrado{totalItems !== 1 ? 's' : ''}
              {totalPages > 1 && (
                <> • Página {currentPage} de {totalPages}</>
              )}
            </p>
          </div>
        )}
        
        {/* Mostrar instruções se não houver posts */}
        {(!posts || posts.length === 0) && <SupabaseSetupInstructions />}
        
        {/* Grid de posts com espaçamento e hover effects */}
        <div className="w-full space-y-6">
          {posts && posts.length > 0 ? (
            paginatedPosts.map((post, index) => (
              <article
                key={post.id}
                className="blog-card fade-in group relative rounded-xl backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 hover:bg-opacity-20 dark:hover:bg-opacity-50 transition-all duration-300 border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10 hover:border-opacity-30 dark:hover:border-opacity-30"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link
                  href={`/posts/${post.id}`}
                  className="block py-8 lg:py-12 px-8 lg:px-16 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                >
                  {post.created_at && (
                    <p className="uppercase mb-4 font-bold text-sm tracking-wider opacity-60 group-hover:opacity-80 transition-opacity duration-300">
                      {new Date(post.created_at).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </p>
                  )}
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {post.title}
                  </h2>
                  {post.description ? (
                    <p className="text-lg opacity-70 group-hover:opacity-90 transition-opacity duration-300 leading-relaxed">
                      {post.description}
                    </p>
                  ) : post.body ? (
                    <p className="text-lg opacity-70 group-hover:opacity-90 transition-opacity duration-300 leading-relaxed">
                      {post.body.length > 150 ? post.body.substring(0, 150) + '...' : post.body}
                    </p>
                  ) : null}
                  
                  <div className="flex items-center mt-6 text-blue-600 dark:text-blue-400 font-medium group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">
                    <span className="mr-2">Ler artigo</span>
                    <ArrowIcon className="arrow-bounce transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Link>
              </article>
            ))
          ) : (
            <ErrorMessage 
              title="Nenhum post encontrado"
              message="Ainda não há posts publicados no blog. Volte em breve!"
              showBackButton={false}
            />
          )}
        </div>
        
        {/* Componente de Paginação */}
        {posts && posts.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        )}
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
