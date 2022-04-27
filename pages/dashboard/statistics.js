import React from 'react';
import styles from "../../components/Dashboard/Dashboard.module.scss";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardContent from "../../components/Dashboard/DashboardContent";

const Statistics = () => {
    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            <DashboardContent text="Statistics Page"/>
        </div>
    );
};

export default Statistics;
