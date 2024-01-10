import { MainAbout } from "../../components/MainAbout";
import { ProgressAbout } from "../../components/ProgressAbout";
import { ResumeAbout } from "../../components/ResumeAbout";
import { SkillAbout } from "../../components/SkillAbout";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

export const AboutPage = () => {
  return (
    <motion.div className={styles.aboutContainer} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <MainAbout />
      <ProgressAbout />
      <SkillAbout />
      <ResumeAbout />
    </motion.div>
  );
};
