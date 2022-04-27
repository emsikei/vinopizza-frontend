import React, {useState} from 'react';
import FilterItem from "./FilterItem";
import styles from "../Products.module.scss"
import Link from "next/link";
import {AiOutlinePlus} from "react-icons/ai";

const Filter = ({categories, filterProducts}) => {

    const [active, setActive] = useState(0);

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
                    <a><AiOutlinePlus/><span>New product</span></a>
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
