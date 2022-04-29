import { createContext } from "react";
import { useState } from "react";
import AuthService from "../services/AuthService";
import { API_URL } from "../http";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
    const [isAuth, setAuth] = useState(false);

    const setAuthTrue = () => {
        setAuth(true);
    }

    const setAuthFalse = () => {
        setAuth(false);
    }

    async function login(username, password) {
        try {
            const response = await AuthService.login(username, password);
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            // setAuth(true);
            setAuthTrue();
            console.log("AUTH - ", isAuth)
        } catch (e) {
            console.log("ERROR IN LOGIN")
            console.log(e);
        }
    }

    async function registration(username, password) {
        try {
            const response = await AuthService.registration(username, password);
            console.log(response)
            localStorage.setItem('token', response.data.accessToken);
            // setAuth(true);
            setAuthTrue();
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async function logout() {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            // setAuth(false);
            setAuthFalse();
        } catch (e) {
            console.log(e.response?.data?.message);
        }
    }

    async function checkAuth() {
        try {
            const response = await axios.get(`${API_URL}/authorization/refresh`, { withCredentials: true })
            console.log(response);
            localStorage.setItem('token', response.data.accessToken);
            // setAuth(true);
            setAuthFalse();
        } catch (e) {
            console.log("ERROR IN CHECK AUTH")
            console.log(e);
        }
    }

    return (
        <AuthContext.Provider value={
            {
                isAuth,
                setAuth,
                login,
                registration,
                logout,
                checkAuth
            }
        }>
            {props.children}
        </AuthContext.Provider>
    );
};
