import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//Internal JS
import useAxios, { REQ_TYPES } from "../../endpoints/UseAxios";
//Components
//Context
//Store
import { getSingleCarpetActionCreater } from "../../store/actions/carpetActions";
//Data
import { JelHaliData } from "../carpetPage/JelHaliData";
//Pages
import ProductCardStockStatusGrid from "./ProductCardStockStatusGrid";
import ProductForm from "./ProductForm";

//CSS

function ProductCard() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { carpetType } = useParams();
  const fullName = carpetType.split("-");
  const [carpet, name] = fullName;

  const singleCarpet = useSelector(
    (store) => store.carpetDisplayReducer.singleCarpet
  );

  

  useEffect(() => {
    dispatch(getSingleCarpetActionCreater(name))
  }, []);


  // const [loading, setLoading] = useState(true);
  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <section className="productCardContainer">
      <h1 className="mainHeader">
        {" "}
        {carpet.toUpperCase() + " " + name.toUpperCase()}
      </h1>
      <ProductCardStockStatusGrid item={singleCarpet?.carpetSizesList} />
      <section className="bottomSection">
        <div className="productCardImg">
          <img
            src={`http://localhost:8080/carpets/downloadImage/${singleCarpet?.id}`}
            alt={singleCarpet?.imagePath}
          />
        </div>
        <ProductForm size={singleCarpet?.carpetSizesList} fringe={singleCarpet?.carpetFringeList} />
      </section>
    </section>
  );
}

export default ProductCard;
