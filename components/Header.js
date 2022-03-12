import styles from "../styles/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header__container}>
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
        </ul>
      </nav>
    </header>
  );
};

export default Header;
