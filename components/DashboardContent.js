import styles from "../styles/Dashboard.module.scss"

const DashboardContent = ({text}) => {
    return (
      <div className={styles.dashboard__content}>
          <h2 style={{color: "#fff"}}>
              {text}
          </h2>
      </div>
    );
}

export default DashboardContent;