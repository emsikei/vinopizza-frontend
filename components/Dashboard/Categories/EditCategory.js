import React, {useState} from 'react';
import styles from "../Products/Create/CreateProduct.module.scss";
import CategoryForm from "../../Forms/CategoryForm";

const EditCategory = ({category}) => {
    const [nameRu, setNameRu] = useState(category.translation.ru.name);
    const [nameRo, setNameRo] = useState(category.translation.ro.name);

    const [activeTab, setActiveTab] = useState("ro");

    const stateRu = {
        name: nameRu,
        setName: setNameRu
    }

    const stateRo = {
        name: nameRo,
        setName: setNameRo
    }

    const textRo = {
        name: "Numele categoriei"
    }

    const textRu = {
        name: 'Название категории'
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const category = {
            translation: {
                ro: {
                    name: nameRo,
                },
                ru: {
                    name: nameRu,
                }
            },
        }

        console.log(category);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className={styles.heading}>Edit the category:</h2>

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
                    <CategoryForm lang="ro"
                                  state={stateRo}
                                  text={textRo}/>
                    :
                    <CategoryForm lang="ru"
                                  state={stateRu}
                                  text={textRu}/>
            }

            <button type="submit" className={styles.btn__create}>Save</button>
        </form>
    );
};

export default EditCategory;
