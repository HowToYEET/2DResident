import React from "react";
import Nav from "./navbar.jsx";
import { Outlet} from "react-router-dom";
import Footer from './Footer.jsx'
export default function LandingPage() {
  return (
    <div>
    <header>
      <Nav />
    </header>
    <div className="relative pt-10 overflow-auto bg-gradient-to-br from-cyan-100 content-between justify-self-auto gap-4" id="ContentCenter">
       <Outlet/>
       <Footer />
        </div>
    </div>
  );
}