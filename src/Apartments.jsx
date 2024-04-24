import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ListOfApartments from "./GETGroup2.js";

export default function Apartments() {
  let itemList = ListOfApartments.map((item, index) => {
    const navigate = useNavigate();
    console.log(item.ApartmentInfo);
    const toSpecificApartment = (Apartment) => {
      navigate(`${index}`, { state: Apartment });
    };
    return (
      <a>
        <div onClick={() => toSpecificApartment(item)}>
          <div className="relative bg-lightLogo bg-opacity-10 hover:bg-opacity-60 cursor-pointer justify-center rounded-md grid grid-flow-rows grid-rows-auto gap-5">
            <img
              className=" h-full w-100 hover:opacity-70"
              src={item.ApartmentInfo.images[0]}
              alt="placeholder"
            />
            <div className="p-2 text-center">
              <h2 className="text-lg">{item.ApartmentInfo.ApartmentName} </h2>
              <p className="text-sm opacity-50">
                {item.ZipCode} {item.ApartmentInfo.CityName}
              </p>
              <h2 className=""> {item.ApartmentInfo.Squaremeter}m²</h2>
              <h2 className="">{formatter.format(item.ApartmentInfo.Price)}</h2>
            </div>
          </div>
        </div>
      </a>
    );
  });
  return (
    <div>
      <div className=" relative p-4">
        <h1 className="text-3xl mx-5 my-3">
          {ListOfApartments.length.toString()} Apartments in Aalborg district
        </h1>
      </div>
      <main
        id="main"
        className="relative mx-5  top-6  grid grid-cols-4 gap-3 mb-20"
      >
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
