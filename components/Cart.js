import { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import styles from "../styles/Cart.module.scss";
import CartItem from "./CartItem";

const Cart = () => {
  const [cart, setCart] = useContext(AppContext);

  const incrementQuantity = (id) => {
    let newState = [...cart];

    for (let item of newState) {
      if (item._id === id) {
        item.quantity += 1;
        break;
      }
    }

    setCart([...newState]);
  };

  const decrementQuantity = (id) => {
    let newState = [...cart];

    for (let item of newState) {
      if (item._id === id) {
        if (item.quantity === 1) {
          return;
        }
        item.quantity -= 1;
        break;
      }
    }

    setCart([...newState]);
  };

  const removeItem = (id) => {
    const newState = cart.filter((item) => item._id !== id);
    setCart([...newState]);
  };

  const getTotal = (cart) => {
    const result = cart.reduce((total, item) => {
      total += item.price * item.quantity;
      return total;
    }, 0);
    return result;
  };

  const subtotal = getTotal(cart);
  const delivery = cart.length === 0 ? 0 : 35;

  return (
    <div className={styles.cart}>
      <div className="container">
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <h1 style={{ paddingLeft: "20px" }}>
              {cart.length} items in your cart
            </h1>
            <div className={styles.cart__inner}>
              <div className={styles.cart__list}>
                <div className={styles.header}>
                  <div className={styles.header__item}>Product(s)</div>
                  <div className={styles.header__item}>Price</div>
                  <div className={styles.header__item}>Quantity</div>
                  <div className={styles.header__item}>Total</div>
                </div>
                <hr />

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
              <div className={styles.subtotal__card__wrapper}>
                <div>Order summary</div>
                <div className={styles.subtotal__card}>
                  <div className={styles.subtotal}>
                    <p>Subtotal: </p>
                    <span>{subtotal} L</span>
                  </div>
                  <div className={styles.delivery}>
                    <p>Delivery: </p>
                    <span>{subtotal >= 450 ? 0 : delivery} L</span>
                  </div>
                  <div className={styles.total}>
                    <p>Total: </p>
                    <span>
                      {subtotal >= 450 ? subtotal : subtotal + delivery} L
                    </span>
                  </div>
                </div>
                <button className={styles.btn__order}>Order</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

const EmptyCart = () => {
  return <h1 style={{paddingLeft: 20}}>Your cart is empty</h1>;
};
