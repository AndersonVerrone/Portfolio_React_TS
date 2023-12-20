import { MainAbout } from "../../components/MainAbout";
import { ProgressAbout } from "../../components/ProgressAbout";
import { ResumeAbout } from "../../components/ResumeAbout";
import { SkillAbout } from "../../components/SkillAbout";
import styles from "./style.module.scss";

export const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <MainAbout />
      <ProgressAbout />
      <SkillAbout />
      <ResumeAbout />
    </div>
  );
};
