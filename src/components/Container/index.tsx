import styles from "./Container.module.css";

import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return (
    <section className={styles.container}>
      {children}
    </section>
  );
}

export default Container;
