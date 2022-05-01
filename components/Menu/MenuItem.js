import styles from "./Menu.module.scss";
import { BsCart3, BsPlusLg } from "react-icons/bs"
import { BiMinus } from "react-icons/bi"
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/AppContext";
import Image from "next/image";

const MenuItem = ({ product }) => {
    const value = useContext(AppContext);
    const [cart, setCart] = value.cart;
    const [t, lang, changeLanguage] = value.lang;

    const [amount, setAmount] = useState(1);

    const testFunc = (product, id) => {
        const foundProduct = cart.find(item => item._id === id);

        const copy = { ...product };

        if (foundProduct) {
            foundProduct.quantity += amount;
            console.log(foundProduct);
        } else {
            copy.quantity = amount;
            console.log("PRODUCT NOT FOUND");
            console.log(copy);
        }

        //TODO: updateState by findIndex 
    }

    const addToCart = (product, id) => {
        for (let item of cart) {
            if (item._id === id) {
                product.quantity += amount;
                return;
            }
        }
        product.quantity = amount;

        testFunc(product, "6229cf6845e8a1543d7e27a1");

        setCart([...cart, product]);
        setAmount(1);

        // testFunc(, "6229cf4b45e8a1543d7e279f");
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

    const imgsrc = "/assets/images/products/" + product.image;

    return (
        <div className={styles.product__item}>
            <div className={styles.product__info}>
                <div className={styles.product__image}>
                    {console.log(product.image)}
                    <img
                        src={imgsrc}
                        alt={product.translation[lang].name}/>
                </div>

                <h2>{product.translation[lang].name}</h2>
                <span className={styles.metrics}>{product.translation[lang].metrics}</span>
                <p>{product.translation[lang].description}</p>
            </div>
            <div className={styles.product__footer}>
                <div className={styles.price}>{product.price} L</div>
                <div className={styles.buttons}>
                    <div className={styles.controls}>
                        <button onClick={decrementAmount}>
                            <BiMinus />
                        </button>
                        <span className={styles.quantity}>{amount}</span>
                        <button onClick={incrementAmount}>
                            <BsPlusLg />
                        </button>
                    </div>
                    <div className={styles.cart__btn} onClick={() => addToCart(product, product._id)}>
                        <BsCart3 />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
