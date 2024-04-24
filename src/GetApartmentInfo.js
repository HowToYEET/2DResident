import EnergyLevel from "./GETEnergy";

class ApartmentInfo {
  constructor(
    ApartmentName,
    ZipCode,
    CityName,
    Squaremeter,
    Price,
    PriceHist,
    Year,
    RoomNumber,
    FloorNumber,
    SquaremeterPrice,
    EnergyLevel,
    Description,
    images
  ) {
    this.ApartmentName = ApartmentName;
    this.ZipCode = ZipCode;
    this.CityName = CityName;
    this.Squaremeter = Squaremeter;
    this.Price = Price;
    this.PriceHist = PriceHist;
    this.Year = Year;
    this.RoomNumber = RoomNumber;
    this.FloorNumber = FloorNumber;
    this.SquaremeterPrice = SquaremeterPrice;
    this.EnergyLevel = EnergyLevel;
    this.Description = Description;
    this.images = images;
  }
}

const Apartment_1 = new ApartmentInfo(
  "Apartment 1",
  9000,
  "Aalborg",
  114,
  2745000,
  -5,
  2002,
  2,
  "2nd",
  24078,
  EnergyLevel.B,
  "Welcome to this standard apartment in the heart of Aalborg. Featuring 2 rooms, this cozy space offers a modern living experience with ample natural light and city views. The open-concept layout seamlessly connects the living, dining, and kitchen areas, perfect for both relaxation and entertaining. The kitchen boasts sleek appliances and generous counter space. A stylish bathroom completes the space, providing a serene retreat. Conveniently situated near Aalborg's downtown attractions, this apartment offers a comfortable and convenient urban lifestyle for residents seeking the best of city living.",
  [
    "/Apartment_1/image2_apartment1.png",
    "/Apartment_1/image3_apartment1.png",
    "/Apartment_1/image4_apartment1.png",
    "/Apartment_1/image5_apartment1.png",
    "/Apartment_1/image6_apartment1.png",
    "/Apartment_1/image7_apartment1.png",
    "/Apartment_1/image8_apartment1.png",
    "/Apartment_1/image9_apartment1.png",
    "/Apartment_1/image10_apartment1.png",
  ]
);
const Apartment_2 = new ApartmentInfo(
  "Apartment 2",
  9000,
  "Aalborg",
  38,
  798000,
  0,
  2021,
  2,
  "1st",
  21000,
  EnergyLevel.A20,
  "Discover the epitome of urban elegance in this sophisticated 2 bedroom apartment located in the heart of Aalborg's historic district. Boasting a blend of contemporary design and timeless charm, this tastefully furnished space offers a comfortable retreat from the city's excitement. The open-plan living and dining area is perfect for entertaining guests, while the sleek kitchen features modern appliances and ample counter space for culinary enthusiasts. The luxurious bathroom provides a tranquil sanctuary with its spa-like amenities. With its prime location near Aalborg's cultural attractions and dining hotspots, this apartment offers a quintessential urban lifestyle for those who appreciate both style and convenience.",
  [
    "/Apartment_2/image3_apartment2.png",
    "/Apartment_2/image1_apartment2.png",
    "/Apartment_2/image2_apartment2.png",
    "/Apartment_2/image0_apartment2.png",
    "/Apartment_2/image4_apartment2.png",
    "/Apartment_2/image5_apartment2.png",
  ]
);
const Apartment_3 = new ApartmentInfo(
  "Apartment 3",
  9000,
  "Aalborg",
  92,
  2575000,
  5,
  2017,
  4,
  "4th",
  27989,
  EnergyLevel.A15,
  "Welcome to this standard apartment in the outer part of Aalborg. Featuring 4 rooms, this cozy space offers a modern living experience with ample natural light and city views. The open-concept layout seamlessly connects the living, dining, and kitchen areas, perfect for both relaxation and entertaining. The kitchen boasts sleek appliances and generous counter space. A stylish bathroom completes the space, providing a serene retreat. Conveniently situated near Aalborg's downtown attractions, this apartment offers a comfortable and convenient urban lifestyle for residents seeking the best of city living.",
  [
    "/Apartment_3/image1_apartment3.png",
    "/Apartment_3/image2_apartment3.png",
    "/Apartment_3/image3_apartment3.png",
    "/Apartment_3/image4_apartment3.png",
    "/Apartment_3/image5_apartment3.png",
    "/Apartment_3/image6_apartment3.png",
    "/Apartment_3/image7_apartment3.png",
  ]
);
const Apartment_4 = new ApartmentInfo(
  "Apartment 4",
  9000,
  "Aalborg",
  121,
  2998000,
  0,
  2007,
  2,
  "1st",
  24777,
  EnergyLevel.B,
  "Step into this charming two-room apartment located in the heart of Aalborg's lively cityscape. With its cozy atmosphere and modern amenities, this inviting space offers the perfect urban retreat. The open-concept living area seamlessly connects to a well-appointed kitchen, ideal for preparing delicious meals with local ingredients. The stylish bathroom provides a serene sanctuary with its contemporary design and luxurious fixtures. Situated within walking distance of Aalborg's cultural landmarks and vibrant nightlife, this apartment promises an exciting urban lifestyle for those seeking both convenience and comfort.",
  [
    "/Apartment_4/image1_apartment4.png",
    "/Apartment_4/image2_apartment4.png",
    "/Apartment_4/image3_apartment4.png",
    "/Apartment_4/image4_apartment4.png",
    "/Apartment_4/image5_apartment4.png",
    "/Apartment_4/image6_apartment4.png",
    "/Apartment_4/image7_apartment4.png",
    "/Apartment_4/image8_apartment4.png",
    "/Apartment_4/image9_apartment4.png",
  ]
);
const Apartment_5 = new ApartmentInfo(
  "Apartment 5",
  9000,
  "Aalborg",
  155,
  4295000,
  5,
  2012,
  3,
  "3rd",
  27710,
  EnergyLevel.A10,
  "Step into this cozy three-bedroom apartment situated in a prime location in Aalborg. Designed for modern living, this bright and airy space features an open-concept layout that seamlessly connects the living and dining areas. The stylish kitchen boasts contemporary finishes and plenty of counter space for meal preparation. 2 serene bathroom with sleek fixtures offers a relaxing escape from the city's hustle and bustle. With its location near Aalborg's vibrant restaurants, boutiques, and entertainment venues, this apartment provides the perfect urban retreat for those seeking convenience and comfort.",
  [
    "/Apartment_5/image10_apartment5.png",
    "/Apartment_5/image8_apartment5.png",
    "/Apartment_5/image3_apartment5.png",
    "/Apartment_5/image4_apartment5.png",
    "/Apartment_5/image5_apartment5.png",
    "/Apartment_5/image2_apartment5.png",
    "/Apartment_5/image6_apartment5.png",
    "/Apartment_5/image9_apartment5.png",
    "/Apartment_5/image11_apartment5.png",
    "/Apartment_5/image7_apartment5.png",
    "/Apartment_5/image1_apartment5.png",
  ]
);
const Apartment_6 = new ApartmentInfo(
  "Apartment 6",
  9000,
  "Aalborg",
  95,
  2398000,
  -5,
  2015,
  2,
  "2nd",
  24242,
  EnergyLevel.A10,
  "Welcome to this standard apartment in the heart of Aalborg. Featuring 2 bedrooms, this cozy space offers a modern living experience with ample natural light and city views. The open-concept layout seamlessly connects the living, dining, and kitchen areas, perfect for both relaxation and entertaining. The kitchen boasts sleek appliances and generous counter space. A stylish bathroom completes the space, providing a serene retreat. Conveniently situated near Aalborg's downtown attractions, this apartment offers a comfortable and convenient urban lifestyle for residents seeking the best of city living.",
  [
    "/Apartment_6/image2_apartment6.png",
    "/Apartment_6/image8_apartment6.png",
    "/Apartment_6/image3_apartment6.png",
    "/Apartment_6/image4_apartment6.png",
    "/Apartment_6/image5_apartment6.png",
    "/Apartment_6/image6_apartment6.png",
    "/Apartment_6/image7_apartment6.png",
    "/Apartment_6/image1_apartment6.png",
  ]
);
const Apartment_7 = new ApartmentInfo(
  "Apartment 7",
  9000,
  "Aalborg",
  82,
  2045000,
  0,
  2023,
  2,
  "4th",
  24939,
  EnergyLevel.A20,
  "Residence Provider welcomes you to this modern two-bedroom apartment nestled in the heart of Aalborg's historic district. With its warm ambiance and contemporary design, this inviting space offers a seamless blend of comfort and style. Sunlight streams through the large windows, illuminating the open-plan living, dining, and kitchen areas. The well-equipped kitchen features sleek appliances and ample storage, perfect for culinary enthusiasts. A beautifully appointed bathroom provides a tranquil retreat, complete with elegant fixtures. Conveniently located near Aalborg's charming cafes, shops, and cultural attractions, this apartment promises a convenient and vibrant urban lifestyle.",
  [
    "/Apartment_7/image1_apartment7.png",
    "/Apartment_7/image2_apartment7.png",
    "/Apartment_7/image3_apartment7.png",
    "/Apartment_7/image4_apartment7.png",
    "/Apartment_7/image5_apartment7.png",
    "/Apartment_7/image6_apartment7.png",
    "/Apartment_7/image8_apartment7.png",
  ]
);
const Apartment_8 = new ApartmentInfo(
  "Apartment 8",
  9000,
  "Aalborg",
  54,
  1270000,
  -5,
  2006,
  2,
  "2nd",
  23519,
  EnergyLevel.B,
  "Welcome to this stylish urban retreat in the heart of Aalborg city. Boasting a sleek and modern design, this spacious two-bedroom apartment offers a comfortable living space with plenty of natural light. The open-plan layout seamlessly connects the living area with a well-equipped kitchen, creating the perfect setting for both relaxation and entertainment. The elegant bathroom features contemporary fixtures and a soothing ambiance, providing a serene escape from city life. With its central location near Aalborg's top attractions, restaurants, and shops, this apartment offers a convenient and cosmopolitan lifestyle for discerning residents.",
  [
    "/Apartment_8/image1_apartment8.png",
    "/Apartment_8/image2_apartment8.png",
    "/Apartment_8/image3_apartment8.png",
    "/Apartment_8/image4_apartment8.png",
    "/Apartment_8/image5_apartment8.png",
    "/Apartment_8/image8_apartment8.png",
  ]
);
const ListOfInfo = [
  Apartment_1,
  Apartment_2,
  Apartment_3,
  Apartment_4,
  Apartment_5,
  Apartment_6,
  Apartment_7,
  Apartment_8,
];
export default ListOfInfo;
