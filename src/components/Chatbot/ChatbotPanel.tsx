import { useEffect, useRef, useState, type KeyboardEvent } from 'react';
import { requestChatReply, type ChatMessage } from './Chatbot';
import styles from './ChatbotPanel.module.css';

interface ChatbotPanelProps {
  name: string;
  initialPrompts: string[];
  placeholder: string;
}

function Dots() {
  const [n, setN] = useState(1);
  useEffect(() => {
    const i = setInterval(() => setN((x) => (x % 3) + 1), 350);
    return () => clearInterval(i);
  }, []);
  return <span className={styles.dots}>{'.'.repeat(n)}</span>;
}

function ChatbotPanel({ name, initialPrompts, placeholder }: ChatbotPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', text: `Hi — I'm ${name.split(' ')[0]}'s portfolio bot. Ask me about his background, projects, or the frontend → AI/ML transition.` },
  ]);
  const [input, setInput] = useState('');
  const [busy, setBusy] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollerRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, busy]);

  const send = async (text: string) => {
    if (!text || busy) return;
    const next: ChatMessage[] = [...messages, { role: 'user', text }];
    setMessages(next);
    setInput('');
    setBusy(true);
    try {
      const reply = await requestChatReply(next);
      setMessages((m) => [...m, { role: 'assistant', text: reply }]);
    } catch {
      setMessages((m) => [...m, { role: 'assistant', text: '(The bot is having trouble reaching the model. Try again in a moment.)' }]);
    } finally {
      setBusy(false);
    }
  };

  const onKey = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send(input.trim());
    }
  };

  const showSuggest = messages.length === 1 && !busy;

  return (
    <div className={styles.wrap}>
      <div className={styles.header}>
        <span className={styles.dot} />
        <span>portfolio.transformer</span>
        <span className={styles.poweredBy}>powered by claude</span>
      </div>
      <div ref={scrollerRef} className={styles.scroller}>
        {messages.map((m, i) => (
          <div key={i} className={`${styles.bubble} ${m.role === 'user' ? styles.bubbleUser : styles.bubbleBot}`}>
            {m.text}
          </div>
        ))}
        {busy && (
          <div className={`${styles.bubble} ${styles.bubbleBot}`}>
            <Dots />
          </div>
        )}
      </div>
      {showSuggest && (
        <div className={styles.suggest}>
          {initialPrompts.map((p, i) => (
            <button key={i} className={styles.chip} onClick={() => send(p)}>
              {p}
            </button>
          ))}
        </div>
      )}
      <div className={styles.inputRow}>
        <input
          className={styles.input}
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKey}
          disabled={busy}
        />
        <button className={styles.send} onClick={() => send(input.trim())} disabled={busy}>
          infer →
        </button>
      </div>
    </div>
  );
}

export default ChatbotPanel;
