import React, { useState, useEffect, useContext } from 'react';
import styles from "./../../Forms/DashboardForms.module.scss"
import CategoryForm from "../../Forms/CategoryForm";
import { useTabState } from '../../../hooks/tabHook';
import LanguageTab from '../LanguageTab/LanguageTab';
import { validateCategory } from '../../../helpers';
import { AppContext } from '../../../contexts/AppContext';

const CreateCategory = () => {
    const { activeTab, setActiveTab, unactiveTab, setUnactiveTab } = useTabState();

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const value = useContext(AppContext);
    const [t, lang, changeLanguage] = value.lang;

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


    return (
        <div>
            <LanguageTab
                heading={t.dashboard.categories.inscriptions.createLong}
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
                            formValues={formValues}
                            handleChange={handleChange}
                            formErrors={formErrors}
                        />
                        :
                        <CategoryForm
                            lang="ru"
                            formValues={formValues}
                            handleChange={handleChange}
                            formErrors={formErrors}
                        />
                }

                <button type="submit" className={styles.btn__create}>{t.dashboard.buttons.create}</button>
            </form>
        </div>
    );
};

export default CreateCategory;
