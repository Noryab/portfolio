import React from "react";
import Projectitem from "./Projectitem";
import OneImg from "public/assets/Sistema.png";
import TwoImg from "public/assets/Raytracing.png";
import ThreeImg from "public/assets/Phong3.png";
import FourImg from "public/assets/four.jpg";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1240px] m-auto pl-10 pr-10 md:pl-10 p-4 py-5"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects
      </h1>
      <p className="text-justify py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum
        iste voluptates, quidem iure blanditiis, quasi esse fuga repellat quod
        excepturi enim quas sapiente cum doloremque animi cumque reprehenderit?
        Minus.
      </p>
      <div className="grid sm:grid-cols-2 ">
        <Projectitem img={OneImg} title="Visual odometry" description="VO" />
        <Projectitem img={TwoImg} title="Ray Tracing" description="RT" />
        <Projectitem img={ThreeImg} title="3" description="VO" />
        <Projectitem img={FourImg} title="4" description="VO" />
      </div>
    </div>
  );
};

export default Projects;
