import styles from "./Cart.module.scss";
import { CgClose } from "react-icons/cg";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const CartItem = ({
  item,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}) => {
  const value = useContext(AppContext);
  const [t, lang, changelLanguage] = value.lang;

  return (
    <>
      <div className={styles.cart__item}>
        <div className={styles.cart__item__image}>
          <img src={item.image} alt={item.translation[lang].name} />
        </div>
        <div className={styles.cart__item__info}>
          <div className={styles.cart__item__name}>{item.translation[lang].name}</div>
          <p className={styles.cart__item__description}>{item.translation[lang].description}</p>
        </div>
        <div className={styles.cart__item__price}>{item.price}</div>
        <div className={styles.cart__item__qty}>
          <div className={styles.button__wrapper}>
            <button onClick={() => decrementQuantity(item._id)}>-</button>
          </div>
          <div>{item.quantity}</div>
          <div className={styles.button__wrapper}>
            <button onClick={() => incrementQuantity(item._id)}>+</button>
          </div>
        </div>
        <div className={styles.cart__item__total}>{item.price * item.quantity}</div>
        <div className={styles.cart__item__remove}>
          <button onClick={() => removeItem(item._id)}>
            <CgClose />
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default CartItem;
