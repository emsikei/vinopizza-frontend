import React, { useState, useEffect } from 'react';
import styles from "../Products/Create/CreateProduct.module.scss";
import CategoryForm from "../../Forms/CategoryForm";
import { useTabState } from '../../../hooks/tabHook';
import LanguageTab from '../LanguageTab/LanguageTab';

const EditCategory = ({ category }) => {
    const initialValues = { ...category };

    const { activeTab, setActiveTab, unactiveTab, setUnactiveTab } = useTabState();

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const [formValues, setFormValues] = useState(initialValues);

    const textRo = {
        name: "Numele categoriei"
    }

    const textRu = {
        name: 'Название категории'
    }

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
        setFormErrors(validateCategory(formValues));
        setIsSubmit(true);

        console.log(formValues);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])

    const validateCategory = (values) => {
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

    return (
        <form onSubmit={handleSubmit}>
            <h2 className={styles.heading}>Edit the category:</h2>

            <LanguageTab
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                unactiveTab={unactiveTab}
                setUnactiveTab={setUnactiveTab}
            />

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

            <button type="submit" className={styles.btn__create}>Save</button>
        </form>
    );
};

export default EditCategory;
