import { useContext } from "react";
import styles from "./style.module.scss";
import { PortfolioContext } from "../../providers/PortfolioContext";
import { ProgressContainer } from "./ProgressContainer";

export const ProgressAbout = () => {

    const { arraySkillTechnology, arraySkillLanguages } = useContext(PortfolioContext);

    return (
        <div className={styles.progressAbout}>
            <div>
                <ProgressContainer title="programação skills" arrayProgress={arraySkillTechnology} />
                <ProgressContainer title="idiomas skills" arrayProgress={arraySkillLanguages} />
            </div>
        </div>
    )
}