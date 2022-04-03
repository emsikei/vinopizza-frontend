import React, {useState} from 'react';
import styles from "./CreateProduct.module.scss";

const categories = [
    {
        name: "Pizza",
    },
    {
        name: "Bauturi",
    },
    {
        name: "Vin",
    }
];


const CreateProduct = () => {
    const [nameRu, setNameRu] = useState("");
    const [nameRo, setNameRo] = useState("");

    const [descriptionRu, setDescriptionRu] = useState("");
    const [descriptionRo, setDescriptionRo] = useState("");

    const [categoryRu, setCategoryRu] = useState("");
    const [categoryRo, setCategoryRo] = useState("");

    const [metrics, setMetrics] = useState("");

    const [price, setPrice] = useState("");
    const [discount, setDiscount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();

        const product = {
            price,
            metrics,
            discount,
            translation: {
                ro: {
                    name: nameRo,
                    description: descriptionRo,
                    category: categoryRo
                },
                ru: {
                    name: nameRu,
                    description: descriptionRu,
                    category: categoryRu
                }
            },

        }

        console.log(product);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Creation of a new product:</h2>

            <div className={styles.languages}>
                <button className={`${styles.languages__btn} ${styles.active}`}>ro</button>
                <button className={styles.languages__btn}>ru</button>
            </div>

            <div className={styles.ro}>
                <label>Nume:</label>
                <input type="text"
                       value={nameRo}
                       onChange={(e) => setNameRo(e.target.value)}
                       required={true}
                />

                <label>Descripție:</label>
                <textarea type="text"
                          value={descriptionRo}
                          onChange={(e) => setDescriptionRo(e.target.value)}
                          required={true}
                />

                <label>Categorie: </label>
                <select onChange={(e) => setCategoryRo(e.target.value)}>
                    {categories.map((category, index) => {
                        return (<option key={index} value={category.name}>{category.name}</option>);
                    })}
                </select>

                <label>Preț:</label>
                <input type="text"
                       value={price}
                       onChange={(e) => setPrice(e.target.value)}
                       required={true}
                />

                <label>Reducere:</label>
                <input type="text"
                       value={discount}
                       onChange={(e) => setDiscount(e.target.value)}
                />

                <label>Măsură:</label>
                <input type="text"
                       value={metrics}
                       onChange={(e) => setMetrics(e.target.value)}
                       required={true}/>

            </div>

            <div className={styles.ru}>
                <label>Имя:</label>
                <input type="text"
                       value={nameRu}
                       onChange={(e) => setNameRu(e.target.value)}
                       required={true}
                />

                <label>Описание:</label>
                <textarea type="text"
                          value={descriptionRu}
                          onChange={(e) => setDescriptionRu(e.target.value)}
                          required={true}
                />

                <label>Категория: </label>
                <select onChange={(e) => setCategoryRu(e.target.value)}>
                    {categories.map((category, index) => {
                        return (<option key={index} value={category.name}>{category.name}</option>);
                    })}
                </select>

                <label>Цена:</label>
                <input type="text"
                       value={price}
                       onChange={(e) => setPrice(e.target.value)}
                       required={true}
                />

                <label>Скидка:</label>
                <input type="text"
                       value={discount}
                       onChange={(e) => setDiscount(e.target.value)}
                />

                <label>Измерения:</label>
                <input type="text"
                       value={metrics}
                       onChange={(e) => setMetrics(e.target.value)}
                       required={true}/>

            </div>

            <button type="submit" className={styles.btn__create}>Create</button>
        </form>);
};

export default CreateProduct;
