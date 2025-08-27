import React from "react";
import { Route, Routes } from "react-router";
import Hero from "../pages/Hero";

function AppRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Hero />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
