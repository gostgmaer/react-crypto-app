import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";

const RouterNavigation = () => {
  return (
    <Routes>
      <Route to="/" element={<Home></Home>} />
    
    
    </Routes>
  );
};

export default RouterNavigation;
