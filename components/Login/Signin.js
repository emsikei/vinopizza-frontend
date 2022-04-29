import styles from "./Login.module.scss"
import { useState, useContext, useEffect } from "react";
import { AppContext } from "../../contexts/AppContext";
import ErrorValidation from "../Helpers/Errors/ErrorValidation/ErrorValidation";
import { useRouter } from "next/router";
import { AuthContext } from "../../contexts/AuthContext";

const Signin = () => {
    const initialState = {
        username: "",
        password: ""
    }
    const [formValues, setFormValues] = useState(initialState);
    const value = useContext(AppContext);
    const [t, lang, changeValue] = value.lang;

    const [formErrors, setFormErrors] = useState({});

    const router = useRouter();

    const authContext = useContext(AuthContext);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }


    // useEffect(() => {
    //     router.push("/dashboard");
    // }, [authContext.isAuth])


    const handleSubmit = (e) => {
        e.preventDefault();

        setFormErrors(validate(formValues));


        // console.log(formValues);


        authContext.login(formValues.username, formValues.password);
        console.log("AUTH STATUS: ", authContext.isAuth)

        router.push("/dashboard")

        // setFormValues(initialState);
    }

    const validate = (values) => {
        let errors = {
            username: {
                ro: "",
                ru: ""
            },
            password: {
                ro: "",
                ru: ""
            }
        };

        if (!values.username) {
            errors.username.ro = "Introduceți login!"
            errors.username.ru = "Введите логин!"
        }
        if (!values.password) {
            errors.password.ro = "Introduceți parola!"
            errors.password.ru = "Введите пароль!"
        }
        return errors;
    }

    return (
        <div className={styles.signin}>
            <div className="container">
                <h2 className={styles.heading}>{t.login.heading}</h2>
                <form className={styles.signin__form} onSubmit={handleSubmit}>
                    <input type="text"
                        value={formValues.username}
                        placeholder={t.login.username}
                        onChange={handleChange}
                        name="username"
                    />
                    <ErrorValidation text={formErrors?.username?.[lang]} />

                    <input type="password"
                        value={formValues.password}
                        placeholder={t.login.password}
                        onChange={handleChange}
                        name="password"
                    />
                    <ErrorValidation text={formErrors?.password?.[lang]} />

                    <button type="submit" className={styles.btn}>{t.login.buttons.enter}</button>
                    {/* {console.log(authContext.isAuth)} */}
                </form>
            </div>
        </div>
    );
}

export default Signin;