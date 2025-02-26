import { AudioList } from "../../components/Audio";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <AudioList />
    </div>
  );
};

export { Home };
