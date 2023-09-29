//Outsource JS library
import React from "react";
import { Route, Routes } from "react-router-dom";
//Internal JS
//Components
//Context
//Store
//Pages
import HomePage from "../pages/homePage/HomePage";
import CarpetMainPage from "../pages/carpetPage/CarpetMainPage";
import CarpetJelPage from "../pages/carpetPage/CarpetJelPage";
//CSS
import "../scss/style.css";

function Main() {
  return (
    <div id="appContainer">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/koleksiyonlar" element={<CarpetMainPage />}>
          <Route path="jelhali" element={<CarpetJelPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Main;
