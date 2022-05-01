import Header from "../components/Partials/Header";
import Home from "../components/Landing/Home";
import Menu from "../components/Menu/Menu";
import Footer from "../components/Landing/Footer";
import About from "../components/Landing/About";
import Contact from "../components/Landing/Contact";
import Services from "../components/Landing/Services";

const HomePage = ({ menu }) => {
    return (
        <>
            <Header />
            <Home />
            <Contact />
            <About />
            <Services />
            <Menu menu={menu}/>
            <Footer />
        </>
    );
}

export default HomePage;

export async function getStaticProps(context) {
    const response = await fetch(`http://localhost:5000/api/v1/menu`)
    const menu = await response.json();

    return {
        props: {
            menu
        }, // will be passed to the page component as props
        revalidate: 10
    }
}