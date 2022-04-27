import React, { useState, useEffect } from 'react';
import styles from "./../../Forms/DashboardForms.module.scss"
import CategoryForm from "../../Forms/CategoryForm";
import { useTabState } from '../../../hooks/tabHook';
import LanguageTab from '../LanguageTab/LanguageTab';
import { validateCategory } from '../../../helpers';

const CreateCategory = () => {
    const { activeTab, setActiveTab, unactiveTab, setUnactiveTab } = useTabState();

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
        setFormErrors(validateCategory(formValues));
        setIsSubmit(true);
    }

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors])

    const textRo = {
        name: "Numele categoriei"
    }

    const textRu = {
        name: 'Название категории'
    }

    return (
        <div>
            <LanguageTab
                heading="Creation of a category"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                unactiveTab={unactiveTab}
                setUnactiveTab={setUnactiveTab}
            />

            <form onSubmit={handleSubmit}>
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
        </div>
    );
};

export default CreateCategory;
