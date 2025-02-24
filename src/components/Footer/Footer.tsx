import styles from "./Footer.module.css";
import { FooterProps } from "./FooterProps";

const Footer = ({ creator }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <p>Developed by {creator}</p>
    </footer>
  );
};

export { Footer };
