import Header from "../components/Header";
import Intro from "../components/Intro";
import Head from "next/head";
import HomeInfo from "../components/HomeInfo";
import MenuContainer from "../components/MenuContainer";
import Footer from "../components/Footer";
import { CartProvider } from "../contexts/CartContext";

export default function Home() {
  return (
    <>
      <CartProvider>
        <Header />
        <Intro />
        <HomeInfo />
        <MenuContainer />
        <Footer />
      </CartProvider>
    </>
  );
}
