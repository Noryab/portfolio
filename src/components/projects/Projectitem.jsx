import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projectitem = ({ img, title, description }) => {
  return (
    <div className="flex flex-wrap justify-center  max-h-[220px] shadow-xl shadow-gray-400 rounded-xl ">
      <div className="group  text-[#e99401] hover:text-white ">
        <div className="h-48 max-h-[70]">
          <Image
            src={img}
            alt="/"
            className="rounded-xl sm:group-hover:z-10  aspect-video hover:brightness-50 aspect-video"
          />
        </div>
        <div className="relative sm:top-[-40%] left-[1%] hover:sm:translate-y-[-10%] sm:translate-y-[-20%] transition duration-500">
          <Link href="#projects">
            {/* <h5 className="sm:group-hover:z-10 relative top-[10%] group-hover:translate-y-[10%]  sm:top-[-50%] left-[10%] translate-x-[-10%] translate-y-[-10%] sm:group-hover:translate-y-[50%] text-center mb-2 text-2xl font-bold tracking-tight  hover:text-blue-200 dark:text-white transition duration-300"> */}
            <h5 className="text-center text-xl font-bold tracking-tight ">
              {title}
            </h5>
          </Link>

          <div className="hidden group-hover:block ">
            <p className="mx-3 whitespace-pre-line">{description}</p>
          </div>
        </div>
        {/* <div className="sm:group-hover:z-10 top-1 ml-5 translate-x-[0%] translate-y-[-50%] sm:translate-y-[50%] sm:group-hover:translate-y-[-100%] transition duration-500 ">
          <div className="hidden relative group-hover:block">
            <p className="mb-3 max-w-[90%] font text-white">
              {description} Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Suscipit delectus expedita ipsam eius sit officiis, nulla ab
              laborum laudantium soluta. Earum debitis fugit animi quia modi
              nihil, vel minima culpa.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center px-3 py-1 text-sm
            font-medium text-center text-white bg-[#e99401] rounded-lg
            hover:bg-[#f2a727] focus:ring-4 focus:outline-none focus:ring-blue-300
            dark:bg-[#f2a727] dark:hover:bg-[#f2a727] dark:focus:ring-[#e99401]"
            >
              Read more
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
        </div>*/}
      </div>
    </div>
  );
};

export default Projectitem;
