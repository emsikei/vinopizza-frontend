import {useState} from "react";
import menu from "../data/menu"
import Sidebar from "./Sidebar";

import styles from "../styles/Dashboard.module.scss"
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
    const [products, setProducts] = useState(menu.products);

    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            <DashboardContent />
        </div>
    );
}

export default Dashboard;