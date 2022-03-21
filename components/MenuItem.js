import styles from "../styles/Menu.module.scss";

const MenuItem = ({product, addToCart}) => {
    return (
        <>
            <div className={styles.product__wrapper}>
                <div className={styles.menu__products__item}>
                    <div className={styles.menu__products__item__image}>
                        <img src={product.image} alt={product.translation.ro.name}/>
                    </div>
                    <h3 className={styles.menu__products__item__name}>{product.translation.ro.name}</h3>
                    <p className={styles.menu__products__item__desc}>{product.translation.ro.description}</p>
                </div>
                <div className={styles.product__item__footer}>
                    <p>{product.metrics}</p>
                    <button
                        className={styles.menu__btn}
                        onClick={() => addToCart(product, product._id)}
                    >
                        Add to cart
                    </button>
                    <p className={styles.price}>{product.price} L</p>
                </div>

            </div>
        </>
    );
};

export default MenuItem;
