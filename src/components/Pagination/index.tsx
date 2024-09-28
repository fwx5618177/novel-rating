import React from 'react';

import styles from './index.module.scss';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={styles.pagination}>
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        上一页
      </button>
      <span>
        {currentPage} / {totalPages}
      </span>
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        下一页
      </button>
    </div>
  );
};

export default Pagination;
