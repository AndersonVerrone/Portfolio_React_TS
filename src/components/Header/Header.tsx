import { useContext, useState } from "react";
import styles from "./style.module.scss";
import {
  FaBriefcase,
  FaEnvelopeOpen,
  FaHome,
  FaMoon,
  FaSun,
  FaUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { PortfolioContext } from "../../providers/PortfolioContext";

export const Header = () => {
  const { isDarkMode, changeMode } = useContext(PortfolioContext);
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className={styles.headerContainer}>
      <header
        className={
          isActive ? `${styles.header} ${styles.active}` : styles.header
        }
      >
        <h1>Anderson</h1>
        <button
          className={styles.modeButton}
          onClick={() => changeMode()}
        >
          {isDarkMode ? (
            <FaSun color={"var(--color-letter-detail)"} size={20} />
          ) : (
            <FaMoon color={"var(--color-letter-detail)"} size={20} />
          )}
        </button>
        <nav>
          <Link to="/" onClick={() => setIsActive(false)}>
            <FaHome color={"var(--color-letter-detail)"} />
            <p>Home</p>
          </Link>
          <Link to="/about" onClick={() => setIsActive(false)}>
            <FaUser color={"var(--color-letter-detail)"} />
            <p>Sobre</p>
          </Link>
          <Link to="/portfolio" onClick={() => setIsActive(false)}>
            <FaBriefcase color={"var(--color-letter-detail)"} />
            <p>Portfólio</p>
          </Link>
          <Link to="/contact" onClick={() => setIsActive(false)}>
            <FaEnvelopeOpen color={"var(--color-letter-detail)"} />
            <p>Contato</p>
          </Link>
        </nav>
      </header>
      <header
        className={
          isActive
            ? `${styles.headerPhone} ${styles.active}`
            : styles.headerPhone
        }
      >
        <h1>Anderson</h1>
        <div>
          <button
            className={styles.modeButtonMobile}
            onClick={() => changeMode()}
          >
            {isDarkMode ? (
              <FaSun color={"var(--color-letter-detail)"} size={20} />
            ) : (
              <FaMoon color={"var(--color-letter-detail)"} size={20} />
            )}
          </button>
          <div
            className={styles.hamburguerLines}
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <span className={`${styles.line} ${styles.line1}`}></span>
            <span className={`${styles.line} ${styles.line2}`}></span>
            <span className={`${styles.line} ${styles.line3}`}></span>
          </div>
        </div>
      </header>
    </div>
  );
};
