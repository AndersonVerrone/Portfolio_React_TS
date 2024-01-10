import { MainPortfolio } from "../../components/MainPortfolio";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

export const PortifolioPage = () => {
    return (
        <motion.div className={styles.portfolioPage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MainPortfolio />
        </motion.div>
    )
}