import React from "react";
import Card from "../components/card";
import HomeCard from "../components/HomeCard";
import EducationCard from "../components/EducationCard";


const Home = () => {
  return (
    <div className="w-[80vw] mx-auto">
      <Card />
      <HomeCard />
      <EducationCard/>
    </div>
  );
};

export default Home;
