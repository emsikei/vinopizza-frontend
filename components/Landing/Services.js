import styles from "./HomeInfo.module.scss";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const Services = () => {

    const value = useContext(AppContext);
    const [t, lang, changeLanguage] = value.lang;

    return (
        <div className={styles.services__wrapper}>
            <div className="container">
                <div className={styles.services__heading}>
                    <h2>{t.services.title}</h2>
                    <p>
                        {t.services.subtitle}
                    </p>
                </div>

                <div className={styles.services}>
                    <div className={styles.services__item}>
                        <div className={styles.services__icon__wrapper}>
                            <span className="flaticon-diet"></span>
                        </div>
                        <h3>{t.services.first.heading}</h3>
                        <p>
                            {t.services.first.subheading}
                        </p>
                    </div>
                    <div className={styles.services__item}>
                        <div className={styles.services__icon__wrapper}>
                            <span className="flaticon-bicycle"></span>
                        </div>
                        <h3>{t.services.second.heading}</h3>
                        <p>
                            {t.services.second.subheading}
                        </p>
                    </div>
                    <div className={styles.services__item}>
                        <div className={styles.services__icon__wrapper}>
                            <span className="flaticon-pizza-1"></span>
                        </div>
                        <h3>O{t.services.third.heading}</h3>
                        <p>
                            {t.services.third.subheading}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;