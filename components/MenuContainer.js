import menu from "../data/menu";
import { useState } from "react";
import styles from "../styles/Menu.module.scss";
import Menu from "./Menu";
import Categories from "./Categories";

const allCategories = [
  { translation: { ru: { name: "Все" }, ro: { name: "Toate" } } },
  ...menu.categories,
];

const MenuContainer = () => {
  const [categories, setCategories] = useState(allCategories);
  const [products, setProducts] = useState(menu.products);

  const filterItems = (category) => {
    if (category === "Toate") {
      setProducts(menu.products);
      return;
    }
    const newItems = menu.products.filter(
      (product) => product["translation"]["ro"]["category"] === category
    );
    setProducts(newItems);
  };

  return (
    <div className={styles.menu__container}>
      <div className={styles.menu__heading}>
        <h2>Our Menu Pricing</h2>
        <p className={styles.flip}>
          <span className={styles.deg1}></span>
          <span className={styles.deg2}></span>
          <span className={styles.deg3}></span>
        </p>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
      </div>

      <Categories categories={categories} filterItems={filterItems} />
      <Menu products={products} />
    </div>
  );
};

export default MenuContainer;
