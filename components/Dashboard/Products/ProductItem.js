import React, { useState, useContext } from 'react';
import styles from "./Products.module.scss"
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import ConfirmDialog from "../../Modals/Confirm/ConfirmDialog";
import { useRouter } from "next/router";
import { AppContext } from '../../../contexts/AppContext';

const ProductItem = ({ index, product, products, setProducts, deleteProduct, categories }) => {
    const [showDialog, setShowDialog] = useState(false);

    const value = useContext(AppContext);
    const [t, lang, changeLanguge] = value.lang;

    const router = useRouter();

    //TODO: display category in list
    //TODO: how to fetch category 
    //TODO: need absolute url for products
    //TODO: fix image update
    //TODO: display category as id or translation

    const getCategory = (id) => {
        const category = categories.find(c => c._id === id)
        return category;
    }

    const [currentCategory, setCategory] = useState(getCategory(product.category));

    return (
        <>
            <tr className={styles.product__item}>
                <td>{index + 1}.</td>
                <td className={styles.name}>{product.translation[lang].name}</td>
                <td className={styles.category}>{currentCategory?.translation[lang]?.name}</td>
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
                    <FaEdit />
                </td>
                <td className={styles.remove} onClick={() => setShowDialog(true)}>
                    <FaTrashAlt />
                </td>
            </tr>
            <ConfirmDialog
                itemId={product._id}
                itemName={product.translation[lang].name}
                active={showDialog}
                setActive={setShowDialog}
                t={t}
                items={products}
                setItems={setProducts}
                deleteFunc={deleteProduct}
            />
        </>

    );
};

export default ProductItem;
