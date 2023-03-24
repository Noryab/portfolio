import React from "react";
import { FaTwitter, FaGithub, FaLinkedinIn} from "react-icons/fa";
import ProfileImg from "public/assets/profile1.jpg";
import Image from "next/image";
import { useState } from "react";


const About = () => {
  const [effect, setEffect] = useState(false);
  return (
    <div id="about"  className=" bg-gradient-to-tr h-screen w-screen bg-fixed bg-cover bg-center from-slate-300 to-[#c2c5cd]">
      <div className="max-w-[1240px] lg:py-20 m-auto flex flex-col lg:flex-row sm:flex-col justify-center items-center sm:pl-10">      
        <div className="max-w-[1000px] lg:pl-10 flex flex-col items-center p-5 sm:justify-center sm:pt-0 lg:items-center text-justify">
          <div className="lg:max-w-[1000px] sm:h-60 sm:w-60 h-40 w-40 items-start">
              <Image                
              className="shadow-lg rounded-3xl align-middle border-solid shadow-slate-600"            
              src={ProfileImg}
              alt="cover image"            
              width={400}
              height={400}
              />
          </div>
          <div className="flex justify-around pt-10 max-w-[600px] w-full">
              <a href="https://twitter.com/balgaci" target="_blank" rel="noreferrer"><FaTwitter className="cursor-pointer" size={30} /></a>
              <a href="https://github.com/Noryab" target="_blank" rel="noreferrer"><FaGithub className="cursor-pointer" size={30} /></a>
              <a href="https://twitter.com/balgaci" target="_blank" rel="noreferrer"><FaLinkedinIn className="cursor-pointer" size={30} /></a>
          </div>
        </div>
        <div className="pr-10 pl-5">
          <div className="mx-auto h-full w-full flex flex-col justify-center lg:items-left">
            <h1 className="flex lg:text-3xl sm:text-2xl text-xl font-bold text-gray-800">
              Alejandro Garzon
            </h1>
            <div>
              <p className="flex flex-col text-justify lg:text-3xl sm:text-2xl text-xl pt-4 text-gray-800">
              I'm a master of Engineering (M.Eng.) of UNAM and my passion is software design and development, robotics, machine learning, computer vision and cloud architecture.                            
              </p>
              <p className="flex flex-col text-justify lg:text-3xl sm:text-2xl text-xl pt-4 text-gray-800">
              I'm currently a freelance.
              </p>
              <h2 className="pt-5"><b>UNAM</b></h2>
              <ul className="pt-5 pl-5 list-disc list-outside text-left text-xl text-gray-700">
                    <li>                  
                      <b>Master of Engineering in Electrical / Digital Signal Processing</b>
                    </li>
              </ul>                                
              <h2 className="pt-5"><b>UQ</b></h2>
              <ul className="pt-5 pl-5 list-disc list-outside text-left text-xl text-gray-700">                    
                    <li>                  
                      <b>Bachelor of Engineering in Electronic / Digital Signal Processing</b>
                    </li>

              </ul>                                              
              <div className="flex justify-center pt-10">
                <button
                  className={`${
                    effect && "animate-resume"
                  } bg-gray-700 p-4 text-white rounded hover:bg-gray-500 hover:shadow-xl`}
                  onClick={() => {
                    setEffect(true);
                  }}
                  onAnimationEnd={() => setEffect(false)}
                >
                  Resume...
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
