//Outsource JS library
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//Internal JS
import { getSingleCarpetActionCreater } from "../store/actions/carpetActions";
//Components
//Context
//Store
//Pages
//CSS

function CarpetCard({ carpetItem, title }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(title + "-" + carpetItem.carpetName.toLowerCase());
  }, []);


  return (
    <div
      className="carpetCard"
      onClick={() => {
        navigate("/urun/" + url);
      }}
    >
      <div className="carpetCardImg">
        <img src={`http://localhost:8080/carpets/downloadImage/${carpetItem.id}`} alt={carpetItem.imagePath} />
      </div>
      <h3>{carpetItem.carpetName}</h3>
      <button>Satın Al</button>
    </div>
  );
}

export default CarpetCard;
