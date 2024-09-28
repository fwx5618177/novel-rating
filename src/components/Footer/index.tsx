import React from 'react';

import styles from './index.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="#about">关于我们</a>
        <a href="#privacy">隐私政策</a>
        <a href="#terms">服务条款</a>
        <a href="#contact">联系我们</a>
      </div>
      <div className={styles.copyright}>
        &copy; 2024 Novel Rating App. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
