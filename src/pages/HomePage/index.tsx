import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import styles from "./style.module.scss";

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
            <a href="">
              <FaLinkedinIn />
            </a>
            <a href="">
              <FaGithub />
            </a>
            <a href="">
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
