import type { NextPage } from "next";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className={`bg-blue h-screen`}>
      <Header />
      <main className="container px-4 mx-auto xl:px-0"></main>
    </div>
  );
};

export default Home;
