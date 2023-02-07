import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Discography from "../pages/Discography";
import Board from "../pages/Board";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/discography" element={<Discography />} />
      <Route path="/board" element={<Board />} />
    </Routes>
  );
};

export default Router;
