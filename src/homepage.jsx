import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { FaArrowDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { NavLink, Navigate } from "react-router-dom";
export default function HomePage() {
  const text = ["New apartments every day!", "Go explore our available apartments!", "search for apartments below!"]
  const SomeApartments = ["/placeholder.jpg", "/placeholder.jpg", "/Residence2DLogo.png", "/placeholder.jpg"]
  return (
    <div className="relative">
      <div className=" grid grid-cols-2">
        <div className="">
          <div>
            <h1 className="text-3xl p-6 font-serif">The 2D real estate website   </h1>
            <ReactTyped className=" font-serif p-6 " style={{ margin: 6, padding: 6 }} strings={text} backDelay={5000} typeSpeed={25} backSpeed={25} />
          </div>
          <div className="flex relative ml-4 top-20">
            <div className=" bg-slate-600 p-8 flex rounded-sm">
              <input className="w-96 h-10 w3-input border-4 rounded-sm p-2.5" type="text" placeholder="Zip code, Adress, Road name..." />
              <NavLink to="/Apartments">
                <button className=" bg-logo h-10 w-10 top-1" type="button">
                  <svg
                    class="w-6 h-6 mx-2 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    /></svg>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="">
          <img src="https://images.ctfassets.net/pg6xj64qk0kh/2r4QaBLvhQFH1mPGljSdR9/39b737d93854060282f6b4a9b9893202/camden-paces-apartments-buckhead-ga-terraces-living-room-with-den_1.jpg?w=960" alt="" srcset="" />
        </div>
        
      </div>

    </div>
  );
}