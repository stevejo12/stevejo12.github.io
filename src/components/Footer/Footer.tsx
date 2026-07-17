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
      <span>Trained on coffee · fine-tuned for late nights</span>
    </div>
  );
}

export default Footer;
