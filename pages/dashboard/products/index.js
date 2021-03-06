import React from 'react';
import Dashboard from "../../../components/Dashboard/Dashboard";
import Sidebar from "../../../components/Dashboard/Sidebar";
import styles from "../../../components/Dashboard/Dashboard.module.scss";
import DashboardContent from "../../../components/Dashboard/DashboardContent";
import ProductsList from "../../../components/Dashboard/Products/ProductsList";

const Index = () => {
    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            {/*<DashboardContent text="Index Page"/>*/}
            <ProductsList/>
        </div>
    );
};

export default Index;
