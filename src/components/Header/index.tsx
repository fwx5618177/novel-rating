import Logo from '@components/Logo';
import Search from '@components/Search';
import SwitchMode from '@components/SwitchMode';
import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './index.module.scss';

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Logo size="small" />
      </div>

      <SwitchMode />

      <div className={styles.rightSide}>
        <div className={styles['search-bar']}>
          <Search expandDirection="right" />
        </div>
        <div className={styles['actions']}>
          <div>{t('common:login-register')}</div>
        </div>
      </div>
    </header>
  );
};

export default Header;
