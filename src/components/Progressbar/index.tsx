import React, { useState, useEffect } from 'react';

import styles from './index.module.scss';

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = Math.random() * 3000 + 5000;
    const intervalTime = 100;
    const totalIntervals = duration / intervalTime;
    const increment = 100 / totalIntervals;

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + increment;
        if (newProgress >= 100) {
          clearInterval(interval);
          return 100;
        }
        return newProgress;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.progressBarContainer}>
      <span>{`${Math.floor(progress)} %`}</span>
      <div className={styles.progressTrack}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
        <div
          className={styles.progressCircle}
          style={{ left: `calc(${progress}% - 15px)` }}
        >
          <div className={styles.innerCircle} />
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
