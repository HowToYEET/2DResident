import ApartmentInfo from "./GetApartmentInfo.js";
import ModelInfo from "./GetModelInfo.js";

console.log(ApartmentInfo, ModelInfo);
class Apartment {
  constructor(ApartmentInfo, ModelInfo, Has3D) {
    this.ApartmentInfo = ApartmentInfo;
    this.ModelInfo = ModelInfo;
    this.Has3D = Has3D;
  }
}
const ListOfAll = [];
const ListOf3D = ["1", "3", "6", "8"];
ApartmentInfo.forEach((element, counter) => {
  let threeD = ListOf3D.some((l) => element.ApartmentName.includes(l));
  let IsAlreadyIncluded = false;
  element.images.forEach((element) => {
    if (element.includes("SeeA")) {
      IsAlreadyIncluded = true;
    }
  });
  if (threeD === true && IsAlreadyIncluded === false) {
    element.images.push("/SeeA.png");
  }
  ListOfAll.push(new Apartment(element, ModelInfo[counter], threeD));
});
export default ListOfAll;
