import Link from 'next/link';
import ArrowIcon from './ArrowIcon';

export default function ErrorMessage({ 
  title = "Ops! Algo deu errado", 
  message = "Não foi possível carregar o conteúdo no momento.",
  showBackButton = true 
}) {
  return (
    <div className="text-center py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
        {title}
      </h2>
      <p className="text-lg opacity-70 mb-8">
        {message}
      </p>
      {showBackButton && (
        <Link 
          href="/"
          className="inline-flex items-center text-sm opacity-60 hover:opacity-100 transition-opacity"
        >
          <ArrowIcon className="mr-2 transform rotate-180" />
          Voltar para o blog
        </Link>
      )}
    </div>
  );
}
