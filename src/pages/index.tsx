// Components
import Company from "../components/Companys";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Services from "../components/Servicos";
import Head from "next/head";

export default function Home() {
  return (
    <div className={`bg-blue h-full`}>
      <Head>
        <title>EasyFinance | Investir nunca foi tão facil</title>
      </Head>
      <Header />
      <main>
        <HomeHero />
        <Services />
        <Company />
      </main>
      <Footer />
    </div>
  );
}
