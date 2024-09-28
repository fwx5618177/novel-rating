import ActionButtons from '@components/ActionButtons';
import Rating from '@components/Rating';
import RecommendationLabel from '@components/RecommendationLabel';
import React, { useState } from 'react';

import styles from './index.module.scss';

interface BookDetailProps {
  recommender: string;
  recommenderAvatar: string;
  recommendationType: string;
  title: string;
  rating: number;
  coverImage: string;
  description: string;
  summary: string;
  editTime: string;
  publishTime: string;
}

const RecallBook: React.FC<BookDetailProps> = ({
  recommender,
  recommenderAvatar,
  recommendationType,
  title,
  rating,
  coverImage,
  description,
  summary,
  editTime,
  publishTime,
}) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const handleRating = async (rating: number) => {
    console.log(`Rating changed to ${rating}`);
  };

  const toggleDescription = () => {
    setShowFullDesc(!showFullDesc);
  };

  const truncatedDescription =
    description.length > 100 && !showFullDesc
      ? `${description.substring(0, 100)}...`
      : description;

  return (
    <div className={styles.bookDetail}>
      <div className={styles.header}>
        <div className={styles.recommender}>
          <img
            src={recommenderAvatar}
            alt={recommender}
            className={styles.avatar}
          />
          <span>{recommender}</span>
        </div>
        <RecommendationLabel type={recommendationType} />
      </div>

      <div className={styles.bookContent}>
        <img src={coverImage} alt={title} className={styles.bookCover} />
        <div className={styles.bookInfo}>
          <h2>{title}</h2>
          <Rating initialRating={rating} onRatingSubmit={handleRating} />
          <p className={styles.description}>{truncatedDescription}</p>
          {description.length > 100 && (
            <button className={styles.toggleButton} onClick={toggleDescription}>
              {showFullDesc ? '收起' : '展开全部'}
            </button>
          )}
          <p className={styles.summary}>{summary}</p>
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.timeInfo}>
          <p>发布时间: {publishTime}</p>
          <p>最后编辑时间: {editTime}</p>
        </div>
        <ActionButtons /> {/* 引入功能按钮组件 */}
      </div>
    </div>
  );
};

export default RecallBook;
