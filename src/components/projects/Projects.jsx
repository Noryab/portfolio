import React from "react";
import { FiSearch } from "react-icons/fi";

import Projectitem from "./Projectitem";
import OneImg from "public/assets/Sistema.png";
import TwoImg from "public/assets/Raytracing.png";
import ThreeImg from "public/assets/Phong3.png";
import FourImg from "public/assets/four.jpg";

import ProjectsFilter from "./ProjectsFilter";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1240px] pt-14 m-auto pl-10 pr-10 md:pl-10 p-4 py-5"
    >
      <h1 className="text-4xl pt-10 font-bold text-center text-[#e99401]">
        Projects
      </h1>
      <p className="text-justify py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet rerum
        iste voluptates, quidem iure blanditiis, quasi esse fuga repellat quod
        excepturi enim quas sapiente cum doloremque animi cumque reprehenderit?
        Minus.
      </p>

      <div
        className="
                        flex
                        flex-wrap
                        justify-center
                        sm:justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
      >
        <div className="flex flex-wrap sm:justify-between gap-2">
          <span
            className="
                                hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
          >
            <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
          </span>
          <input
            onChange={(e) => {
              setSearchProject(e.target.value);
            }}
            className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
            id="name"
            name="name"
            type="search"
            required=""
            placeholder="Search Projects"
            aria-label="Name"
          />
        </div>

        <ProjectsFilter setSelectProject={""} />
      </div>

      <div className="grid sm:grid-cols-3 ">
        <Projectitem img={OneImg} title="Visual odometry" description="VO" />
        <Projectitem img={TwoImg} title="Ray Tracing" description="RT" />
        <Projectitem
          img={ThreeImg}
          title="Rendering, lighting and texture mapping"
          description="Rendering"
        />
        <Projectitem img={FourImg} title="4" description="VO" />
      </div>
    </div>
  );
};

export default Projects;
