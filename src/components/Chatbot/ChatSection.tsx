import ChatbotPanel from './ChatbotPanel';
import styles from './ChatSection.module.css';

interface ChatSectionProps {
  name: string;
}

function ChatSection({ name }: ChatSectionProps) {
  return (
    <div id="chat" className={`section-anchor ${styles.section}`}>
      <div className={styles.secHead}>{'// 05 — Live demo'}</div>
      <h2 className={styles.secTitle}>
        chat<span className={styles.accent}>(</span>about_me<span className={styles.accent}>)</span>
      </h2>
      <p className={styles.desc}>A real LLM grounded in this CV via a system prompt. Ask anything.</p>
      <div className={styles.panelWrap}>
        <ChatbotPanel
          name={name}
          initialPrompts={["What's a RAG system?", 'Walk me through your transition', 'Best project to start with?']}
          placeholder="prompt the model…"
        />
      </div>
    </div>
  );
}

export default ChatSection;
