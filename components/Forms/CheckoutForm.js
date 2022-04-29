import React, { useState, useContext } from 'react'
import styles from "./CheckoutForm.module.scss"
import { AppContext } from "../../contexts/AppContext"

const CheckoutForm = () => {
    const initialState = {
        customerInfo: {
            name: "",
            city: "",
            address: {
                street: "",
                houseNumber: "",
                flat: "",
                entrance: "",
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

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [houseNumber, setHouseNumber] = useState("");
    const [flat, setFlat] = useState("");
    const [entrance, setEntrance] = useState("");
    const [floor, setFloor] = useState("");
    const [codeIntercom, setCodeIntercom] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newState = {
            name,
            city,
            address: {
                street,
                houseNumber,
                flat,
                entrance,
                floor,
                codeIntercom
            },
            phone
        }

        console.log(newState)

        setFormValues({ ...initialState, newState })
        console.log(formValues)
    }

    //TODO: cart item model
    //TODO: order model 

    return (
        <form className={styles.checkout__form} onSubmit={handleSubmit}>
            <div>
                <label
                    className={styles.checkout__form__label}
                    htmlFor="name">{t.checkout.customerInfo.name}</label>
                <input
                    className={styles.checkout__form__input}
                    type="text"
                    value={name}
                    name="name"
                    onChange={e => setName(e.target.value)} />
            </div>

            <div>
                <label
                    className={styles.checkout__form__label}
                    htmlFor="city">{t.checkout.customerInfo.city}</label>
                <input
                    className={styles.checkout__form__input}
                    type="text"
                    value={city}
                    name="city"
                    onChange={e => setCity(e.target.value)} />
            </div>

            <div>
                <label
                    className={styles.checkout__form__label}
                    htmlFor="street">{t.checkout.customerInfo.address.street}</label>
                <input
                    className={styles.checkout__form__input}
                    type="text"
                    value={street}
                    name="street"
                    onChange={e => setStreet(e.target.value)} />

                <label
                    className={styles.checkout__form__label}
                    htmlFor="houseNumber">{t.checkout.customerInfo.address.houseNumber}</label>
                <input
                    className={styles.checkout__form__input}
                    type="text"
                    value={houseNumber}
                    name="houseNumber"
                    onChange={e => setHouseNumber(e.target.value)} />

                <label
                    className={styles.checkout__form__label}
                    htmlFor="flat">{t.checkout.customerInfo.address.flat}</label>
                <input
                    className={styles.checkout__form__input}
                    type="text"
                    value={flat}
                    name="flat"
                    onChange={e => setFlat(e.target.value)} />

                <label
                    className={styles.checkout__form__label}
                    htmlFor="entrance">{t.checkout.customerInfo.address.entrance}</label>
                <input
                    className={styles.checkout__form__input}
                    type="text"
                    value={entrance}
                    name="entrance"
                    onChange={e => setEntrance(e.target.value)} />

                <label
                    className={styles.checkout__form__label}
                    htmlFor="floor">{t.checkout.customerInfo.address.floor}</label>
                <input
                    className={styles.checkout__form__input}
                    type="text"
                    value={floor}
                    name="floor"
                    onChange={e => setFloor(e.target.value)} />

                <label
                    className={styles.checkout__form__label}
                    htmlFor="codeIntercom">{t.checkout.customerInfo.address.codeIntercom}</label>
                <input
                    className={styles.checkout__form__input}
                    type="text"
                    value={codeIntercom}
                    name="codeIntercom"
                    onChange={e => setCodeIntercom(e.target.value)} />

            </div>

            <div>
                <label
                    className={styles.checkout__form__label}
                    htmlFor="phone">{t.checkout.customerInfo.address.phone}</label>
                <input
                    className={styles.checkout__form__input}
                    type="text"
                    value={phone}
                    name="phone"
                    onChange={e => setPhone(e.target.value)} />
            </div>

            <button type="submit">{t.checkout.button}</button>
        </form>
    )
}

export default CheckoutForm