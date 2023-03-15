import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaGithub, FaLinkedinIn} from "react-icons/fa";
import OneImg from "public/assets/one.jpg";
import Image from "next/image";

const Main = () => {
  return (
    <div id="main">
      <Image
        className="bg-cover w-full h-screen object-left"
        src="https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80"
        // src={OneImg}
        alt="cover image"
        width={200}
        height={400}
        responsive
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
          <h1 className="flex text-center sm:text-4xl text-3xl font-bold text-gray-800">
            I'm Alejandro Garzon
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Developer", // Types 'One'
                1000, // Waits 1s
                "ML Engineer", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Cloud Architect", // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaGithub className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
