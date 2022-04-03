import React from 'react';
import {useRouter} from "next/router";
import styles from "../../../../components/Dashboard/Dashboard.module.scss";
import Sidebar from "../../../../components/Dashboard/Sidebar";

const Edit = () => {
    const {query} = useRouter();
    console.log(query)

    return (

        <div className={styles.dashboard}>
            <Sidebar/>
            <div style={{color: "#fff"}}>
                <p>id - {query.id}</p>
            </div>
        </div>
    );
};

export default Edit;
