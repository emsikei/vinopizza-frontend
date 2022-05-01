import React from 'react';
import Dashboard from "../../../components/Dashboard/Dashboard";
import Sidebar from "../../../components/Dashboard/Sidebar";
import styles from "../../../components/Dashboard/Dashboard.module.scss";
import DashboardContent from "../../../components/Dashboard/DashboardContent";
import ProductsList from "../../../components/Dashboard/Products/ProductsList";

const ProductsIndex = ({ products, categories }) => {
    return (
        <div className={styles.dashboard}>
            <Sidebar />
            {/*<DashboardContent text="Index Page"/>*/}
            <ProductsList
                _products={products}
                _categories={categories} />
        </div>
    );
};

export default ProductsIndex;

export async function getStaticProps(context) {
    const responseProducts = await fetch(`http://localhost:5000/api/v1/products`);
    const products = await responseProducts.json();

    const responseCategories = await fetch(`http://localhost:5000/api/v1/categories`);
    const categories = await responseCategories.json();

    return {
        props: {
            products,
            categories
        },
        revalidate: 10
    }
}
