import styles from "./Login.module.scss"
import {useState} from "react";

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The username is: ${username}`)
        console.log(`The password is: ${password}`)
    }

    return (
        <div className={styles.signin}>
            <div className="container">
                <h2 className={styles.heading}>Login</h2>
                <form action="" className={styles.signin__form} onSubmit={handleSubmit}>
                    <input type="text"
                           value={username}
                           placeholder="Username"
                           onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password"
                           value={password}
                           placeholder="Password"
                           onChange={(e) => setPassword(e.target.value)}/>

                    <button type="submit" className={styles.btn}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Signin;