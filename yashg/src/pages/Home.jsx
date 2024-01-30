import React, { useEffect } from "react";
import Card from "../components/card";
import HomeCard from "../components/HomeCard";
import EducationCard from "../components/EducationCard";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFirstAid } from "react-icons/fa";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration:1500,
    });
  }, []);
  return (
    <div className="w-[80vw] mx-auto">
      <Card />
      <HomeCard />
      <EducationCard />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
