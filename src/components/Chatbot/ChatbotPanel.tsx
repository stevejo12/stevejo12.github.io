import styles from './ChatbotPanel.module.css';

interface ChatbotPanelProps {
  name: string;
  initialPrompts: string[];
}

function ChatbotPanel({ name, initialPrompts }: ChatbotPanelProps) {
  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span className={styles.dot} />
        <span>portfolio.transformer</span>
        <span className={styles.constructionBadge}>🚧 under construction</span>
      </div>
      <div className={styles.scroller}>
        <div className={`${styles.bubble} ${styles.bubbleBot}`}>
          {`Hi — I'm ${name.split(' ')[0]}'s portfolio bot. I'm not wired up to a real model yet, so I can't answer anything just yet. Check back soon, or reach out directly via the contact section below.`}
        </div>
      </div>
      <div className={styles.suggest}>
        {initialPrompts.map((p, i) => (
          <span key={i} className={styles.chipDisabled}>
            {p}
          </span>
        ))}
      </div>
      <div className={styles.inputRow}>
        <input className={styles.input} placeholder="coming soon…" disabled />
        <button className={styles.send} disabled>
          infer →
        </button>
      </div>
    </div>
  );
}

export default ChatbotPanel;
