import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projectitem = ({ img, title, description }) => {
  return (
    <div className="relative flex flex-wrap justify-center h-full w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r text-[#e99401] hover:text-blue-200">
      <Image
        src={img}
        alt="/"
        className=" object-containt sm:block rounded-xl group-hover:brightness-50 sm:group-hover:scale-100 sm:group-hover:z-10 sm:group-hover:overflow-hidden"
      />
      <Link href="#">
        <h5 className="group-hover:z-10 sm:group-hover:block absolute top-[50%] group-hover:translate-y-[-300%]  sm:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] sm:group-hover:translate-y-[-400%] text-center mb-2 text-2xl font-bold tracking-tight  hover:text-blue-200 dark:text-white transition duration-300">
          {title}
        </h5>
      </Link>

      <div className="sm:group-hover:block sm:group-hover:z-10 absolute top-[10%] sm:top-[50%] left-[50%] translate-x-[-50%] translate-y-[20%] sm:translate-y-[50%] sm:group-hover:translate-y-0 transition duration-500 ">
        <div className="hidden  group-hover:block">
          <p className="mb-3 font sm:flex flex-wrap sm:text-xl text-white dark:text-gray-400 ">
            {description} Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Suscipit delectus expedita ipsam eius sit officiis, nulla ab
            laborum laudantium soluta. Earum debitis fugit animi quia modi
            nihil, vel minima culpa.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center px-3 py-2 text-sm
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
      </div>
    </div>
  );
};

export default Projectitem;
