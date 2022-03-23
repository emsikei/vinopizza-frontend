import styles from "../styles/Dashboard.module.scss"
import {useState} from "react";
import Link from "next/link"
import {useRouter} from "next/router"

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(null);
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
                    return(
                        <li key={index}
                            className={activeTab === index ? `${styles.active}` : ''}
                            onClick={() => {
                                toggleActiveTab(index);
                                router.push(`${item.link}`)
                            }}>
                            {/*<Link href={item.link}>*/}
                            {/*    <a>{item.name}</a>*/}
                            {/*</Link>*/}
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
