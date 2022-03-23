import Header from "../components/Header";
import Home from "../components/Home";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import Services from "../components/Services";

export default function HomePage() {
    return (
        <>
            <Header/>
            <Home/>
            <Contact />
            <About/>
            <Services />
            <Menu/>
            <Footer/>
        </>
    );
}
