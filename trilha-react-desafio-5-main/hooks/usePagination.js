import { useState, useMemo } from 'react';

export function usePagination(data, itemsPerPage = 5) {
  const [currentPage, setCurrentPage] = useState(1);
  
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data?.slice(startIndex, endIndex) || [];
  }, [data, currentPage, itemsPerPage]);
  
  const totalPages = useMemo(() => {
    return Math.ceil((data?.length || 0) / itemsPerPage);
  }, [data, itemsPerPage]);
  
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Scroll para o topo quando muda de página
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };
  
  return {
    currentPage,
    totalPages,
    paginatedData,
    handlePageChange,
    totalItems: data?.length || 0
  };
}
