import React, { useState, useContext } from 'react'
import styles from "./CheckoutForm.module.scss"
import { AppContext } from "../../contexts/AppContext"
import axios from 'axios'

//TODO: add validation to checkout
//TODO: fix order service/controller in backend

const CheckoutForm = () => {
    const initialState = {
        customerInfo: {
            name: "",
            city: "",
            address: {
                street: "",
                houseNumber: "",
                flat: "",
                enterance: "",
                floor: "",
                codeIntercom: "",
            },
            phone: "",
        },
        orderedProducts: [],
        paymentMethod: "Cash",
        total: 0,
        status: "Pending"
    }

    const [formValues, setFormValues] = useState(initialState);

    const value = useContext(AppContext);
    const [t, lang, changeLanguage] = value.lang;
    const [cart, setCart] = value.cart;

    const [name, setName] = useState("");
    const [city, setCity] = useState("Chisinau");
    const [street, setStreet] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [flat, setFlat] = useState("");
    const [enterance, setEnterance] = useState("");
    const [floor, setFloor] = useState("");
    const [codeIntercom, setCodeIntercom] = useState("");
    const [phone, setPhone] = useState("");

    const getOrderedProducts = (cart) => {
        let orderedProducts = [];
        for (let item of cart) {
            orderedProducts.push({product: item._id, amount: item.amount})
        }
        return orderedProducts;
    }

    const orderedProducts = getOrderedProducts(cart);

    const getTotal = (cart) => {
        const result = cart.reduce((total, item) => {
            total += item.price * item.amount;
            return total;
        }, 0);

        const total = result >= 450 ? result : result + 35;

        return total;
    };

    const total = getTotal(cart);

    const handleSubmit = (e) => {
        e.preventDefault();

        const date = new Date();
        const time =
            ("0" + date.getUTCDate()).slice(-2) + "/" + 
            ("0" + (date.getUTCMonth() + 1)).slice(-2) + "/" +
            date.getUTCFullYear() + " " +
            ("0" + date.getUTCHours()).slice(-2) + ":" +
            ("0" + date.getUTCMinutes()).slice(-2) + ":" +
            ("0" + date.getUTCSeconds()).slice(-2);

        const order = {
            time,
            customerInfo: {
                name,
                city,
                address: {
                    street,
                    houseNumber,
                    flat,
                    enterance,
                    floor,
                    codeIntercom
                },
                phone,
            },
            orderedProducts,
            paymentMethod: "Cash",
            total,
            status: "Pending"
        }

        axios
            .post("http://localhost:5000/api/v1/orders", order)
            .then((response) => {
                console.log(response.data);
            });

        setFormValues({ ...initialState, order })
        // console.log(newState)
    }

    return (
        <form className={styles.checkout__form} onSubmit={handleSubmit}>
            <div className={styles.block}>
                <input
                    className={styles.input}
                    type="text"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Nume"
                />
            </div>
            <div className={styles.block}>
                <input
                    className={styles.input}
                    type="text"
                    value={city}
                    readOnly={true}
                />
            </div>
            <div className={styles.block}>
                <input
                    className={styles.input}
                    type="text"
                    value={street}
                    onChange={e => setStreet(e.target.value)}
                    placeholder="Strada"
                />
            </div>
            <div className={`${styles.block} ${styles.house}`}>
                <input
                    className={styles.input}
                    type="text"
                    value={houseNumber}
                    onChange={e => setHouseNumber(parseInt(e.target.value))}
                    placeholder="Nr casei"
                />
                <input
                    className={styles.input}
                    type="text"
                    value={flat}
                    onChange={e => setFlat(parseInt(parseInt(e.target.value)))}
                    placeholder="Nr apartamentului"
                />
                <input
                    className={styles.input}
                    type="text"
                    value={enterance}
                    onChange={e => setEnterance(parseInt(e.target.value))}
                    placeholder="Nr intrarei"
                />
            </div>

            <div className={`${styles.block} ${styles.credentials}`}>
                <input
                    className={styles.input}
                    type="text"
                    value={floor}
                    onChange={e => setFloor(parseInt(e.target.value))}
                    placeholder="Etaj"
                />
                <input
                    className={styles.input}
                    type="text"
                    value={codeIntercom}
                    onChange={e => setCodeIntercom(e.target.value)}
                    placeholder="Codul domofonului"
                />
            </div>

            <div className={`${styles.block}`}>
                <input
                    className={styles.input}
                    type="text"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="Telefon"
                />
            </div>

            <button className={styles.btn} type="submit">{t.checkout.button}</button>
        </form>
    )
}

export default CheckoutForm