import { ProgressItem } from "./ProgressITem";
import styles from "./style.module.scss";

interface IProgress {
    id: number;
    type: string;
    value: string;
}

interface IProgressContainerProps {
    title: string;
    arrayProgress: IProgress[];
}

export const ProgressContainer = ({title, arrayProgress}: IProgressContainerProps) => {
    return (
        <div className={styles.progressContainer}>
            <h3>{title}</h3>
            <ul>
                {arrayProgress.map((progress, index) => (
                <ProgressItem key={index} progress={progress} />
                ))}
            </ul>
        </div>
    )
}