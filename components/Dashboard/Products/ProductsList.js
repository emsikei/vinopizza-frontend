import React, { useState, useContext } from 'react';
import menu from "../../../data/menu"
import ProductItem from "./ProductItem";
import styles from "./Products.module.scss"
import { getAllUniqueCategories, getCategoriesWithAllFilter } from "../../../helpers";
import Filter from "./Filter/Filter";
import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa"
import { AppContext } from '../../../contexts/AppContext';

const ProductsList = () => {
    const [products, setProducts] = useState(menu.products);
    const [categories, setCategories] = useState(getCategoriesWithAllFilter(getAllUniqueCategories(menu.products)))

    const value = useContext(AppContext);
    const [t, lang, changeLanguge] = value.lang;

    const [currentSort, setCurrentSort] = useState('default');

    const onSortChange = () => {
        let nextSort;

        if (currentSort === 'down') nextSort = 'up';
        else if (currentSort === 'up') nextSort = 'default';
        else if (currentSort === 'default') nextSort = 'down';

        setCurrentSort(nextSort);
    };

    const sortTypes = {
        up: {
            component: <FaSortUp />,
            fn: (a, b) => Number(a.isActive) - Number(b.isActive)
        },
        down: {
            component: <FaSortDown />,
            fn: (a, b) => Number(b.isActive) - Number(a.isActive)
        },
        default: {
            component: <FaSort />,
            fn: (a, b) => a
        }
    };

    const filterProducts = (category) => {
        if (category === 'Toate' || category === "Все") {
            setProducts(menu.products);
            return;
        }
        const newProducts = menu.products.filter((item) => item.translation[lang].category === category);
        setProducts(newProducts);
    };

    const removeProduct = (id) => {
        const newState = products.filter(product => product._id !== id);
        setProducts(newState);
    }

    return (
        <>
            <div className={styles.container}>
                <Filter categories={categories}
                    filterProducts={filterProducts} />

                <table className={styles.products}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>{t.dashboard.products.table.name}</th>
                            <th>{t.dashboard.products.table.category}</th>
                            <th>{t.dashboard.products.table.price}</th>
                            <th onClick={onSortChange} className={styles.heading__status}>
                                <span>{t.dashboard.products.table.status}</span>
                                <span className={styles.sort__icon}>
                                    {sortTypes[currentSort].component}
                                </span>
                            </th>
                            <th>{t.dashboard.products.table.edit}</th>
                            <th>{t.dashboard.products.table.remove}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[...products].sort(sortTypes[currentSort].fn).map((product, index) => {
                            return (<ProductItem key={product._id}
                                index={index}
                                product={product}
                                removeProduct={removeProduct} />);
                        })}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default ProductsList;
