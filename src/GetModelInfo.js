
class ModelInfo {
    constructor(StartingPosition,
        Annotations,
        FrameLimits,
        StartingRotation,
        ApartmentModelPath,
        Mirrors,
        FOV,
        ViewHeight,
        MinimumDistance,
        WalkingSpeed
    ) {
        this.StartingPosition = StartingPosition;
        this.Annotations = Annotations;
        this.FrameLimits = FrameLimits;
        this.StartingRotation = StartingRotation;
        this.ApartmentModelPath = ApartmentModelPath;
        this.Mirrors = Mirrors
        this.FOV = FOV
        this.ViewHeight = ViewHeight
        this.MinimumDistance = MinimumDistance
        this.WalkingSpeed = WalkingSpeed
    }
}
const ModelInfo_1 = new ModelInfo(
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
    [
        {
            Args: [1.3, 1.3],
            Position: [2.05, 1.7, -4],
            Rotation: [0, Math.PI * -0.5, 0],
        },
    ],
    70,
    1.5,
    0.5,
    1.2
)
const ModelInfo_2 = new ModelInfo(
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
            title: "Bedroom",
            position: { x: -1.04, y: 1.5, z: -0.25 },
            lookAt: { x: -1.5, y: 0.6, z: -1.3 },
        },
        {
            title: "Bathroom",
            position: { x: 0, y: 1.5, z: -1.19 },
            lookAt: { x: -2.2, y: 1.3, z: -1.19 },
        },
    ],
    {
        z1: 2,
        z2: -1.7,
        x1: -2.89,
        x2: 3.3,
    },
    [0, 1.8, 0],
    "/ApartmentModels/Apartment_2.glb",
    [
        {
            Args: [0.53, 0.86],
            Position: [2.206, 1.35, -2.425],
            Rotation: [0, Math.PI * 0, 0],
        },
    ],
    60,
    1.5,
    0.4,
    1.2
)
const ModelInfo_3 = new ModelInfo(
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
    [
        {
            Args: [0.55, 0.79],
            Position: [9.656, 1.4, 6.611],
            Rotation: [0, Math.PI * 0.5, 0],
        },
    ],
    60,
    1.6,
    0.3,
    1.2
)
const ModelInfo_4 = new ModelInfo(
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
            title: "Bedroom",
            position: { x: 1.4, y: 1.6, z: 3.1 },
            lookAt: { x: 3.4, y: 1.6, z: 6.4 },
        },
        {
            title: "Bathroom",
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
    0.5,
    1.2
)
const ModelInfo_5 = new ModelInfo(
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
            title: "Bedroom",
            position: { x: -10.1, y: 1.65, z: 0.8 },
            lookAt: { x: -10.1, y: 1.6, z: 4 },
        },
        {
            title: "Bathroom",
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
    0.3,
    1.2
)
const ModelInfo_6 = new ModelInfo(
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
            title: "Bedrooms",
            position: { x: 12.4, y: 1.6, z: 0.6 },
            lookAt: { x: 12.4, y: 1, z: -1.2 },
        },
        {
            title: "Bathroom",
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
    70,
    1.6,
    0.3,
    1.2
)
const ModelInfo_7 = new ModelInfo(
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
            title: "Bedrooms",
            position: { x: 5.2, y: 1.6, z: -1.28 },
            lookAt: { x: 8.2, y: 1.6, z: -1.28 },
        },
        {
            title: "Bathroom",
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
    [
        {
            Args: [0.77, 1.07],
            Position: [3.855, 1.66, -0.647],
            Rotation: [0, Math.PI * -0.5, 0],
        },
        {
            Args: [1.08, 0.78],
            Position: [4.96, 1.68, 2.83],
            Rotation: [0, Math.PI * 0, 0],
        },
    ],
    60,
    1.6,
    0.3,
    1.2
)
const ModelInfo_8 = new ModelInfo(
    [7.9, 1.6, 9.1],
    [
        {
            title: "Kitchen",
            position: { x: 4.8, y: 1.6, z: 3.1 },
            lookAt: { x: 2.9, y: 1.4, z: 3.7 },
        },
        {
            title: "Livingroom",
            position: { x: 4.6, y: 1.6, z: 2.7 },
            lookAt: { x: 7.2, y: 1.3, z: 4.2 },
        },
        {
            title: "Bedrooms",
            position: { x: 5.5, y: 1.6, z: 6.5 },
            lookAt: { x: 2.2, y: 1, z: 7.2 },
        },
        {
            title: "Bathroom",
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
    0.5,
    1.2
)
const ListOfInfo = [ModelInfo_1, ModelInfo_2, ModelInfo_3, ModelInfo_4, ModelInfo_5, ModelInfo_6, ModelInfo_7, ModelInfo_8];
export default ListOfInfo;