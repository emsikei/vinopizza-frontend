import React from 'react';
import styles from './Products.module.scss'

const FilterItem = ({category, filterProducts, active, toggleActiveButton, index}) => {
    return (
        <div className={active === index ? `${styles.filter__item} ${styles.active}` : `${styles.filter__item}`}
            onClick={() => {
                filterProducts(category.translation.ro.name)
                toggleActiveButton(index);
            }}>
            {category.translation.ro.name}
        </div>
    );
};

export default FilterItem;
