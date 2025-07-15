import { api } from '../services/api'

export const getPosts = async () => {
    try {
        const { data } = await api.get('/posts'); 

        if (data) {
            // Ordenar posts por data de criação (mais recente primeiro)
            return data.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        }

        return [];
    } catch (error) {
        console.error('Erro ao buscar posts:', error);
        return [];
    }
}

export const getPostBySlug = async (id) => {
    try {
        // Buscar um post específico pelo ID
        const { data } = await api.get(`/posts?id=eq.${id}`);
        
        if (data && data.length > 0) {
            return data[0];
        }
        
        return null;
    } catch (error) {
        console.error('Erro ao buscar post:', error);
        return null;
    }
}