import "../styles/globals.css";
import "../styles/flaticon.css";
import { AppProvider } from "../contexts/AppContext";
import { AuthProvider } from "../contexts/AuthContext";

function MyApp({ Component, pageProps }) {
    return (
        <AppProvider>
            <AuthProvider>
                <Component {...pageProps} />
            </AuthProvider>
        </AppProvider>
    );
}

export default MyApp;
