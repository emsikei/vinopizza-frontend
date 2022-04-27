import React, { useState } from 'react';
import ProductForm from "../../Forms/ProductForm";
import LanguageTab from '../LanguageTab/LanguageTab';
import { useTabState } from '../../../hooks/tabHook';
import { PRODUCT_COMMON, PRODUCT_TRANSLATION } from '../../../states/productState';
import { validateProduct } from '../../../helpers';
import styles from "./../../Forms/DashboardForms.module.scss"

const categories = [
    {
        translation: {
            ru: {
                name: "Пицца",
            },
            ro: {
                name: "Pizza",
            },
        },
        _id: "62290b169115c3b3ad3647a6",
        __v: 0,
    },
    {
        translation: {
            ru: {
                name: "Вино",
            },
            ro: {
                name: "Vin",
            },
        },
        _id: "62290b639115c3b3ad3647a8",
        __v: 0,
    },
    {
        translation: {
            ru: {
                name: "Напитки",
            },
            ro: {
                name: "Bauturi",
            },
        },
        _id: "62290b639115c3b3ad3647a9",
        __v: 0,
    },
];

const CreateProduct = () => {
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
            isActive,
            image
        }

        setFormErrors(validateProduct(product));
        setIsSubmit(true);

        // console.log(formErrors);
        // console.log(product);
    }

    const textRo = {
        name: "Nume",
        description: "Descripție",
        category: "Categorie",
        price: "Preț (lei)",
        discount: "Reducere (%)",
        metrics: "Măsură (g, kg, ml, l etc.)",
        status: "Product este activ",
        image: "Alegeți pictură"
    }

    const textRu = {
        name: "Имя",
        description: "Описание",
        category: "Категория",
        price: "Цена (лей)",
        discount: "Скидка (%)",
        metrics: "Измерения (г, кг, мл, л и тд)",
        status: "Продукт активен",
        image: "Выберите картинку"
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
                heading="Creation of a new product:"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                unactiveTab={unactiveTab}
                setUnactiveTab={setUnactiveTab}
            />
            <form onSubmit={handleSubmit}>
                {
                    activeTab === "ro"
                        ?
                        <ProductForm lang="ro"
                            categories={categories}
                            currentCategory={""}
                            text={textRo}
                            translationValues={translationValues}
                            productCommonValues={productCommonValues}
                            productChangesHandler={productChangesHandler}
                            imageUrl={imageURL}
                            isActive={isActive}
                            formErrors={formErrors}
                        />
                        :
                        <ProductForm lang="ru"
                            categories={categories}
                            currentCategory={""}
                            text={textRu}
                            productCommonValues={productCommonValues}
                            translationValues={translationValues}
                            productChangesHandler={productChangesHandler}
                            imageUrl={imageURL}
                            isActive={isActive}
                            formErrors={formErrors}
                        />
                }

                <button type="submit" className={styles.btn__create}>Create</button>
            </form>
        </div>
    );
};

export default CreateProduct;
