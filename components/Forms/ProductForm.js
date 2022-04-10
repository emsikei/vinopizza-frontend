import React from 'react';
import styles from "../Dashboard/Products/Create/CreateProduct.module.scss";
import {FaCloudUploadAlt} from "react-icons/fa"

const ProductForm = ({lang, state, categories, text}) => {
    return (
        <div className={styles[lang]}>
            <label>{text.name}:</label>
            <input type="text"
                   value={state.name}
                   onChange={(e) => state.setName(e.target.value)}
                   required={true}
            />

            <label>{text.description}:</label>
            <textarea type="text"
                      value={state.description}
                      onChange={(e) => state.setDescription(e.target.value)}
                      required={true}
            />

            <label>{text.category}: </label>
            <select onChange={(e) => state.setCategory(e.target.value)}>
                {categories.map((category, index) => {
                    return (
                        <option key={index}
                                value={category.translation[lang].name}>
                            {category.translation[lang].name}
                        </option>
                    );
                })}
            </select>

            <label>{text.price}:</label>
            <input type="number"
                   value={state.price}
                   onChange={(e) => state.setPrice(e.target.value)}
                   required={true}
            />

            <label>{text.discount}:</label>
            <input type="number"
                   value={state.discount}
                   onChange={(e) => state.setDiscount(e.target.value)}
            />

            <label>{text.metrics}:</label>
            <input type="text"
                   value={state.metrics}
                   onChange={(e) => state.setMetrics(e.target.value)}
                   required={true}
            />

            <div className={styles.status__wrapper}>{text.status}:
                <input type="checkbox"
                       value={state.isActive}
                       id="status"
                       checked={state.isActive}
                       onChange={(e) => state.setIsActive(e.target.checked)}
                />
                <label htmlFor="status"></label>
            </div>


            <label htmlFor="file-upload" className={styles.image__label}>
                <FaCloudUploadAlt/><span>{text.image}</span>:
            </label>
            <input type="file"
                   accept="image/png, image/jpeg"
                   id="file-upload"
                   onChange={state.handleImageChange} required={true}/>
            <div className={styles.image__wrapper}>
                <img className={styles.product__image} src={state.imageURL}/>
            </div>
        </div>
    );
};

export default ProductForm;
