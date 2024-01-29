import React from "react";
import { Typewriter, Cursor } from "react-simple-typewriter";
import mypic from "../assets/yashpic.png";

const HomeCard = () => {
  return (
    <div className="min-h-screen ">
      <div>
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
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between items-center mb-20 lg:mb-36">
        <div className="flex flex-col gap-5 lg:w-[50%]">
          <p className="text-xl lg:text-2xl font-bold text-white pt-10">
            I'm Yash Gokakkar, a final-year Computer Engineering student with a
            fundamental grasp of Frontend development, MERN stack, and C++ OOP
            principles, along with basic DSA understanding.
          </p>
        </div>
        <div>
          <img src={mypic} alt="Yash Gokakkar" className="rounded-full w-[200px] h-[200px] lg: w-[450px] h-[450px] mx-auto"></img>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
