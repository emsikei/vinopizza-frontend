import React from 'react';
import styles from "../../components/Dashboard/Dashboard.module.scss";
import Sidebar from "../../components/Dashboard/Sidebar";
import CategoriesList from "../../components/Dashboard/Categories/CategoriesList";

const Categories = () => {
    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            {/*<DashboardContent text="Categories Page"/>*/}
            <CategoriesList/>
        </div>
    );
};

export default Categories;
