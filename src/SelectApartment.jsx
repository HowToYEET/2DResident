import React, { useState, useEffect } from "react";
import { json, useLocation } from "react-router-dom";
import { FaArrowLeftLong, FaHouseChimney } from "react-icons/fa6";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { GrMoney } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

export default function SelectApartments() {
  const location = useLocation(); //use location.state to get information
  console.log(location.state, "HERE");
  const listOfImages = location.state.ApartmentInfo.images;
  const navigate = useNavigate();
  const [time, setTime] = useState(() => {
    var time = parseInt(
      window.localStorage.getItem(
        "IndividualApartmentTimeSpentInSeconds" + location.pathname
      )
    );
    if (time) {
      return time;
    } else {
      return 0;
    }
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevtime) => prevtime + 1);
      window.localStorage.setItem(
        "IndividualApartmentTimeSpentInSeconds" + location.pathname,
        time
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  return (
    <div className=" flex flex-col place-items-center">
      <div
        className="hover:cursor-pointer flex text-center hover:bg-black hover:bg-opacity-10 rounded-md absolute top-30 left-20 w-32 m-4 z-10"
        onClick={() => {
          navigate(-1);
        }}
      >
        <FaArrowLeftLong className=" text-3xl mx-3" /> <p>Go back</p>
      </div>
      <Carusel data={listOfImages} />
      <Information data={location.state} />
    </div>
  );
}
const Carusel = (listOfImages) => {
  const [slide, Setslide] = useState(0);
  const location = useLocation(); //use location.state to get information
  const navigate = useNavigate();
  console.log(location.state);
  const toSpecificApartment = (Apartment) => {
    navigate(location.pathname + "/showroom", {
      state: Apartment,
      relative: "path",
    });
  };
  const previousslide = () => {
    Setslide(slide === 0 ? listOfImages.data.length - 1 : slide - 1);
  };

  const nextslide = () => {
    Setslide(slide === listOfImages.data.length - 1 ? 0 : slide + 1);
  };
  const [click, setClick] = useState(() => {
    var time = parseInt(
      window.localStorage.getItem(
        "IndividualApartmentImageRotationClicks" + location.pathname
      )
    );
    if (time) {
      return time;
    } else {
      return 0;
    }
  });
  useEffect(() => {
    const interval = setInterval(() => {
      window.localStorage.setItem(
        "IndividualApartmentImageRotationClicks" + location.pathname,
        click
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [click]);
  //console.log(listOfImages.data);
  return (
    <div>
      <div>
        <div className="w-[100%] overflow-x-hidden justify-center items-center">
          <div className="relative top-2 ">
            <div className="static m-5 flex justify-center curser-pointer">
              {listOfImages.data.map((im, index) => {
                return (
                  <div
                    className={slide === index ? "slide" : "slide hidden-slide"}
                  >
                    <div
                      onClick={() => toSpecificApartment(location.state)}
                      className={
                        im.includes("SeeA")
                          ? " z-20 absolute cursor-pointer text-center bg-slate-500 w-3/5 h-full opacity-0 "
                          : " z-20 absolute cursor-pointer text-center bg-slate-500 w-3/5 h-full hidden "
                      }
                    ></div>
                    <img
                      id={index}
                      src={im}
                      alt={`apartment image ${index + 1}`}
                    />
                  </div>
                );
              })}
            </div>
            <div className="absolute top-0 h-full w-full justify-between items-center flex px-20 text-5xl text-black ">
              <button
                className="text-8xl "
                onClick={() => {
                  previousslide();
                  setClick((prevtime) => prevtime + 1);
                }}
              >
                <IoIosArrowBack className="mx-1" />
              </button>
              <button
                className=" text-8xl "
                onClick={() => {
                  nextslide();
                  setClick((prevtime) => prevtime + 1);
                }}
              >
                <IoIosArrowForward className="mx-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        {listOfImages.data.map((im, index) => {
          return (
            <div className="w-28 mx-2 inline-flex cursor-pointer ">
              <img
                className={
                  slide === index
                    ? " border-solid border-4 border-sky-500 rounded-sm h-16"
                    : "rounded-sm"
                }
                id={index}
                src={im}
                alt={`apartment image ${index + 1}`}
                onClick={() => {
                  Setslide(index);
                  setClick((prevtime) => prevtime + 1);
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Information = (apartment) => {
  const navigate = useNavigate();
  const location = useLocation();

  const toSpecificApartment = (Apartment) => {
    navigate(location.pathname + "/showroom", {
      state: Apartment,
      relative: "path",
    });
  };

  return (
    <div className=" mt-8  w-full h-full grid grid-cols-3 overflow-x-hidden">
      <div id="Faktabox" className=" w-full">
        <div className=" grid grid-rows-4 bg-slate-400 bg-opacity-50 m-2 pl-2 ml-40 rounded-sm">
          <h1 className=" m-5 text-2xl">Facts of the residence</h1>
          <div className="grid grid-cols-2 row-span-3">
            <div id="measurement" className=" pl-5 space-y-3">
              <p className="text-sm font-extralight">Square meter:</p>
              <p className="text-sm font-extralight">Year build:</p>
              <p className="text-sm font-extralight">Number of rooms:</p>
              <p className="text-sm font-extralight">Floor number:</p>
              <p className="text-sm font-extralight">Square meter price:</p>
              <p className="text-sm font-extralight">Price historic changes:</p>
              <p className="text-sm font-extralight">Energy label:</p>
              <p>&nbsp;</p>
            </div>
            <div id="number" className=" space-y-3 text-right pr-9">
              <p className="text-sm font-semibold">
                {apartment.data.ApartmentInfo.Squaremeter}m²
              </p>
              <p className="text-sm font-semibold">
                {apartment.data.ApartmentInfo.Year}
              </p>
              <p className="text-sm font-semibold">
                {apartment.data.ApartmentInfo.RoomNumber}
              </p>
              <p className="text-sm font-semibold">
                {apartment.data.ApartmentInfo.FloorNumber}.
              </p>
              <p className="text-sm font-semibold">
                {formatter.format(
                  apartment.data.ApartmentInfo.SquaremeterPrice
                )}
              </p>
              <p className="text-sm font-semibold">
                {apartment.data.ApartmentInfo.PriceHist}%
              </p>
              <img
                className="h-8 ml-40"
                src={apartment.data.ApartmentInfo.EnergyLevel}
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
      <div id=" Beskrivelse" className="  m-2 col-span-2 w-full h-96">
        <div className=" m-2 text-2xl font-extralight space-y-3 pl-20 ">
          <div className="flex mr-40 justify-between">
            <h1 className="flex">
              <GrMoney className=" font-extralight m-2" />
              {formatter.format(apartment.data.ApartmentInfo.Price)}
            </h1>
            {apartment.data.Has3D === true ? (
              <button
                onClick={() => toSpecificApartment(apartment.data)}
                className="btn btn-three mr-28"
                type="button"
              >
                See in 3D
              </button>
            ) : (
              <></>
            )}
          </div>
          <h1 className="flex">
            <FaHouseChimney className="place-content-center text-2xl pt-2 mx-2" />
            {apartment.data.ApartmentInfo.ApartmentName},&nbsp;
            {apartment.data.ApartmentInfo.ZipCode}&nbsp;
            {apartment.data.ApartmentInfo.CityName}
          </h1>
        </div>
        <div className="ml-24 m-4 mr-48 mt-4 font-extralight">
          <p id="description" className="">
            {apartment.data.ApartmentInfo.Description}
          </p>
        </div>
      </div>
    </div>
  );
};

const formatter = new Intl.NumberFormat("dk-DK", {
  style: "currency",
  currency: "DKK",
});
