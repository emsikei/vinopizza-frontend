import React, {useState} from 'react';
import styles from "./CreateProduct.module.scss";
import ProductForm from "../../../Forms/ProductForm";

const categories = [
    {
        translation: {
            ru: {
                name: "",
            },
            ro: {
                name: "",
            },
        }
    },
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
    const [nameRu, setNameRu] = useState("");
    const [nameRo, setNameRo] = useState("");

    const [descriptionRu, setDescriptionRu] = useState("");
    const [descriptionRo, setDescriptionRo] = useState("");

    const [categoryRu, setCategoryRu] = useState("");
    const [categoryRo, setCategoryRo] = useState("");

    const [metricsRu, setMetricsRu] = useState("");
    const [metricsRo, setMetricsRo] = useState("");

    const [price, setPrice] = useState(0);
    const [discount, setDiscount] = useState(0);

    const [isActive, setIsActive] = useState(true);

    const [imageURL, setImageURL] = useState("");
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
            <h2 className={styles.heading}>Creation of a new product:</h2>

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
                                 categories={categories}
                                 text={textRo}/>
                    :
                    <ProductForm lang="ru"
                                 state={stateRu}
                                 categories={categories}
                                 text={textRu}/>
            }

            <button type="submit" className={styles.btn__create}>Create</button>
        </form>
    );
};

export default CreateProduct;
