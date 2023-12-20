import { useContext } from "react";
import styles from "./style.module.scss";
import { PortfolioContext } from "../../providers/PortfolioContext";
import { ResumeContainer } from "./ResumeContainer";

export const ResumeAbout = () => {

    const { arrayEducation, arrayExperience } = useContext(PortfolioContext);

    return (
        <div className={styles.resumeAbout}>
            <div>
                <ResumeContainer title="Educação" arrayResume={arrayEducation} />
                <ResumeContainer title="Experiência" arrayResume={arrayExperience} />
            </div>
        </div>
    )
}