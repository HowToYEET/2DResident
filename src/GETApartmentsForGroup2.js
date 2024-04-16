import Energy from "./GETEnergy.js";

class Apartment {
    constructor(
        ZipCode,
        city,
        RoadName,
        sqm,
        images,
        price,
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
        maxDist
    ) {
        this.ZipCode = ZipCode;
        this.city = city;
        this.RoadName = RoadName;
        this.sqm = sqm;
        this.year = year;
        this.images = images;
        this.price = price;
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
        this.maxDist = maxDist;
    }
}

const ListOfApartments = [
    new Apartment( //#1
        9000,
        "Aalborg",
        "Boulevarden 23, 2 tv",
        187,
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
        ],
        4298000,
        1916,
        7,
        2,
        22984,
        Energy.D,
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
        false,
        0.7
    ),
    new Apartment( //#2
        9000,
        "Aalborg",
        "Boulevarden 23, 2 tv",
        187,
        [
            "/Apartment_2/image3_apartment2.png",
            "/Apartment_2/image1_apartment2.png",
            "/Apartment_2/image2_apartment2.png",
            "/Apartment_2/image0_apartment2.png",
            "/Apartment_2/image4_apartment2.png",
            "/Apartment_2/image5_apartment2.png",
        ],
        4298000,
        1916,
        7,
        2,
        22984,
        Energy.D,
        [1.3, 1.6, -4.5],
        [
            {
                title: "Kitchen",
                position: { x: 0.51, y: 1.6, z: -0.49 },
                lookAt: { x: -1.1, y: 1, z: -1.6 },
            },
            {
                title: "Living Room",
                position: { x: 0.08, y: 1.6, z: -0.7 },
                lookAt: { x: 0.08, y: 1, z: 2.6 },
            },
            {
                title: "Bed Room",
                position: { x: -0.22, y: 1.6, z: 2.8 },
                lookAt: { x: 0.9, y: 0.6, z: 1.8 },
            },
            {
                title: "Bath Room",
                position: { x: -1.4, y: 1.6, z: -5.1 },
                lookAt: { x: -0.46, y: 1.6, z: 0 },
            },
        ],
        {
            z1: 3.6,
            z2: -4.72,
            x1: -1.39,
            x2: 1.7,
        },
        [0, -2.9, 0],
        "/ApartmentModels/Apartment_2.glb",
        true,
        0.7
    ),
    new Apartment( // #3
        9000,
        "Aalborg",
        "Boulevarden 23, 2 tv",
        187,
        [
            "/Apartment_3/image1_apartment3.png",
            "/Apartment_3/image2_apartment3.png",
            "/Apartment_3/image3_apartment3.png",
            "/Apartment_3/image4_apartment3.png",
            "/Apartment_3/image5_apartment3.png",
            "/Apartment_3/image6_apartment3.png",
            "/Apartment_3/image7_apartment3.png",
        ],
        4298000,
        1916,
        7,
        2,
        22984,
        Energy.D,
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
        false,
        0.3
    ),
    new Apartment( //#4
        9000,
        "Aalborg",
        "Boulevarden 23, 2 tv",
        187,
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
        4298000,
        1916,
        7,
        2,
        22984,
        Energy.D,
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
        true,
        0.7
    ),
    new Apartment( //#5
        9000,
        "Aalborg",
        "Boulevarden 23, 2 tv",
        187,
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
        4298000,
        1916,
        7,
        2,
        22984,
        Energy.D,
        [-0.7, 1.6, -3.2],
        [
            {
                title: "Kitchen",
                position: { x: -6.4, y: 1.6, z: 0.25 },
                lookAt: { x: -4.9, y: 1.6, z: -2.1 },
            },
            {
                title: "Living Room",
                position: { x: -0.33, y: 1.6, z: 0.24 },
                lookAt: { x: -2.3, y: 1.6, z: 3.1 },
            },
            {
                title: "Bed Rooms",
                position: { x: -10.1, y: 1.6, z: 0.8 },
                lookAt: { x: -10.1, y: 1.6, z: 4 },
            },
            {
                title: "Bath Room",
                position: { x: 3.6, y: 1.6, z: -2.8 },
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
        0.0
    ),
    new Apartment( //#6
        9000,
        "Aalborg",
        "Boulevarden 23, 2 tv",
        187,
        [
            "/Apartment_6/image2_apartment6.png",
            "/Apartment_6/image8_apartment6.png",
            "/Apartment_6/image3_apartment6.png",
            "/Apartment_6/image4_apartment6.png",
            "/Apartment_6/image5_apartment6.png",
            "/Apartment_6/image6_apartment6.png",
            "/Apartment_6/image7_apartment6.png",
            "/Apartment_6/image1_apartment6.png",
        ],
        4298000,
        1916,
        7,
        2,
        22984,
        Energy.D,
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
        0.7
    ),
    new Apartment( //#7
        9000,
        "Aalborg",
        "Boulevarden 23, 2 tv",
        187,
        [
            "/Apartment_7/image1_apartment7.png",
            "/Apartment_7/image2_apartment7.png",
            "/Apartment_7/image3_apartment7.png",
            "/Apartment_7/image8_apartment7.png",
        ],
        4298000,
        1916,
        7,
        2,
        22984,
        Energy.D,
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
        0.7
    ),
    new Apartment( //#8
        9000,
        "Aalborg",
        "Boulevarden 23, 2 tv",
        187,
        [
            "/Apartment_8/image1_apartment8.png",
            "/Apartment_8/image2_apartment8.png",
            "/Apartment_8/image8_apartment8.png",
        ],
        4298000,
        1916,
        7,
        2,
        22984,
        Energy.D,
        [-1.5, 1.6, 6],
        [
            {
                title: "Kitchen",
                position: { x: -1, y: 1.6, z: 2.1 },
                lookAt: { x: 1.1, y: 1.2, z: 2.6 },
            },
            {
                title: "Living Room",
                position: { x: -1.3, y: 1.6, z: 1.3 },
                lookAt: { x: 0.3, y: 1.6, z: -1.1 },
            },
            {
                title: "Bed Rooms",
                position: { x: -0.8, y: 1.6, z: -4.2 },
                lookAt: { x: 1.2, y: 1, z: -4.2 },
            },
            {
                title: "Bath Room",
                position: { x: -0.2, y: 1.6, z: 5.7 },
                lookAt: { x: 0.8, y: 1, z: 5.3 },
            },
        ],
        {
            z1: 6,
            z2: -5.1,
            x1: -1.6,
            x2: 1.8,
        },
        [0, 0, 0],
        "/ApartmentModels/Apartment_8.glb",
        true,
        0.3
    ),
];
export default ListOfApartments;
