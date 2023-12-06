import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from './App.jsx'
import Apartments from './Apartments.jsx'
import HomePage from './homepage.jsx'
import Houses from './Houses.jsx'
import SpecificApartment from './SelectApartment.jsx'
import ErrorPage from './Error-page.jsx'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<App />}>
        <Route index element={<HomePage />}/>
        <Route path="/Home" errorElement={<ErrorPage></ErrorPage>} element={<HomePage />}/>
        <Route path="/Houses" errorElement={<ErrorPage></ErrorPage>} element={<Houses />}/>
        <Route path="/Apartments" errorElement={<ErrorPage></ErrorPage>} element={<Apartments />} />
        <Route path="/SpecificApartment/:id" errorElement={<ErrorPage></ErrorPage>} element={<SpecificApartment/>}/>
      </Route>
    )
)

root.render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );

