import React, {useState} from 'react';
import menu from "../../../data/menu"
import ProductItem from "./ProductItem";
import styles from "./Products.module.scss"
import {getAllUniqueCategories, getCategoriesWithAllFilter} from "../../../helpers";
import Filter from "./Filter";
import ConfirmDialog from "../../Modals/Confirm/ConfirmDialog";

const ProductsList = () => {
    const [products, setProducts] = useState(menu.products);
    const [categories, setCategories] = useState(getCategoriesWithAllFilter(getAllUniqueCategories(menu.products)))

    const filterProducts = (category) => {
        if (category === 'Toate') {
            setProducts(menu.products);
            return;
        }
        const newProducts = menu.products.filter((item) => item.translation.ro.category === category);
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
                        filterProducts={filterProducts}/>

                <table className={styles.products}>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products.map((product, index) => {
                        return (<ProductItem key={product._id}
                                             index={index}
                                             product={product}
                                             removeProduct={removeProduct}/>);
                    })}
                    </tbody>
                </table>
            </div>

        </>
    );
};

export default ProductsList;
