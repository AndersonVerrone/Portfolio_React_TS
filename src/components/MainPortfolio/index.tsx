import { useContext } from "react";
import { HeaderPortfolio } from "./HeaderPortfolio";
import { ListPortfolio } from "./ListPortfolio";
import styles from "./style.module.scss";
import { PortfolioContext } from "../../providers/PortfolioContext";

export const MainPortfolio = () => {

    const { projects } = useContext(PortfolioContext);

    return (
        <main className={styles.mainPortfolio}>
            <HeaderPortfolio />
            <ListPortfolio arrayProjects={projects} />
        </main>
    )
}