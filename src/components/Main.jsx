import React from "react";
import { TypeAnimation } from "react-type-animation";

import ProfileImg from "public/assets/profile1.jpg";

import Image from "next/image";

const Main = () => {
  return (
    <div
      id="main"
      className="inset-0 items-center justify-center h-screen w-screen bg-fixed bg-cover bg-center bg-bgMain xl:bg-bgMain "
    >
      <div class="flex items-center justify-center h-screen backdrop-brightness-50">
        <div class="text-white items-center align-middle justify-center">
          <div className="flex justify-center h-44 w-44 sm:h-auto sm:w-auto">
            <Image
              className="rounded-full flex justify-center"
              src={ProfileImg}
              alt="profile pic"
              width={200}
              height={200}
            />
          </div>
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
