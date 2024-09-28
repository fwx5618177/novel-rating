import React from 'react';

import styles from './index.module.scss';

interface BookCardProps {
  title: string;
  rating: number;
  cover: string;
  lastUpdated: string; // 新增更新时间字段
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  rating,
  cover,
  lastUpdated,
}) => {
  return (
    <div className={styles['book-card']}>
      <div className={styles.book}>
        <img src={cover} alt={title} className={styles['book-cover']} />
        <span className={styles.rating}>{rating}</span>
        <div className={styles.overlay}>
          <p>更新时间</p>
          <p>{lastUpdated}</p>
        </div>
      </div>
      <div className={styles['book-info']}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

export default BookCard;
