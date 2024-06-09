import ReactImageGallery from "react-image-gallery";
import img1 from './../../../assets/Project2/img1.jpg'
import img2 from './../../../assets/Project2/img2.jpg'
import img3 from './../../../assets/Project2/img3.jpg'
import img4 from './../../../assets/Project2/img4.jpg'
import img5 from './../../../assets/Project2/img5.jpg'
import { BsDot } from "react-icons/bs";


const Second = () => {
    const images = [
        {
            original: img1,
            sizes:"5vh",
        },
        {
            original: img2,
            sizes:"5vh",
        },
        {
            original: img3,
            sizes:"5vh",
        },
        {
            original: img4,
            sizes:"5vh",
        },
        {
            original: img5,
            sizes:"5vh",
        },
    ];

    return (
        <div className="card bg-base-100 shadow-xl">

        <div className="h-fit">


        
            <figure className="image-full">
                <ReactImageGallery className="image-full"
                    items={images}
                    autoPlay

                    srcset="large.jpg 1024w,
                             medium.jpg 640w,
                              small.jpg 320w"




                    slideInterval={1000}

                    sizes="(min-width: 480px) 50vw,
                            (min-width: 1024px) 33.3vw,
                                             100vw"
                    showPlayButton={false}
                    showFullscreenButton={false}
                    showNav={false}
                />
            </figure>


            </div>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold dark:text-white mb-4">
                Cake Hut
                </h2>
                <div>
                    <p>This site is based on cake recipes. Here an entrepreneur makes different types of cakes and sells them to his customers.
                     From here customers can order and buy one according to their choice cake.</p>
                    <p className="font-bold dark:text-white my-4">Main Features:</p>
                    <ul className="ms-4">
                        <li><BsDot className='inline' />Single Page application</li>
                        <li><BsDot className='inline' />Secure login and registration</li>
                        <li><BsDot className='inline' />Built with react router</li>
                        <li><BsDot className='inline' />User Review The Cake & Show other People Review</li>
                        
                        <li><BsDot className='inline' />Secure add ,edit and delete book </li>
                    </ul>
                    <p className="font-bold dark:text-white my-4">Technologies:</p>
                    <ul className="ms-4">
                        <li><BsDot className='inline' />React.js</li>
                        <li><BsDot className='inline' />JavaScript</li>
                        <li><BsDot className='inline' />Firebase</li>
                        <li><BsDot className='inline' />Express.js</li>
                        <li><BsDot className='inline' />MongoDB</li>
                        <li><BsDot className='inline' />JWT</li>
                        <li><BsDot className='inline' />React Query</li>
                        <li><BsDot className='inline' />Stripe</li>
                        {/* <li><BsDot className='inline' />Firebase</li> */}
                        <li><BsDot className='inline' />Tailwind CSS</li>
                    </ul>
                </div>
                <div className="card-actions mt-auto">
                    <a className='btn btn-outline btn-xs' href="https://github.com/izazahmed0177/cake-hut-client-ass11" target='_blank' rel="noopener noreferrer">Client Code</a>
                    <a className='btn btn-outline btn-xs' href="https://github.com/izazahmed0177/cake-hut-server-ass11" target='_blank' rel="noopener noreferrer">Server Code</a>
                    <a className='btn btn-outline btn-xs' href="https://cake-hut-11b0b.web.app/" target='_blank' rel="noopener noreferrer">Live Site</a>
                </div>
            </div>
        </div>
    );
};

export default Second;