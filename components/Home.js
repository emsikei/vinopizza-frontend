import styles from "../styles/Home.module.scss";

const Intro = () => {
  return (
    <>
      {/* <div className={styles.home__container}>
        <div className={styles.home__inner}>
          <div className={styles.home__image__wrapper}>
            <img
              className={styles.home__image}
              src="/assets/images/home_pizza_image_left.png"
              alt="italian pizza"
            />
          </div>

          <div className={`${styles.home__content} ${styles.home__content__left}`}>
            <p className={styles.home__content__description}>Crunchy</p>
            <h1 className={styles.home__content__title}>Italian pizza</h1>
            <p className={styles.home__content__text}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia
            </p>

            <div className={styles.home__buttons__wrapper}>
              <button
                className={`${styles.home__button} ${styles.home__button__order}`}
              >
                Order now
              </button>
              <button className={styles.home__button}>View Menu</button>
            </div>
          </div>
        </div>

        <div className={styles.home__dots__wrapper}>
          <div className={`${styles.home__dot} ${styles.home__dot__active}`}></div>
          <div className={styles.home__dot}></div>
          <div className={styles.home__dot}></div>
        </div>
      </div> */}

      {/* <div className={styles.home__container}>
        <div className={styles.home__inner}>
          <div
            className={`${styles.home__content} ${styles.home__content__right}`}
          >
            <p className={styles.home__content__description}>Delicious</p>
            <h1 className={styles.home__content__title}>Italian Cuizine</h1>
            <p className={styles.home__content__text}>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia
            </p>

            <div className={styles.home__buttons__wrapper}>
              <button
                className={`${styles.home__button} ${styles.home__button__order}`}
              >
                Order now
              </button>
              <button className={styles.home__button}>View Menu</button>
            </div>
          </div>

          <div className={styles.home__image__wrapper}>
            <img
              className={styles.home__image}
              src="/assets/images/home_pizza_image_right.png"
              alt="italian pizza"
            />
          </div>
        </div>

        <div className={styles.home__dots__wrapper}>
          <div
            className={`${styles.home__dot} ${styles.home__dot__active}`}
          ></div>
          <div className={styles.home__dot}></div>
          <div className={styles.home__dot}></div>
        </div>
      </div> */}

      <div className={`${styles.home__container} ${styles.home__container__main}`}>
        <div className={styles.home__inner}>
          <div
            className={`${styles.home__content} ${styles.home__content__center}`}
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
              <button
                className={`${styles.home__button} ${styles.home__button__order}`}
              >
                Order now
              </button>
              <button className={styles.home__button}>View Menu</button>
            </div>
          </div>
        </div>

        <div className={styles.home__dots__wrapper}>
          <div
            className={`${styles.home__dot} ${styles.home__dot__active}`}
          ></div>
          <div className={styles.home__dot}></div>
          <div className={styles.home__dot}></div>
        </div>
      </div>
    </>
  );
};

export default Intro;
