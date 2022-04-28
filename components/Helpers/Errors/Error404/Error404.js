import Link from "next/link";
import styles from "./Error404.module.scss"

const Error404 = () => {
    return (
        <div className={styles.error}>
            <div className="container">
                <h1>404 | Oops, something  went wrong...</h1>
                <Link href="/"><a className={styles.link}>Go back to home page</a></Link>
            </div>
        </div>
    );
};

export default Error404;