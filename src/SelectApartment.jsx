import React from "react";
import {useLocation} from 'react-router-dom';
export default function SelectApartments() {
  const location = useLocation();
  return (
    <div className="relative top-40">
      <h1>Hello World! from Specific apartment choice: info -- {location.state.price}</h1>
    </div>
  );
}

class Apartment {
  constructor(RoadName, sqm, image, price) {
    this.RoadName = RoadName;
    this.sqm = sqm;
    this.image = image;
    this.price = price;
  }
}