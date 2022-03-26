import styles from "./Home.module.scss";

const Intro = () => {
  return (
    <>
      <div
        className={styles.home__container}
      >
        <div className={styles.home__inner}>
          <div
            className={styles.home__content}
          >
            <p className={styles.home__content__description}>Welcome</p>
            <h1 className={styles.home__content__title}>
              We cooked your desired pizza recipe
            </h1>
            <p className={styles.home__content__text}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia
            </p>

            <div className={styles.home__buttons__wrapper}>
              <button className={styles.home__button}>View Menu</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
