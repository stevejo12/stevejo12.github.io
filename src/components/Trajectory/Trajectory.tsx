import type { TimelineEntry } from '../../data/portfolioData';
import styles from './Trajectory.module.css';

interface TrajectoryProps {
  timeline: TimelineEntry[];
}

function Trajectory({ timeline }: TrajectoryProps) {
  return (
    <div id="trajectory" className={`section-anchor ${styles.section}`}>
      <div className={styles.secHead}>{'// 02 — Trajectory'}</div>
      <h2 className={styles.secTitle}>The forward pass.</h2>
      <div className={styles.grid}>
        {timeline.map((tl, i) => (
          <div key={i} className={`${styles.node} ${styles[`side-${tl.side}`]}`}>
            <div className={`${styles.year} ${styles[`year-${tl.side}`]}`}>{tl.year}</div>
            <div className={styles.title}>{tl.title}</div>
            <div className={styles.org}>{tl.org}</div>
            <div className={styles.blurb}>{tl.blurb}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Trajectory;
