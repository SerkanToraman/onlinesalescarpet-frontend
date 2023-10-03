import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
//Internal JS
//Components
import NavBar from "../../components/NavBar";
//Context
//Store
//Pages
//CSS

function ProductMainPage() {
  return (
    <div class="productPageMainContainer">
      <NavBar />
      <section className="productPageMainSection">
        <Outlet />
      </section>
    </div>
  );
}

export default ProductMainPage;
