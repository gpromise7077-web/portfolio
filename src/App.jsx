import { useState, useEffect } from "react";
import "./App.css";
import Home from "./home";
import Skiils from "./skiils";
import Aboutme from "./Aboutme";
import Contact from "./contact";
import Project from "./project";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="project" element={<Project />} />

        <Route index element={<Home />} />
        <Route path="skill" element={<Skiils />} />

        <Route index element={<Home />} />
        <Route path="aboutme" element={<Aboutme />} />

        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
