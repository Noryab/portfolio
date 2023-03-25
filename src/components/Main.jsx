import React from "react";
import { TypeAnimation } from "react-type-animation";

import ProfileImg from "public/assets/profile1.jpg";

import Image from "next/image";

const Main = () => {
  return (
<div id="main" className="inset-0 felx items-center justify-center h-screen w-screen bg-fixed bg-cover bg-center bg-bg2 xl:bg-bg2 ">      
  <div class="flex items-center justify-center h-screen backdrop-brightness-40 bg-white-30">
    <div class="text-white">
      <Image
        className="shadow-lg mx-auto rounded-full h-50 w-54 align-middle border-solid border-6 border-[#f3f4f8]"
        src={ProfileImg}
        alt="profile pic"
        width={350}
        height={400}            
      />
      <h1 className="text-center sm:text-5xl text-3xl font-bold text-gray-100">
        Alejandro Garzon
      </h1>
      <h2 className="flex flex-row justify-center sm:text-3xl text-2xl pt-4 text-gray-100 text-center">
        I am a
        <TypeAnimation
          sequence={[
            "Developer", // Types 'One'
            1000, // Waits 1s
            "Cloud Architect", // Types 'Three' without deleting 'Two'
            1000, // Waits 2s
            "ML Engineer", // Deletes 'One' and types 'Two'
            1000, // Waits 2s
            () => {
              console.log("Done typing!"); // Place optional callbacks anywhere in the array
            },
          ]}
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "1em", paddingLeft: "5px" }}
        />
      </h2>      
    </div>
  </div>    
  </div>

  );
};

export default Main;
