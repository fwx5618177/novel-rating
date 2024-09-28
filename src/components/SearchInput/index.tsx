import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

import styles from './index.module.scss';

interface SearchInputProps {
  placeholder?: string;
  onClear?: () => void;
  onBlur?: () => void; // 添加 onBlur 属性
}

const SearchInput: React.FC<SearchInputProps> = ({
  placeholder = 'Search...',
  onClear,
  onBlur, // 接收 onBlur
}) => {
  const [value, setValue] = useState('');

  const handleClear = () => {
    setValue('');
    if (onClear) {
      onClear();
    }
  };

  return (
    <div className={styles.searchInputContainer}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={styles.searchInput}
        onBlur={onBlur} // 添加 onBlur 事件处理
      />
      {value && (
        <FaTimes
          size={12}
          className={styles.clearButton}
          onClick={handleClear}
        />
      )}
    </div>
  );
};

export default SearchInput;
