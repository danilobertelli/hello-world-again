import styles from "./About.module.css";
import { GoMail } from "react-icons/go";
import { FaInstagram, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.about_image}>
        <img src="./about/about.svg" alt="About Us" />
      </div>
      <div className={styles.about_text}>
        <h1>About Us</h1>
        <p>
          Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast
          yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin
          grog yardarm hempen halter furl. Swab barque interloper chantey
          doubloon starboard grog black jack gangway rutters.
        </p>
        <br />
        <p>
          Deadlights jack lad schooner scallywag dance the hempen jig carouser
          broadside cable strike colors. Bring a spring upon her cable holystone
          blow the man down spanker Shiver me timbers to go on account lookout
          wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot
          yardarm spyglass sheet transom heave to..
        </p>
        <div className={styles.about_icons}>
          <a
            href="mailto:danilobertelli@live.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoMail className={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/daniloabertelli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.icon} />
          </a>
          <a
            href="https://github.com/danilobertelli"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export { About };
