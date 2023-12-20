import { SkillItem } from "./SkillItem";
import styles from "./style.module.scss";

interface ISkill {
    id: number;
    type: string;
  }
  
  interface InfoSkillContainerProps {
    title:string;
    arraySkills: ISkill[];
  }

export const SkillContainer = ({title, arraySkills}: InfoSkillContainerProps) => {
    return (
        <div className={styles.skillContainer}>
            <h3>{title}</h3>
            <ul>
                {arraySkills.map(skill => <SkillItem skill={skill} />)}
            </ul>
        </div>
    )
}