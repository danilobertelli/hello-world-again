import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <>
      <h2 className={styles.title}>Ooops...!</h2>
      <div className={styles.error_container}>
        <span className={styles.error_code}>404</span>
        <strong className={styles.error_message}>Page not found!</strong>
      </div>
    </>
  );
};

export { NotFound };
