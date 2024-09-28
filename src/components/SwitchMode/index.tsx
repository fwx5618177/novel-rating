import styles from './index.module.scss';

const SwitchMode = () => {
  return (
    <div className={styles.box}>
      <button>浏览模式</button>
      <button>专注模式</button>
    </div>
  );
};

export default SwitchMode;
