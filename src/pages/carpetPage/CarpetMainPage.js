//Outsource JS library
import React from "react";
import { Outlet } from "react-router-dom";
//Internal JS
//Components
import NavBar from "../../components/NavBar";
//Context
//Store
//Pages
import CarpetJelPage from "./CarpetJelPage";
//CSS

function CarpetMainPage() {
  return (
    <div className="carpetMainContainer">
      <NavBar />
      <Outlet/>
    </div>
  );
}

export default CarpetMainPage;
