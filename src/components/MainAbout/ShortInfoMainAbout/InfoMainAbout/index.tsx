import styles from "./style.module.scss";

interface Info {
    id: number;
    type: string;
    value: string;
  }
  
  interface InfoMainAboutProps {
    infos: Info[];
  }

export const InfoMainAbout = ({infos}:InfoMainAboutProps) => {
    return (
        <ul className={styles.infoMainAbout}>
            {infos.map(info => (
                <li key={info.id}>
                    <p>{`${info.type}:`}</p>
                    <p>{info.value}</p>
                </li>
            ))}
        </ul>
    )
}