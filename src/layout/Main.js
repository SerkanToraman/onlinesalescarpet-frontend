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
import ProductMainPage from "../pages/productPage/ProductMainPage";
import ProductCard from "../pages/productPage/ProductCard";
import UploadCarpetPage from "../pages/adminPages/UploadCarpetPage";
import DownloadCarpetPage from "../pages/adminPages/DownloadCarpetPage";
//CSS
import "../scss/style.css";

function Main() {
  return (
    <div id="appContainer">
      <Routes>
        <Route path="/download/:id" element={<DownloadCarpetPage />} />
        <Route path="/upload" element={<UploadCarpetPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/koleksiyonlar" element={<CarpetMainPage />}>
          <Route path="jelhali" element={<CarpetJelPage />} />
        </Route>
        <Route path="/urun" element={<ProductMainPage />}>
          <Route path=":carpetType" element={<ProductCard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Main;
