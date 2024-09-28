import React from 'react';

import styles from './index.module.scss';

const recommendationTypes: Record<string, { text: string; color: string }> = {
  hot: {
    text: '热门推荐',
    color: '#ff4500',
  },
  editor: {
    text: '编辑推荐',
    color: '#007bff',
  },
  new: {
    text: '新品推荐',
    color: '#28a745',
  },
};

export interface RecommendationLabelProps {
  type?: string;
}

const RecommendationLabel: React.FC<RecommendationLabelProps> = ({ type }) => {
  const { text, color } = recommendationTypes[type || 'hot'];

  return (
    <div
      className={styles.recommendationLabel}
      style={{ backgroundColor: color }}
    >
      <span>{text}</span>
    </div>
  );
};

export default RecommendationLabel;
