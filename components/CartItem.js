import styles from "../styles/Cart.module.scss";
import { FaTrashAlt } from "react-icons/fa";

const CartItem = ({
  item,
  incrementQuantity,
  decrementQuantity,
  removeItem,
}) => {
  //   return <h2>{item["translation"]["ro"]["name"]}</h2>;

  //   const increment = (item) => {
  //     item["quantity"] = item["quantity"] + 1;
  //   };

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
        <div className={styles.control__container}>
          <p>{item.price}</p>

          <button
            className={styles.control}
            onClick={() => decrementQuantity(item._id)}
          >
            -
          </button>
          <p>{item.quantity}</p>
          <button
            className={styles.control}
            onClick={() => incrementQuantity(item._id)}
          >
            +
          </button>
        </div>
        <div className={styles.total__container}>
          <p>{item.price * item.quantity}</p>
        </div>

        {/* <button onClick={() => removeItem(item._id)}>
          <FaTrashAlt />
        </button> */}
      </div>
    </div>
  );
};

export default CartItem;
