import React from "react";
import { FaGithub } from "react-icons/fa";
import { RiSignalTowerFill } from "react-icons/ri";

const ProjectsCard = ({ image, projectName, description, githubLink, liveLink }) => {
  return (
    <div className="p-4">
      <div data-aos="zoom-in" className="h-fit w-[300px] md:w-[320px] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl">
        <a href={liveLink} target="_blank">
          <img src={image} alt={projectName} className="lg:h-48 h-[200px] w-full object-cover object-center p-2 bg-black"/>
        </a>
        <div className="p-4 flex flex-col ld:gap-3">
          <div className="">
            <h2 className="text-2xl text-white font-bold mb-2">{projectName}</h2>
          </div>
          <h3 className="text-lg lg:text-lg text-white">{description}</h3>
          <div className="flex items-center justify-between">
            <a href={githubLink} target="_blank">
              <FaGithub className="font-bold inline-flex item-center text-2xl md:text-2xl md:mb-2 lg:mb-0 hover:text-gray-800 cursor-pointer"/>
            </a>
            <a href={liveLink} target="_blank">
              <RiSignalTowerFill className="font-bold inline-flex item-center text-2xl md:text-2xl md:mb-2 lg:mb-0 hover:text-gray-800 cursor-pointer"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
