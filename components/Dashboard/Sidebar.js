import styles from "./Dashboard.module.scss"
import {useContext} from "react";
import {useRouter} from "next/router"
import {AppContext} from "../../contexts/AppContext";

const Sidebar = () => {
    const value = useContext(AppContext);
    const [activeTab, setActiveTab] = value.tab;

    const router = useRouter();

    const toggleActiveTab = (index) => {
        if (activeTab === index) {
            return;
        }
        setActiveTab(index);
    }

    return (
        <div className={styles.sidebar}>
            <h1 onClick={() => router.push('/dashboard')}>Admin panel</h1>
            <ul>
                {list.map((item, index) => {
                    return (
                        <li key={index}
                            className={activeTab === index ? `${styles.active}` : ''}
                            onClick={() => {
                                toggleActiveTab(index);
                                router.push(`${item.link}`)
                            }}>
                            {item.name}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Sidebar;

const list = [
    {
        name: "Statistics",
        link: "/dashboard/statistics"
    },
    {
        name: "Products",
        link: "/dashboard/products"
    },
    {
        name: "Categories",
        link: "/dashboard/categories"
    },
    {
        name: "Orders",
        link: "/dashboard/orders"
    },
]
