import React, {useState} from 'react';
import styles from "./Products.module.scss"
import {FaEdit, FaTrashAlt} from "react-icons/fa";
import ConfirmDialog from "../../Modals/Confirm/ConfirmDialog";
import {useRouter} from "next/router";

const ProductItem = ({index, product, removeProduct}) => {
    const [showDialog, setShowDialog] = useState(false);

    const router = useRouter();

    return (
        <>
            <tr className={styles.product__item}>
                <td>{index + 1}.</td>
                <td className={styles.name}>{product.translation.ro.name}</td>
                <td className={styles.category}>{product.translation.ro.category}</td>
                <td className={styles.price}>{product.price}</td>
                <td>{product.isActive
                    ? <span className={styles.status__active}>active</span>
                    : <span className={styles.status__inactive}>inactive</span>}
                </td>
                <td className={styles.edit}
                    onClick={() => router.push({
                        pathname: `/dashboard/products/edit/${product._id}`,
                    })}
                >
                    <FaEdit/>
                </td>
                <td className={styles.remove} onClick={() => setShowDialog(!showDialog)}>
                    <FaTrashAlt/>
                </td>
            </tr>
            <ConfirmDialog status={showDialog ? 'active' : ''}
                           item={product.translation.ro.name}/>
        </>

    );
};

export default ProductItem;
