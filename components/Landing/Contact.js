import styles from "./HomeInfo.module.scss";
import {FaClock, FaMapMarkerAlt, FaPhoneAlt} from "react-icons/fa";

const Contact = () => {
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
                            <p>A small river named Duden flows</p>
                        </div>
                    </div>
                    <div className={styles.info__item}>
                        <div className={styles.icon__wrapper}>
                            <FaMapMarkerAlt color="var(--main-yellow)"/>
                        </div>
                        <div className="info__item__content">
                            <h3>198 West 21th Street</h3>
                            <p>Suite 721 New York NY 10016</p>
                        </div>
                    </div>
                    <div className={styles.info__item}>
                        <div className={styles.icon__wrapper}>
                            <FaClock color="var(--main-yellow)"/>
                        </div>
                        <div className="info__item__content">
                            <h3>Open Monday-Friday</h3>
                            <p>8:00am - 9:00pm</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;