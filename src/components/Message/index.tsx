import React, { useEffect, useState } from 'react';

import styles from './index.module.scss';

interface MessageProps {
  message: {
    id: number;
    type: 'error' | 'success' | 'warn' | 'info';
    content: string;
    position: 'top-left' | 'top-right' | 'center';
    duration: number; // 添加 duration 参数
  };
  onComplete: (id: number) => void; // 当 progress 完成时调用的回调函数
}

const Message: React.FC<MessageProps> = ({ message, onComplete }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete(message.id); // 当时间到了，调用回调函数移除消息
    }, message.duration);

    const intervalDuration = message.duration / 100;
    const interval = setInterval(() => {
      setProgress((prev) => (prev > 0 ? prev - 1 : 0));
    }, intervalDuration);

    // 清理定时器
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [message.duration, message.id, onComplete]);

  const messageTypeClass = `${styles.message} ${styles[message.type]}`;
  const positionClass = `${styles[message.position]}`;

  return (
    <div className={`${messageTypeClass} ${positionClass}`}>
      <div className={styles.content}>{message.content}</div>
      <div className={styles.progress} style={{ width: `${progress}%` }} />
    </div>
  );
};

export default Message;
