import React, { useState, useContext } from 'react';
import styles from "./Categories.module.scss";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import ConfirmDialog from "../../Modals/Confirm/ConfirmDialog";
import { AppContext } from '../../../contexts/AppContext';

const CategoryItem = ({ index, category: { _id, translation } }) => {
    const [showDialog, setShowDialog] = useState(false);

    const value = useContext(AppContext);
    const [t, lang, changeLanguage] = value.lang;

    const router = useRouter();

    return (
        <>
            <tr className={styles.category__item}>
                <td>{index + 1}.</td>
                <td className={styles.name}>{translation[lang].name}</td>
                <td className={styles.edit}
                    onClick={() => router.push({
                        pathname: `/dashboard/categories/edit/${_id}`,
                    })}>
                    <FaEdit />
                </td>
                <td className={styles.remove} onClick={() => setShowDialog(!showDialog)}>
                    <FaTrashAlt />
                </td>
            </tr>
            <ConfirmDialog status={showDialog ? 'active' : ''}
                item={translation[lang].name} />
        </>
    );
};

export default CategoryItem;
