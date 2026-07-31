import type { PortfolioCopy } from '../../data/portfolioData';
import styles from './Contact.module.css';

interface ContactProps {
  copy: PortfolioCopy;
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18l-6-6 6-6" />
      <path d="M15 6l6 6-6 6" />
    </svg>
  );
}

function ProfileIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
    </svg>
  );
}

function ScholarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9l10-5 10 5-10 5-10-5z" />
      <path d="M6 11.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-4.5" />
      <path d="M22 9v6" />
    </svg>
  );
}

function Contact({ copy }: ContactProps) {
  return (
    <div id="contact" className={`section-anchor ${styles.section}`}>
      <div className={styles.secHead}>{'// 06 — Contact'}</div>
      <h2 className={styles.secTitle}>Open to co-op / internship roles starting January 2027.</h2>
      <div className={styles.grid}>
        <a className={styles.card} href={`mailto:${copy.contact_email}`}>
          <span className={styles.icon}>
            <MailIcon />
          </span>
          <div className={styles.label}>EMAIL</div>
          <div className={styles.value}>{copy.contact_email}</div>
        </a>
        <a className={styles.card} href={`https://${copy.contact_github}`} target="_blank" rel="noreferrer">
          <span className={styles.icon}>
            <CodeIcon />
          </span>
          <div className={styles.label}>GITHUB</div>
          <div className={styles.value}>View profile →</div>
        </a>
        <a className={styles.card} href={`https://${copy.contact_linkedin}`} target="_blank" rel="noreferrer">
          <span className={styles.icon}>
            <ProfileIcon />
          </span>
          <div className={styles.label}>LINKEDIN</div>
          <div className={styles.value}>View profile →</div>
        </a>
        <a className={styles.card} href={`https://${copy.contact_scholar}`} target="_blank" rel="noreferrer">
          <span className={styles.icon}>
            <ScholarIcon />
          </span>
          <div className={styles.label}>SCHOLAR</div>
          <div className={styles.value}>View publications →</div>
        </a>
      </div>
      <div className={styles.actions}>
        <a href="/resume.pdf" download className={styles.btnPrimary}>
          ↓&nbsp;&nbsp;Resume.pdf
        </a>
        <a href={`mailto:${copy.contact_email}`} className={styles.btnGhost}>
          Send a message →
        </a>
      </div>
    </div>
  );
}

export default Contact;
