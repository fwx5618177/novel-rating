import React, { useState, useEffect } from 'react';

import styles from './index.module.scss';
import { useMessage } from '../../providers/MessageProvider';

interface RatingProps {
  initialRating: number; // 初始评分
  onRatingSubmit: (rating: number) => Promise<void>; // 评分提交接口
  hasRated?: boolean; // 用户是否已经评分
}

const Rating: React.FC<RatingProps> = ({
  initialRating,
  onRatingSubmit,
  hasRated,
}) => {
  const { errorMsg, successMsg } = useMessage();
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [canRate, setCanRate] = useState(!hasRated); // 根据是否评分过设置权限

  useEffect(() => {
    setRating(initialRating);
  }, [initialRating]);

  const handleClick = async (newRating: number) => {
    if (!canRate) {
      errorMsg('您已评分，无法再次评分！');
      return;
    }

    try {
      await onRatingSubmit(newRating); // 提交评分接口
      setRating(newRating);
      successMsg('评分成功！');
      setCanRate(false); // 评分后禁用再次评分
    } catch (error: any) {
      console.error(error);
      errorMsg('评分失败，请重试！');
    }
  };

  // 鼠标悬停星星时，设置 hoverRating
  const handleMouseEnter = (starValue: number) => {
    if (!canRate) return; // 如果不可评分，不处理悬停事件
    setHoverRating(starValue);
  };

  // 鼠标离开时，清除 hoverRating
  const handleMouseLeave = () => {
    setHoverRating(null);
  };

  // 渲染星星，只有整星显示
  const renderStars = () => {
    const stars = [];
    const currentRating = hoverRating !== null ? hoverRating : rating; // 使用悬停评分或实际评分

    for (let star = 1; star <= 5; star++) {
      stars.push(
        <button
          key={star}
          className={`${styles.star} ${
            currentRating >= star ? styles.filled : styles.empty
          }`}
          onClick={() => handleClick(star)}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
        >
          ★
        </button>
      );
    }

    return stars;
  };

  return (
    <div className={styles.ratingWrapper}>
      <div className={styles.ratingStars}>
        {renderStars()}
        <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
      </div>
    </div>
  );
};

export default Rating;
