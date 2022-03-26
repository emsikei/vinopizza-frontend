import styles from "./Menu.module.scss";
import {BsCart3, BsPlusLg} from "react-icons/bs"
import {BiMinus} from "react-icons/bi"
import {useContext, useState} from "react";
import {AppContext} from "../../contexts/AppContext";

const MenuItem = ({product}) => {
    const value = useContext(AppContext);
    const [cart, setCart] = value.cart;

    const [amount, setAmount] = useState(1);

    const addToCart = (product, id) => {
        for (let item of cart) {
            if (item._id === id) {
                product.quantity += amount;
                return;
            }
        }
        product.quantity = 1;

        setCart([...cart, product]);
        setAmount(1);
    };

    const incrementAmount = () => {
        setAmount(amount + 1);
    }

    const decrementAmount = () => {
        if (amount === 1) {
            return;
        }
        setAmount(amount - 1);
    }

    return (
        <div className={styles.product__item}>
            <div className={styles.product__info}>
                <div className={styles.product__image}>
                    <img src={product.image} alt={product.translation.ro.name}/>
                </div>

                <h2>{product.translation.ro.name}</h2>
                <span className={styles.metrics}>{product.metrics}</span>
                <p>{product.translation.ro.description}</p>
            </div>
            <div className={styles.product__footer}>
                <div className={styles.price}>{product.price} L</div>
                <div className={styles.buttons}>
                    <div className={styles.controls}>
                        <button onClick={decrementAmount}>
                            <BiMinus/>
                        </button>
                        <span className={styles.quantity}>{amount}</span>
                        <button onClick={incrementAmount}>
                            <BsPlusLg/>
                        </button>
                    </div>
                    <div className={styles.cart__btn} onClick={() => addToCart(product, product._id)}>
                        <BsCart3/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
