import React from 'react';
import styles from '../Products.module.scss'
import { useContext } from 'react';
import { AppContext } from '../../../../contexts/AppContext';

const FilterItem = ({category, filterProducts, active, toggleActiveButton, index}) => {
    const value = useContext(AppContext);
    const [t, lang, changeLanguage] = value.lang;

    return (
        <div className={active === index ? `${styles.filter__item} ${styles.active}` : `${styles.filter__item}`}
            onClick={() => {
                filterProducts(category.translation[lang].name)
                toggleActiveButton(index);
            }}>
            {category.translation[lang].name}
        </div>
    );
};

export default FilterItem;
