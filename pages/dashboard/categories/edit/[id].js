import styles from "../../../../components/Dashboard/Dashboard.module.scss";
import Sidebar from "../../../../components/Dashboard/Sidebar";
import EditCategory from "../../../../components/Dashboard/Categories/EditCategory";

const Edit = ({category}) => {
    return (
        <div className={styles.dashboard}>
            <Sidebar/>
            <EditCategory category={category}/>
        </div>
    );
};

export default Edit;

export async function getServerSideProps({ params }) {
    const response = await fetch(`http://localhost:5000/api/v1/categories/${params.id}`);
    const category = await response.json();

    return {
        props: {
            category
        }
    }
}