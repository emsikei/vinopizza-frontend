import React, { useState, useContext } from 'react';
import styles from "./Categories.module.scss";
import { getAllUniqueCategories } from "../../../helpers";
import menu from "../../../data/menu"
import CategoryItem from "./CategoryItem";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { AppContext } from '../../../contexts/AppContext';

const CategoriesList = () => {
    const [categories, setCategories] = useState(getAllUniqueCategories(menu.products))

    const value = useContext(AppContext);
    const [t, lang, changeLanguage] = value.lang;

    return (

        <>
            <p style={{ color: "#f6c162", paddingLeft: "100px" }}>
                <Link href="categories/create">
                    <a>
                        <AiOutlinePlus />
                        <span>{t.dashboard.categories.inscriptions.createShort}</span>
                    </a>
                </Link>
            </p>

            <table className={styles.categories}>
                <thead>
                    <tr>
                        <th></th>
                        <th>{t.dashboard.categories.table.name}</th>
                        <th>{t.dashboard.categories.table.edit}</th>
                        <th>{t.dashboard.categories.table.remove}</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map((category, index) => {
                        return (<CategoryItem key={index} index={index} category={category} />);
                    })}
                </tbody>
            </table>
        </>


    );
};

export default CategoriesList;
