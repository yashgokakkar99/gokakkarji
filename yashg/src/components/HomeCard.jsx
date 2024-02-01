import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import mypic from "../assets/yashpic.png";
import cv from "../assets/Yash_Gokakkar_Resume.pdf";


const HomeCard = () => {
  return (
    <>
      <div data-aos="fade-right">
        <p>
          <span className="text-2xl lg:text-4xl font-bold text-white">
            <Typewriter
              words={["Hello !", "नमस्ते !", "नमस्कार !"]}
              loop={Infinity}
              cursor
              cursorStyle="|"
              typeSpeed={110}
              deleteSpeed={80}
              delaySpeed={1000}
            />
          </span>
        </p>
      </div>
      <div data-aos="fade-right"className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36">
        <div className="flex flex-col gap-5 lg:w-[50%]">
          <p className="text-xl lg:text-2xl font-bold text-white pt-10">
            I'm Yash Gokakkar, a final-year Computer Engineering student with a
            fundamental grasp of Frontend development, MERN stack, and C++ OOP
            principles, along with basic DSA understanding.
          </p>
          <a href={cv} target="_blank" download className="w-[175px] px-4 py-2 bg-[#FF7C7C] text-white font-bold rounded-lg hover:bg-[#FF5A5A] focus:outline-none  focus:border-[#FF5A5A]">
            Download Resume
          </a>

        </div>
        <div data-aos="fade-left">
          <img src={mypic} alt="Yash Gokakkar" className="rounded-full w-[200px] h-[200px] lg: w-[450px] h-[450px] mx-auto"></img>
        </div>
      </div>
      </>
  );
};

export default HomeCard;
//https://drive.google.com/file/d/1-w7fhBBeVD-nKe2WkLcFFLav4XDLtnf_/export?format=pdf