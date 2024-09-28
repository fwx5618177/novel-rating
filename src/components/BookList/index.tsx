import BookCard from '@components/BookCard';
import React from 'react';

import styles from './index.module.scss';

const BookList: React.FC = () => {
  const books = [
    {
      title: '诡秘之主',
      rating: 8.6,
      cover: '/cover.png',
      lastUpdated: '2023-09-01',
    },
    {
      title: '惊悚乐园',
      rating: 8.1,
      cover: '/cover.png',
      lastUpdated: '2023-08-15',
    },
    {
      title: '幸存天下',
      rating: 8.2,
      cover: '/cover.png',
      lastUpdated: '2023-07-30',
    },
    {
      title: '奥术神座',
      rating: 8.3,
      cover: '/cover.png',
      lastUpdated: '2023-08-10',
    },
  ];

  return (
    <div className={styles.list}>
      {books.map((book, index) => (
        <BookCard key={index} {...book} />
      ))}
    </div>
  );
};

export default BookList;
