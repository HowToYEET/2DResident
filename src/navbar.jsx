import React from "react";
import { NavLink, ScrollRestoration } from "react-router-dom";
import logo from "../public/ResidenceLogo.png";
import { TiBusinessCard } from "react-icons/ti";
export default function Nav() {
  return (
    <>
      <nav class="relative h-40 w-full border-b-4 border-gray-200">
        <div class="max-w-screen-xl flex-wrap items-center justify-between mx-auto">
          <div class="items-center justify-between w-full md:flex md:w-auto md:order-1">
            <NavLink to="Home">
              <img
                className="object-cover h-36 w-54 mt-1"
                src={logo}
                alt="2DResidence"
              />
            </NavLink>

            <ul class="flex m-1 p-10 md:p-0 font-medium border md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              <li class="flex mx-1">
                <svg
                  className="h-4 w-4 my-1 mx-2"
                  xmlns="http://www.w3.org/1999/xlink"
                >
                  <path d="M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z" />
                </svg>
                <NavLink to="Home">Home</NavLink>
              </li>
              <li class="flex mx-1">
                <svg
                  class="w-4 h-4 my-1 mx-2 text-gray-500 dark:text-gray-400"
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
                  />
                </svg>
                <NavLink to="/Apartments">Find apartments</NavLink>
              </li>
              <li class="flex mx-1 pointer cursor-pointer">
                <TiBusinessCard className="text-xl my-1 mx-1" />
                Find brokers
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
