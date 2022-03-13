import Header from "../components/Header";
import Intro from "../components/Intro";
import Head from "next/head";
import HomeInfo from "../components/HomeInfo";
import MenuContainer from "../components/MenuContainer";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Intro />
      <HomeInfo/>
      <MenuContainer />
      <Footer/>
    </>
  );
}
