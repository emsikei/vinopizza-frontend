import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";
import styles from "./Cart.module.scss";
import CartItem from "./CartItem";
import { useRouter } from "next/router";

const Cart = () => {
  const value = useContext(AppContext);
  const [cart, setCart] = value.cart;

  const [t, lang, changeLanguage] = value.lang;

  const router = useRouter();

  const incrementQuantity = (id) => {
    let newState = [...cart];

    for (let item of newState) {
      if (item._id === id) {
        item.amount += 1;
        break;
      }
    }

    setCart([...newState]);
  };

  const decrementQuantity = (id) => {
    let newState = [...cart];

    for (let item of newState) {
      if (item._id === id) {
        if (item.amount === 1) {
          return;
        }
        item.amount -= 1;
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
      total += item.price * item.amount;
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
              {cart.length} {t.cart.count}
            </h1>
            <div className={styles.cart__inner}>
              <div className={styles.cart__list}>
                <div className={styles.header}>
                  <div className={styles.header__item}>{t.cart.heading.products}</div>
                  <div className={styles.header__item}>{t.cart.heading.price}</div>
                  <div className={styles.header__item}>{t.cart.heading.quantity}</div>
                  <div className={styles.header__item}>{t.cart.heading.total}</div>
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
                <div>{t.cart.order.heading}</div>
                <div className={styles.subtotal__card}>
                  <div className={styles.subtotal}>
                    <p>{t.cart.order.subtotal}: </p>
                    <span>{subtotal} L</span>
                  </div>
                  <div className={styles.delivery}>
                    <p>{t.cart.order.delivery}: </p>
                    <span>{subtotal >= 450 ? 0 : delivery} L</span>
                  </div>
                  <div className={styles.total}>
                    <p>{t.cart.order.total}: </p>
                    <span>
                      {subtotal >= 450 ? subtotal : subtotal + delivery} L
                    </span>
                  </div>
                </div>
                <button className={styles.btn__order} onClick={() => router.push("/cart/checkout")}>{t.cart.order.button}</button>
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
  const value = useContext(AppContext);
  const cart = value.cart.cart.cart;
  const setCart = value.cart.cart.setCart;
  const [t, lang, changeLanguage] = value.lang;

  return <h1 style={{ paddingLeft: 20 }}>{t.cart.empty}</h1>;
};
