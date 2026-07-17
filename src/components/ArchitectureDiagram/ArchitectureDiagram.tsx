import styles from './ArchitectureDiagram.module.css';

function ArchitectureDiagram() {
  return (
    <div className={styles.arch}>
      <div className={styles.box}>
        <div className={`${styles.node} ${styles.nodeIn}`}>
          <div className={styles.label}>INPUT</div>
          <div className={styles.val}>Frontend craft</div>
        </div>
        <div className={styles.connector}>
          <div className={styles.line} />
          <span className={styles.arrow}>→</span>
          <div className={styles.line} />
        </div>
        <div className={`${styles.node} ${styles.nodeAi}`}>
          <div className={styles.label}>BLOCKS · MEng + Practice</div>
          <div className={styles.val}>NLP · RAG · LangChain · PyTorch</div>
        </div>
        <div className={styles.connector}>
          <div className={`${styles.line} ${styles.lineAmber}`} />
          <span className={`${styles.arrow} ${styles.arrowAmber}`}>→</span>
          <div className={`${styles.line} ${styles.lineAmber}`} />
        </div>
        <div className={`${styles.node} ${styles.nodeOut}`}>
          <div className={styles.label}>OUTPUT</div>
          <div className={styles.val}>Full-stack AI</div>
        </div>
      </div>
    </div>
  );
}

export default ArchitectureDiagram;
