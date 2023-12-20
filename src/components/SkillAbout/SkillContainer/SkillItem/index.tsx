import styles from "./style.module.scss";
import { MdOutlineArrowRight } from "react-icons/md";

interface ISkill {
  id: number;
  type: string;
}

interface InfoSkillItemProps {
  skill: ISkill;
}

export const SkillItem = ({ skill }: InfoSkillItemProps) => {
  return (
    <li key={skill.id} className={styles.skillItem}>
      <MdOutlineArrowRight />
      <p>{skill.type}</p>
    </li>
  );
};
