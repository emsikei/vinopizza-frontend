import React, {useState} from 'react';
import styles from "../Create/CreateProduct.module.scss";
import ProductForm from "../../../Forms/ProductForm";

import menu from "../../../../data/menu"

const EditProduct = ({product}) => {
    const [nameRu, setNameRu] = useState(product.translation.ru.name);
    const [nameRo, setNameRo] = useState(product.translation.ro.name);

    const [descriptionRo, setDescriptionRo] = useState(product.translation.ro.description);
    const [descriptionRu, setDescriptionRu] = useState(product.translation.ru.description);

    const [categoryRu, setCategoryRu] = useState(product.translation.ru.category);
    const [categoryRo, setCategoryRo] = useState(product.translation.ro.category);

    const [metricsRu, setMetricsRu] = useState(product.translation.ru.metrics);
    const [metricsRo, setMetricsRo] = useState(product.translation.ro.metrics);

    const [price, setPrice] = useState(product.price);
    const [discount, setDiscount] = useState(product.discount);

    const [isActive, setIsActive] = useState(product.isActive);

    const [imageURL, setImageURL] = useState(product.image);
    const [image, setImage] = useState();

    const handleImageChange = (e) => {
        setImageURL(URL.createObjectURL(e.target.files[0]));
        setImage(e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const product = {
            price,
            discount,
            translation: {
                ro: {
                    name: nameRo,
                    description: descriptionRo,
                    category: categoryRo,
                    metrics: metricsRo
                },
                ru: {
                    name: nameRu,
                    description: descriptionRu,
                    category: categoryRu,
                    metrics: metricsRu
                }
            },
            isActive: isActive,
            image: image
        }

        console.log(product);
    }

    const stateRo = {
        name: nameRo,
        setName: setNameRo,
        description: descriptionRo,
        setDescription: setDescriptionRo,
        category: categoryRo,
        setCategory: setCategoryRo,
        metrics: metricsRo,
        setMetrics: setMetricsRo,
        price,
        setPrice,
        discount,
        setDiscount,
        isActive,
        setIsActive,
        handleImageChange,
        imageURL,
        setImageURL
    }

    const stateRu = {
        name: nameRu,
        setName: setNameRu,
        description: descriptionRu,
        setDescription: setDescriptionRu,
        category: categoryRu,
        setCategory: setCategoryRu,
        metrics: metricsRu,
        setMetrics: setMetricsRu,
        price,
        setPrice,
        discount,
        setDiscount,
        isActive,
        setIsActive,
        handleImageChange,
        imageURL,
        setImageURL
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

    const [activeTab, setActiveTab] = useState("ro");


    return (
        <form onSubmit={handleSubmit}>
            <h2 className={styles.heading}>Edit the product:</h2>

            <div className={styles.languages}>
                <button
                    className={activeTab === "ro"
                        ? `${styles.languages__btn} ${styles.active}`
                        : `${styles.languages__btn}`}
                    onClick={() => setActiveTab("ro")}>
                    ro
                </button>
                <button
                    className={activeTab === "ru"
                        ? `${styles.languages__btn} ${styles.active}`
                        : `${styles.languages__btn}`}
                    onClick={() => setActiveTab("ru")}>
                    ru
                </button>
            </div>

            {
                activeTab === "ro"
                    ?
                    <ProductForm lang="ro"
                                 state={stateRo}
                                 categories={menu.categories}
                                 text={textRo}/>
                    :
                    <ProductForm lang="ru"
                                 state={stateRu}
                                 categories={menu.categories}
                                 text={textRu}/>
            }

            <button type="submit" className={styles.btn__create}>Save</button>
        </form>
    );
};

export default EditProduct;
