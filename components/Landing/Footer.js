import styles from "./Footer.module.scss";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <footer className={styles.footer__inner}>
          <div className={`${styles.about} ${styles.footer__item}`}>
            <h2>About us</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
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
            <h2>Services</h2>
            <ul>
              <li>Cooked</li>
              <li>Deliver</li>
              <li>Quality Foods</li>
              <li>Mixed</li>
            </ul>
          </div>
          <div className={`${styles.question} ${styles.footer__item}`}>
            <h2>Have a quetion?</h2>
            <div className={styles.address}>
              <div className={styles.flex__container}>
                <span>
                  <FaMapMarkerAlt />
                </span>
                <p>
                  203 Fake St. Mountain View, San Francisco, California, USA
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
