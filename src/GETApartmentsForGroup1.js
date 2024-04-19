import Energy from "./GETEnergy.js";

class Apartment {
  constructor(
    ZipCode,
    city,
    RoadName,
    sqm,
    images,
    price,
    priceHist,
    year,
    roomNumber,
    floornumber,
    sqmPrice,
    EnergyLevel,
    startingCameraPosition,
    Annotation,
    framelimits,
    target,
    ApartmentPath,
    has3D,
    description,
    mirrors,
    FOV,
    ViewHeight,
    MinimumDist
  ) {
    this.ZipCode = ZipCode;
    this.city = city;
    this.RoadName = RoadName;
    this.sqm = sqm;
    this.year = year;
    this.images = images;
    this.price = price;
    this.priceHist = priceHist;
    this.roomNumber = roomNumber;
    this.floornumber = floornumber;
    this.sqmPrice = sqmPrice;
    this.EnergyLevel = EnergyLevel;
    this.startingCameraPosition = startingCameraPosition;
    this.Annotation = Annotation;
    this.framelimits = framelimits;
    this.target = target;
    this.ApartmentPath = ApartmentPath;
    this.has3D = has3D;
    this.description = description;
    this.mirrors = mirrors;
    this.FOV = FOV;
    this.ViewHeight = ViewHeight;
    this.MinimumDist = MinimumDist;
  }
}

const ListOfApartments = [
  new Apartment( //#1
    9000,
    "Aalborg",
    "Apartment 1",
    133,
    [
      "/Apartment_1/image2_apartment1.png",
      "/Apartment_1/image1_apartment1.png",
      "/Apartment_1/image3_apartment1.png",
      "/Apartment_1/image4_apartment1.png",
      "/Apartment_1/image5_apartment1.png",
      "/Apartment_1/image6_apartment1.png",
      "/Apartment_1/image7_apartment1.png",
      "/Apartment_1/image8_apartment1.png",
      "/Apartment_1/image9_apartment1.png",
      "/Apartment_1/image10_apartment1.png",
      "/SeeA.png",
    ],
    3198000,
    -5,
    2002,
    2,
    "2nd",
    24045,

    Energy.B,
    [-2.8, 1.6, 5.9],
    [
      {
        title: "Kitchen",
        position: { x: -3.4, y: 1.6, z: 4.54 },
        lookAt: { x: -0.1, y: 1.6, z: 2.5 },
      },
      {
        title: "Living Room",
        position: { x: -2.8, y: 1.6, z: 3.86 },
        lookAt: { x: -5.2, y: 0.6, z: 1.66 },
      },
      {
        title: "Bed Rooms",
        position: { x: -5.4, y: 1.6, z: -6.4 },
        lookAt: { x: -5.4, y: 1.2, z: -2.1 },
      },
      {
        title: "Bath Room",
        position: { x: 1.7, y: 1.6, z: -4.55 },
        lookAt: { x: 0.0, y: 1, z: -2.3 },
      },
    ],
    {
      z1: 6,
      z2: -6.5,
      x1: -7,
      x2: 1.9,
    },
    [0, 0, 0],
    "/ApartmentModels/Apartment_1.glb",
    true,
    "Welcome to this standard apartment in the heart of Aalborg. Featuring 2 rooms, this cozy space offers a modern living experience with ample natural light and city views. The open-concept layout seamlessly connects the living, dining, and kitchen areas, perfect for both relaxation and entertaining. The kitchen boasts sleek appliances and generous counter space. A stylish bathroom completes the space, providing a serene retreat. Conveniently situated near Aalborg's downtown attractions, this apartment offers a comfortable and convenient urban lifestyle for residents seeking the best of city living.",
    [
      {
        Args: [1.3, 1.3],
        Position: [2.05, 1.7, -4],
        Rotation: [0, Math.PI * -0.5, 0],
      },
    ],
    70,
    1.5,
    0.5
  ),
  new Apartment( //#2
    9000,
    "Aalborg",
    "Apartment 2",
    75,
    [
      "/Apartment_2/image3_apartment2.png",
      "/Apartment_2/image1_apartment2.png",
      "/Apartment_2/image2_apartment2.png",
      "/Apartment_2/image0_apartment2.png",
      "/Apartment_2/image4_apartment2.png",
      "/Apartment_2/image5_apartment2.png",
    ],
    2098000,
    0,
    2021,
    2,
    "1st",
    27973,
    Energy.A20,
    [3.58, 1.5, -0.44],
    [
      {
        title: "Kitchen",
        position: { x: 0.71, y: 1.5, z: 0.86 },
        lookAt: { x: 2.8, y: 1, z: 1.8 },
      },
      {
        title: "Living Room",
        position: { x: 1.29, y: 1.5, z: 1.41 },
        lookAt: { x: -0.5, y: 0.5, z: 1.41 },
      },
      {
        title: "Bed Room",
        position: { x: -1.04, y: 1.5, z: -0.25 },
        lookAt: { x: -1.5, y: 0.6, z: -1.3 },
      },
      {
        title: "Bath Room",
        position: { x: 0.74, y: 1.5, z: -0.28 },
        lookAt: { x: 0.77, y: 1.2, z: -1.42 },
      },
    ],
    {
      z1: 2,
      z2: -1.7,
      x1: -1.89,
      x2: 3.3,
    },
    [0, 1.8, 0],
    "/ApartmentModels/Apartment_2.glb",
    false,
    "Discover the epitome of urban elegance in this sophisticated 2 bedroom apartment located in the heart of Aalborg's historic district. Boasting a blend of contemporary design and timeless charm, this tastefully furnished space offers a comfortable retreat from the city's excitement. The open-plan living and dining area is perfect for entertaining guests, while the sleek kitchen features modern appliances and ample counter space for culinary enthusiasts. The luxurious bathroom provides a tranquil sanctuary with its spa-like amenities. With its prime location near Aalborg's cultural attractions and dining hotspots, this apartment offers a quintessential urban lifestyle for those who appreciate both style and convenience.",
    [
      {
        Args: [0.52, 0.83],
        Position: [1.55, 1.35, -1.405],
        Rotation: [0, Math.PI * -0.5, 0],
      },
    ],
    60,
    1.6,
    0.4
  ),
  new Apartment( // #3
    9000,
    "Aalborg",
    "Apartment 3",
    122,
    [
      "/Apartment_3/image1_apartment3.png",
      "/Apartment_3/image2_apartment3.png",
      "/Apartment_3/image3_apartment3.png",
      "/Apartment_3/image4_apartment3.png",
      "/Apartment_3/image5_apartment3.png",
      "/Apartment_3/image6_apartment3.png",
      "/SeeA.png",
    ],
    3500000,
    5,
    2017,
    4,
    "4th",
    28688,
    Energy.A15,
    [8.2, 1.6, 12.5],
    [
      {
        title: "Kitchen",
        position: { x: 7.7, y: 1.6, z: 10.9 },
        lookAt: { x: 9.4, y: 1, z: 11.7 },
      },
      {
        title: "Living Room",
        position: { x: 7.5, y: 1.6, z: 12.7 },
        lookAt: { x: 5.7, y: 1.6, z: 11.25 },
      },
      {
        title: "Bed Room",
        position: { x: 15.6, y: 1.6, z: 6.7 },
        lookAt: { x: 13.8, y: 1, z: 5.6 },
      },
      {
        title: "Bath Room",
        position: { x: 10.5, y: 1.6, z: 7.8 },
        lookAt: { x: 10.5, y: 1.6, z: 6.1 },
      },
    ],
    {
      z1: 12.8,
      z2: 4.7,
      x1: 4.5,
      x2: 17.1,
    },
    [0, 0.4, 0],
    "/ApartmentModels/Apartment_3.glb",
    true,
    "Welcome to this standard apartment in the outer part of Aalborg. Featuring 4 rooms, this cozy space offers a modern living experience with ample natural light and city views. The open-concept layout seamlessly connects the living, dining, and kitchen areas, perfect for both relaxation and entertaining. The kitchen boasts sleek appliances and generous counter space. A stylish bathroom completes the space, providing a serene retreat. Conveniently situated near Aalborg's downtown attractions, this apartment offers a comfortable and convenient urban lifestyle for residents seeking the best of city living.",
    [
      {
        Args: [0.55, 0.79],
        Position: [9.656, 1.4, 6.611],
        Rotation: [0, Math.PI * 0.5, 0],
      },
    ],
    60,
    1.6,
    0.3
  ),
  new Apartment( //#4
    9000,
    "Aalborg",
    "Apartment 4",
    127,
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
    ],
    2998000,
    0,
    2007,
    2,
    "1st",
    23606,
    Energy.B,
    [-4.4, 1.6, 0.1],
    [
      {
        title: "Kitchen",
        position: { x: 1.11, y: 1.6, z: -1.44 },
        lookAt: { x: 0.8, y: 1.6, z: -3.8 },
      },
      {
        title: "Living Room",
        position: { x: -2.6, y: 1.6, z: 0.3 },
        lookAt: { x: -1.8, y: 1.6, z: 4.0 },
      },
      {
        title: "Bed Rooms",
        position: { x: 1.4, y: 1.6, z: 3.1 },
        lookAt: { x: 3.4, y: 1.6, z: 6.4 },
      },
      {
        title: "Bath Room",
        position: { x: 2.4, y: 1.6, z: -0.1 },
        lookAt: { x: 4.13, y: 1.3, z: 0.99 },
      },
    ],
    {
      z1: 6.7,
      z2: -4,
      x1: -4.1,
      x2: 5,
    },
    [0, -1, 0],
    "/ApartmentModels/Apartment_4.glb",
    false,
    "Step into this charming two-room apartment located in the heart of Aalborg's lively cityscape. With its cozy atmosphere and modern amenities, this inviting space offers the perfect urban retreat. The open-concept living area seamlessly connects to a well-appointed kitchen, ideal for preparing delicious meals with local ingredients. The stylish bathroom provides a serene sanctuary with its contemporary design and luxurious fixtures. Situated within walking distance of Aalborg's cultural landmarks and vibrant nightlife, this apartment promises an exciting urban lifestyle for those seeking both convenience and comfort.",
    [
      {
        Args: [0.92, 1.83],
        Position: [5.49, 1.4, 3.1],
        Rotation: [0, Math.PI * -0.5, 0],
      },
      {
        Args: [1.52, 1.23],
        Position: [3.0, 1.7, 1.653],
        Rotation: [0, Math.PI * -1, 0],
      },
    ],
    70,
    1.6,
    0.5
  ),
  new Apartment( //#5
    9000,
    "Aalborg",
    "Apartment 5",
    119,
    [
      "/Apartment_5/image2_apartment5.png",
      "/Apartment_5/image8_apartment5.png",
      "/Apartment_5/image3_apartment5.png",
      "/Apartment_5/image4_apartment5.png",
      "/Apartment_5/image5_apartment5.png",
      "/Apartment_5/image6_apartment5.png",
      "/Apartment_5/image7_apartment5.png",
      "/Apartment_5/image1_apartment5.png",
    ],
    3298000,
    5,
    2012,
    3,
    "3rd",
    27714,
    Energy.A10,
    [-0.7, 1.6, -3.2],
    [
      {
        title: "Kitchen",
        position: { x: -6.4, y: 1.65, z: 0.25 },
        lookAt: { x: -4.9, y: 1.6, z: -2.1 },
      },
      {
        title: "Living Room",
        position: { x: -0.33, y: 1.65, z: 0.24 },
        lookAt: { x: -2.3, y: 1.6, z: 3.1 },
      },
      {
        title: "Bed Rooms",
        position: { x: -10.1, y: 1.65, z: 0.8 },
        lookAt: { x: -10.1, y: 1.6, z: 4 },
      },
      {
        title: "Bath Room",
        position: { x: 3.6, y: 1.65, z: -2.8 },
        lookAt: { x: 2.4, y: 1, z: -1.5 },
      },
    ],
    {
      z1: 4,
      z2: -3,
      x1: -12.1,
      x2: 3.7,
    },
    [0, 3, 0],
    "/ApartmentModels/Apartment_5.glb",
    false,
    "Step into this cozy three-bedroom apartment situated in a prime location in Aalborg. Designed for modern living, this bright and airy space features an open-concept layout that seamlessly connects the living and dining areas. The stylish kitchen boasts contemporary finishes and plenty of counter space for meal preparation. 2 serene bathroom with sleek fixtures offers a relaxing escape from the city's hustle and bustle. With its location near Aalborg's vibrant restaurants, boutiques, and entertainment venues, this apartment provides the perfect urban retreat for those seeking convenience and comfort.",
    [
      {
        Args: [0.62, 0.83],
        Position: [2.9, 1.5, -3.737],
        Rotation: [0, Math.PI * 0.0, 0],
      },
      {
        Args: [0.62, 0.83],
        Position: [3.85, 1.5, -3.737],
        Rotation: [0, Math.PI * 0.0, 0],
      },
      {
        Args: [0.62, 0.83],
        Position: [-12.955, 1.5, -0.677],
        Rotation: [0, Math.PI * 0.5, 0],
      },
      {
        Args: [0.62, 0.83],
        Position: [-12.973, 1.5, -1.637],
        Rotation: [0, Math.PI * 0.5, 0],
      },
    ],
    60,
    1.65,
    0.3
  ),
  new Apartment( //#6
    9000,
    "Aalborg",
    "Apartment 6",
    92,
    [
      "/Apartment_6/image2_apartment6.png",
      "/Apartment_6/image8_apartment6.png",
      "/Apartment_6/image3_apartment6.png",
      "/Apartment_6/image4_apartment6.png",
      "/Apartment_6/image5_apartment6.png",
      "/Apartment_6/image6_apartment6.png",
      "/Apartment_6/image7_apartment6.png",
      "/Apartment_6/image1_apartment6.png",
      "/SeeA.png",
    ],
    2398000,
    -5,
    2015,
    2,
    "2nd",
    22984,
    Energy.A10,
    [8, 1.6, 2.96],
    [
      {
        title: "Kitchen",
        position: { x: 13.7, y: 1.6, z: 2.24 },
        lookAt: { x: 15.1, y: 0.6, z: 3.5 },
      },
      {
        title: "Living Room",
        position: { x: 10.9, y: 1.6, z: 5.8 },
        lookAt: { x: 10.9, y: 1.6, z: 2.9 },
      },
      {
        title: "Bed Rooms",
        position: { x: 12.4, y: 1.6, z: 0.6 },
        lookAt: { x: 12.4, y: 1, z: -1.2 },
      },
      {
        title: "Bath Room",
        position: { x: 10.4, y: 1.6, z: 0 },
        lookAt: { x: 9.7, y: 1, z: -0.7 },
      },
    ],
    {
      z1: 8,
      z2: -1.5,
      x1: 8,
      x2: 14.6,
    },
    [0, -1.5, 0],
    "/ApartmentModels/Apartment_6.glb",
    true,
    "Welcome to this standard apartment in the heart of Aalborg. Featuring 2 bedrooms, this cozy space offers a modern living experience with ample natural light and city views. The open-concept layout seamlessly connects the living, dining, and kitchen areas, perfect for both relaxation and entertaining. The kitchen boasts sleek appliances and generous counter space. A stylish bathroom completes the space, providing a serene retreat. Conveniently situated near Aalborg's downtown attractions, this apartment offers a comfortable and convenient urban lifestyle for residents seeking the best of city living.",
    [
      {
        Args: [1.14, 0.57],
        Position: [9.233, 1.56, 0.757],
        Rotation: [0, Math.PI * 0.5, 0],
      },
      {
        Args: [1.14, 1.17],
        Position: [8.5, 1.76, 1.747],
        Rotation: [0, Math.PI * 0.0, 0],
      },
    ],
    60,
    1.6,
    0.3
  ),
  new Apartment( //#7
    9000,
    "Aalborg",
    "Apartment 7",
    100,
    [
      "/Apartment_7/image1_apartment7.png",
      "/Apartment_7/image2_apartment7.png",
      "/Apartment_7/image3_apartment7.png",
      "/Apartment_7/image8_apartment7.png",
    ],
    4000000,
    0,
    2023,
    2,
    "4th",
    40000,
    Energy.A20,
    [2.3, 1.6, -2.2],
    [
      {
        title: "Kitchen",
        position: { x: -0.3, y: 1.6, z: 4.23 },
        lookAt: { x: -0.4, y: 1.6, z: 1.75 },
      },
      {
        title: "Living Room",
        position: { x: 2.6, y: 1.6, z: -1 },
        lookAt: { x: -0 - 7, y: 1, z: -1 },
      },
      {
        title: "Bed Rooms",
        position: { x: 5.2, y: 1.6, z: -1.28 },
        lookAt: { x: 8.2, y: 1.6, z: -1.28 },
      },
      {
        title: "Bath Room",
        position: { x: 4.2, y: 1.6, z: 3.8 },
        lookAt: { x: 6.2, y: 1.6, z: 3.8 },
      },
    ],
    {
      z1: 4.1,
      z2: -2.2,
      x1: -2.2,
      x2: 8.2,
    },
    [0, 3.16, 0],
    "/ApartmentModels/Apartment_7.glb",
    false,
    "Residence Provider welcomes you to this modern two-bedroom apartment nestled in the heart of Aalborg's historic district. With its warm ambiance and contemporary design, this inviting space offers a seamless blend of comfort and style. Sunlight streams through the large windows, illuminating the open-plan living, dining, and kitchen areas. The well-equipped kitchen features sleek appliances and ample storage, perfect for culinary enthusiasts. A beautifully appointed bathroom provides a tranquil retreat, complete with elegant fixtures. Conveniently located near Aalborg's charming cafes, shops, and cultural attractions, this apartment promises a convenient and vibrant urban lifestyle.",
    [
      {
        Args: [0.84, 1.07],
        Position: [3.855, 1.66, -0.647],
        Rotation: [0, Math.PI * -0.5, 0],
      },
    ],
    60,
    1.6,
    0.3
  ),
  new Apartment( //#8
    9000,
    "Aalborg",
    "Apartment 8",
    76,
    [
      "/Apartment_8/image1_apartment8.png",
      "/Apartment_8/image2_apartment8.png",
      "/Apartment_8/image8_apartment8.png",
      "/SeeA.png",
    ],
    1998000,
    -5,
    "2006",
    2,
    "2nd",
    26289,
    Energy.B,
    [7.9, 1.6, 9.1],
    [
      {
        title: "Kitchen",
        position: { x: 4.8, y: 1.6, z: 3.1 },
        lookAt: { x: 2.9, y: 1.4, z: 3.7 },
      },
      {
        title: "Living Room",
        position: { x: 4.6, y: 1.6, z: 2.7 },
        lookAt: { x: 7.2, y: 1.3, z: 4.2 },
      },
      {
        title: "Bed Rooms",
        position: { x: 5.5, y: 1.6, z: 6.5 },
        lookAt: { x: 2.2, y: 1, z: 7.2 },
      },
      {
        title: "Bath Room",
        position: { x: 5.3, y: 1.6, z: 6.9 },
        lookAt: { x: 6.1, y: 1.5, z: 8.12 },
      },
    ],
    {
      z1: 8.5,
      z2: 2.2,
      x1: 2.5,
      x2: 8.1,
    },
    [0, 0, 0],
    "/ApartmentModels/Apartment_8.glb",
    true,
    "Welcome to this stylish urban retreat in the heart of Aalborg city. Boasting a sleek and modern design, this spacious two-bedroom apartment offers a comfortable living space with plenty of natural light. The open-plan layout seamlessly connects the living area with a well-equipped kitchen, creating the perfect setting for both relaxation and entertainment. The elegant bathroom features contemporary fixtures and a soothing ambiance, providing a serene escape from city life. With its central location near Aalborg's top attractions, restaurants, and shops, this apartment offers a convenient and cosmopolitan lifestyle for discerning residents.",
    [
      {
        Args: [0.55, 1.47],
        Position: [8.886, 1.29, 7.951],
        Rotation: [0, Math.PI * -0.5, 0],
      },
      {
        Args: [0.75, 0.87],
        Position: [7.056, 1.39, 7.671],
        Rotation: [0, Math.PI * -0.5, 0],
      },
    ],
    70,
    1.55,
    0.5
  ),
];
export default ListOfApartments;
