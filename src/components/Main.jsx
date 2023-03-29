import React from "react";
import { TypeAnimation } from "react-type-animation";

import ProfileImg from "public/assets/profile1.jpg";

import Image from "next/image";

const Main = () => {
  return (
    <div
      id="main"
      className="inset-0 items-center justify-center h-screen w-screen bg-fixed bg-cover bg-center bg-bgMain"
    >
      <div class="flex flex-col h-screen justify-center items-center backdrop-brightness-50">
        <Image
          className="rounded-full flex justify-center h-60 w-60 sm:w-auto sm:h-auto"
          src={ProfileImg}
          alt="profile pic"
          width={300}
          height={300}
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
  );
};

export default Main;
