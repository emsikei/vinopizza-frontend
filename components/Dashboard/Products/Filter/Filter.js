import React, {useState, useContext} from 'react';
import FilterItem from "./FilterItem";
import styles from "../Products.module.scss"
import Link from "next/link";
import {AiOutlinePlus} from "react-icons/ai";
import { AppContext } from '../../../../contexts/AppContext';

const Filter = ({categories, filterProducts}) => {
    const [active, setActive] = useState(0);

    const value = useContext(AppContext);
    const [t, lang, changeLanguage] = value.lang;

    const toggleActiveButton = (index) => {
        if (active === index) {
            return setActive(null);
        }
        setActive(index);
    }

    return (
        <div className={styles.filter}>

            <p style={{color: "#f6c162"}}>
                <Link href="products/create">
                    <a><AiOutlinePlus/><span>{t.dashboard.products.inscriptions.createShort}</span></a>
                </Link>
            </p>

            {categories.map((category, index) => {
                return (
                    <FilterItem key={category._id}
                                category={category}
                                filterProducts={filterProducts}
                                active={active}
                                index={index}
                                toggleActiveButton={toggleActiveButton}
                                setActive={setActive}/>
            )
            })}
        </div>
    );
};

export default Filter;
