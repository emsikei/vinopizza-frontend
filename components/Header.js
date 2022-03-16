import styles from "../styles/Header.module.scss";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { useState, useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Header = ({ cartItemCount }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const [cart, setCart] = useContext(AppContext);

  const toggleMobileNav = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.header__container}`}>
        <button className={styles.burger__button} onClick={toggleMobileNav}>
          <FaBars />
        </button>
        <div className={styles.header__logo}>
          <Link href="/">Vinopizza</Link>
        </div>
        <nav className={styles.navbar}>
          <ul className={styles.navbar__list}>
            <li className={styles.navbar__item}>
              <Link href="/">Home</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link href="/">Menu</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link href="/">Services</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link href="/">About</Link>
            </li>
            <li className={styles.navbar__item}>
              <Link href="#footer">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.cart}>
          <Link href="/cart" className={styles.cart__icon}>
            <FaShoppingCart
              onMouseOver={({ target }) => (target.style.color = "#f6c162")}
              onMouseOut={({ target }) => (target.style.color = "#a8aaaa")}
            />
          </Link>
          <div className={styles.cart__count}>
            <div>{cart.length}</div>
          </div>
        </div>
      </div>
      <nav
        className={
          showMobileNav ? styles.mobile__navbar__active : styles.mobile__navbar
        }
      >
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Menu</Link>
          </li>
          <li>
            <Link href="/">Services</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact</Link>
          </li>
          <ul className={styles.socials}>
            <li className={styles.socials__item}>
              <a href="https://twitter.com" target="_blank">
                <FaTwitter />
              </a>
            </li>
            <li className={styles.socials__item}>
              <a href="https://facebook.com" target="_blank">
                <FaFacebookF />
              </a>
            </li>
            <li className={styles.socials__item}>
              <a href="https://instagram.com" target="_blank">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
