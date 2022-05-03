import React, { useState, useContext } from 'react';
import ProductForm from "../../Forms/ProductForm";
import LanguageTab from '../LanguageTab/LanguageTab';
import { useTabState } from '../../../hooks/tabHook';
import { PRODUCT_COMMON, PRODUCT_TRANSLATION } from '../../../states/productState';
import { validateProduct } from '../../../helpers';
import styles from "./../../Forms/DashboardForms.module.scss"
import { AppContext } from '../../../contexts/AppContext';
import axios from "axios"
import { useRouter } from 'next/router';

// const categories = [
//     {
//         translation: {
//             ru: {
//                 name: "Пицца",
//             },
//             ro: {
//                 name: "Pizza",
//             },
//         },
//         _id: "62290b169115c3b3ad3647a6",
//         __v: 0,
//     },
//     {
//         translation: {
//             ru: {
//                 name: "Вино",
//             },
//             ro: {
//                 name: "Vin",
//             },
//         },
//         _id: "62290b639115c3b3ad3647a8",
//         __v: 0,
//     },
//     {
//         translation: {
//             ru: {
//                 name: "Напитки",
//             },
//             ro: {
//                 name: "Bauturi",
//             },
//         },
//         _id: "62290b639115c3b3ad3647a9",
//         __v: 0,
//     },
// ];

const CreateProduct = ({ _categories }) => {

    // TODO: add isActive field to backend
    // TODO: connect createProduct to backend

    const { activeTab, setActiveTab, unactiveTab, setUnactiveTab } = useTabState();

    const [translationValues, setTranslationValues] = useState({
        ...PRODUCT_TRANSLATION
    });

    const [productCommonValues, setProductCommonValues] = useState({ ...PRODUCT_COMMON });

    const [isActive, setIsActive] = useState(true);

    const [imageURL, setImageURL] = useState("");
    const [image, setImage] = useState();

    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const value = useContext(AppContext);
    const [t, lang, changeLanguage] = value.lang;

    const router = useRouter();

    const handleImageChange = (e) => {
        setImageURL(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0])
    }

    const handleStatusChange = (e) => {
        setIsActive(e.target.checked);
    }

    const handleProductTranslationChange = (e) => {
        const { name, value } = e.target;

        setTranslationValues({
            ...translationValues,
            translation: {
                [`${activeTab}`]: { ...translationValues.translation[activeTab], [name]: value },
                [`${unactiveTab}`]: { ...translationValues.translation[unactiveTab] }
            }
        })
    }

    const handleProductCommonValuesChange = (e) => {
        const { name, value } = e.target;

        setProductCommonValues(
            {
                ...productCommonValues,
                [name]: value
            }
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const product = {
            ...translationValues,
            ...productCommonValues,
            // isActive,
            // image
        }

        const price = parseInt(product.price)
        product.price = price;

        setFormErrors(validateProduct(product));

        const formData = new FormData();
        formData.append("image", image);
        formData.append("data", JSON.stringify(product));

        if (Object.keys(formErrors).length === 0) {
            fetch("http://localhost:5000/api/v1/products",
                {
                    body: formData,
                    method: "post"
                });

            router.push("/dashboard/products")
        }
    }

    const productChangesHandler = {
        commonValuesHandler: handleProductCommonValuesChange,
        translationValuesHandler: handleProductTranslationChange,
        imageHandler: handleImageChange,
        statusHandler: handleStatusChange
    }

    return (
        <div>
            <LanguageTab
                heading={t.dashboard.products.inscriptions.createLong}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                unactiveTab={unactiveTab}
                setUnactiveTab={setUnactiveTab}
            />
            <form onSubmit={handleSubmit}>
                {
                    activeTab === "ro"
                        ?
                        <ProductForm
                            lang={"ro"}
                            categories={_categories}
                            currentCategory={""}
                            translationValues={translationValues}
                            productCommonValues={productCommonValues}
                            productChangesHandler={productChangesHandler}
                            imageUrl={imageURL}
                            isActive={isActive}
                            formErrors={formErrors}
                        />
                        :
                        <ProductForm
                            lang={"ru"}
                            categories={_categories}
                            currentCategory={""}
                            productCommonValues={productCommonValues}
                            translationValues={translationValues}
                            productChangesHandler={productChangesHandler}
                            imageUrl={imageURL}
                            isActive={isActive}
                            formErrors={formErrors}
                        />
                }

                <button type="submit" className={styles.btn__create}>{t.dashboard.buttons.create}</button>
            </form>
        </div>
    );
};

export default CreateProduct;
