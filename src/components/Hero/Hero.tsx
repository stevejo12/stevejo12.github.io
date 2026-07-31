import styles from './Hero.module.css';

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
}

function Hero({ name, title, tagline }: HeroProps) {
  return (
    <div className={styles.hero}>
      <div className={styles.badge}>
        <span className={styles.badgeDot} />
        MASTER OF ENG · APPLIED DATA SCIENCE · IN PROGRESS · GRAD DEC 2026
      </div>
      <h1 className={styles.name}>{name}</h1>
      <div className={styles.title}>{`// ${title}`}</div>
      <p className={styles.tagline}>{tagline}</p>
      <div className={styles.ctas}>
        <a href="/resume.pdf" download className={styles.btnPrimary}>
          ↓&nbsp;&nbsp;Download Resume
        </a>
        <a href="#chat" className={styles.btnGhost}>
          chat.bot &nbsp;→
        </a>
      </div>
    </div>
  );
}

export default Hero;
