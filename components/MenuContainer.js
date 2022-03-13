import menu from "../data/menu";
import { useState } from "react";
import styles from "../styles/Menu.module.scss";
import Category from "./Category";
import Product from "./Product";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

// const allCategories = [
//   { translation: { ru: { name: "Все" }, ro: { name: "Toate" } } },
//   ...menu.categories,
// ];

function getAllCategories(allCategories, products) {
  for (let product of products) {
    if (
      !allCategories.some(
        (category) =>
          category.translation.ru.name ===
            product["translation"]["ru"]["category"] &&
          category.translation.ro.name ===
            product["translation"]["ro"]["category"]
      )
    ) {
      allCategories.push({
        translation: {
          ru: { name: product["translation"]["ru"]["category"] },
          ro: { name: product["translation"]["ro"]["category"] },
        },
      });
    }
  }
}

let allCategories = [];
getAllCategories(allCategories, menu.products);

const MenuContainer = () => {
  const [categories, setCategories] = useState(allCategories);
  const [products, setProducts] = useState(menu.products);
  const { cartContent, cartCount } = useContext(CartContext);

  const [cart, setCart] = cartContent;
  const [cartItemsCount, setCartItemsCount] = cartCount;

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartItemsCount(cartItemsCount + 1);
  };

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
    <div className="container">
      <div className={styles.menu__container}>
        <div className={styles.menu__heading}>
          <h2>Our Menu</h2>
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

        {categories.map((category, index) => {
          return (
            <div className={styles.menu__category} key={index}>
              <Category name={category["translation"]["ro"]["name"]} />
              <div className={styles.menu__products}>
                {products
                  .filter(
                    (product) =>
                      product["translation"]["ro"]["category"] ===
                      category["translation"]["ro"]["name"]
                  )
                  .map((product) => {
                    return (
                      <>
                        <div className={styles.product__wrapper}>
                          <Product
                            key={product["_id"]}
                            image={product["image"]}
                            name={product["translation"]["ro"]["name"]}
                            desc={product["translation"]["ro"]["description"]}
                            price={product["price"]}
                          />
                          <button
                            className={styles.menu__btn}
                            onClick={() => addToCart(product)}
                          >
                            Add to cart
                          </button>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          );
        })}

        {/* <Categories categories={categories} filterItems={filterItems} />
      <Menu products={products} /> */}
      </div>
    </div>
  );
};

export default MenuContainer;
