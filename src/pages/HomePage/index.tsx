import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import styles from "./style.module.scss";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <div>
        <div className={styles.imgContainer}>
          <div className={styles.img}></div>
        </div>
        <div className={styles.textContainer}>
          <h2>Anderson Verrone</h2>
          <TypeAnimation
            sequence={[
              "Programador Criativo",
              1000,
              "Programador Front-end",
              1000,
              "Programador Detalhista",
              1000,
            ]}
            speed={25}
            repeat={Infinity}
          />
          <p>
            Desenvolvedor front-end criativo, sediado em São Paulo, apaixonado
            por aprimorar continuamente minhas habilidades e adquirir novas
            competências a cada dia.
          </p>
          <div>
            <Link target="_blank" to={'https://www.linkedin.com/in/anderson-verrone-funicello-30144670/'}>
              <FaLinkedinIn />
            </Link>
            <Link target="_blank" to={'https://github.com/AndersonVerrone'}>
              <FaGithub />
            </Link>
            <Link target="_blank" to={'https://web.whatsapp.com/send?phone=5511959175505'}>
              <FaWhatsapp />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
