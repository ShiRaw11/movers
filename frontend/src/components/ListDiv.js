import React from "react";

const List = ({ divStyle, children }) => {
  return (
    <div
      className={`flex items-center mt-[20px] w-[90%] justify-center p-3 rounded-md h-[50] bg-white shadow-[4px_4px_10px_1px_rgba(0,0,0,0.25)] ${
        divStyle ? divStyle : ""
      }`}
    >
      {children}
    </div>
  );
};

export default List;
