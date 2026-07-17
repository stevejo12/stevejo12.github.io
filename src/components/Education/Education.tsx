import type { EducationInfo } from '../../data/portfolioData';
import styles from './Education.module.css';

interface EducationProps {
  education: EducationInfo;
}

function Education({ education }: EducationProps) {
  return (
    <div id="education" className={`section-anchor ${styles.section}`}>
      <div className={styles.secHead}>{'// 04 — Education'}</div>
      <h2 className={styles.secTitle}>
        {education.degree} <span className={styles.dotAccent}>·</span> {education.program}
      </h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.cardLabel}>CAPSTONE</div>
          <p className={styles.capstone}>{education.capstone}</p>
        </div>
        <div className={styles.card}>
          <div className={styles.cardLabel}>FOCUS AREAS</div>
          <ul className={styles.focusList}>
            {education.focus.map((f) => (
              <li key={f} className={styles.focusItem}>
                <span className={styles.focusMarker}>◆</span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.cardLabel}>STATUS</div>
          <div className={styles.statusPill}>
            <span className={styles.statusDot} />
            {education.status}
          </div>
          <div className={styles.statusNote}>Graduate research alongside personal projects. Capstone shipping in 2026.</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
