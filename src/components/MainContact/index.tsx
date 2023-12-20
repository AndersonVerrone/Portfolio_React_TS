import { FormContact } from "./FormContact";
import { HeaderContact } from "./HeaderContact";
import styles from "./style.module.scss";

export const MainContact = () => {
    return (
        <div className={styles.mainContact}>
            <HeaderContact />
            <FormContact />
        </div>
    )
}