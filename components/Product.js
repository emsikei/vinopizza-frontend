import styles from "../styles/Menu.module.scss";

const Product = ({ id, product, addToCart }) => {
  const image = product.image;
  const name = product.translation.ro.name;
  const desc = product.translation.ro.description;
  const metrics = product.metrics;
  const price = product.price;

  return (
    <>
      <div className={styles.menu__products__item}>
        <div className={styles.menu__products__item__image}>
          <img src={image} alt={name} />
        </div>
        <h3 className={styles.menu__products__item__name}>{name}</h3>
        <p className={styles.menu__products__item__desc}>{desc}</p>
        <p>{metrics}</p>
        <p>
          <span className={styles.menu__products__item__price}>{price} L</span>
        </p>
      </div>
      <button
        className={styles.menu__btn}
        onClick={() => addToCart(product, id)}
      >
        Add to cart
      </button>
    </>
  );
};

export default Product;
