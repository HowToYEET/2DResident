import React from "react";
import Nav from "./navbar.jsx";
import { Outlet } from "react-router-dom";
export default function LandingPage() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <div className="overflow-auto relative top-40 bg-gradient-to-b from-blue-100 to-blue-200" id="ContentCenter"> <Outlet /> </div>
    </>
  );
}