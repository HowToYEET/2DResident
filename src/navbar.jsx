import React from "react";
import { NavLink, ScrollRestoration } from "react-router-dom";
import logo from "../public/ResidenceLogo.png";
import { TiBusinessCard } from "react-icons/ti";
export default function Nav() {
  return (
    <>
      <nav class="relative h-24 w-full border-b-4 border-gray-200">
        <div class="max-w-screen-xl flex-wrap items-center justify-between mx-auto">
          <div class="items-center justify-between w-full md:flex md:w-auto md:order-1">
            <NavLink to="Home">
              <img
                className="object-cover h-20 w-54 mt-1"
                src={logo}
                alt="2DResidence"
              />
            </NavLink>

            <ul class="flex  m-1 p-10 md:p-0 font-medium  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <NavLink to="Home">
                <li class="flex bg-logo mx-1 select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  Home
                </li>
              </NavLink>
              <NavLink to="/Apartments/">
                <li class="flex mx-1 cursor-pointer rounded-lg border border-logo py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  <svg
                    className="h-4 w-4 mx-2"
                    xmlns="http://www.w3.org/1999/xlink"
                  >
                    <path d="M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z" />
                  </svg>
                  See apartments
                </li></NavLink>
              <li class="flex mx-1 cursor-pointer select-none rounded-lg border border-logo py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                <TiBusinessCard className="text-xl mx-2 h-4 w-4" />
                Find brokers
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
