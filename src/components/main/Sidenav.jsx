import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineProfile,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineTool,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-2 right-1 z-[90] md:hidden bg-[#e99401]"
        size={25}
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-[90]">
          <Link
            onClick={handleNav}
            href="/#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </Link>
          <Link
            onClick={handleNav}
            href="/#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProfile size={20} />
            <span className="pl-4">About</span>
          </Link>
          <Link
            onClick={handleNav}
            href="/#skills"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineTool size={20} />
            <span className="pl-4">Skills</span>
          </Link>
          <Link
            onClick={handleNav}
            href="/#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </Link>
          <Link
            onClick={handleNav}
            href="/#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </Link>
          <Link
            onClick={handleNav}
            href="/#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </Link>
        </div>
      ) : (
        ""
      )}

      {/* <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <Link
            href="/#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-150"
          >
            <AiOutlineHome size={20} />
          </Link>
          <Link
            href="/#about"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-150"
          >
            <BsPerson size={20} />
          </Link>
          <Link
            href="/#skills"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-150"
          >
            <AiOutlineTool size={20} />
          </Link>
          <Link
            href="/#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-150"
          >
            <AiOutlineProject size={20} />
          </Link>
          <Link
            href="/#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-150"
          >
            <GrProjects size={20} />
          </Link>
          <Link
            href="/#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-150"
          >
            <AiOutlineMail size={20} />
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Sidenav;
