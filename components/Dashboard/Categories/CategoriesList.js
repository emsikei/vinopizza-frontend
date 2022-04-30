import React, { useState, useContext } from 'react';
import styles from "./Categories.module.scss";
import CategoryItem from "./CategoryItem";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import { AppContext } from '../../../contexts/AppContext';
import axios from 'axios';

const CategoriesList = ({ _categories }) => {
    const [categories, setCategories] = useState(_categories);

    const value = useContext(AppContext);
    const [t, lang, changeLanguage] = value.lang;

    const deleteCategory = (id, categories, setCategories, setActive) => {
        axios.delete(`http://localhost:5000/api/v1/categories/${id}`).then(res => {
            console.log(res.data);
        });

        const newState = categories.filter(category => category._id !== id);
        setCategories([...newState])

        setActive(false);
    };

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
                        return (
                            <CategoryItem
                                key={index}
                                index={index}
                                category={category}
                                categories={categories}
                                setCategories={setCategories}
                                deleteCategory={deleteCategory}
                            />);
                    })}
                </tbody>
            </table>
        </>
    );
};

export default CategoriesList;
