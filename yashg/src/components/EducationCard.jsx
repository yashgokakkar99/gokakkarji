import React from "react";

const EducationCard = () => {
  return (
    <div>
      <div
        className="px-5 lg:p-5 text-white w-[80vw] lg:w-[60vw] background-blur-md border border-gray-500 select-one rounded-2xl my-20 
    lg:my-[200px] hover:scale-110 transition-all delay-100 hover:border-white shadow-lg card mx-auto h-100vh"
      >
        <h3 className="text-xl lg:text-2xl font-bold py-3 border-2 border-transparent border-b-gray-400">
          D Y PATIL COLLEGE OF ENGINEERING, AKURDI PUNE
        </h3>
        <h3 className="text-xl lg:text-2xl  py-3 border-2 border-transparent border-b-gray-400">
          Bachelor of Engineering in Computer Engineering
        </h3>
        <h3 className="text-xl lg:text-2xl  py-3 border-2 border-transparent border-b-gray-400">
          Cumulative GPA: 9.24 on scale of 10{" "}
        </h3>
        <h3 className="text-xl lg:text-xl py-3 ">Jun 2020 – Jun 2024</h3>
      </div>
      <div
        className="px-5 lg:p-5 text-white w-[80vw] lg:w-[60vw] background-blur-md border border-gray-500 select-one rounded-2xl my-20 
    lg:my-[200px] hover:scale-110 transition-all delay-100 hover:border-white shadow-lg card mx-auto h-100vh"
      >
        <h3 className="text-xl lg:text-2xl font-bold py-3 border-2 border-transparent border-b-gray-400">
          KAMALNAYAN BAJAJ JR COLLEGE, CHINCHWAD PUNE
        </h3>
        <h3 className="text-xl lg:text-2xl  py-3 border-2 border-transparent border-b-gray-400">
          HSC
        </h3>
        <h3 className="text-xl lg:text-2xl  py-3 border-2 border-transparent border-b-gray-400">
          86.33 %
        </h3>
        <h3 className="text-xl lg:text-xl py-3 ">Aug 2018 – Mar 2020</h3>
      </div>
      <div
        className="px-5 lg:p-5 text-white w-[80vw] lg:w-[60vw] background-blur-md border border-gray-500 select-one rounded-2xl my-20 
    lg:my-[200px] hover:scale-110 transition-all delay-100 hover:border-white shadow-lg card mx-auto h-100vh"
      >
        <h3 className="text-xl lg:text-2xl font-bold py-3 border-2 border-transparent border-b-gray-400">
          S.N.B.P. SCHOOL, MORWADI PUNE
        </h3>
        <h3 className="text-xl lg:text-2xl  py-3 border-2 border-transparent border-b-gray-400">
          SSC
        </h3>
        <h3 className="text-xl lg:text-2xl  py-3 border-2 border-transparent border-b-gray-400">
          95.00 %
        </h3>
        <h3 className="text-xl lg:text-xl py-3 ">Jun 2008 – Mar 2018</h3>
      </div>
    </div>
  );
};

export default EducationCard;
