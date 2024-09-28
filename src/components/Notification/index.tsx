import React from 'react';
import {
  FaCheckCircle,
  FaInfoCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from 'react-icons/fa';

import styles from './index.module.scss';

interface NotificationProps {
  type: 'success' | 'info' | 'warn' | 'error';
  message: string;
  onClose?: () => void;
}

const Notification: React.FC<NotificationProps> = ({
  type,
  message,
  onClose,
}) => {
  // 根据类型选择图标
  const renderIcon = () => {
    switch (type) {
      case 'success':
        return <FaCheckCircle className={styles.icon} />;
      case 'info':
        return <FaInfoCircle className={styles.icon} />;
      case 'warn':
        return <FaExclamationTriangle className={styles.icon} />;
      case 'error':
        return <FaTimesCircle className={styles.icon} />;
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      <div className={styles.iconWrapper}>{renderIcon()}</div>
      <span>{message}</span>
      {onClose && (
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
      )}
    </div>
  );
};

export default Notification;
