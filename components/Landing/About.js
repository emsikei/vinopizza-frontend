import styles from "./HomeInfo.module.scss";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const About = () => {
    const value = useContext(AppContext);
    const [t, lang, changeLanguage] = value.lang;

    return (
        <div className={styles.welcome}>
            <div className={styles.welcome__photo}>
            </div>
            <div className={styles.welcome__content}>
                <h2>
                    Welcome to <span className="flaticon-pizza">Pizza</span> Restaurant
                </h2>
                <p>
                    {t.restaurantInfo.text}
                </p>
            </div>
        </div>
    );
}

export default About;
