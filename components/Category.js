import styles from "../styles/Menu.module.scss";

const Category = ({ name }) => {
  return <h2 className={styles.category__name}>{name}</h2>;
};

export default Category;
