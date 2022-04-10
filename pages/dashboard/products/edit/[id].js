import React from 'react';
import {useRouter} from "next/router";
import styles from "../../../../components/Dashboard/Dashboard.module.scss";
import Sidebar from "../../../../components/Dashboard/Sidebar";
import EditProduct from "../../../../components/Dashboard/Products/EditProduct/EditProduct";

import menu from "../../../../data/menu"

const Edit = () => {
    const {query} = useRouter();
    console.log(query)

    return (

        <div className={styles.dashboard}>
            <Sidebar/>
            <EditProduct product={menu.products[1]}/>
        </div>
    );
};

export default Edit;
