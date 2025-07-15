import axios from 'axios';

// Configuração da API do Supabase usando variáveis de ambiente
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
    throw new Error(
        'Variáveis de ambiente do Supabase não configuradas. Verifique NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON_KEY'
    );
}

export const api = axios.create({
    baseURL: `${supabaseUrl}/rest/v1`,
    headers: {
        apikey: supabaseKey,
        authorization: `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
    }
});