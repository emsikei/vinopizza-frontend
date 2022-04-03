import React, {useState} from 'react';
import styles from "./Categories.module.scss";
import {getAllUniqueCategories} from "../../../helpers";
import menu from "../../../data/menu"
import CategoryItem from "./CategoryItem";

const CategoriesList = () => {
    const [categories, setCategories] = useState(getAllUniqueCategories(menu.products))

    return (

        <>
            <table className={styles.categories}>
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Edit</th>
                    <th>Remove</th>
                </tr>
                </thead>
                <tbody>
                {categories.map((category, index) => {
                    return (<CategoryItem key={index} index={index} category={category}/>);
                })}
                </tbody>
            </table>
        </>


    );
};

export default CategoriesList;
