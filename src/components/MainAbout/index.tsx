import { ButtonMainAbout } from "./ButtonMainAbout";
import { HeaderMainAbout } from "./HeaderMainAbout";
import { ImgAbout } from "./ImgAbout";
import { ShortInfoMainAbout } from "./ShortInfoMainAbout";
import { TextMainAbout } from "./TextMainAbout";
import { TitleMainAbout } from "./TitleMainAbout";
import styles from "./style.module.scss";

export const MainAbout = () => {
    return (
        <div className={styles.mainAbout}>
            <HeaderMainAbout />
            <ImgAbout/>
            <TitleMainAbout />
            <TextMainAbout />
            <ShortInfoMainAbout />
            <ButtonMainAbout />
        </div>
    )
}