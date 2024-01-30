import React from "react";
import Card from "../components/card";
import HomeCard from "../components/HomeCard";
import EducationCard from "../components/EducationCard";
import ProjectsSection from "../components/ProjectsSection";


const Home = () => {
  return (
    <div className="w-[80vw] mx-auto">
      <Card />
      <HomeCard />
      <EducationCard/>
      <ProjectsSection/>
    </div>
  );
};

export default Home;
