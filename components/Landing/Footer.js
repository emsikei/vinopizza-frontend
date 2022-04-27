import styles from "./Footer.module.scss";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { AppContext } from "../../contexts/AppContext";
import { useContext } from "react";

const Footer = () => {
  const value = useContext(AppContext);
  const [t, lang, changeLanguage] = value.lang;

  return (
    <footer className={styles.footer}>
      <div className="container">
        <footer className={styles.footer__inner}>
          <div className={`${styles.about} ${styles.footer__item}`}>
            <h2>{t.footer.about.heading}</h2>
            <p>
              {t.footer.about.text}
            </p>
            <div className={styles.socials}>
              <div>
                <a target="_blank" href="https://twitter.com/">
                  <FaTwitter />
                </a>
              </div>

              <div>
                <a target="_blank" href="https://facebook.com/">
                  <FaFacebookF />
                </a>
              </div>
              <div>
                <a target="_blank" href="https://instagram.com/">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
          <div className={`${styles.services} ${styles.footer__item}`}>
            <h2>{t.footer.services.heading}</h2>
            <ul>
              <li>{t.footer.services.first}</li>
              <li>{t.footer.services.second}</li>
            </ul>
          </div>
          <div className={`${styles.question} ${styles.footer__item}`}>
            <h2>{t.footer.question.heading}</h2>
            <div className={styles.address}>
              <div className={styles.flex__container}>
                <span>
                  <FaMapMarkerAlt />
                </span>
                <p>
                  {t.footer.question.address}
                </p>
              </div>
            </div>

            <div className={styles.telephone}>
              <div className={styles.flex__container}>
                <span>
                  <FaPhoneAlt />
                </span>
                <p>+2 392 3929 210</p>
              </div>
            </div>
            <div className={styles.email}>
              <div className={styles.flex__container}>
                <span>
                  <FaEnvelope />
                </span>
                <p>info@yourdomain.com</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
