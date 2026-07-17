import type { PortfolioCopy } from '../../data/portfolioData';
import styles from './Contact.module.css';

interface ContactProps {
  copy: PortfolioCopy;
}

function Contact({ copy }: ContactProps) {
  return (
    <div id="contact" className={`section-anchor ${styles.section}`}>
      <div className={styles.secHead}>{'// 06 — Contact'}</div>
      <h2 className={styles.secTitle}>Currently open to roles.</h2>
      <div className={styles.grid}>
        <a className={styles.card} href={`mailto:${copy.contact_email}`}>
          <div className={styles.label}>EMAIL</div>
          <div className={styles.value}>{copy.contact_email}</div>
        </a>
        <a className={styles.card} href={`https://${copy.contact_github}`} target="_blank" rel="noreferrer">
          <div className={styles.label}>GITHUB</div>
          <div className={styles.value}>{copy.contact_github}</div>
        </a>
        <a className={styles.card} href={`https://${copy.contact_linkedin}`} target="_blank" rel="noreferrer">
          <div className={styles.label}>LINKEDIN</div>
          <div className={styles.value}>{copy.contact_linkedin}</div>
        </a>
        <a className={styles.card} href={`https://${copy.contact_scholar}`} target="_blank" rel="noreferrer">
          <div className={styles.label}>SCHOLAR</div>
          <div className={styles.value}>{copy.contact_scholar}</div>
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
