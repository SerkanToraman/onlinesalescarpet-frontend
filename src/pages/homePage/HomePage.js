//Outsource JS library
import React from "react";
//Internal JS
//Components
import NavBar from "../../components/NavBar";
import Carousel from "./Carousel";
//Context
//Store
//Pages
//CSS

function HomePage() {
  return (
    <div className="homePage">
      <NavBar />
      <Carousel />
    </div>
  );
}

export default HomePage;
