import styles from "../styles/HomeInfo.module.scss";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const HomeInfo = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div className="container">
          <div className={styles.info__container}>
            <div className={styles.info__item}>
              <div className={styles.icon__wrapper}>
                <FaPhoneAlt color="var(--main-yellow)" />
              </div>
              <div className="info__item__content">
                <h3>000 (123) 456 7890</h3>
                <p>A small river named Duden flows</p>
              </div>
            </div>
            <div className={styles.info__item}>
              <div className={styles.icon__wrapper}>
                <FaMapMarkerAlt color="var(--main-yellow)" />
              </div>
              <div className="info__item__content">
                <h3>198 West 21th Street</h3>
                <p>Suite 721 New York NY 10016</p>
              </div>
            </div>
            <div className={styles.info__item}>
              <div className={styles.icon__wrapper}>
                <FaClock color="var(--main-yellow)" />
              </div>
              <div className="info__item__content">
                <h3>Open Monday-Friday</h3>
                <p>8:00am - 9:00pm</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className={styles.welcome}>
            <div className={styles.welcome__photo}>
            </div>
            <div className={styles.welcome__content}>
              <h2>
                Welcome to <span className="flaticon-pizza">Pizza</span> Restaurant
              </h2>
              <p>
                On her way she met a copy. The copy warned the Little Blind
                Text, that where it came from it would have been rewritten a
                thousand times and everything that was left from its origin
                would be the word "and" and the Little Blind Text should turn
                around and return to its own, safe country. But nothing the copy
                said could convince her and so it didn’t take long until a few
                insidious Copy Writers ambushed her, made her drunk with Longe
                and Parole and dragged her into their agency, where they abused
                her for their.
              </p>
            </div>
          </div>

      <div className={styles.services__wrapper}>
        <div className="container">
          <div className={styles.services__heading}>
            <h2>Our Services</h2>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>

          <div className={styles.services}>
            <div className={styles.services__item}>
              <div className={styles.services__icon__wrapper}>
                <span className="flaticon-diet"></span>
              </div>
              <h3>Healthy Foods</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
            <div className={styles.services__item}>
              <div className={styles.services__icon__wrapper}>
                <span className="flaticon-bicycle"></span>
              </div>
              <h3>Fastest Delivery</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
            <div className={styles.services__item}>
              <div className={styles.services__icon__wrapper}>
                <span className="flaticon-pizza-1"></span>
              </div>
              <h3>Original Recipes</h3>
              <p>
                Even the all-powerful Pointing has no control about the blind
                texts it is an almost unorthographic.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeInfo;
