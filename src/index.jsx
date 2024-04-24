import "./index.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Apartments from "./Apartments.jsx";
import HomePage from "./homepage.jsx";
import SpecificApartment from "./SelectApartment.jsx";
import ErrorPage from "./Error-page.jsx";
import TheModel from "./ModelShow3D.jsx";
import LoadingModel from "./LoadingModel.js";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index element={<HomePage />} />
      <Route
        path="/Home"
        errorElement={<ErrorPage></ErrorPage>}
        element={<HomePage />}
      />
      <Route
        path="/Apartments/"
        errorElement={<ErrorPage></ErrorPage>}
        element={<Apartments />}
      />
      <Route
        path="/Apartments/:index"
        errorElement={<ErrorPage></ErrorPage>}
        element={<SpecificApartment />}
      />
      <Route
        path="/Apartments/:index/showroom"
        errorElement={<ErrorPage></ErrorPage>}
        element={
          <Suspense fallback={<LoadingModel />}>
            <TheModel />
          </Suspense>
        }
      />
    </Route>
  )
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
