import React, { useEffect, useRef } from "react";
import {
  Environment,
  PerspectiveCamera,
  MeshReflectorMaterial,
  useGLTF,
} from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useLocation } from "react-router-dom";
import * as THREE from "three";
import * as TWEEN from "@tweenjs/tween.js";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TiArrowBack } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaArrowLeftLong, FaHouseChimney } from "react-icons/fa6";
import { element } from "three/examples/jsm/nodes/shadernode/ShaderNode";
const _euler = new THREE.Euler(0, 0, 0, "YXZ");

const Control = (apartment) => {
  let moveForward = false;
  let moveBackward = false;
  let moveLeft = false;
  let moveRight = false;
  const { camera } = useThree();
  const pointer = new THREE.Vector2();
  const rayCaster = new THREE.Raycaster();
  const apartmentInfo = useLocation();

  const handleMouseMove = (e) => {
    const movementX = e.movementX || e.mozMovementX || e.webkitMovementX || 0;
    const movementY = e.movementY || e.mozMovementY || e.webkitMovementY || 0;
    _euler.setFromQuaternion(camera.quaternion);
    const horizontalAxis = movementY * 0.001 * 2.4;
    const verticalAxis = movementX * 0.001 * 2.4;
    const horisontalLimit = _euler.x - horizontalAxis;

    if (Math.PI / 5 > horisontalLimit && -(Math.PI / 3) < horisontalLimit) {
      _euler.x -= horizontalAxis;
    }
    _euler.y -= verticalAxis;
    camera.quaternion.setFromEuler(_euler);
  };
  const handleMouseDown = (e) => {
    if (e.button == 0) {
      window.addEventListener("mousemove", handleMouseMove);
    }
  };
  const handleMouseUp = (e) => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
  const handleKeyDown = (e) => {
    switch (e.code) {
      case "KeyW":
        moveForward = true;
        break;

      case "KeyA":
        moveLeft = true;
        break;

      case "KeyS":
        moveBackward = true;
        break;

      case "KeyD":
        moveRight = true;
        break;
    }
  };
  const handleKeyUp = (e) => {
    switch (e.code) {
      case "ArrowUp":
      case "KeyW":
        moveForward = false;
        break;

      case "ArrowLeft":
      case "KeyA":
        moveLeft = false;
        break;

      case "ArrowDown":
      case "KeyS":
        moveBackward = false;
        break;

      case "ArrowRight":
      case "KeyD":
        moveRight = false;
        break;

      case "Space":
        moveUp = false;
        break;

      case "ShiftLeft":
        moveDown = false;
        break;
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });
  var position = {
    x: camera.position.x,
    y: camera.position.y,
    z: camera.position.z,
  };
  const MINIMUM_DIST = 0.3; //apartmentInfo.state.MinimumDist;
  const VIEW_HEIGHT = apartmentInfo.state.ViewHeight;
  let isHitting = false;
  function update(delta) {
    const actualMoveSpeed = delta * apartmentInfo.state.WalkingSpeed;
    camera.position.y = VIEW_HEIGHT;
    frameLimits(camera.position);
    const direction = new THREE.Vector3(
      camera.position.x,
      camera.position.y,
      camera.position.z
    );
    direction.normalize();

    rayCaster.set(camera.position, direction);
    const intersects = rayCaster.intersectObjects(
      apartment.apartment.current.children,
      true
    );

    if (moveForward == true) {
      console.log(camera.position);
      intersects.forEach((element) => {
        if (element.distance < MINIMUM_DIST) {
          camera.position.set(position.x, position.y, position.z);
        }
      });
      position = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      };
      camera.translateZ(-actualMoveSpeed);
      camera.position.y = VIEW_HEIGHT;
    }

    if (moveBackward == true) {
      intersects.forEach((element) => {
        if (element.distance < MINIMUM_DIST) {
        }
      });
      position = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      };
      camera.translateZ(actualMoveSpeed);
      camera.position.y = VIEW_HEIGHT;
    }

    if (moveLeft == true) {
      intersects.forEach((element) => {
        if (element.distance < MINIMUM_DIST) {
          camera.position.set(position.x, position.y, position.z);
        }
      });
      position = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      };
      camera.translateX(-actualMoveSpeed);
      camera.position.y = VIEW_HEIGHT;
    }

    if (moveRight == true) {
      intersects.forEach((element) => {
        if (element.distance < MINIMUM_DIST) {
          camera.position.set(position.x, position.y, position.z);
        }
      });
      position = {
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
      };
      camera.translateX(actualMoveSpeed);
      camera.position.y = VIEW_HEIGHT;
    }
  }
  function frameLimits(position) {
    if (position.z >= apartmentInfo.state.framelimits.z1) {
      position.z = apartmentInfo.state.framelimits.z1;
    }

    if (position.z <= apartmentInfo.state.framelimits.z2) {
      position.z = apartmentInfo.state.framelimits.z2;
    }

    if (position.x <= apartmentInfo.state.framelimits.x1) {
      position.x = apartmentInfo.state.framelimits.x1;
    }

    if (position.x >= apartmentInfo.state.framelimits.x2) {
      position.x = apartmentInfo.state.framelimits.x2;
    }
  }
  useFrame((_, delta) => {
    update(delta);
    TWEEN.update();
  });
};

export default function Model3D() {
  //Hide the scrollbar
  var styleElement = document.createElement("style");
  styleElement.appendChild(
    document.createTextNode("body::-webkit-scrollbar{display: none;}")
  );
  Timer();
  document.getElementsByTagName("body")[0].appendChild(styleElement);
  const apartmentInfo = useLocation();
  const cameraRef = useRef(null);
  const model2Load = useGLTF(apartmentInfo.state.ApartmentPath, true, true);
  console.log(model2Load);
  model2Load.scene.traverse((p) => {
    if (p.material) {
      console.log(p.material.side);
      p.material.side = THREE.DoubleSide;
    }
  });
  const apartment = useRef();
  const navigate = useNavigate();

  const btnInfo = apartmentInfo.state.Annotation;
  //console.log(model2Load);
  console.log(apartmentInfo);
  const buttons = btnInfo.map(({ title, position, lookAt }) => (
    <button
      className=" select-none bg-blueLogo w-32 text-center h-10 whitespace-nowrap rounded-md my-2 hover:bg-contrastLogo "
      type="button"
      onClick={() => {
        if (cameraRef) {
          const TweenP = new TWEEN.Tween(cameraRef.current.position)
            .to({ x: position.x, y: position.y, z: position.z }, 1000)
            .easing(TWEEN.Easing.Cubic.In)
            .start();
          TweenP.onComplete(() => {
            const Start = cameraRef.current.quaternion.clone();
            cameraRef.current.lookAt(
              new THREE.Vector3(lookAt.x, lookAt.y, lookAt.z)
            );
            const End = cameraRef.current.quaternion.clone();
            cameraRef.current.quaternion.copy(Start);
            new TWEEN.Tween(cameraRef.current.quaternion)
              .to(End, 1200)
              .easing(TWEEN.Easing.Cubic.In)
              .start();
          });
        }
      }}
    >
      {title}
    </button>
  ));
  return (
    <div className="absolute z-10 w-full h-full m-0">
      <Canvas id="canvas">
        <Environment
          background
          blur={0.09}
          files={"/cliff.hdr"}
          backgroundRotation={[0, Math.PI * 0.5, 0]}
        ></Environment>
        <directionalLight castShadow position={[1, 2, 3]} intensity={0.0} />
        <PerspectiveCamera
          name="camera"
          ref={cameraRef}
          fov={apartmentInfo.state.FOV}
          position={apartmentInfo.state.startingCameraPosition}
          rotation={apartmentInfo.state.target}
          makeDefault
        />
        <primitive
          ref={apartment}
          position={[0, 0, 0]}
          object={model2Load.scene}
          scale={1}
          rotation={[0, 0, 0]}
          dispose={null}
        />
        <Control apartment={apartment} />
        <MirrorGenerator data={apartmentInfo.state.mirrors} />
      </Canvas>
      <div
        className="hover:cursor-pointer select-none bg-blueLogo flex absolute top-10 h-10 text-center whitespace-nowrap left-10 w-32 my-2 m-4 hover:bg-contrastLogo hover:bg-opacity-75 rounded-md"
        onClick={() => {
          navigate(-1);
        }}
      >
        <FaArrowLeftLong className=" text-3xl mx-3 text-center my-1" /> <p className=" my-2">Go back</p>
      </div>
      <div className="absolute top-32 left-10 w-20 m-4 opacity-75">
        {buttons}
      </div>
    </div>
  );
}
function Timer() {
  const location = useLocation(); //use location.state to get information
  let time = test();
  function test() {
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
  }
  useEffect(() => {
    const interval = setInterval(() => {
      time += 1;
      //console.log(time);
      window.localStorage.setItem(
        "IndividualApartmentTimeSpentInSeconds" + location.pathname,
        time
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
}
const MirrorGenerator = (mirrors) => {
  console.log(mirrors.data);
  const AllMirrors = mirrors.data.map(({ Args, Position, Rotation }) => (
    <mesh position={Position} rotation={Rotation}>
      <planeGeometry args={Args} />
      <MeshReflectorMaterial
        resolution={2048}
        blur={[512, 512]}
        mixBlur={0}
        mirror={0.9}
      />
    </mesh>
  ));
  return AllMirrors;
};
