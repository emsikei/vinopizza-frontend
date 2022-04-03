import React from 'react';
import styles from "../../../components/Dashboard/Dashboard.module.scss";
import Sidebar from "../../../components/Dashboard/Sidebar";
import CreateProduct from "../../../components/Dashboard/Products/Create/CreateProduct";

const CreateProductIndex = () => {


    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            <CreateProduct/>
        </div>
    );
};

export default CreateProductIndex;
