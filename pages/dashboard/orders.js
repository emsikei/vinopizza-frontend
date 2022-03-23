import React from 'react';
import Dashboard from "../../components/Dashboard";
import styles from "../../styles/Dashboard.module.scss";
import Sidebar from "../../components/Sidebar";
import DashboardContent from "../../components/DashboardContent";

const Orders = () => {
    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            <DashboardContent text="Orders Page"/>
        </div>
    );
};

export default Orders;
