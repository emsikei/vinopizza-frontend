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

    const [currentAmount, setAmount] = useState(1);

    const addToCart = (product, id) => {
        for (let item of cart) {
            if (item._id === id) {
                product.amount += currentAmount;
                return;
            }
        }
        product.amount = currentAmount;

        setCart([...cart, product]);
        setAmount(1);

        // const indexOfProductToUpdate = cart.findIndex(item => item._id === id);

        // const newCart = [...cart];
        // let copyProduct = {...product}

        // if(indexOfProductToUpdate === -1) {
        //     copyProduct.amount = currentAmount;
        //     const indexOfProductToAdd = cart.findIndex(item => item._id === id);
        //     // newCart[indexOfProductToAdd] = copyProduct;
        //     newCart.push(copyProduct);
        //     setCart([...newCart])
        // } else {
        //     copyProduct.amount += currentAmount;
        //     newCart[indexOfProductToUpdate] = copyProduct;
        //     console.log(typeof(copyProduct.amount), typeof(currentAmount))
        //     setCart([...newCart]);
        // }
        // console.log(currentAmount)

        // setAmount(1);

    };

    const incrementAmount = () => {
        setAmount(currentAmount + 1);
    }

    const decrementAmount = () => {
        if (currentAmount === 1) {
            return;
        }
        setAmount(currentAmount - 1);
    }

    const imgsrc = "/assets/images/products/" + product.image;

    return (
        <div className={styles.product__item}>
            <div className={styles.product__info}>
                <div className={styles.product__image}>
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
                        <span className={styles.amount}>{currentAmount}</span>
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
