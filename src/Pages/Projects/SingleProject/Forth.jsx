import ReactImageGallery from "react-image-gallery";
import img1 from './../../../assets/Project4/img1.jpg'
import img2 from './../../../assets/Project4/img2.jpg'
import img3 from './../../../assets/Project4/img3.jpg'
import img4 from './../../../assets/Project4/img4.jpg'
import img5 from './../../../assets/Project4/img5.jpg'
import img6 from './../../../assets/Project4/img6.jpg'
import img7 from './../../../assets/Project4/img7.jpg'
import img8 from './../../../assets/Project4/img8.jpg'
import img9 from './../../../assets/Project4/img9.jpg'
import img10 from './../../../assets/Project4/img10.jpg'
// import img11 from './../../../assets/Project4/img11.jpg'
import { BsDot } from "react-icons/bs";

export default function Forth() {
    const images = [
        {
            original: img1,
        },
        {
            original: img2,
        },
        {
            original: img3,
        },
        {
            original: img4,
        },
        {
            original: img5,
        },
        {
            original: img6,
        },
        {
            original: img7,
        },
        {
            original: img8,
        },
        {
            original: img9,
        },
        {
            original: img10,
        },
        {
            // original: img11,
        },
    ];

  return (
    <div className="card bg-base-100 shadow-xl">
            <figure>
                <ReactImageGallery
                    items={images}
                    autoPlay
                    slideInterval={1000}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showNav={false}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold dark:text-white mb-4">
                Programming Quizzes
                </h2>
                <div>
                    <p>This is a quiz based website there are some programming-related quizzes and solutions. here is a blog where we get answers to some programming concept questions.</p>
                    <p className="font-bold dark:text-white my-4">Main Features:</p>
                    <ul className="ms-4">
                        <li><BsDot className='inline' />Single Page application</li>
                        {/* <li><BsDot className='inline' />Secure login and registration</li> */}
                        <li><BsDot className='inline' />Secure Show mane Quiz</li>
                        <li><BsDot className='inline' />Secure Show mane Quiz Thay Attente Quiz </li>
                        <li><BsDot className='inline' />Secure Show Quiz Right And Wrong Answare </li>
                       
                    </ul>
                    <p className="font-bold dark:text-white my-4">Technologies:</p>
                    <ul className="ms-4">
                        <li><BsDot className='inline' />React.js</li>
                        <li><BsDot className='inline' />JavaScript</li>
                        <li><BsDot className='inline' />Firebase</li>
                        <li><BsDot className='inline' />Express.js</li>
                       
                      
                        <li><BsDot className='inline' />Tailwind CSS</li>
                    </ul>
                </div>
                <div className="card-actions mt-8">
                    <a className='btn btn-outline btn-xs' href="https://github.com/izazahmed0177/quiz-crackerz-Assignment-9" target='_blank' rel="noopener noreferrer">Client Code</a>
                    {/* <a className='btn btn-outline btn-xs' href="https://github.com/izazahmed0177/ass-10-learn-computer-science-server" target='_blank' rel="noopener noreferrer">Server Code</a> */}
                    <a className='btn btn-outline btn-xs' href="https://proraamming-quiz-assigment-9-izaz.netlify.app/" target='_blank' rel="noopener noreferrer">Live Site</a>
                </div>
            </div>
        </div>
  )
}
