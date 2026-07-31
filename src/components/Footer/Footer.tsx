import styles from './Footer.module.css';

interface FooterProps {
  name: string;
}

function Footer({ name }: FooterProps) {
  return (
    <div className={styles.footer}>
      <span>
        © {new Date().getFullYear()} {name}
      </span>
      <span>No coffee required · fine-tuned for early mornings</span>
    </div>
  );
}

export default Footer;
