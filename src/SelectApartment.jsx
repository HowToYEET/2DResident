import React, { useState } from "react";
import { useLocation } from 'react-router-dom';
import { FaArrowRight, FaArrowLeft, FaHouseChimney } from "react-icons/fa6";
import { FaHourglassStart } from "react-icons/fa";
import { PiSelectionBackground } from "react-icons/pi";
import { RxBorderSplit } from "react-icons/rx";
import { GrMoney } from "react-icons/gr";
export default function SelectApartments({ images }) {
  const location = useLocation(); //use location.state to get information
  const [slide, Setslide] = useState(0)
  console.log(images)

  const previousslide = () => {
    Setslide(slide === 0 ? images.length - 1 : slide - 1);
  }

  const nextslide = () => {
    Setslide(slide === images.length - 1 ? 0 : slide + 1);
  }
  return (
    <div className="w-[40%] m-auto ">

      <div className="relative top-40  overflow-hidden"><h1 className="text-3xl">{location.state.RoadName} </h1>
        <div className='flex transistion ease-out duration-300' style={{ transform: `translateX(-${slide * 100}%)` }}>
          {images.map((im, index) => {
            return <img className="rounded-lg" src={im} alt={`apartment image ${index + 1}`} />
          })}

        </div>
        <div className="absolute top-0 h-full w-full justify-between items-center flex px-10 text-3xl">
          <button onClick={previousslide}>
            <FaArrowLeft />
          </button>
          <button onClick={nextslide} >
            <FaArrowRight />
          </button>
        </div>

      </div>

      <div className="relative top-60 overflow-hidden block border-4 border-sky-500 rounded-sm grid lg:grid-cols-2 gap-2 sm:grid-cols-1 md:grid-cols-1">
      <div className="flex">
           <GrMoney className="place-content-center text-3xl pt-2"/> <h2 className="text-3xl">{formatter.format(location.state.price)}</h2>
          </div>
        
        <div className="grid lg:grid-cols-2 gap-8 gap-y-6 sm:grid-cols-1">
          <div className="flex">
           <FaHouseChimney className="place-content-center text-2xl pt-2"/> <h2 className="text-xl">{location.state.sqm}m² </h2>
          </div>
          <div className="flex">
           <FaHourglassStart className="place-content-center text-2xl pt-2"/> <h2 className="text-xl">{location.state.year} </h2>
          </div>
          <div className="flex">
           <PiSelectionBackground className="place-content-center text-2xl pt-2"/> <h2 className="sticky flex text-md">ground Area:{location.state.sqm*2}m² </h2>
          </div>
          <div className="flex">
           <RxBorderSplit className="place-content-center text-2xl pt-2"/> <h2 className="sticky flex text-md">5 rooms </h2>
          </div>
          </div>
          <div className="col-span-2">
            <h1 className="text-3xl">Description:</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, harum placeat. Voluptas dolor eius saepe odit cum adipisci totam quae ratione tempore possimus harum quas explicabo, vel qui dolore ad!</p>
          </div>
      </div>
    </div>
  );
}
const formatter = new Intl.NumberFormat("dk-DK", {
  style: "currency",
  currency: "DKK",
});