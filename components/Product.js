import styles from "../styles/Menu.module.scss";


const Product = ({ id, image, name, desc, price }) => {
  return (
    <div className={styles.menu__products__item}>
      <div className={styles.menu__products__item__image}>
        <img src={image} alt={name} />
      </div>
      <h3 className={styles.menu__products__item__name}>
        {name}
      </h3>
      <p className={styles.menu__products__item__desc}>
        {desc}
      </p>
      <p>
        <span className={styles.menu__products__item__price}>
          ${price}
        </span>
      </p>
      <button className={styles.menu__products__item__btn}>Add to cart</button>
    </div>
  );
};

export default Product;
