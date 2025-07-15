import { useState } from 'react';

export default function SupabaseSetupInstructions() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
              Configuração do Supabase Necessária
            </h3>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300"
        >
          {isOpen ? 'Ocultar' : 'Ver instruções'}
        </button>
      </div>
      
      {isOpen && (
        <div className="mt-4 text-sm text-yellow-700 dark:text-yellow-300">
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">1. Configure seu projeto Supabase:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Acesse <a href="https://supabase.com" target="_blank" rel="noopener noreferrer" className="underline">supabase.com</a> e crie um projeto</li>
                <li>No SQL Editor, execute o script <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">database/setup.sql</code></li>
                <li>Copie a URL do projeto e a chave anônima</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">2. Configure as variáveis de ambiente:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>Edite o arquivo <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">.env.local</code></li>
                <li>Atualize <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">NEXT_PUBLIC_SUPABASE_URL</code> e <code className="bg-yellow-100 dark:bg-yellow-800 px-1 rounded">NEXT_PUBLIC_SUPABASE_ANON_KEY</code></li>
                <li>Reinicie o servidor de desenvolvimento</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-2">3. Teste a conexão:</h4>
              <p>Após configurar, os posts aparecerão aqui automaticamente!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
