import Logo from '@components/Logo';
import ProgressBar from '@components/Progressbar';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaSpinner } from 'react-icons/fa';

import styles from './index.module.scss';

interface LoadingProps {
  type?: 'logo' | 'circle' | 'atom' | 'spinner';
}

const Loading: React.FC<LoadingProps> = ({ type = 'logo' }) => {
  const { t } = useTranslation();

  const display = () => {
    switch (type) {
      case 'logo':
        return <Logo size="medium" />;
      case 'spinner':
      default:
        return <FaSpinner className={styles.spinner} />;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {display()}
        <h3 className={styles.brand}>{t('common:loading-name')}</h3>
        <div className={styles.loading}>
          <h3 className={styles.loading}>{t('common:loading-title')}</h3>
          <p className={styles.desc}>{t('common:loading-description')}</p>
        </div>
        <ProgressBar />
      </div>
    </div>
  );
};

export default Loading;
