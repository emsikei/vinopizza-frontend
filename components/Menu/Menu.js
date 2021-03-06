import menu from "../../data/menu";
import {useState} from "react";
import styles from "./Menu.module.scss";
import Category from "./Category";
import MenuItem from "./MenuItem";
import {getAllUniqueCategories} from "../../helpers";

const Menu = () => {
    const [categories, setCategories] = useState(getAllUniqueCategories(menu.products));
    const [products, setProducts] = useState(menu.products);

    // const value = useContext(AppContext);
    // const [cart, setCart] = value.cart;
    //
    // const addToCart = (product, id) => {
    //     for (let item of cart) {
    //         if (item._id === id) {
    //             product.quantity += 1;
    //             return;
    //         }
    //     }
    //     product.quantity = 1;
    //     setCart([...cart, product]);
    // };

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
                    <h2>Our Menu</h2>
                    <p className={styles.flip}>
                        <span className={styles.deg1}></span>
                        <span className={styles.deg2}></span>
                        <span className={styles.deg3}></span>
                    </p>
                    <p>
                        Far far away, behind the word mountains, far from the countries
                        Vokalia and Consonantia, there live the blind texts.
                    </p>
                </div>

                {categories.map((category, index) => {
                    return (
                        <div className={styles.menu__category} key={index}>
                            <Category name={category.translation.ro.name}/>
                            <div className={styles.menu__products}>
                                {products
                                    .filter(
                                        (product) =>
                                            product.translation.ro.category ===
                                            category.translation.ro.name
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
