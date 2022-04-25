import React from 'react'
import styles from "../Products/Create/CreateProduct.module.scss";


const LanguageTab = ({activeTab, setActiveTab, unactiveTab, setUnactiveTab}) => {
    return (
        <div className={styles.languages}>
            <button
                className={activeTab === "ro"
                    ? `${styles.languages__btn} ${styles.active}`
                    : `${styles.languages__btn}`}
                onClick={() => {
                    setActiveTab("ro")
                    setUnactiveTab("ru")
                }}>
                ro
            </button>
            <button
                className={activeTab === "ru"
                    ? `${styles.languages__btn} ${styles.active}`
                    : `${styles.languages__btn}`}
                onClick={() => {
                    setActiveTab("ru")
                    setUnactiveTab("ro")
                }}>
                ru
            </button>
        </div>
    )
}

export default LanguageTab