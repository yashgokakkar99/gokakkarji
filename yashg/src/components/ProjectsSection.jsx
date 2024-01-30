import React from "react";
import ProjectsCard from "./ProjectsCard";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import { useRef } from "react";
import map2pro from '../assets/map2procoder.png';
import mysoc from '../assets/mysoc.png';
import netflix from '../assets/netflix.png';

const ProjectsSection = () => {
  const scrollRef = useRef(null);
  const hScrollRight = () => {
    scrollRef.current.scrollLeft += 500;
  };
  const hScrollLeft = () => {
    scrollRef.current.scrollLeft -= 500;
  };

  const projectsData = [
    {
      image: map2pro,
      projectName: "map2proCoder",
      description: "Developed map2proCoder website using React.js to provide comprehensive guidance and resources in Web Development, Android Development, DSA, Machine Learning, and other related fields.",
      githubLink: "github_link1",
      liveLink: "live_link1",
    },
    {
      image: mysoc,
      projectName: "MySoc",
      description: "Using this website, the “Society” ecosystem is enhanced as it brings the daily activities and transactions in online mode.",
      githubLink: "github_link2",
      liveLink: "live_link2",
    },
    {
      image: netflix,
      projectName: "Netflix Clone",
      description: "Created a basic functional Netflix clone utilizing React.js and Firebase to gain hands-on experience in foundational web development skills.",
      githubLink: "github_link3",
      liveLink: "live_link3",
    },
    // Add more projects as needed
  ];

  return (
    <div className="mb-20 lg:mb-36">
      <div ref={scrollRef} className="flex overflow-x-scroll gap-8 lg:p-3 scroll-hide ">
        {projectsData.map((project, index) => (
          <ProjectsCard key={index} {...project} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-3 mt-2 select-none">
        <HiArrowCircleLeft onClick={hScrollLeft} className="text-xl lg:text-3xl cursor-pointer hidden lg:block"/>
        <h2 className="font-mono text-lg uppercase">Slide for more</h2>
        <HiArrowCircleRight onClick={hScrollRight} className="text-xl lg:text-3xl cursor-pointer hidden lg:block"/>
      </div>
    </div>
  );
};

export default ProjectsSection;
