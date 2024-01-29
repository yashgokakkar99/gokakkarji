import React from "react";
import Card from "../components/card";
import HomeCard from "../components/HomeCard";
import AboutCard from "../components/AboutCard";

const Home = () => {
  return (
    <div className="w-[80vw] mx-auto">
      <Card />
      <HomeCard />
      <AboutCard/>
    </div>
  );
};

export default Home;
