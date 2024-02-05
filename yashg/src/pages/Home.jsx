import React, { useEffect } from "react";
import Card from "../components/card";
import HomeCard from "../components/HomeCard";
import EducationCard from "../components/EducationCard";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaFirstAid } from "react-icons/fa";
import SkillsSection from "../components/SkillsSection";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="w-[80vw] mx-auto">
      <Card />
      <HomeCard />
      <EducationCard />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <div className="Counter">
        <a href="https://www.hitwebcounter.com" target="_blank">
          <img
            src="https://hitwebcounter.com/counter/counter.php?page=11192190&style=0006&nbdigits=5&type=page&initCount=0"
            title="Counter Widget"
            Alt="Visit counter For Websites"
            border="0"
          />
        </a>
      </div>
      <footer className="text-center py-4 font-mono text-white">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Yash Gokakkar. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;
