//Outsource JS library
import React from "react";
//Internal JS
//Components
import NavBar from "../../components/NavBar";
import Carousel from "./Carousel";
import Collections from "./Collections";
//Context
//Store
//Pages
//CSS

function HomePage() {
  return (
    <div className="homePage">
      <NavBar />
      <Carousel />
      <Collections/>
    </div>
  );
}

export default HomePage;
