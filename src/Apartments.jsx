import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image from "../public/placeholder.jpg";

export default function Apartments() {
  const someHouses = [
    new Apartment("hej", 52, Image, 1200000),
    new Apartment("vendsyssel 4", 52, Image, 120000, 1994),
    new Apartment("vendsyssel 4", 52, Image, 1200000),
    new Apartment("vendsyssel 4", 52, Image, 1500000),
    new Apartment("vendsyssel 4", 52, Image, 1200000), 
    new Apartment("vendsyssel 4", 52, Image, 1200000),
    new Apartment("vendsyssel 4", 52, Image, 1200000),
    new Apartment("vendsyssel 4", 52, Image, 1200000),
    new Apartment("vendsyssel 4", 52, Image, 1200000),
    new Apartment("vendsyssel 4", 52, Image, 1200000),
    new Apartment("vendsyssel 4", 52, Image, 1200000)
  ];
  const [houses, setHouses] = useState(someHouses);
  let itemList = someHouses.map((item, index) => {
    const navigate = useNavigate();

    const toSpecificApartment = (Apartment) => {
      navigate(`${index}`, { state: Apartment });
    }
    const SB = document.getElementById("search-navbar").value;
    const filteredItem = () => someHouses.filter(h => h.RoadName == { SB })
    const test = filteredItem();
    return (
      <a>
        <div onClick={() => toSpecificApartment(item)}>
          <div className=" hover:bg-blue-300 flex justify-center rounded-lg">
            <div className="">
              <h2 className="text-lg">{item.RoadName}</h2>
              <h2 className="">Area: {item.sqm}m²</h2>
              <h2 className="">{formatter.format(item.price)}</h2>
              <img
                className="object-cover h-auto w-80 rounded-lg place-content-center"
                src={item.image}
                alt="placeholder"
              />
            </div>
          </div>
        </div></a>
    );
  });
  return (
    <div>
      <main className=" mx-5 relative top-40 grid grid-cols-3 gap-5">
        {itemList}
      </main>
    </div>
  );
}

const formatter = new Intl.NumberFormat("dk-DK", {
  style: "currency",
  currency: "DKK",
});
class Apartment {
  constructor(RoadName, sqm, image, price, year) {
    this.RoadName = RoadName;
    this.sqm = sqm;
    this.year = year
    this.image = image;
    this.price = price;
  }
}
