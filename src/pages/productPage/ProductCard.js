import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//Internal JS
import useAxios, { REQ_TYPES } from "../../endpoints/UseAxios";
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
  // const [filteredData, setFilteredData] = useState({});
  const fullName = carpetType.split("-");
  const [carpet, name] = fullName;
  // const filterByName = (name) => {
  //   const filteredItems = JelHaliData.find(
  //     (item) => item.name.toLowerCase() === name.toLowerCase()
  //   );
  //   setFilteredData(filteredItems);
  // };
  // useEffect(() => {
  //   filterByName(name);
  // }, [name]);

  const singleCarpet = useSelector((store) =>store.carpetDisplayReducer.singleCarpet);




  return (
    <section className="productCardContainer">
      <h1 className="mainHeader"> {carpet.toUpperCase() + " " + name.toUpperCase()}</h1>
      <ProductCardStockStatusGrid />
      <section className="bottomSection">
        <div className="productCardImg">
          <img src={`http://localhost:8080/carpets/downloadImage/${singleCarpet.id}`} alt={singleCarpet.imagePath}/>
        </div>
        <ProductForm filteredData={singleCarpet} />
      </section>
    </section>
  );
}

export default ProductCard;
