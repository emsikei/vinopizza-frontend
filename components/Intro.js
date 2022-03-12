import styles from "../styles/Intro.module.scss";

const Intro = () => {
  return (
    <div className={styles.intro__container}>
      <div className={styles.intro__image__wrapper}>
        <img
          className={styles.intro__image}
          src="/assets/images/intro_pizza_image.png"
          alt="italian pizza"
        />
      </div>

      <div className={styles.intro__content}>
        <p className={styles.intro__content__description}>Crunchy</p>
        <h1 className={styles.intro__content__title}>Italian pizza</h1>
        <p className={styles.intro__content__text}>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia
        </p>

        <div className={styles.intro__buttons__wrapper}>
          <button
            className={`${styles.intro__button} ${styles.intro__button__order}`}
          >
            Order now
          </button>
          <button className={styles.intro__button}>View Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
