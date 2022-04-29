import styles from "../../components/Dashboard/Dashboard.module.scss";
import Sidebar from "../../components/Dashboard/Sidebar";
import DashboardContent from "../../components/Dashboard/DashboardContent";
import React from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext, useEffect } from "react";
import { useRouter } from 'next/router'
import Signin from "../../components/Login/Signin"

export default function DashboardIndex() {
    const authContext = useContext(AuthContext);
    const router = useRouter();

    // useEffect(() => {
    //     if (localStorage.getItem('token')) {
    //         authContext.checkAuth();
    //     }
    // }, [])


    // useEffect(() => {
    //     if (!authContext.isAuth) {
    //         // console.log(authContext.isAuth)
    //         // console.log("NOT AUTHORIZED")
    //         // return (<Signin />)
    //         router.push("/signin")
    //     }
    // }, [])

    return (
        <div className={styles.dashboard}>
            <Sidebar />
            <DashboardContent text="Dashboard Index Page" />
            {/* <button onClick={() => { authContext.logout(); router.push("/signin")}}>log out</button> */}
        </div>
    );
}