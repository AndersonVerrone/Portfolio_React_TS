import styles from "./style.module.scss";

interface IProgress {
    id: number;
    type: string;
    value: string;
}

interface IProgressItemProps {
    progress:IProgress;
}

export const ProgressItem = ({progress}:IProgressItemProps) => {
    const progressBarStyle = {
        width: progress.value,
      };
    return (
        <li key={progress.id} className={styles.progressItem}>
            <div>
                <p>{progress.type}</p>
                <p>{progress.value}</p>
            </div>
            <div>
                <div style={progressBarStyle}></div>
            </div>
        </li>
    )
}