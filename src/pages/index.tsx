import type { NextPage } from "next";
// Components
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";

const Home: NextPage = () => {
  return (
    <div className={`bg-blue h-full`}>
      <Header />
      <main className="container px-4 mx-auto xl:px-0">
        <HomeHero />
      </main>
    </div>
  );
};

export default Home;
