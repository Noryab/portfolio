import React from "react";
import Image from "next/image";
import Link from "next/link";

const Projectitem = ({ img, title, description }) => {
  // img ='https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=843&q=80'
  return (
    <Link
      href="#"
      className="relative flex justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r text-blue-600 hover:text-blue-200"
    >
      <Image
        src={img}
        alt="/"
        className="block rounded-xl group-hover:brightness-50 group-hover:scale-105 group-hover:z-10 group-hover:overflow-hidden"
      />
      <Link href="#">
        <h5 className="group-hover:z-10 group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-100%] group-hover:translate-y-[-400%] text-center mb-2 text-2xl font-bold tracking-tight  hover:text-blue-200 dark:text-white transition duration-300">
          {title}
        </h5>
      </Link>

      <div className="group-hover:block group-hover:z-10 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[50%] group-hover:translate-y-0 transition duration-500 ">
        <div className="hidden  group-hover:block">
          <p className="mb-3 font text-xl text-white dark:text-gray-400 ">
            {description} Here are the biggest enterprise technology
            acquisitions of 2021 so far, in reverse chronological order.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center px-3 py-2 text-sm
          font-medium text-center text-white bg-blue-600 rounded-lg
          hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300
          dark:bg-blue-600 dark:hover:bg-blue-600 dark:focus:ring-blue-700"
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
    </Link>
  );
};

export default Projectitem;
