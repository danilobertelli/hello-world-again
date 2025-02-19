import styles from "./Container.module.css";

import { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return <section className={styles.container}>{children}</section>;
};

export { Container };
