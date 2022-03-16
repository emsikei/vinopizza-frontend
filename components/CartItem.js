import styles from "../styles/Cart.module.scss";
import { FaTrash } from "react-icons/fa";
import { CgClose } from "react-icons/cg";

const CartItem = ({
  item,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}) => {
  return (
    <div className={styles.item__info}>
      <div className={styles.wrapper}>
        <div className={styles.img__container}>
          <img src={item.image} alt={item["translation"]["ro"]["name"]} />
        </div>
        <div className={styles.item__content}>
          <p className={styles.item__name}>
            {item["translation"]["ro"]["name"]}
          </p>
          <p className={styles.item__description}>
            {item["translation"]["ro"]["description"]}
          </p>
        </div>
      </div>
      <div className={styles.numbers}>
        <p className={styles.price}>{item.price}</p>
        <div className={styles.quantity__container}>
          <button
            className={styles.control}
            onClick={() => decrementQuantity(item._id)}
          >
            -
          </button>
          <p className={styles.quantity__number}>{item.quantity}</p>
          <button
            className={styles.control}
            onClick={() => incrementQuantity(item._id)}
          >
            +
          </button>
        </div>
        <p className={styles.total}>{item.price * item.quantity}</p>

        {/* <button onClick={() => removeItem(item._id)}>
          <FaTrash />
        </button> */}
        <button onClick={() => removeItem(item._id)}>
          <CgClose />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
