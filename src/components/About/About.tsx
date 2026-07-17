import type { SkillAttention } from '../../data/portfolioData';
import styles from './About.module.css';

interface AboutProps {
  p1: string;
  p2: string;
  p3: string;
  attention: SkillAttention[];
}

function About({ p1, p2, p3, attention }: AboutProps) {
  return (
    <div id="about" className={`section-anchor ${styles.section}`}>
      <div className={styles.secHead}>{'// 01 — About'}</div>
      <h2 className={styles.secTitle}>
        An engineer with attention
        <br />
        on both ends of the stack.
      </h2>
      <div className={styles.grid}>
        <div>
          <p className={styles.body}>{p1}</p>
          <p className={styles.body}>{p2}</p>
          <p className={`${styles.body} ${styles.quote}`}>{p3}</p>
        </div>
        <div className={styles.attnCard}>
          <div className={styles.attnTitle}>{'// SKILL ATTENTION MAP'}</div>
          {attention.map((a) => (
            <div key={a.head} className={styles.attnRow}>
              <span className={styles.attnHead}>{a.head}</span>
              <span className={styles.attnBar}>
                <span
                  className={`${styles.attnFill} ${styles[`tone-${a.tone}`]}`}
                  style={{ width: `${a.pct}%` }}
                />
              </span>
              <span className={styles.attnPct}>{a.pct}%</span>
            </div>
          ))}
          <div className={styles.attnFooter}>
            ↳ inferred from <span className={styles.footerAccent}>commits/year</span>, projects, and gradient norms
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
