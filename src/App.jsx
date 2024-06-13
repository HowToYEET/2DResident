import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer.jsx";
import Nav from "./navbar.jsx";
export default function LandingPage() {
  //localStorage.clear();

  return (
    <div className=" grid-cols-1">
      <div className="">
        <Nav />
      </div>
      <div>
        <Outlet id="ContentCenter" />
      </div>
      <div className=" ">
        <Footer />
      </div>
    </div>
  );
}
