import React from 'react';
import styles from "./Categories.module.scss";
import {FaEdit, FaTrashAlt} from "react-icons/fa";

const CategoryItem = ({index, category: {_id, translation}}) => {
    return (
        <tr className={styles.category__item}>
            <td>{index + 1}.</td>
            <td className={styles.name}>{translation.ro.name}</td>
            <td className={styles.edit}><FaEdit/></td>
            <td className={styles.remove}><FaTrashAlt/></td>
        </tr>
    );
};

export default CategoryItem;
