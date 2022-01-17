import type { NextPage } from "next";
// Components
import Company from "../components/Companys";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Services from "../components/Servicos";

const Home: NextPage = () => {
  return (
    <div className={`bg-blue h-full`}>
      <Header />
      <main>
        <HomeHero />
        <Services />
        <Company />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
