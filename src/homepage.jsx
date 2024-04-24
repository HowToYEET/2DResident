import React from "react";
import { ReactTyped } from "react-typed";
import { NavLink, Navigate, useLocation, useNavigate } from "react-router-dom";
export default function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const toSpecificApartment = () => {
    navigate("/Apartments/", {
      state: null,
      relative: "path",
    });
  };
  const text = [
    "New apartments every day!",
    "Go explore our available apartments!",
    "search for apartments below!",
  ];
  return (
    <div className="relative mb-40 mt-10">
      <div className=" grid grid-cols-2">
        <div className="">
          <div className="grid grid-cols-1">
            <div>
              <h1 className="text-3xl m-2 p-6 font-serif mr-20 mb-10 ml-10 ">
                Welcome to Residence Provider.
              </h1>
            </div>
            <div className="grid grid-rows-1">
              <button
                onClick={toSpecificApartment}
                className="flex w-60 ml-44 ml-20, mb-28 select-none rounded-lg bg-gradient-to-tr from-logo to-logo py-3 px-9 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                <svg
                  className="h-4 w-4 mx-1"
                  xmlns="http://www.w3.org/1999/xlink"
                >
                  <path d="M15.45,7L14,5.551V2c0-0.55-0.45-1-1-1h-1c-0.55,0-1,0.45-1,1v0.553L9,0.555C8.727,0.297,8.477,0,8,0S7.273,0.297,7,0.555  L0.55,7C0.238,7.325,0,7.562,0,8c0,0.563,0.432,1,1,1h1v6c0,0.55,0.45,1,1,1h3v-5c0-0.55,0.45-1,1-1h2c0.55,0,1,0.45,1,1v5h3  c0.55,0,1-0.45,1-1V9h1c0.568,0,1-0.437,1-1C16,7.562,15.762,7.325,15.45,7z" />
                </svg>
                See our apartments
              </button>
              <ReactTyped
                className="font-serif"
                style={{ margin: 3, padding: 6 }}
                strings={text}
                backDelay={5000}
                showCursor={false}
                typeSpeed={25}
                backSpeed={25}
              />
            </div>
          </div>

          <div className="flex relative ml-4 top-5">
            <div className=" bg-slate-600 p-8 flex rounded-md">
              <input
                onKeyUp={(e) => {
                  if (e.key === "Enter") {
                    toSpecificApartment();
                  }
                }}
                className="w-96 h-10 w3-input border-4 rounded-sm p-2.5"
                type="text"
                placeholder="Zip code, Adress, Road name..."
              />
              <NavLink to="/Apartments/">
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
                    />
                  </svg>
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="m-3">
          <img
            className="p-0 w-5/6"
            src="https://images.ctfassets.net/pg6xj64qk0kh/2r4QaBLvhQFH1mPGljSdR9/39b737d93854060282f6b4a9b9893202/camden-paces-apartments-buckhead-ga-terraces-living-room-with-den_1.jpg?w=960"
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
}
