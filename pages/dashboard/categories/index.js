import React from 'react';
import styles from "../../../components/Dashboard/Dashboard.module.scss";
import Sidebar from "../../../components/Dashboard/Sidebar";
import CategoriesList from "../../../components/Dashboard/Categories/CategoriesList";

const Categories = ({categories}) => {
    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            <CategoriesList _categories={categories}/>
        </div>
    );
};

export default Categories;

export async function getStaticProps(context) {
    const response = await fetch(`http://localhost:5000/api/v1/categories`)
    const categories = await response.json();

    return {
        props: {
            categories
        },
        revalidate: 10
    }
}
