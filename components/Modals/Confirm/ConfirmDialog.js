import React, {useState} from 'react';
import styles from "./Confirm.module.scss"

const ConfirmDialog = ({status, item}) => {

    // TODO: make api request (delete product) on "Yes" button & close dialog on "No" button

    return (
        <div className={`${styles.confirm} ${styles[status]}`}>
            <p>Are you sure you want to delete the {`"${item}"`}?</p>
            <div className={styles.buttons}>
                <button className={styles.no}>No</button>
                <button className={styles.yes}>Yes</button>
            </div>
        </div>
    );
};

export default ConfirmDialog;
