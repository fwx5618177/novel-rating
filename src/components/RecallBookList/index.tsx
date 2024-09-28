import RecallBook from '@components/RecallBook';
import React from 'react';

import styles from './index.module.scss';

const books = [
  {
    recommender: '张三',
    recommenderAvatar: '/avatar1.svg',
    recommendationType: 'hot',
    title: '幸存天下',
    rating: 4,
    coverImage: '/cover.png',
    description: '一部关于末日生存的精彩小说。',
    summary:
      '故事讲述了主角如何在末世中生存，面对重重困境，最后成为世界的幸存者。',
    editTime: '2024-01-01',
    publishTime: '2024-01-02',
  },
  {
    recommender: '李四',
    recommenderAvatar: '/avatar1.svg',
    recommendationType: 'editor',
    title: '惊悚乐园',
    rating: 5,
    coverImage: '/cover.png',
    description: '一部令人惊悚的虚拟现实游戏小说。',
    summary: '小说描述了一个虚拟现实游戏中的惊悚冒险经历。',
    editTime: '2024-01-03',
    publishTime: '2024-01-04',
  },
  {
    recommender: '王五',
    recommenderAvatar: '/avatar1.svg',
    recommendationType: 'new',
    title: '星际之门',
    rating: 3,
    coverImage: '/cover.png',
    description: '一部关于星际探险的科幻小说。',
    summary: '主角在星际之门的帮助下，探索了宇宙的奥秘。',
    editTime: '2024-01-05',
    publishTime: '2024-01-06',
  },
];

const RecallBookList: React.FC = () => {
  return (
    <div className={styles.bookList}>
      {books.map((book, index) => (
        <RecallBook key={index} {...book} />
      ))}
    </div>
  );
};

export default RecallBookList;
