import { Link } from "react-router-dom";
import { FaGithub, FaFacebook, FaPhoneVolume, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
    const url = "https://wa.me/+8801777657846"
    const mailtoLink = 'mailto:izazahmed0177@gmail.com'
    return (
        <footer className="footer footer-center p-10 bg-gray-900 dark:bg-gray-700 text-white rounded  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            <div className="grid grid-flow-col gap-4">
                <Link to='/about-me'>About</Link>
                <Link to='/contact'>Contact</Link>
            </div>

            <div>
                <div className="grid grid-flow-col gap-4">
                    <a className="text-2xl" onClick={() => { window.open('tel:+8801777657846') }}><FaPhoneVolume></FaPhoneVolume></a>
                    <a className="text-2xl" onClick={() => { window.open(url, '_blank') }}><FaWhatsapp></FaWhatsapp></a>
                    <a className="text-2xl" href="https://github.com/izazahmed0177" target="_blank" rel="noopener noreferrer"><FaGithub></FaGithub></a>
                    <a className="text-2xl" href="https://www.facebook.com/izazahmed.emon/" target="_blank" rel="noopener noreferrer"><FaFacebook></FaFacebook></a>
                    <a className="text-2xl" href="https://www.linkedin.com/in/izaz-ahmed-emon/" target="_blank" rel="noopener noreferrer"><FaLinkedin></FaLinkedin></a>
                    <a className="text-2xl" onClick={() => { window.location.href = mailtoLink }}><HiOutlineMail></HiOutlineMail></a>
                </div>
            </div>
            <div>
                <p>Copyright © 2024 - All right reserved by Izaz Ahmed Emon</p>
            </div>
        </footer>
    );
};

export default Footer;