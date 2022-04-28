import React from 'react';
import styles from "./DashboardForms.module.scss"
import ErrorValidation from '../Helpers/Errors/ErrorValidation/ErrorValidation';
import ru from '../../locales/ru';
import ro from '../../locales/ro';

const CategoryForm = ({ lang, formValues, handleChange, formErrors }) => {
    const t = lang == "ro" ? ro : ru;

    return (
        <div className={styles[lang]}>
            {/* <pre>
                {JSON.stringify(formValues, undefined, 2)}
            </pre> */}
            <label>{t.dashboard.categories.forms.name}:</label>
            <input type="text"
                value={formValues.translation[lang].name}
                onChange={handleChange}
                name="name"
            />
            <ErrorValidation text={formErrors[lang]?.name}/>
        </div>
    );
};

export default CategoryForm;
