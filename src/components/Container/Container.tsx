import { ReactNode } from "react";
import styles from "./Container.module.css";

const Container = ({ children }: { children: ReactNode }) => {
  return <div className={styles.container}>{children}</div>;
};

export { Container };
