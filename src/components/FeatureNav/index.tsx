import React from 'react';
import { FaPrint, FaCrow, FaComment } from 'react-icons/fa';

import styles from './index.module.scss';

const FeatureNav: React.FC = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.item}>
        <FaPrint className={styles.icon} />
        <span>我要推书</span>
      </div>
      <div className={styles.item}>
        <FaComment className={styles.icon} />
        <span>论坛</span>
      </div>
      <div className={styles.item}>
        <FaCrow className={styles.icon} />
        <span>创建书单</span>
      </div>
    </div>
  );
};

export default FeatureNav;
