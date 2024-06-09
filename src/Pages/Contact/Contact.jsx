import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaPhoneVolume, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
// import MapChart from "./MapChart";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_j858lv9",
        "template_lwgp7eg",
        form.current,
        "1r-i2lsnzpurZmg1Z"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="hero min-h-screen bg-base-200 dark:bg-gray-900 dark:text-white  bg-gradient-to-r from-cyan-500 to-blue-500">

        <div className="hero-content flex-col lg:flex-row-reverse gap-4">
        {/* <div className=" gap-2"> */}

        

          {/* <div className=" ">
          <MapChart></MapChart>
          
          </div> */}


           <div className=" text-start lg:text-left">

            <div>
            {/* <MapChart></MapChart> */}
              
            </div>

            <div>
              <div className="flex items-center gap-2 my-8">
                <FaPhoneVolume></FaPhoneVolume>
                <p>+880177657846</p>
              </div>
              <div className="flex items-center gap-2 my-8">
                <FaWhatsapp className="text-2xl"></FaWhatsapp>
                <p>+8801777657846</p>
              </div>
              <div className="flex items-center gap-2 my-8">
                <HiOutlineMail className="text-2xl"></HiOutlineMail>
                <p>izazahmed0177@gmail.com</p>
              </div>
            </div>
          </div> 


          <div>

          



          <div className="  card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <form ref={form} onSubmit={sendEmail} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="user_name"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="user_email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Message</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Message"
                  name="message"
                ></textarea>
              </div>

              <input
                className="btn rounded-full btn-outline border-2 dark:text-white"
                type="submit"
                value="Send Message"
              />
            </form>
          </div>

          {/* <div className="basis-1/4 text-start lg:text-left">

            <div>
              <MapChart></MapChart>
            </div>

            <div>
              <div className="flex items-center gap-2 my-8">
                <FaPhoneVolume></FaPhoneVolume>
                <p>+880177657846</p>
              </div>
              <div className="flex items-center gap-2 my-8">
                <FaWhatsapp className="text-2xl"></FaWhatsapp>
                <p>+8801777657846</p>
              </div>
              <div className="flex items-center gap-2 my-8">
                <HiOutlineMail className="text-2xl"></HiOutlineMail>
                <p>izazahmed0177@gmail.com</p>
              </div>
            </div>
          </div> */}




          </div>

          </div>

        
      </div>
    </>
  );
};

export default Contact;
