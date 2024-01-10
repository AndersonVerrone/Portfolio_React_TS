import { ResumeItem } from "./ResumeItem";
import styles from "./style.module.scss";

interface IResume {
    id: number;
    course: string;
    college: string;
    start: string;
    end: string;
}

interface IResumeContainerProps {
    title: string;
    arrayResume: IResume[];
}

export const ResumeContainer = ({title, arrayResume}: IResumeContainerProps) => {
    return (
        <div className={styles.resumeContainer}>
            <h3>{title}</h3>
            <ul>
                {arrayResume.map((resume, index) => (
                    <ResumeItem key={index} resume={resume} />
                ))}
            </ul>
        </div>
    )
}