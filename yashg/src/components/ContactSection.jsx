import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-centermb-20 lg:mb-36">
      <div className="flex flex-col lg:flex-row lg:ml-20 lg:gap-36">
        <div className="mb-5 lg:mb-0">
          <h1 className="text-4xl lg:text-6xl mb-5 lg:mb-10 text-white">
            Contact me
          </h1>
          <div className="flex flex-col gap-2">
            <a
              href="mailto:yashgokakkar@gmail.com"
              className="text-white underline text-lg lg:text-2xl"
            >
              yashgokakkar@gmail.com
            </a>
            <a
              href="tel:+917499822665"
              className="text-white underline text-lg lg:text-2xl"
            >
              +91 7499822665
            </a>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="https://github.com/yashgokakkar99" target="_blank"><FaGithub className="text-white text-5xl hover:cursor-pointer" /></a>
            <a href="https://www.linkedin.com/in/yash-ashok-gokakkar-426965202/" target="_blank"><FaLinkedin className="text-white text-5xl hover:cursor-pointer" /></a>
            <a href="https://www.instagram.com/yashgokakkar99/" target="_blank"><FaInstagram className="text-white text-5xl hover:cursor-pointer" /></a>
          </div>
          <h2 className="text-2xl font-bold text-white text-center lg:hidden mt-6">
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
              className="bg-transparent p-3 outline-none border focus:border-white focus:border-2  transition-all duration-100 rounded-lg border-white  text-lg lg:text-xl  mb-5 lg:mb-10 w-full lg:w-[30vw] placeholder-white"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-transparent p-3 outline-none border  focus:border-white focus:border-2   transition-all duration-100 rounded-lg border-white  text-lg lg:text-xl  mb-5 lg:mb-10 w-full lg:w-[30vw] placeholder-white"
            />
            <textarea
              name="message"
              id="message"
              rows="3"
              placeholder="Enter your message"
              className="bg-transparent p-3 outline-none border  focus:border-white focus:border-2   transition-all duration-100 rounded-lg border-white  text-lg lg:text-xl  mb-5 lg:mb-10 w-full lg:w-[30vw] placeholder-white"
            />

            <button type="submit" className="px-3 py-2 text-lg lg:text-xl bg-purple-500 hover:bg-purple-600  font-bold text-white rounded-lg">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
