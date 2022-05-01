import React, { useState, useEffect } from 'react'
import OrderItem from './OrderItem';
import styles from "./Orders.module.scss"
import axios from 'axios';

const OrdersList = ({ _orders }) => {
    const [orders, setOrders] = useState(_orders);

    const deleteOrder = (id, orders, setOrders, setActive) => {
        axios.delete(`http://localhost:5000/api/v1/orders/${id}`).then(res => {
            console.log(res.data);
        });

        const newState = orders.filter(order => order._id !== id);
        setOrders([...newState])

        setActive(false);
    };

    return (
        <>
            <table className={styles.orders}>
                <thead>
                    <tr>
                        <th></th>
                        <th>Time</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Payment Method</th>
                        <th>Confirm</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => {
                        return (
                            <OrderItem
                                index={index}
                                order={order}
                                orders={orders}
                                setOrders={setOrders}
                                deleteOrder={deleteOrder}
                            />)
                    })}
                </tbody>
            </table>
        </>
    )


}

export default OrdersList