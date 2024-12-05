import styles from './Home.module.scss';

const Home = () => (
  <div className={styles.Home}>
    <section className={styles.containerImgTxt}>
      <img
        className={styles.homeImg}
        src="src/assets/VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO (1) 1.png"
        alt="Imagem de uma mulher segurando três livros em suas mãos, o foco da imagem são os livros, nenhum dos livros tem título ou imagens"
      />
      <p className={styles.homeTxt}>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</p>
    </section>

    <h1 className={styles.txtContainer}>Por que devo doar?</h1>

    <section className={styles.containerCards}>
      <section className={styles.card}>
        <img
          className={styles.cardImg}
          src="src/assets/8541846 1.png"
          alt="Desenho de um círculo com 4 bonecos que representam pessoas conectadas"
        />
        <h4 className={styles.cardTxt}> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</h4>
      </section>
      <section className={styles.card}>
        <img
          className={styles.cardImg}
          src="src/assets/566985 1.png"
          alt="Desenho de um boneco lendo um livro"
        />
        <h4 className={styles.cardTxt}>Estimula o hábito da leitura e o aprendizado contínuo.</h4>
      </section>
      <section className={styles.card}>
        <img
          className={styles.cardImg}
          src="src/assets/2191244 1.png"
          alt="Desenho de uma mão para o alto representando luta contra a desigualdade"
        />
        <h4 className={styles.cardTxt}>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</h4>
      </section>
      <section className={styles.card}>
        <img
          className={styles.cardImg}
          src="src/assets/101964 1.png"
          alt="Desenho da balança da justiça"
        />
        <h4 className={styles.cardTxt}>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</h4>
      </section>
    </section>
  </div>
);

export default Home;
