import styles from "./Login.module.scss"
import { useState, useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const value = useContext(AppContext);
    const [t, lang, changeValue] = value.lang;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The username is: ${username}`)
        console.log(`The password is: ${password}`)
    }

    return (
        <div className={styles.signin}>
            <div className="container">
                <h2 className={styles.heading}>{t.login.heading}</h2>
                <form action="" className={styles.signin__form} onSubmit={handleSubmit}>
                    <input type="text"
                        value={username}
                        placeholder={t.login.username}
                        onChange={(e) => setUsername(e.target.value)} />
                    <input type="password"
                        value={password}
                        placeholder={t.login.password}
                        onChange={(e) => setPassword(e.target.value)} />

                    <button type="submit" className={styles.btn}>{t.login.buttons.enter}</button>
                </form>
            </div>
        </div>
    );
}

export default Signin;