import React from "react";

const Alert = ({ children }) => {
  return (
    <div className="text-right text-xs my-1 bg-transparent text-red-600 font-bold p-1 uppercase">
      {children}
    </div>
  );
};

export default Alert;
