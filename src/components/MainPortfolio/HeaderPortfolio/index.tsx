import { useContext } from "react";
import styles from "./style.module.scss";
import { PortfolioContext } from "../../../providers/PortfolioContext";

export const HeaderPortfolio = () => {
  const { languages, selectedLanguage, handleLanguageClick } =
    useContext(PortfolioContext);

  return (
    <div className={styles.headerPortfolio}>
      <div>
        <span>Portfolio</span>
        <h2>Projetos em destaques</h2>
      </div>
      <div>
        {languages.map((language) => (
          <span
            key={language}
            className={
              selectedLanguage === language ? styles.selectedLanguage : ""
            }
            onClick={() => handleLanguageClick(language)}
          >
            {language}
          </span>
        ))}
      </div>
    </div>
  );
};
