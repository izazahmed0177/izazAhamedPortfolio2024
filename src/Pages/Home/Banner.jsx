import { Link } from 'react-router-dom';
import profile from './../../assets/izazAhmedCanva1.png'
import resume from './../../assets/resume/izazAhmedEmon.pdf'

const Banner = () => {
    return (
        <div className="hero min-h-[700px] dark:text-white">
            <div className="hero-content flex-col lg:flex-row justify-center gap-12">
                <div className="avatar">
                    <div className=" w-64 rounded-3xl ring-8 ring-white ring-offset-base-100 ring-offset-2">
                        <img className='hover:scale-105 duration-300 ease-linear transition-transform' src={profile} />
                    </div>
                </div>
                <div>
                    <h4 className='text-black'>MERN Stack Developer</h4>
                    <h1 className="text-5xl font-bold my-4 dark:text-white">Izaz Ahmed Emon</h1>
                    <h2 className='max-w-md text-black'>Hello! I{"'"}m Izaz Ahmed Emon, a skilled MERN Stack Developer. I specialize in creating robust, scalable, and maintainable full-stack websites with exceptional user interfaces. My passion lies in delivering beautifully designed, high-performance web applications that provide a seamless and engaging user experience. Let{"'"}s bring your vision to life!</h2>
                    <div className='flex gap-4 mt-4'>
                        <a className='btn rounded-full btn-outline border-blue-500 border-2 dark:text-white' href={resume} download="izazAhmedEmon.pdf">
                            Download Resume
                        </a>
                        <Link to='/contact' className='btn rounded-full btn-outline border-2 dark:text-white'>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;