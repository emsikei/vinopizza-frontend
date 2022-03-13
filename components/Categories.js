import styles from "../styles/Menu.module.scss";

const Categories = ({ categories, filterItems }) => {
  return (
    <div className={styles.menu__filter}>
      {categories.map((category) => {
        return (
          <button
            type="button"
            className={styles.menu__filter__item}
            key={category["_id"]}
            onClick={() => filterItems(category["translation"]["ro"]["name"])}
          >
            {category["translation"]["ro"]["name"]}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
