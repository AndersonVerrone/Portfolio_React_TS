import { useContext } from "react";
import styles from "./style.module.scss";
import { PortfolioContext } from "../../providers/PortfolioContext";
import { SkillContainer } from "./SkillContainer";

export const SkillAbout = () => {

    const { arrayKnowledge, arrayInterests} = useContext(PortfolioContext);

    return (
        <div className={styles.skillAbout}>
            <SkillContainer title="Conhecimento" arraySkills={arrayKnowledge} />
            <SkillContainer title="Interesses" arraySkills={arrayInterests} />
        </div>
    )
}