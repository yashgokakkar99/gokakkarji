import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import bootstrap from "../assets/bootstrap.png";
import react from "../assets/react.png";
import tailwindcss from "../assets/tailwindcss.png";
import node from "../assets/node.png";
import express from "../assets/express.svg";
import mongodb from "../assets/mongodb.svg";
import mysql from "../assets/mysql.png";
import json from "../assets/json.png";
import c from "../assets/c.png";
import cpp from "../assets/c++.png";
import python from "../assets/python.png";

const SkillsSection = () => {
  return (
    <div className="mb-20 lg:mb-36">
      <div data-aos="zoom-in" className="mb-10">
        <h1 className="fron-con flex space-x-4 pb-4 justify-center text-xl font-bold text-white">Front-end</h1>
        <div className="fron-con flex space-x-4 pb-4 justify-center flex-wrap gap-4">
          <img src={html} alt="HTML5" className="h-[5rem] w-[5rem] hover:scale-125"/>
          <img src={css} alt="CSS3" className="h-[5rem] w-[5rem] hover:scale-125"/>
          <img src={js} alt="Javascript" className="h-[5rem] w-[5rem] hover:scale-125"/>
          <img src={tailwindcss} alt="Tailwindcss" className="h-[5rem] w-[5rem] hover:scale-125"/>
          <img src={react} alt="React" className="h-[5rem] w-[5rem] hover:scale-125"/>
          <img src={bootstrap} alt="Bootstrap" className="h-[5rem] w-[5rem] hover:scale-125"/>
        </div>
      </div>
      <div data-aos="zoom-in" className="mb-10">
        <h1 className="fron-con flex space-x-4 pb-4 justify-center text-xl font-bold text-white">Back-end</h1>
        <div className="fron-con flex space-x-4 pb-4 justify-center flex-wrap gap-4">
          <img src={node} alt="Node" className="h-[5rem] w-[5rem] hover:scale-125"/>
          <img src={express} alt="Express" className="h-[5rem] w-[5rem] hover:scale-125"/>
          <img src={mongodb} alt="MongoDB" className="h-[5rem] w-[5rem] hover:scale-125"/>
          <img src={mysql} alt="MySQL" className="h-[5rem] w-[5rem] hover:scale-125"/>
          <img src={json} alt="Json" className="h-[5rem] w-[5rem] hover:scale-125"/>
        </div>
      </div>
      <div data-aos="zoom-in" className="mb-10">
        <h1 className="fron-con flex space-x-4 pb-4 justify-center text-xl font-bold text-white">Programming Languages</h1>
        <div className="fron-con flex space-x-4 pb-4 justify-center flex-wrap gap-4">
          <img src={c} alt="C" className="h-[5rem] w-[5rem] hover:scale-125"/>
          <img src={cpp} alt="C++" className="h-[5rem] w-[5rem] hover:scale-125"/>
          <img src={python} alt="Python" className="h-[5rem] w-[5rem] hover:scale-125"/>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
