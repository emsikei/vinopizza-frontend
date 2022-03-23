import React from 'react';
import styles from "./Products.module.scss"
import {FaEdit, FaTrashAlt} from "react-icons/fa";

const ProductItem = ({index, product: {_id, image, price, metrics, translation}}) => {
    return (
        <tr className={styles.product__item}>
            <td>{index + 1}.</td>
            <td className={styles.name}>{translation.ro.name}</td>
            <td className={styles.category}>{translation.ro.category}</td>
            <td className={styles.price}>{price}</td>
            <td className={styles.edit}><FaEdit/></td>
            <td className={styles.remove}><FaTrashAlt/></td>
        </tr>
    );
};

export default ProductItem;
