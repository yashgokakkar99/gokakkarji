import React from "react";
import ProjectsCard from "./ProjectsCard";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import{useRef} from "react";

const ProjectsSection = () => {
    const scrollRef = useRef(null);
    const hScrollright = () =>{
        scrollRef.current.scrollLeft += 500;
    };
    const hScrollleft = () =>{
        scrollRef.current.scrollLeft -= 500;
    }
  return (
    <div className="mb-20 lg:mb-36">
      <div ref = {scrollRef} className="flex  overflow-x-scroll gap-8 lg:p-3 scroll-hide">
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
      <div className="flex justify-center items-center gap-3 mt-2 select-none">
      <HiArrowCircleLeft onClick={hScrollleft} className="text-xl lg:text-3xl cursor-pointer hidden lg:block"/>
      <h2 className="font-mono text-lg uppercase">Slide for more</h2>
      <HiArrowCircleRight onClick={hScrollright} className="text-xl lg:text-3xl cursor-pointer hidden lg:block"/>
      </div>
    </div>
  );
};

export default ProjectsSection;
