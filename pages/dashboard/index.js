import styles from "../../components/Dashboard/Dashboard.module.scss";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardContent from "../../components/Dashboard/DashboardContent";
import React from "react";

export default function DashboardIndex() {
    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            <DashboardContent text="Dashboard Index Page"/>
        </div>
    );
}