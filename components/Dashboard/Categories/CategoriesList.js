import React, {useState} from 'react';
import styles from "./Categories.module.scss";
import {getAllUniqueCategories} from "../../../helpers";
import menu from "../../../data/menu"
import CategoryItem from "./CategoryItem";
import Link from "next/link";
import {AiOutlinePlus} from "react-icons/ai";

const CategoriesList = () => {
    const [categories, setCategories] = useState(getAllUniqueCategories(menu.products))

    return (

        <>
            <p style={{color: "#f6c162", paddingLeft: "100px"}}>
                <Link href="categories/create">
                    <a><AiOutlinePlus/><span>New category</span></a>
                </Link>
            </p>

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
