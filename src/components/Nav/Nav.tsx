import styles from './Nav.module.css';

interface NavProps {
  name: string;
}

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#trajectory', label: 'Trajectory' },
  { href: '#work', label: 'Work' },
  { href: '#education', label: 'Education' },
  { href: '#chat', label: 'Ask the bot' },
  { href: '#contact', label: 'Contact' },
];

function Nav({ name }: NavProps) {
  return (
    <div className={styles.nav}>
      <div className={styles.logo}>
        <div className={styles.logoMark}>S</div>
        <span>{name}</span>
      </div>
      <div className={styles.links}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className={styles.link}>
            {link.label}
          </a>
        ))}
      </div>
      <div className={styles.statusPill}>
        <span className={styles.statusDot} />
        co-op · jan 2027
      </div>
    </div>
  );
}

export default Nav;
