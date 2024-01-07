import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export const ButtonMainAbout = () => {
  return (
    <div className={styles.buttonMainAbout}>
      <Link target="_blank" to="https://docs.google.com/document/d/19jKnyGX-l2oUkxG8My0Ki3IMb62vFZncjyvvweK8AHw/edit?usp=sharing">Download CV</Link>
    </div>
  );
};
