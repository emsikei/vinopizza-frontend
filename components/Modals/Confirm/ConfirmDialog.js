import React, { useState } from 'react';
import styles from "./Confirm.module.scss"
import { GrClose } from "react-icons/gr"

const ConfirmDialog = ({ itemId, itemName, items, setItems, active, setActive, t, deleteFunc }) => {
    return (
        <div className={active ? `${styles.confirm} ${styles.active}` : `${styles.confirm}`}
            onClick={() => setActive(false)
            }>
            <div className={active ? `${styles.confirm__content} ${styles.active}` : `${styles.confirm__content}`} onClick={e => e.stopPropagation()}>
                <div className={styles.confirm__header}>
                    <div className={styles.confirm__close} onClick={() => setActive(false)}>
                        <GrClose />
                    </div>
                </div>
                <div className={styles.confirm__content__inner}>
                    <p>{t.confirmDialog.text} "{itemName}"?</p>
                    <div className={styles.buttons}>
                        <button className={styles.no} onClick={() => setActive(false)}>{t.confirmDialog.no}</button>
                        <button className={styles.yes}
                            onClick={() => deleteFunc(itemId, items, setItems, setActive)}>{t.confirmDialog.yes}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmDialog;
