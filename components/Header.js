import styles from "../styles/Header.module.scss";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.header__container}`}>
        <div className={styles.header__logo}>Vinopizza</div>
        <nav className={styles.navbar}>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <a href="#">Home</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#">Menu</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#">Services</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#">Blog</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#">About</a>
            </li>
            <li className={styles.navbar__item}>
              <a href="#">Contact</a>
            </li>
            <li className={styles.navbar__item}>
              <div className={styles.cart}>
                <span className={styles.cart__icon}>
                  <FaShoppingCart
                    size="1rem"
                    onMouseOver={({ target }) =>
                      (target.style.color = "#f6c162")
                    }
                    onMouseOut={({ target }) =>
                      (target.style.color = "#a8aaaa")
                    }
                  />
                </span>
                <span className={styles.cart__count}>0</span>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
