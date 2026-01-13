import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import TerminalPortfolio from "./portfolio/TerminalPortfolio";

export default function MultiPageRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/projects" element={<TerminalPortfolio />} />
    </Routes>
  );
}
