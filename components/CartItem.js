import styles from "../styles/Cart.module.scss";
import { CgClose } from "react-icons/cg";

const CartItem = ({
  item,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}) => {
  const id = item._id;
  const image = item.image;
  const name = item.translation.ro.name;
  const description = item.translation.ro.description;
  const price = item.price;
  const quantity = item.quantity;

  return (
    <>
      <div className={styles.cart__item}>
        <div className={styles.cart__item__image}>
          <img src={image} alt={name} />
        </div>
        <div className={styles.cart__item__info}>
          <div className={styles.cart__item__name}>{name}</div>
          <p className={styles.cart__item__description}>{description}</p>
        </div>
        <div className={styles.cart__item__price}>{price}</div>
        <div className={styles.cart__item__qty}>
          <div className={styles.button__wrapper}>
            <button onClick={() => decrementQuantity(item._id)}>-</button>
          </div>
          <div>{quantity}</div>
          <div className={styles.button__wrapper}>
            <button onClick={() => incrementQuantity(item._id)}>+</button>
          </div>
        </div>
        <div className={styles.cart__item__total}>{price * quantity}</div>
        <div className={styles.cart__item__remove}>
          <button onClick={() => removeItem(id)}>
            <CgClose />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
