import React from "react";
import { useNavigate } from "react-router";
function Hero() {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-center flex-col items-center h-[100vh] bg-gradient-to-b from-blue-100 to-blue-50  ">
      <div className="text-center text-4xl font-bold ">
        <h1>Welcome to Cash an Day books</h1>
        <h2>Manage you daily cash & bank records with ease</h2>
        <p>Select your role to continue</p>
      </div>
      <div
        className=" flex flex-col gap-2 md:flex justify-between text-2xl "
        style={{ margin: "20px" }}
      >
        <button
          className="border border-gray-400 rounded shadow-2xl bg-gradient-to-bl from-blue-200 to-blue-50 w-80 "
          onClick={() => navigate("/cashier-dashboard")}
        >
          Cashier
        </button>
        <button
          onClick={() => navigate("/procurement-dashboard")}
          className="border border-gray-400 rounded shadow-2xl bg-gradient-to-bl from-green-200 to-green-50  "
        >
          Procurement officer
        </button>
        <button
          onClick={() => navigate("/accountant-dashboard")}
          className="border border-gray-400 rounded shadow-2xl bg-gradient-to-bl from-amber-200 to-amber-50 "
        >
          Accountant
        </button>
      </div>
    </div>
  );
}

export default Hero;
