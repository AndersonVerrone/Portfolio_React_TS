import styles from "./style.module.scss";
import { FaEarthAmericas, FaGithub } from "react-icons/fa6";

interface IProject {
    id: number;
    name: string;
    languages: string[];
    description: string;
    repositoryLink?: string;
    siteLink?: string;
  }

interface IItemPortfolioProps {
    project: IProject;
}

export const ItemPortfolio = ({project}: IItemPortfolioProps) => {
    return (
        <li key={project.id} className={styles.itemPortfolio}>
            <h3>{project.name}</h3>
            <div>
                <p>Linguagens:</p>
                <div>
                    {project.languages.map((language, index) => (
                        <span key={index}>{language}</span>
                    ))}
                </div>
            </div>
            <p>{project.description}</p>
            <div>
                {project.repositoryLink&&(
                    <a href={project.repositoryLink}>
                        <FaGithub />
                        <p>Repositorio</p>
                    </a>
                )}
                {project.siteLink&&(
                    <a href={project.siteLink}>
                        <FaEarthAmericas />
                        <p>Aplicação</p>
                    </a>
                )}
            </div>
        </li>
    )
}