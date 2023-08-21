import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home.jsx"
import About from "./About.jsx"
import Service from "./Service.jsx"


export default function Router() {
  return (
    <>
      <BrowserRouter>
        <ul>
            <li>
                <NavLink to={"/home"}>Home</NavLink>
            </li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li>
            <NavLink to={"/service"}>Service</NavLink>
            </li>
        </ul>

        <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
