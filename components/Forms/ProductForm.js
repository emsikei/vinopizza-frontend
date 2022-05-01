import React from 'react';
import styles from "./DashboardForms.module.scss"
import { FaCloudUploadAlt } from "react-icons/fa"
import ErrorValidation from '../Helpers/Errors/ErrorValidation/ErrorValidation';
import ru from '../../locales/ru';
import ro from '../../locales/ro';

const ProductForm = ({
    lang,
    categories,
    currentCategory,
    productCommonValues,
    translationValues,
    productChangesHandler,
    imageUrl,
    isActive,
    formErrors
}) => {
    const t = lang === "ro" ? ro : ru;

    return (
        <div className={styles[lang]}>

            {/* <pre>
                {JSON.stringify(product, undefined, 2)}
            </pre> */}

            <label>{t.dashboard.products.forms.name}:</label>
            <input type="text"
                value={translationValues.translation[lang].name}
                onChange={productChangesHandler.translationValuesHandler}
                name="name"
            />
            <ErrorValidation text={formErrors?.translation?.[lang]?.name} />

            <label>{t.dashboard.products.forms.description}:</label>
            <textarea type="text"
                value={translationValues.translation[lang].description}
                onChange={productChangesHandler.translationValuesHandler}
                name="description"
            />
            <ErrorValidation text={formErrors?.translation?.[lang]?.description} />

            <label>{t.dashboard.products.forms.category}: </label>
            <select
                name="category"
                onChange={productChangesHandler.commonValuesHandler}>
                <option value={currentCategory} selected>{translationValues.translation[lang].category}
                </option>
                {categories.map((category, index) => {
                    if (category.translation[lang].name !== translationValues.translation[lang].category) {
                        return (
                            <option
                                key={index}
                                value={category._id}
                            >
                                {category.translation[lang].name}
                            </option>
                        );
                    }

                })}
            </select>
            <ErrorValidation text={formErrors?.translation?.[lang]?.category} />

            <label>{t.dashboard.products.forms.price}:</label>
            <input type="number"
                value={productCommonValues.price}
                onChange={productChangesHandler.commonValuesHandler}
                name="price"
            />
            <ErrorValidation text={formErrors?.price} />

            <label>{t.dashboard.products.forms.discount}:</label>
            <input type="number"
                value={productCommonValues.discount}
                onChange={productChangesHandler.commonValuesHandler}
                name="discount"
            />

            <label>{t.dashboard.products.forms.metrics}:</label>
            <input type="text"
                value={translationValues.translation[lang].metrics}
                onChange={productChangesHandler.translationValuesHandler}
                name="metrics"
            />
            <ErrorValidation text={formErrors?.translation?.[lang]?.metrics} />

            <div className={styles.status__wrapper}>{t.dashboard.products.forms.status}:
                <input type="checkbox"
                    value={isActive}
                    id="status"
                    checked={isActive}
                    onChange={productChangesHandler.statusHandler}
                />
                <label htmlFor="status"></label>
            </div>

            <label htmlFor="file-upload" className={styles.image__label}>
                <FaCloudUploadAlt /><span>{t.dashboard.products.forms.image}</span>:
            </label>
            <input type="file"
                accept="image/png, image/jpeg"
                id="file-upload"
                onChange={productChangesHandler.imageHandler}
            />
            <div className={styles.image__wrapper}>
                <img className={styles.product__image} src={imageUrl} />
            </div>
            <ErrorValidation text={formErrors?.image} />
        </div>
    );
};

export default ProductForm;
