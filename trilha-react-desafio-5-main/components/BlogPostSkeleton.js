export default function BlogPostSkeleton() {
  return (
    <div className="w-full space-y-6">
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-xl backdrop-blur-lg bg-white dark:bg-black dark:bg-opacity-30 bg-opacity-10 border border-gray-800 dark:border-white border-opacity-10 dark:border-opacity-10"
        >
          <div className="py-8 lg:py-12 px-8 lg:px-16">
            {/* Data skeleton */}
            <div className="shimmer h-4 w-32 rounded mb-4"></div>
            
            {/* Título skeleton */}
            <div className="shimmer h-8 w-3/4 rounded mb-4"></div>
            
            {/* Descrição skeleton */}
            <div className="space-y-2 mb-6">
              <div className="shimmer h-5 w-full rounded"></div>
              <div className="shimmer h-5 w-4/5 rounded"></div>
              <div className="shimmer h-5 w-2/3 rounded"></div>
            </div>
            
            {/* Botão "Ler artigo" skeleton */}
            <div className="shimmer h-6 w-24 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
