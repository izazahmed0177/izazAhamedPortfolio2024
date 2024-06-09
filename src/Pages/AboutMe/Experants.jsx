// import React from 'react'

import { motion, useInView } from "framer-motion";

import { useRef } from "react";


export default function Experants() {
  

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <div
      className="flex flex-col gap-12 justify-center px-5 pb-48 bg-gradient-to-r from-cyan-500 to-blue-500"
      ref={experienceRef}
    >

      <motion.h1
        initial={{ x: "-300px" }}
        animate={isExperienceRefInView ? { x: "0" } : {}}
        transition={{ delay: 0.2 }}
        className="font-bold text-2xl"
      >
      <div className="flex justify-center">

        EXPERIENCE
      </div>
      </motion.h1>


      <motion.div
        initial={{ x: "-300px" }}
        animate={isExperienceRefInView ? { x: "0" } : {}}
        className=""
      >
        <div className="flex justify-between h-48">
          <div className="w-1/3 ">
            <div className="bg-green-400 bg-opacity-60 p-3 font-semibold rounded-b-lg rounded-s-lg">
              Junior React Developer
            </div>

            <div className="p-3 text-sm italic">
              I hope I can reach this competence and earn this title as soon as
              possible.
            </div>

            <div className="p-3 text-red-400 text-sm font-semibold">
              2024 = intention
            </div>
          </div>

          <div className="w-1/6 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>

          <div className="w-1/3 "></div>
        </div>

        <div className="flex justify-between h-48">
          <div className="w-1/3 "></div>

          <div className="w-1/6 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>

          <div className="w-1/3 ">
            <div className="bg-green-400 bg-opacity-60 p-3 font-semibold rounded-b-lg rounded-s-lg">
              Intern Front-End Developer
            </div>

            <div className="p-3 text-sm italic">
              I improve myself by working with the team.
            </div>

            <div className="p-3 text-red-400 text-sm font-semibold">
              05.2024 - Present
            </div>

            <div className="p-1 rounded bg-green-400 bg-opacity-60 text-sm font-semibold w-fit">
              Suforia
            </div>
          </div>
        </div>

        <div className="flex justify-between h-48">
          <div className="w-1/3 ">
            <div className="bg-green-400 bg-opacity-60 p-3 font-semibold rounded-b-lg rounded-s-lg">
              Freelancer
            </div>

            <div className="p-3 text-sm italic">
              I provided web solutions, applying a range of technologies to
              address client requirements.
            </div>

            <div className="p-3 text-sm font-semibold">
              My time working on Front-end Development:
            </div>

            <div className="text-red-400 py-7 text-sm font-semibold">
              {/* <CountdownTimer /> */}
            </div>
          </div>

          <div className="w-1/6 flex justify-center">
            <div className="w-1 h-full bg-gray-600 rounded relative">
              <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
            </div>
          </div>

          <div className="w-1/3 "></div>
        </div>
      </motion.div>
    </div>
  );
}
