import Aos from "aos";
import { useEffect } from "react";
import 'aos/dist/aos.css'
import mongo from './../../assets/Logos/mongo.png'
import bootstrap from './../../assets/Logos/bootstrap.png'
import css3 from './../../assets/Logos/css3.png'
import express from './../../assets/Logos/express.png'
import firebase from './../../assets/Logos/firebase.png'
import html5 from './../../assets/Logos/html5.png'
import node from './../../assets/Logos/node.png'
import react from './../../assets/Logos/react.png'
import javaScript from './../../assets/Logos/JavaScript-logo.png'
import tailwind from './../../assets/Logos/Tailwind_CSS_Logo.svg'


const Skills = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="" >
            <div className="dark:text-white">
                <h3 className="text-2xl font-bold ms-4 text-center">Skills</h3>
                <div className="divider max-w-sm mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-4 gap-4">
                {/* mongo */}
                <div data-aos="flip-right" className="card dark:text-white bg-base-100 dark:bg-gray-500 shadow-xl">
                    <figure className="px-10 pt-10 hover:scale-110 duration-300 ease-linear transition-transform">
                        <img src={mongo} alt="mongodb logo" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">MongoDB</h2>
                    </div>
                </div>
                {/* express */}
                <div data-aos="flip-right" className="card dark:text-white bg-base-100 dark:bg-gray-500 shadow-xl">
                    <figure className="px-10 pt-10 hover:scale-110 duration-300 ease-linear transition-transform">
                        <img src={express} alt="Express.js Logo" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Express.Js</h2>
                    </div>
                </div>
                {/* react */}
                <div data-aos="flip-right" className="card dark:text-white bg-base-100 dark:bg-gray-500 shadow-xl">
                    <figure className="px-10 pt-10 hover:scale-110 duration-300 ease-linear transition-transform">
                        <img src={react} alt="React Logo" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">React.js</h2>
                    </div>
                </div>
                {/* js */}
                <div data-aos="flip-left" className="card dark:text-white bg-base-100 dark:bg-gray-500 shadow-xl">
                    <figure className="px-10 pt-10 hover:scale-110 duration-300 ease-linear transition-transform">
                        <img src={javaScript} alt="JavaScript logo" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">JavaScript</h2>
                    </div>
                </div>

                {/* node */}
                <div data-aos="flip-left" className="card dark:text-white bg-base-100 dark:bg-gray-500 shadow-xl">
                    <figure className="px-10 pt-10 hover:scale-110 duration-300 ease-linear transition-transform">
                        <img src={node} alt="Node.js logo" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Node.js</h2>
                    </div>
                </div>
                {/* firebase */}
                <div data-aos="flip-right" className="card dark:text-white bg-base-100 dark:bg-gray-500 shadow-xl">
                    <figure className="px-10 pt-10 hover:scale-110 duration-300 ease-linear transition-transform">
                        <img src={firebase} alt="Firebase logo" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Firebase</h2>
                    </div>
                </div>
                {/* html */}
                <div data-aos="flip-right" className="card dark:text-white bg-base-100 dark:bg-gray-500 shadow-xl">
                    <figure className="px-10 pt-10 hover:scale-110 duration-300 ease-linear transition-transform">
                        <img src={html5} alt="Html5 logo" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">HTML5</h2>
                    </div>
                </div>
                {/* css */}
                <div data-aos="flip-left" className="card dark:text-white bg-base-100 dark:bg-gray-500 shadow-xl">
                    <figure className="px-10 pt-10 hover:scale-110 duration-300 ease-linear transition-transform">
                        <img src={css3} alt="Css3 logo" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">CSS3</h2>
                    </div>
                </div>

                {/* bootstrap */}
                <div data-aos="flip-left" className="card dark:text-white bg-base-100 dark:bg-gray-500 shadow-xl">
                    <figure className="px-10 pt-10 hover:scale-110 duration-300 ease-linear transition-transform">
                        <img src={bootstrap} alt="bootstrap logo" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Bootstrap</h2>
                    </div>
                </div>

                {/* tailwind */}
                <div data-aos="flip-left" className="card dark:text-white bg-base-100 dark:bg-gray-500 shadow-xl">
                    <figure className="px-10 pt-10 hover:scale-110 duration-300 ease-linear transition-transform">
                        <img src={tailwind} alt="tailwind logo" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Tailwind</h2>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Skills;