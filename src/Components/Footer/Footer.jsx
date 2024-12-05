// import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';

const Footer = () => (
  <nav className={styles.footer}>
    <section className={styles.footerSuperior}>
      <h2 className={styles.footerTelefone}>4002-8922</h2>
      <section className={styles.containerRedes}>
        <a href="www.google.com" className={styles.linkRedes}>
          <img className={styles.iconeRedes} src="src\assets\facebook-app-round-white-icon 2.png" alt="Icone do Facebook" />
        </a>
        <a href="www.google.com" className={styles.linkRedes}>
        <img className={styles.iconeRedes} src="src\assets\Twitter_Logo_WhiteOnImage 2.png" alt="Icone do Twiterk" />

        </a>
        <a href="www.google.com" className={styles.linkRedes}>
        <img className={styles.iconeRedes} src="src\assets\youtube-app-white-icon 2.png" alt="Icone do Youtube" />
          
        </a>
        <a href="www.google.com" className={styles.linkRedes}>
        <img className={styles.iconeRedes} src="src\assets\linkedin-icon-2048x2048-yx2cmt11 2.png" alt="Icone do LinkedIn" />
          
        </a>
        <a href="www.google.com" className={styles.linkRedes}>
        <img className={styles.iconeRedes} src="src\assets\instagram-white-icon 2.png" alt="Icone do Instagram" />
        </a>
      </section>
    </section>
    <section className={styles.footerInferior}>
      <h1 className={styles.footerDesignedBy}>Layout desenvolvido pela Vai Na Web para fins educativos - 2024  </h1>
    </section>
  </nav>
);

export default Footer;
