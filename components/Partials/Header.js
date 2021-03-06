import styles from "./Header.module.scss";
import { FaBars } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { useState, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Link from "next/link";

const Header = ({ cartItemCount }) => {
  const [showMobileNav, setShowMobileNav] = useState(false);

  const value = useContext(AppContext);
  const [cart, setCart] = value.cart;

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
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.navbar__item}>
              <Link href="/">
                <a>Menu</a>
              </Link>
            </li>
            <li className={styles.navbar__item}>
              <Link href="/">
                <a>Services</a>
              </Link>
            </li>
            <li className={styles.navbar__item}>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li className={styles.navbar__item}>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.cart}>
          <Link href="/cart" className={styles.cart__icon}>
            <a>
              <BsCart3
                onMouseOver={({ target }) => (target.style.color = "#f6c162")}
                onMouseOut={({ target }) => (target.style.color = "#a8aaaa")}
              />
            </a>
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
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Menu</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Contact</a>
            </Link>
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
