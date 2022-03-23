import React, {useState} from 'react';
import menu from "../../../data/menu"
import ProductItem from "./ProductItem";
import styles from "./Products.module.scss"

const ProductsList = () => {
    const [products, setProducts] = useState(menu.products);

    return (
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
                    return (<ProductItem key={product._id} index={index} product={product}/>);
                })}
            </tbody>
        </table>
    );
};

export default ProductsList;
