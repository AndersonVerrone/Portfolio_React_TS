import { ItemPortfolio } from "./ItemPortfolio";
import styles from "./style.module.scss";

interface IProject {
    id: number;
    name: string;
    languages: string[];
    description: string;
    repositoryLink?: string;
    siteLink?: string;
  }

interface IListPortfolioProps {
    arrayProjects: IProject[];
}

export const ListPortfolio = ({arrayProjects}: IListPortfolioProps) => {
    return (
        <ul className={styles.listPortfolio}>
            {arrayProjects.map(project => (
                <ItemPortfolio project={project} />
            ))}
        </ul>
    )
}