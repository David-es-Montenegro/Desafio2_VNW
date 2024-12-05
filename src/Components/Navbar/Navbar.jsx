import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => (
  <nav className={styles.navbar}>
    
    <section className={styles.containerLogo}>
      <img className={styles.logo} src="src\assets\logo.png" alt="Logo: um pequeno livro cartunesco"/>
      <p className={styles.titulo}>Livros Vai na Web</p>
    </section>
    
    <section className={styles.containerMenu}>
      <Link className={styles.navLink} to="/">Início</Link>
      <Link className={styles.navLink} to="/Doacao">Livros Doados</Link>
      <Link className={styles.navLink} to="/Livros">Quero Doar</Link>
    </section>

    <section className={styles.containerPesquisa}>
      <input className={styles.pesquisa} type="text" placeholder="O que você procura?"></input>
      <img className={styles.pesquisaIcone} src="src\assets\search.png"></img>
    </section>
  </nav>
);

export default Navbar;
