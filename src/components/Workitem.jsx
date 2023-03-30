import React from "react";

const Workitem = ({ year, title, duration, description }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-3">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#da8a01] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#e99401]">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-600">
            {duration}
          </span>
        </p>
        <p className="my-2 text-base font-normal text-stone-800">
          {description}
        </p>
      </li>
    </ol>
  );
};

export default Workitem;
