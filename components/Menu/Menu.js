import menu from "../../data/menu";
import { useState, useContext } from "react";
import styles from "./Menu.module.scss";
import Category from "./Category";
import MenuItem from "./MenuItem";
import { getAllUniqueCategories } from "../../helpers";
import { AppContext } from "../../contexts/AppContext";

const Menu = ({ menu }) => {
    const [categories, setCategories] = useState(menu.categories);
    const [products, setProducts] = useState(menu.products);

    const value = useContext(AppContext);
    const [t, lang, changeLanguage] = value.lang;

    const filterItems = (category) => {
        if (category === "Toate") {
            setProducts(menu.products);
            return;
        }
        const newItems = menu.products.filter(
            (product) => product.translation.ro.category === category
        );
        setProducts(newItems);
    };

    return (
        <div className="container">
            <div className={styles.menu__container}>
                <div className={styles.menu__heading}>
                    <h2>{t.menu.title}</h2>
                    <p className={styles.flip}>
                        <span className={styles.deg1}></span>
                        <span className={styles.deg2}></span>
                        <span className={styles.deg3}></span>
                    </p>
                    <p>
                        {t.menu.subtitle}
                    </p>
                </div>

                {categories.map((category, index) => {
                    return (
                        <div className={styles.menu__category} key={index}>
                            <Category name={category.translation[lang].name}/>
                            <div className={styles.menu__products}>
                                {products
                                    .filter(
                                        (product) =>
                                            product.category ===
                                            category._id
                                    )
                                    .map((product) => {
                                        return (
                                            <MenuItem
                                                key={product._id}
                                                product={product}
                                            />
                                        );
                                    })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Menu;