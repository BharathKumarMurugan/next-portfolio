import React from "react";
import { Meteors } from "./ui/Meteors";

const Education = () => {
  return (
    <section id="education" className="w-full">
      <div className="flex flex-col items-center justify-center max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="font-bold text-[40px] md:text-5xl lg:text-6xl mb-10 max-w-4xl">My Education</h2>
      </div>
      <div className="max-w-5xl mx-auto px-auto flex items-center justify-center">
        {/* Master of Computer Applications */}
        <div className="relative w-1/2 shadow-xl border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start mr-2" style={{background: "linear-gradient(135deg, #011126, #011C40"}}>
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
          </div>
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">Master of Computer Applications</h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            B.S. Abdur Rahman University {" | "} 2013 - 2016 {" | "} CGPA: 9.0
          </p>
          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
        {/* Bachelor of Computer Applications */}
        <div className="relative w-1/2 shadow-xl border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start" style={{background: "linear-gradient(135deg, #011126, #011C40"}}>
          <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
            </svg>
          </div>
          <h1 className="font-bold text-xl text-white mb-4 relative z-50">Bachelor of Computer Applications</h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
            University of Madras {" | "} 2010 - 2013 {" | "} CGPA: 7.6
          </p>
          <Meteors number={20} />
        </div>
      </div>
    </section>
  );
};

export default Education;
