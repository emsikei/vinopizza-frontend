import React, { useState, useContext } from 'react'
import styles from "./Orders.module.scss"
import { GiConfirmed } from "react-icons/gi"
import { FaTrashAlt } from "react-icons/fa"
import ConfirmDialog from '../../Modals/Confirm/ConfirmDialog'
import { AppContext } from '../../../contexts/AppContext'

const OrderItem = ({ index, order, orders, setOrders, deleteOrder }) => {
    const [showDialog, setShowDialog] = useState(false);
    const value = useContext(AppContext);
    const [t, lang, changeLanguage] = value.lang;

    return (
        <>
            <tr className={styles.orders__item}>
                <td>{index + 1}.</td>
                <td className={styles.time}>{order.time}</td>
                <td className={styles.total}>{order.total} L</td>
                <td className={styles.status}>{order.status}</td>
                <td className={styles.payment}>{order.paymentMethod}</td>

                <td className={styles.accept}>
                    <GiConfirmed />
                </td>
                <td className={styles.remove} onClick={() => setShowDialog(true)}>
                    <FaTrashAlt />
                </td>
            </tr>
            <ConfirmDialog
                itemId={order._id}
                active={showDialog}
                setActive={setShowDialog}
                t={t}
                items={orders}
                setItems={setOrders}
                deleteFunc={deleteOrder}
            />
        </>
    )
}

export default OrderItem