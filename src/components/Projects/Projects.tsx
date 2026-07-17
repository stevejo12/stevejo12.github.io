import type { ProjectEntry } from '../../data/portfolioData';
import styles from './Projects.module.css';

interface ProjectsProps {
  projects: ProjectEntry[];
}

const TAG_CLASS: Record<ProjectEntry['tag'], string> = {
  'AI/ML': 'tag-aiml',
  Frontend: 'tag-frontend',
  'Full-stack': 'tag-fullstack',
};

function Projects({ projects }: ProjectsProps) {
  return (
    <div id="work" className={`section-anchor ${styles.section}`}>
      <div className={styles.secHead}>{'// 03 — Selected work'}</div>
      <h2 className={styles.secTitle}>Shipped. Trained. Both.</h2>
      <div className={styles.grid}>
        {projects.map((p) => (
          <div key={p.id} className={styles.card}>
            <div className={styles.glow} />
            <div className={`${styles.tag} ${styles[TAG_CLASS[p.tag]]}`}>{p.tag}</div>
            <div className={styles.name}>{p.name}</div>
            <div className={styles.blurb}>{p.blurb}</div>
            <div className={styles.stack}>
              {p.stack.map((s) => (
                <span key={s} className={styles.chip}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
