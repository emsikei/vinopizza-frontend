import styles from "../../styles/Dashboard.module.scss";
import Sidebar from "../../components/Sidebar";
import DashboardContent from "../../components/DashboardContent";
import React from "react";

export default function DashboardIndex() {
    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            <DashboardContent text="Dashboard Index Page"/>
        </div>
    );
}