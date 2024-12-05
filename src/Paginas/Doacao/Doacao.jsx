import styles from './Doacao.module.scss';

const Doacao = () => (
  <div className={styles.doacao}>
    <p className={styles.doacaoTxt}>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
    <section className={styles.containerFormulario}>
      <section className={styles.formularioIconeTxt}>
        <img className={styles.formularioIcone} src="src\assets\Vector.png" alt="Desenho de um livro" />
        <h1 className={styles.formularioTxt}>Informações do Livro</h1>
      </section>
      
      <form className={styles.formulario}>
        <input className={styles.formularioInput} type="text" placeholder="Título" />
        <input className={styles.formularioInput} type="text" placeholder="Categoria" />
        <input className={styles.formularioInput} type="text" placeholder="Autor" />
        <input className={styles.formularioInput} type="text" placeholder="Link da Imagem" />
        <button className={styles.formularioBtn} type="submit">Doar</button>
      </form>

    </section>
  </div>
);

export default Doacao;