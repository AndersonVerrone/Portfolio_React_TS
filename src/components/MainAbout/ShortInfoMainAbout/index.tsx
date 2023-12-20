import { useContext } from "react";
import styles from "./style.module.scss";
import { PortfolioContext } from "../../../providers/PortfolioContext";
import { InfoMainAbout } from "./InfoMainAbout";

export const ShortInfoMainAbout = () => {

    const {firstPartInfo, secondPartInfo} = useContext(PortfolioContext)
    
    return (
        <div className={styles.shortInfoMainAbout}>
            <InfoMainAbout infos={firstPartInfo} />
            <InfoMainAbout infos={secondPartInfo} />
        </div>
    )
}