import React, { useState, useEffect } from 'react';
import styles from "../Products/Create/CreateProduct.module.scss";
import CategoryForm from "../../Forms/CategoryForm";

const CreateCategory = () => {
    const [activeTab, setActiveTab] = useState("ro");
    const [unactiveTab, setUnactiveTab] = useState("ru");
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const initialValues = {
        "translation": {
            "ro": {
                name: ""
            },
            "ru": {
                name: ""
            }
        }
    };

    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (e) => {
        const prevState = { ...formValues.translation[unactiveTab] };

        setFormValues({
            ...formValues,
            translation: {
                [`${unactiveTab}`]: prevState,
                [`${activeTab}`]: {
                    name: e.target.value
                }
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])

    const validate = (values) => {
        const errors = { ru: {}, ro: {} };
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

        if (!values.translation.ru.name) {
            errors.ru.name = "Название категории обязательно!"
        } 
        
        if (!values.translation.ro.name) {
            errors.ro.name = "Numele categories este obligatoriu!"
        }

        return errors;
    }

    const textRo = {
        name: "Numele categoriei"
    }

    const textRu = {
        name: 'Название категории'
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className={styles.heading}>Creation of a new category:</h2>

            <div className={styles.languages}>
                <button
                    className={activeTab === "ro"
                        ? `${styles.languages__btn} ${styles.active}`
                        : `${styles.languages__btn}`}
                    onClick={() => {
                        setActiveTab("ro")
                        setUnactiveTab("ru")
                    }}>
                    ro
                </button>
                <button
                    className={activeTab === "ru"
                        ? `${styles.languages__btn} ${styles.active}`
                        : `${styles.languages__btn}`}
                    onClick={() => {
                        setActiveTab("ru")
                        setUnactiveTab("ro")
                    }}>
                    ru
                </button>
            </div>

            {
                activeTab === "ro"
                    ?
                    <CategoryForm
                        lang="ro"
                        text={textRo}
                        formValues={formValues}
                        handleChange={handleChange}
                        formErrors={formErrors}
                    />
                    :
                    <CategoryForm
                        lang="ru"
                        text={textRu}
                        formValues={formValues}
                        handleChange={handleChange}
                        formErrors={formErrors}
                    />
            }

            <button type="submit" className={styles.btn__create}>Create</button>
        </form>
    );
};

export default CreateCategory;
