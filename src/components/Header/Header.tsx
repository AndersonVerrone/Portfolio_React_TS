import { useContext } from "react";
import styles from "./style.module.scss";
import { FaBriefcase, FaEnvelopeOpen, FaHome, FaMoon, FaSun, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom"
import { PortfolioContext } from "../../providers/PortfolioContext";

export const Header = () => {
    
    const { isDarkMode, setIsDarkMode } = useContext(PortfolioContext)

    return (
        <header className={styles.header}>
            <h1>Anderson</h1>
            <button className={styles.modeButton} onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? <FaSun color={"var(--color-letter-detail)"} size={20}/> : <FaMoon color={"var(--color-letter-detail)"} size={20}/>}
                
            </button>
            <nav>
                <Link to="/">
                    <FaHome color={"var(--color-letter-detail)"} />
                    <p>
                        Home
                    </p>
                </Link>
                <Link to="/about">
                    <FaUser color={"var(--color-letter-detail)"}  />
                    <p>
                        Sobre
                    </p>
                </Link>
                <Link to="/portfolio">
                    <FaBriefcase color={"var(--color-letter-detail)"} />
                    <p>
                        Portfólio
                    </p>
                </Link>
                <Link to="/contact">
                    <FaEnvelopeOpen color={"var(--color-letter-detail)"} />
                    <p>
                        Contato
                    </p>
                </Link>
            </nav>
        </header>
    )
}