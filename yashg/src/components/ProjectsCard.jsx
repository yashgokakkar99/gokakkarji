import React from "react";
import Map2pro from "../assets/map2procoder.png";
import { FaGithub } from "react-icons/fa";
import { RiSignalTowerFill } from "react-icons/ri";

const ProjectsCard = () => {
  return (
    <div className="p-4">
      <div className="h-fit w-[300px] md:w-[320px] border-2 border-gray-200 border-opacity-60 rounded-2xl overflow-clip lg:overflow-hidden hover:shadow-md lg:hover:scale-105 transition-all backdrop-blur-3xl shadow-xl">
        <a href="">
          <img src={Map2pro} alt="map2procoder" className="lg:h-48 h-[200px] w-full object-cover object-center p-2 bg-black"/>
        </a>
        <div className="p-4 flex flex-col ld:gap-3">
          <div className="">
            <h2 className=" text-2xl text-white font-bold mb-2">map2proCoder</h2>
          </div>
          <h3 className="text-lg lg:text-lg text-white">
              Developed map2proCoder website using React.js to provide
              comprehensive guidance and resources in Web Development, Android
              Development, DSA, Machine Learning, and other related fields.
            </h3>
          <div className="flex items-center justify-between">
            <a href="#">
              <FaGithub className=" font-bold inline-flex item-center text-2xl md:text-2xl md:mb-2 lg:mb-0 hover:text-gray-800 cursor-pointer"/>
            </a>
            <a href="#">
              <RiSignalTowerFill className=" font-bold inline-flex item-center text-2xl md:text-2xl md:mb-2 lg:mb-0 hover:text-gray-800 cursor-pointer"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
