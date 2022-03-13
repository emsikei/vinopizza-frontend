import Header from "../components/Header";
import Intro from "../components/Intro";
import Head from "next/head";
import HomeInfo from "../components/HomeInfo";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Nothing+You+Could+Do&family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Intro />
      <HomeInfo/>
    </>
  );
}
