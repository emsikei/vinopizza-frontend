import React from 'react';
import styles from "../../../components/Dashboard/Dashboard.module.scss";
import Sidebar from "../../../components/Dashboard/Sidebar";
import CreateProduct from "../../../components/Dashboard/Products/CreateProduct";

const CreateProductIndex = ({categories}) => {
    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            <CreateProduct _categories={categories}/>
        </div>
    );
};

export default CreateProductIndex;

export async function getStaticProps(context) {
    const response = await fetch(`http://localhost:5000/api/v1/categories`)
    const categories = await response.json();

    console.log(categories);

    return {
        props: {
            categories
        },
        revalidate: 10
    }
}