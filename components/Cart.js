import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../contexts/AppContext";
import styles from "../styles/Cart.module.scss";

const Cart = () => {
  const [cart, setCart] = useContext(AppContext);

  return (
    <div className={styles.cart__content}>
      <div className="container">
        <h1 className={styles.cart__heading}>
          {cart.length} Items in your cart
        </h1>
      </div>
    </div>
  );
};

export default Cart;
