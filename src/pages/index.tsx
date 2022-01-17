import type { NextPage } from "next";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-blue">
      <Header />
    </div>
  );
};

export default Home;
