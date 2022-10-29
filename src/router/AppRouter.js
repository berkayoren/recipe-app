import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
