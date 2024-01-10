import { MainContact } from "../../components/MainContact";
import styles from "./style.module.scss";
import { motion } from "framer-motion";

export const ContactPage = () => {
    return (
        <motion.div className={styles.contactPage} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <MainContact />
        </motion.div>
    )
}