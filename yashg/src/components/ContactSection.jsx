import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-centermb-20 lg:mb-36">
      <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-36">
        <div className="mb-5 lg:mb-0">
          <h1 className="text-5xl lg:text-7xl mb-5 lg:mb-10 text-white">
            Contact me
          </h1>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:yashgokakkar@gmail.com"
              className="text-white font-mono underline text-lg lg:text-2xl"
            >
              yashgokakkar@gmail.com
            </a>
            <a
              href="tel:+917499822665"
              className="text-white font-mono underline text-lg lg:text-2xl"
            >
              +91 7499822665
            </a>
          </div>
          <div className="flex gap-2 mt-2">
            <FaGithub className="text-white text-2xl" />
            <FaLinkedin className="text-white text-2xl" />
            <FaInstagram className="text-white text-2xl" />
          </div>
          <h2 className="text-2xl font-bold font-mono text-white text-center lg:hidden">
            Or
          </h2>
        </div>
        <div>
          <form className="flex flex-col p-3">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="bg-transparent p-3 outline-none border focus:border-white focus:border-2 focus:pl-8 transition-all duration-100 rounded-lg border-white text-color font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent p-3 outline-none border  focus:border-white focus:border-2 focus:pl-8 transition-all duration-100 rounded-lg border-white text-color font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />
            <textarea
              name="message"
              id="message"
              rows="3"
              placeholder="Enter your message"
              className="bg-transparent p-3 outline-none border  focus:border-white focus:border-2 focus:pl-8 transition-all duration-100 rounded-lg border-white text-color font-mon text-lg lg:text-2xl  mb-5 lg:mb-10 w-full lg:w-[30vw]"
            />

            <button type="submit" className="px-3 py-2 text-lg lg:text-2xl bg-purple-500 hover:bg-purple-600 border font-bold text-white rounded-lg">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
