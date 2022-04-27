import React from 'react';
import Dashboard from "../../components/Dashboard/Dashboard";
import styles from "../../components/Dashboard/Dashboard.module.scss";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardContent from "../../components/Dashboard/DashboardContent";

const Orders = () => {
    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            <DashboardContent text="Orders Page"/>
        </div>
    );
};

export default Orders;
