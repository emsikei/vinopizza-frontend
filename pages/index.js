import Header from "../components/Partials/Header";
import Home from "../components/Landing/Home";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Landing/Footer";
import About from "../components/Landing/About";
import Contact from "../components/Landing/Contact";
import Services from "../components/Landing/Services";

export default function HomePage() {
    return (
        <>
            <Header />
            <Home />
            <Contact />
            <About />
            <Services />
            <Menu />
            <Footer />
        </>
    );
}
