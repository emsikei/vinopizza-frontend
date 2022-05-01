import React from 'react';
import styles from "../../../components/Dashboard/Dashboard.module.scss";
import Sidebar from "../../../components/Dashboard/Sidebar"
import OrdersList from '../../../components/Dashboard/Orders/OrdersList';

const OrdersPage = ({orders}) => {
    return (
        <div className={styles.dashboard}>
            <Sidebar />
            <OrdersList _orders={orders} />
        </div>
    );
};

export default OrdersPage;

export async function getStaticProps(context) {
    const response = await fetch(`http://localhost:5000/api/v1/orders`);
    const orders = await response.json();
    console.log("ORDERS: ", orders)

    return {
        props: {
            orders
        },
        revalidate: 10
    }
}
