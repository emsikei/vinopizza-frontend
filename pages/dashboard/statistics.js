import React from 'react';
import Dashboard from "../../components/Dashboard";
import styles from "../../styles/Dashboard.module.scss";
import Sidebar from "../../components/Sidebar";
import DashboardContent from "../../components/DashboardContent";

const Statistics = () => {
    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            <DashboardContent text="Statistics Page"/>
        </div>
    );
};

export default Statistics;
