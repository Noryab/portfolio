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
      {/* <p className="text-justify py-8 whitespace-pre-line"> */}
      <p className="flex flex-col whitespace-pre-line text-justify  pt-10 text-gray-700">
        My portfolio showcases a diverse range of projects that demonstrate my
        expertise as a backend developer, ML engineer, and data scientist. From
        web development to computer vision, my projects highlight my proficiency
        in a variety of areas. As an ML engineer, I specialize in computer
        vision, and my portfolio features numerous successful projects in this
        field. I am skilled in both Python and Node.js for backend development,
        allowing me to work efficiently on complex projects. Additionally, I
        have experience developing and deploying ML-based solutions on the
        Google Cloud Platform, demonstrating my ability to deliver powerful
        solutions to challenging problems. With a focus on delivering effective
        solutions in a variety of fields, my portfolio highlights my extensive
        knowledge and skills as a developer, ML engineer, and data scientist.
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

      <div className="grid sm:grid-cols-3">
        <Projectitem img={OneImg} title="Visual odometry" description="VO" />
        <Projectitem
          img={TwoImg}
          title="Ray Tracing"
          description="RT Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Suscipit delectus expedita ipsam eius sit officiis, nulla ab
          laborum laudantium soluta. Earum debitis fugit animi quia modi
          nihil, vel minima culpa"
        />
        <Projectitem
          img={ThreeImg}
          title="Rendering, lighting and texture mapping"
          description="Rendering Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Suscipit delectus expedita ipsam eius sit officiis, nulla ab
          laborum laudantium soluta. Earum debitis fugit animi quia modi
          nihil, vel minima culpa"
        />
        <Projectitem
          img={FourImg}
          title="Object Tracking"
          description="VO Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Suscipit delectus expedita ipsam eius sit officiis, nulla ab
          laborum laudantium soluta. Earum debitis fugit animi quia modi
          nihil, vel minima culpa"
        />
        <Projectitem
          img={FourImg}
          title="Object Tracking"
          description="VO Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Suscipit delectus expedita ipsam eius sit officiis, nulla ab
          laborum laudantium soluta. Earum debitis fugit animi quia modi
          nihil, vel minima culpa"
        />
        <Projectitem
          img={TwoImg}
          title="Object Tracking"
          description="VO Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Suscipit delectus expedita ipsam eius sit officiis, nulla ab
          laborum laudantium soluta. Earum debitis fugit animi quia modi
          nihil, vel minima culpa"
        />
      </div>
    </div>
  );
};

export default Projects;
