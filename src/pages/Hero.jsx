import { Button } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router";
function Hero() {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-center flex-col items-center h-[100vh] ">
      <div className="text-center ">
        <h1>Welcome to Cash an Day books</h1>
        <h2>Manage you daily cash & bank records with ease</h2>
        <p>Select your role to continue</p>
      </div>
      <div
        className=" flex flex-col gap-2 md:flex justify-between "
        style={{ margin: "20px" }}
      >
        <Button colorPalette={"blue"} variant="outline">
          Cashier
        </Button>
        <Button colorPalette={"green"} variant="outline">
          Procurement Officer
        </Button>
        <Button colorPalette={"teal"} variant="outline">
          Accountant
        </Button>
      </div>
    </div>
  );
}

export default Hero;
