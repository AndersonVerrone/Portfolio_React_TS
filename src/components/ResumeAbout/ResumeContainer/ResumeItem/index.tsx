import styles from "./style.module.scss";

interface IResume {
    id: number;
    course: string;
    college: string;
    start: string;
    end: string;
}

interface IResumeItemProps {
    resume: IResume;
}

export const ResumeItem = ({resume}: IResumeItemProps) => {
    return (
        <li key={resume.id} className={styles.resumeItem}>
            <span>
                {`${resume.start} - ${resume.end}`}
            </span>
            <div>
                <p>{resume.college}</p>
                <p>{resume.course}</p>
            </div>
        </li>
    )
}