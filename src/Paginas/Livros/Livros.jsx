import styles from './Livros.module.scss';

const Livros = () => (
  <div className={styles.livros}>
    <p className={styles.livrosTxt}>Livros Doados</p>
    <section className={styles.containerCards}>
      <section className={styles.cardLivros}>
        <img className={styles.cardImg} src="src\assets\download 1.png" alt="Imagem de um livro" />
        <h2 className={styles.cardDescricao}> O protagonista Susanne Andrade Ficção</h2>
      </section>
    </section>
  </div>
);

export default Livros;