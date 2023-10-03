import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//Internal JS
//Components
//Context
//Store
//Data
import { JelHaliData } from "../carpetPage/JelHaliData";
//Pages
import ProductCardStockStatusGrid from "./ProductCardStockStatusGrid";
import ProductForm from "./ProductForm";
//CSS

function ProductCard() {
  const { carpetType } = useParams();
  const [filteredData, setFilteredData] = useState({});
  const fullName = carpetType.split("-");
  const [carpet, name] = fullName;
  const filterByName = (name) => {
    const filteredItems = JelHaliData.find(
      (item) => item.name.toLowerCase() === name.toLowerCase()
    );
    setFilteredData(filteredItems);
  };
  useEffect(() => {
    filterByName(name);
  }, [name]);
  return (
    <section className="productCardContainer">
      <h1 className="mainHeader"> {carpet.toUpperCase() + " " + name.toUpperCase()}</h1>
      <ProductCardStockStatusGrid />
      <section className="bottomSection">
        <div className="productCardImg">
          <img src={filteredData.img} />
        </div>
        <ProductForm filteredData={filteredData} />
      </section>
    </section>
  );
}

export default ProductCard;
