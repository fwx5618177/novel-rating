import SearchInput from '@components/SearchInput';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import styles from './index.module.scss';

interface SearchProps {
  expandDirection?: 'left' | 'right';
  initialExpanded?: boolean;
}

const Search: React.FC<SearchProps> = ({
  expandDirection = 'right',
  initialExpanded = false,
}) => {
  const [expanded, setExpanded] = useState(initialExpanded);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // 当 input 失去焦点时隐藏 input
  const handleBlur = () => {
    setExpanded(false);
  };

  return (
    <div
      className={`${styles.searchContainer} ${styles[expandDirection]} ${
        expanded ? styles.expanded : ''
      }`}
    >
      <button className={styles.searchIconButton} onClick={toggleExpand}>
        <FaSearch />
      </button>
      <div className={styles.inputWrapper}>
        {expanded && <SearchInput onBlur={handleBlur} />}
      </div>
    </div>
  );
};

export default Search;
