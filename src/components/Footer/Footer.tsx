import styles from "./Footer.module.css";

//A interface passada pra o componente normalmente é definida no mesmo arquivo dele 
export interface FooterProps {
  creator: string | undefined;
}

// O mesmo comentário do header se aplica aqui, esse componente não é um footer de fato, ele é uma div comum.
const Footer = ({ creator }: FooterProps) => {
  return (
    <div className={styles.footer}>
      <p>Developed by {creator}</p>
    </div>
  );
};

export { Footer };
