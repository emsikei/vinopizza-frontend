import React from 'react';
import styles from "../Dashboard/Products/Create/CreateProduct.module.scss"

const CategoryForm = ({ lang, text, formValues, handleChange, formErrors }) => {
    return (
        <div className={styles[lang]}>
            <pre>
                {JSON.stringify(formValues, undefined, 2)}
            </pre>
            <label>{text.name}:</label>
            <input type="text"
                value={formValues.translation[lang].name}
                onChange={handleChange}
                name="name"
            />
            <p style={{color: "red"}}>{formErrors[lang]?.name}</p>
        </div>
    );
};

export default CategoryForm;
