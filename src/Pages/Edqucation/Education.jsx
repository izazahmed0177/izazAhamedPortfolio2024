// import React from 'react'

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from 'framer-motion';
// import CountdownTimer from "../AboutMe/CountdownTimer";

export default function Education() {
    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
  return (
    <div>
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

      Education
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
            MSC in (IT)
            </div>

            <div className="p-3 text-xl italic">
            Jahangirnagar University
            </div>

            <div className="p-3 text-gray-700  text-sm font-semibold">
            2022-Present
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
             BSC In
            Computer Science And
              Engineering
            </div>

            <div className="p-3 text-xl italic">
            National University, Bangladesh
            </div>

            <div className="p-3 text-gray-700 text-sm font-semibold">
            Passing - 2021
            </div>

            {/* <div className="p-1 rounded bg-green-400 bg-opacity-60 text-sm font-semibold w-fit">
              Suforia
            </div> */}
          </div>
        </div>




        <div className="flex justify-between h-48">
          <div className="w-1/3 ">
            <div className="bg-green-400 bg-opacity-60 p-3 font-semibold rounded-b-lg rounded-s-lg">
             Higher secondary certificate (HSC)
            </div>

            <div className="p-3 text-xl italic">
            Dhaka Board
             (Saint Joseph Higher Secondary School)
            </div>

            <div className="p-3 text-gray-700 text-sm font-semibold">
            <div>

            Passing - 2016
            </div>
            <div>
            Result  - GPA 4.67 Out of 5.00


            </div>
            </div>

            {/* <div className=" text-white font-semibold">
            Result  - GPA 4.67 Out of 5.00
            </div> */}

          
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
            Secondary school certificate (SSC)
            </div>

            <div className="p-3 text-xl italic">
            Dhaka Board (Ati Panchdona High School)
            </div>

            <div className="p-3 text-gray-700 text-sm font-semibold">
            <div>

            Passing - 2014
            </div>
            <div>
            Result  - GPA 5.00 Out of 5.00


            </div>
            </div>

            {/* <div className="p-1 rounded bg-green-400 bg-opacity-60 text-sm font-semibold w-fit">
              Suforia
            </div> */}


            <div className="text-gray-800 py-7 text-sm font-semibold">
              {/* <CountdownTimer /> */}
            </div>
          </div>
        </div>






      </motion.div>
    </div>
      
    </div>
  )
}
