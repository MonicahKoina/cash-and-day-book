import React from "react";

function Select({ children, className = "", ...props }) {
  return (
    <select
      {...props}
      className={`w-full p-2 border border-blue-300 rounded outline-none 
        focus:ring-2 focus:ring-blue-500
         focus:border-blue-400
        ${className}`}
    >
      {children}
    </select>
  );
}

export default Select;
