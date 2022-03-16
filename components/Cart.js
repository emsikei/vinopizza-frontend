import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import styles from "../styles/Cart.module.scss";
import CartItem from "./CartItem";

const Cart = () => {
  const [cart, setCart] = useContext(AppContext);

  const incrementQuantity = (id) => {
    let newState = [...cart];

    for (let item of newState) {
      if (item._id === id) {
        item["quantity"] += 1;
        break;
      }
    }
    setCart([...newState]);
  };

  const decrementQuantity = (id) => {
    let newState = [...cart];

    for (let item of newState) {
      if (item._id === id) {
        if (item["quantity"] === 1) {
          return;
        }
        item["quantity"] -= 1;
        break;
      }
    }
    setCart([...newState]);
  };

  const removeItem = (id) => {
    const newState = cart.filter((item) => item._id !== id);
    setCart([...newState]);
  };

  return (
    <div className={styles.cart__content}>
      <div className="container">
        <h1>{cart.length} Items in your cart</h1>

        <div className={styles.cart__heading}>
          <p>Product(s)</p>
          <div className={styles.info}>
            <p>Price</p>
            <p>Qty</p>
            <p>Total:</p>
          </div>
        </div>

        {cart.map((item) => {
          return (
            <CartItem
              key={item._id}
              item={item}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
              removeItem={removeItem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cart;
