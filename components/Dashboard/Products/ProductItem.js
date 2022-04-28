import React, {useState, useContext} from 'react';
import styles from "./Products.module.scss"
import {FaEdit, FaTrashAlt} from "react-icons/fa";
import ConfirmDialog from "../../Modals/Confirm/ConfirmDialog";
import {useRouter} from "next/router";
import ro from '../../../locales/ro';
import ru from '../../../locales/ru';
import { AppContext } from '../../../contexts/AppContext';

const ProductItem = ({index, product, removeProduct}) => {
    const [showDialog, setShowDialog] = useState(false);

    const value = useContext(AppContext);
    const [t, lang, changeLanguge] = value.lang;

    const router = useRouter();

    return (
        <>
            <tr className={styles.product__item}>
                <td>{index + 1}.</td>
                <td className={styles.name}>{product.translation[lang].name}</td>
                <td className={styles.category}>{product.translation[lang].category}</td>
                <td className={styles.price}>{product.price}</td>
                <td>{product.isActive
                    ? <span className={styles.status__active}>{t.dashboard.products.table.active} </span>
                    : <span className={styles.status__inactive}>{t.dashboard.products.table.inactive} </span>}
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
                           item={product.translation[lang].name}/>
        </>

    );
};

export default ProductItem;
