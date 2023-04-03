import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn } from "react-icons/fa";
import ProfileImg from "public/assets/profile1.jpg";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const About = () => {
  const [effect, setEffect] = useState(false);
  return (
    <div
      id="about"
      className="pt-10 bg-gradient-to-tr h-auto w-screen sm:h-screen bg-fixed bg-cover bg-center from-[#1d1d1d] to-[#abb3cd]"
    >
      <div className="max-w-[1240px] pt-6 sm:py-10 m-auto flex flex-col lg:flex-row justify-center items-center">
        <h1 className="text-4xl font-bold pt-10 text-center text-[#e99401]">
          About <span class="text-[#e99401] font-extrabold p-5"> Me</span>
        </h1>
        <div className="max-w-[1000px]  flex flex-col items-center p-10 sm:justify-center text-justify">
          <div className="lg:max-w-[1000px] sm:h-60 sm:w-80 h-auto w-auto items-start">
            <Image
              className=" shadow-sm rounded-3xl align-middle border-solid shadow-[#e99401]"
              src={ProfileImg}
              alt="cover image"
              width={400}
              height={400}
            />
          </div>
          <div className="flex justify-around pt-10 max-w-[600px] w-full">
            <Link
              href="https://twitter.com/balgaci"
              target="_blank"
              rel="noreferrer"
            >
              <FaTwitter className="cursor-pointer" size={30} />
            </Link>
            <Link
              href="https://github.com/Noryab"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="cursor-pointer" size={30} />
            </Link>
            <Link
              href="https://twitter.com/balgaci"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn className="cursor-pointer" size={30} />
            </Link>
          </div>
        </div>
        <div className="pr-10 pl-10 sm:pt-5">
          <div className="mx-auto h-full w-full flex flex-col">
            <h1 className="flex justify-center text-center sm:text-4xl text-xl font-bold text-[#e99401]">
              Alejandro Garzon
            </h1>
            <div>
              <p className="flex flex-col text-justify sm:text-3xl text-xl pt-10 text-gray-200">
                I am a master of Engineering (M.Eng.) of UNAM and my interests
                are software design and development, robotics, machine learning,
                computer vision and cloud architecture.
              </p>
              <p className="flex flex-col text-justify sm:text-3xl text-xl pt-10 text-gray-200">
                I am currently a freelance.
              </p>
              <h2 className="pt-5 text-white text-2xl">
                <b>UNAM</b>
              </h2>
              <ul className="pt-5 pl-5 list-disc list-outside text-left sm:text-3xl text-gray-200">
                <li>
                  Master of Engineering in Electrical / Digital Signal
                  Processing
                </li>
              </ul>
              <h2 className="pt-5 text-white text-2xl">
                <b>UQ</b>
              </h2>
              <ul className="pt-5 pl-5 list-disc list-outside text-left sm:text-3xl text-gray-200">
                <li>
                  Bachelor of Engineering in Electronic / Digital Signal
                  Processing
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end pt-10  pb-5  sm:pt-20">
            <Link
              href="#contact"
              className="inline-flex items-center px-3 py-2 text-2xl
                    font-medium text-center text-white bg-[#e99401] rounded-lg
                    hover:bg-[#f2a727] focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:bg-[#f2a727] dark:hover:bg-[#f2a727] dark:focus:ring-[#e99401]"
            >
              Resume
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
