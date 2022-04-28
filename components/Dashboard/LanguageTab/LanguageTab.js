import React from 'react'
import styles from "./LanguageTab.module.scss"


const LanguageTab = ({activeTab, setActiveTab, unactiveTab, setUnactiveTab, heading}) => {
    return (
        <div>
            <h2 className={styles.languages__heading}>{heading}</h2>

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
        </div>
    )
}

export default LanguageTab