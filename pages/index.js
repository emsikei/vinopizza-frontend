import Header from "../components/Header";
import Home from "../components/Home";
import HomeInfo from "../components/HomeInfo";
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <Header /> 
      <Home />
      <HomeInfo />
      <Menu/>
      <Footer/> 
    </>
  );
}
