import React from "react";

function Input({ type = "text", className = "", ...props }) {
  return (
    <input
      type={type}
      {...props}
      className={`w-full p-2 border border-blue-400 rounded outline-none 
        focus:ring-2 focus:ring-blue-400 focus:border-blue-400 
        ${className}`}
    />
  );
}

export default Input;
