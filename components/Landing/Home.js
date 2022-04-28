import styles from "./Home.module.scss";
import { AppContext } from "../../contexts/AppContext";
import { useContext } from "react";

const Intro = () => {
  const value = useContext(AppContext);
  const [t, lang, changeLanguage] = value.lang;

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
              {t.intro.heading}
            </h1>
            <p className={styles.home__content__text}>
              {t.intro.subheading}
            </p>

            <div className={styles.home__buttons__wrapper}>
              <button className={styles.home__button}>{t.intro.button}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
