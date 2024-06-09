import Aos from "aos";
import { useEffect } from "react";
import next from './../../assets/Logos/next.png'
import redux from './../../assets/Logos/redux.png'


const Exploring = () => {
    useEffect(() => {
        Aos.init()
    }, [])
    return (
        <div className="my-20 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="dark:text-white">
                <h3 className="text-2xl font-bold ms-4 text-center">Currently Exploring</h3>
                <div className="divider max-w-sm mx-auto"></div>
            </div>

            <div className="lg:flex justify-center gap-12">
                {/* Next js */}
                <div data-aos="flip-down" className="card dark:text-white bg-base-100 dark:bg-gray-500 shadow-xl mb-4">
                    <figure className="px-10 pt-10 hover:scale-110 duration-300 ease-linear transition-transform">
                        <img src={next} alt="next.js logo" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Next.js</h2>
                    </div>
                </div>

                {/* redux */}
                <div data-aos="flip-up" className="card dark:text-white bg-base-100 dark:bg-gray-500 shadow-xl">
                    <figure className="px-10 pt-10 hover:scale-110 duration-300 ease-linear transition-transform">
                        <img src={redux} alt="redux logo" className="rounded-xl h-[200px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Redux</h2>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Exploring;