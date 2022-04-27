import React, { useState } from 'react';
import styles from "./Categories.module.scss";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import ConfirmDialog from "../../Modals/Confirm/ConfirmDialog";

const CategoryItem = ({ index, category: { _id, translation } }) => {
    const [showDialog, setShowDialog] = useState(false);

    const router = useRouter();

    return (
        <>
            <tr className={styles.category__item}>
                <td>{index + 1}.</td>
                <td className={styles.name}>{translation.ro.name}</td>
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
                item={translation.ro.name} />
        </>
    );
};

export default CategoryItem;
