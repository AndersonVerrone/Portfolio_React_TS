import styles from "./style.module.scss";
import { FaEarthAmericas, FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
                    <Link target="_blank" to={project.repositoryLink}>
                        <FaGithub />
                        <p>Repositorio</p>
                    </Link>
                )}
                {project.siteLink&&(
                    <Link target="_blank" to={project.siteLink}>
                        <FaEarthAmericas />
                        <p>Aplicação</p>
                    </Link>
                )}
            </div>
        </li>
    )
}