import React from 'react';
import Dashboard from "../../components/Dashboard";
import Sidebar from "../../components/Sidebar";
import styles from "../../styles/Dashboard.module.scss";
import DashboardContent from "../../components/DashboardContent";
import ProductsList from "../../components/Dashboard/Products/ProductsList";

const Products = () => {
    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            {/*<DashboardContent text="Products Page"/>*/}
            <ProductsList/>
        </div>
    );
};

export default Products;
