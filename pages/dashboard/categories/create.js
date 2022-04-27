import React from 'react';
import styles from "../../../components/Dashboard/Dashboard.module.scss";
import Sidebar from "../../../components/Dashboard/Sidebar";
import CreateCategory from "../../../components/Dashboard/Categories/CreateCategory";

const CreateCategoryIndex = () => {
    return (
        <div className={styles.dashboard}>
            <Sidebar />
            <CreateCategory />
        </div>
    );
};

export default CreateCategoryIndex;
