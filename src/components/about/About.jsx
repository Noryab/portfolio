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
      className="pt-10 bg-gradient-to-tr h-auto w-screen sm:h-screen bg-fixed bg-cover bg-center from-[#e7e4e4] to-[#abb3cd]"
    >
      <div className="max-w-[1240px] pt-6 sm:py-10 m-auto flex flex-col lg:flex-row justify-center items-center">
        <h1 className="text-4xl font-bold pt-10 text-center text-[#0b0b0b]">
          About<span class="text-[#6b6a6a] font-extrabold p-2">me</span>
        </h1>
        <div className="max-w-[1000px]  flex flex-col items-center p-5 sm:justify-center text-justify">
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
          <div className="mx-auto h-full w-full flex flex-col sm:text-2xl">
            <h1 className="flex justify-center text-center sm:text-3xl font-bold text-[#090909]">
              Alejandro Garzón
            </h1>
            <div>
              <p className="flex flex-col text-justify  pt-10 text-gray-700">
                I am an engineer with a Master of Engineering degree from the
                National Autonomous University of Mexico (UNAM). My interests
                lie in software design and development, robotics, machine
                learning, computer vision, and cloud architecture.
              </p>
              <p className="flex flex-col text-justify  pt-10 text-gray-700">
                Currently, I work as a freelancer.
              </p>
              <h2 className="pt-5 text-gray-800 text-2xl">
                <b>Universidad Nacional Autónoma de México</b>
              </h2>
              <ul className="pt-5 pl-5 list-disc list-outside text-left  text-gray-700">
                <li>
                  Master of Engineering in Electrical / Digital Signal
                  Processing
                </li>
              </ul>
              <h2 className="pt-5 text-gray-800">
                <b>Universidad del Quindío</b>
              </h2>
              <ul className="pt-5 pl-5 list-disc list-outside text-left text-gray-700">
                <li>
                  Bachelor of Engineering in Electronic / Digital Signal
                  Processing
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-end pt-10  pb-5  sm:pt-20">
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="assets/CV_Bayron_Alejandro_Garzon_Cifuentes.pdf"
              className="inline-flex items-center px-3 py-2 text-2xl
                    font-medium text-center text-black bg-[#fcf9f4] rounded-lg
                    hover:bg-[#e4e3e2] focus:ring-4 focus:outline-none focus:ring-blue-300
                    dark:bg-[#fefdfc] dark:hover:bg-[#fcfaf7] dark:focus:ring-[#fcfaf7]"
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
