import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCoins } from "react-icons/fa";
import { FaHouseChimney } from "react-icons/fa6";
import ListOfApartments from "./GETApartments.js";

export default function Apartments() {
  let itemList = ListOfApartments.map((item, index) => {
    const navigate = useNavigate();

    const toSpecificApartment = (Apartment) => {
      navigate(`${index}`, { state: Apartment });
    };
    return (
      <a>
        <div onClick={() => toSpecificApartment(item)}>
          <div className="relative bg-lightLogo bg-opacity-10 hover:bg-opacity-60 cursor-pointer justify-center rounded-md grid grid-flow-rows grid-rows-auto gap-5">
            <img
              className=" h-full w-100 hover:opacity-70"
              src={item.images[0]}
              alt="placeholder"
            />
            <div className="p-2 text-center">
              <h2 className="text-lg">{item.RoadName} </h2>
              <p className="text-sm opacity-50">
                {item.ZipCode} {item.city}
              </p>
              <h2 className=""> {item.sqm}m²</h2>
              <h2 className="">{formatter.format(item.price)}</h2>
            </div>
          </div>
        </div>
      </a>
    );
  });
  return (
    <div>
      <div className="grid h-32 w-full grid-cols-3 mt-3 ">
        <div className="">
          <div className="flex m-10 mr-12 mt-14">
            <input
              className=" w-96 h-10 w3-input border-4 rounded-sm p-2.5"
              type="text"
              placeholder="Zip code, Adress, Road name..."
            />
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
          </div>
        </div>
        <div className=" border-l-2 border-r-2">
          <div className=" m-10 mb-0">
            <div className="grid grid-rows-2"></div>
            <h2 className=" ml-36 text-black">Maximum price</h2>
            <div className=" flex">
              <FaCoins className=" m-2 text-black text-3xl" />
              <input
                className=" m-4 w-full h-3 bg-gray-200 appearance-none cursor-pointer dark:bg-gray-700"
                type="range"
                min="0"
                max="5000000"
                step="100000"
                name=""
                id="num"
                on
                onChange={(event) => {
                  document.getElementById("price").innerText = formatter.format(
                    event.target.value
                  );
                  let newList = ListOfApartments.filter(
                    (Apartment) =>
                      Apartment.price <= document.getElementById("num").value
                  );
                  let itemList = newList.map((item, index) => {
                    if (newList.length > 0) {
                      return (
                        <a>
                          <div onClick={() => toSpecificApartment(item)}>
                            <div className="static hover:bg-blue-300 justify-center rounded-lg grid grid-cols-2 gap-5 p-2">
                              <div className="">
                                <h2 className="text-lg">
                                  {item.RoadName} &nbsp;&nbsp;&nbsp;{" "}
                                </h2>
                                <p className="text-sm opacity-50">
                                  {item.ZipCode} &nbsp; {item.city}
                                </p>
                                <h2 className="">Area: {item.sqm}m²</h2>
                                <h2 className="">
                                  {formatter.format(item.price)}
                                </h2>
                              </div>
                              <img
                                className="hover:bg-blue-300 h-auto w-100 rounded-lg "
                                src={item.images[0]}
                                alt="placeholder"
                              />
                            </div>
                          </div>
                        </a>
                      );
                    }
                  });
                }}
              />
            </div>
          </div>
          <h1 id="price" className=" text-black ml-48 mb-3">
            0,00 kr.
          </h1>
        </div>
        <div className="">
          <div className=" m-10 mb-0">
            <div className="grid grid-rows-2">
              <h2 className="ml-24 text-black">Maximum square meter</h2>
              <div className="flex">
                <FaHouseChimney className=" m-2 mt-0 my-0 mx text-3xl" />
                <input
                  className=" m-3 w-full h-3 bg-gray-200 appearance-none cursor-pointer dark:bg-gray-700"
                  type="range"
                  min="0"
                  max="300"
                  step="20"
                  name=""
                  id="numH"
                  onChange={(event) => {
                    document.getElementById("squaremeter").innerText =
                      event.target.value + " m² ";
                    let newList = ListOfApartments.filter(
                      (Apartment) =>
                        Apartment.price <= document.getElementById("num").value
                    );
                    let itemList = newList.map((item, index) => {
                      if (newList.length > 0) {
                        return (
                          <a>
                            <div onClick={() => toSpecificApartment(item)}>
                              <div className="static hover:bg-blue-300 justify-center rounded-lg grid grid-cols-2 gap-5 p-2">
                                <div className="">
                                  <h2 className="text-lg">
                                    {item.RoadName} &nbsp;&nbsp;&nbsp;{" "}
                                  </h2>
                                  <p className="text-sm opacity-50">
                                    {item.ZipCode} &nbsp; {item.city}
                                  </p>
                                  <h2 className="">Area: {item.sqm}m²</h2>
                                  <h2 className="">
                                    {formatter.format(item.price)}
                                  </h2>
                                </div>
                                <img
                                  className="hover:bg-blue-300 h-auto w-100 rounded-lg "
                                  src={item.images[0]}
                                  alt="placeholder"
                                />
                              </div>
                            </div>
                          </a>
                        );
                      }
                    });
                  }}
                />
              </div>
            </div>
          </div>
          <h1 id="squaremeter" className=" ml-48">
            {" "}
            0 m²
          </h1>
        </div>
      </div>
      <div className=" relative p-4 mt-6">
        <h1 className="text-3xl mx-5 my-5">
          {ListOfApartments.length.toString()} Apartments in Aalborg district
        </h1>
      </div>
      <main id="main" className="relative mx-5  top-6  grid grid-cols-3 gap-3">
        {itemList}
      </main>
    </div>
  );
}
const formatter = new Intl.NumberFormat("dk-DK", {
  style: "currency",
  currency: "DKK",
});
const simpleFormatter = new Intl.NumberFormat();
