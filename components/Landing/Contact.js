import styles from "./HomeInfo.module.scss";
import {FaClock, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";
import { AppContext } from "../../contexts/AppContext";
import { useContext } from "react";

const Contact = () => {
    const value = useContext(AppContext);
    const [t, lang, changeLanguage] = value.lang;

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className={styles.info__container}>
                    <div className={styles.info__item}>
                        <div className={styles.icon__wrapper}>
                            <FaPhoneAlt color="var(--main-yellow)"/>
                        </div>
                        <div className="info__item__content">
                            <h3>000 (123) 456 7890</h3>
                            <p>{t.contactData.telephone}</p>
                        </div>
                    </div>
                    <div className={styles.info__item}>
                        <div className={styles.icon__wrapper}>
                            <FaMapMarkerAlt color="var(--main-yellow)"/>
                        </div>
                        <div className="info__item__content">
                            <h3>{t.contactData.address}</h3>
                            <p>{t.contactData.address}</p>
                        </div>
                    </div>
                    <div className={styles.info__item}>
                        <div className={styles.icon__wrapper}>
                            <FaClock color="var(--main-yellow)"/>
                        </div>
                        <div className="info__item__content">
                            <h3>Open Monday-Friday</h3>
                            <p>{t.contactData.time}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;