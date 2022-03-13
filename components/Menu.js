import styles from "../styles/Menu.module.scss";

const Menu = ({ products }) => {
  return (
    <div className={styles.menu__products}>
      {products.map((product) => {
        return (
          <div className={styles.menu__products__item} key={product["_id"]}>
            <div className={styles.menu__products__item__image}>
              <img src={product["image"]} alt="image"/>
            </div>
            <h3 className={styles.menu__products__item__name}>
              {product["translation"]["ro"]["name"]}
            </h3>
            <p className={styles.menu__products__item__desc}>
              {product["translation"]["ro"]["description"]}
            </p>
            <p>
              <span className={styles.menu__products__item__price}>
                ${product["price"]}
              </span>
            </p>
            <button className={styles.menu__products__item__btn}>
              Add to cart
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
