import { useState, useEffect } from 'react';
import { getPosts } from '../utils/mdx-utils';

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        setError(null);
        const data = await getPosts();
        setPosts(data || []);
      } catch (err) {
        console.error('Erro ao carregar posts:', err);
        setError(err.message || 'Erro ao carregar posts');
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  return { posts, loading, error, refetch: () => fetchPosts() };
}
