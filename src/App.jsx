import React from "react";
import Nav from "./navbar.jsx";
import { Outlet } from "react-router-dom";
import Footer from './Footer.jsx'
export default function LandingPage() {
  return (
    <div className=" grid-cols-1">
      <Nav className="bg-white relative" />
      <Outlet className="relative pt-10 bg-slate-50 content-between justify-self-auto gap-4" id="ContentCenter" />
      <Footer />
    </div>
  );
}