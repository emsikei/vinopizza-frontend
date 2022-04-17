import styles from "../../../../components/Dashboard/Dashboard.module.scss";
import Sidebar from "../../../../components/Dashboard/Sidebar";
import menu from "../../../../data/menu";
import EditCategory from "../../../../components/Dashboard/Categories/EditCategory";

const Edit = () => {
    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            <EditCategory category={menu.categories[1]}/>
        </div>
    );
};

export default Edit;