import React from 'react';

import styles from './index.module.scss';

const MobileFooter: React.FC = () => {
  return (
    <div id="mobile-footer" className={styles.footer}>
      <button>书架</button>
      <button>首页</button>
      <button>书库</button>
      <button>书单</button>
      <button>我的</button>
    </div>
  );
};

export default MobileFooter;
