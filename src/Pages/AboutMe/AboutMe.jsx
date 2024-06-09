import { Link } from 'react-router-dom';
import profilePic from './../../assets/IMG-edit.png'


const AboutMe = () => {
    return (
        <div className="card lg:card-side bg-gray-100 dark:bg-gray-100 shadow-xl rounded-none   bg-gradient-to-r from-cyan-500 to-blue-500">
            <figure className='max-w-lg'>
                <img src={profilePic} alt="Avatar" />
            </figure>
            <div className="card-body mt-20">
                <h2 className="card-title text-4xl text-black dark:text-blak mb-4">Izaz Ahmed Emon</h2>
                <p className='text-black dark:text-gray-900'>Hello! My name is Izaz Ahmed Emon, and I am a Junior MERN Stack Developer from Bangladesh.
                    <br />
                    <br />
                    I specialize in creating robust, scalable, and maintainable full-stack websites with exceptional user interfaces. To me, building a website is an art form—each project I undertake is like a personal masterpiece. I approach every task with dedication and strive to achieve the highest standards of quality.
                     <br /> <br />
                     While there are countless web developers available, what truly sets me apart is my unwavering commitment to each project. I treat each one with the utmost care and attention, ensuring it meets the best possible standards and truly stands out.. Contact me to hire...
                </p>
                <div className="card-actions justify-end">
                    <Link to='/contact' className='btn rounded-full btn-outline border-2 dark:text-black'>Contact</Link>
                </div>

            </div>
           
        </div>
    );
};

export default AboutMe;