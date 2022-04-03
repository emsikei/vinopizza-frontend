import React, {useState} from 'react';
import FilterItem from "./FilterItem";
import styles from "./Products.module.scss"

const Filter = ({categories, filterProducts}) => {

    const [active, setActive] = useState(0);
    // const [query, setQuery] = useState("");

    const toggleActiveButton = (index) => {
        if (active === index) {
            return setActive(null);
        }
        setActive(index);
    }

    // const handleInput = (e) => {
    //     e.preventDefault();
    //     setQuery(e.target.value);
    // }

    return (
        <div className={styles.filter}>

            {/*<input placeholder="Search" type="search" className={styles.search} onChange={(e) => handleInput(e)}/>*/}
            
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
