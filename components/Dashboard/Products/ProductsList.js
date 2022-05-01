import React, { useState, useContext } from 'react';
import menu from "../../../data/menu"
import ProductItem from "./ProductItem";
import styles from "./Products.module.scss"
import { getAllUniqueCategories, getCategoriesWithAllFilter } from "../../../helpers";
import Filter from "./Filter/Filter";
import { FaSortUp, FaSortDown, FaSort } from "react-icons/fa"
import { AppContext } from '../../../contexts/AppContext';
import axios from 'axios';

const ProductsList = ({ _products, _categories }) => {
    const [products, setProducts] = useState(_products);
    const [categories, setCategories] = useState(getCategoriesWithAllFilter(_categories))

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
        if (category.translation.ro.name === 'Toate' || category.translation.ru.name === "Все") {
            setProducts(_products);
            return;
        }
        const newProducts = products.filter(item => item.category === category._id);
        setProducts(newProducts);
    };

    const deleteProduct = (id, products, setProducts, setActive) => {
        axios.delete(`http://localhost:5000/api/v1/products/${id}`).then(res => {
            console.log(res.data);
        });

        const newState = products.filter(category => category._id !== id);
        setProducts([...newState])

        setActive(false);
    };

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
                            return (
                                <ProductItem key={product._id}
                                    index={index}
                                    product={product}
                                    products={products}
                                    categories={_categories}
                                    setProducts={setProducts}
                                    deleteProduct={deleteProduct} />
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default ProductsList;
