//Outsource JS library
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Internal JS
//Components
//Context
//Store
//Pages
//CSS

function CarpetCard({ carpetItem, title }) {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(title + "-" + carpetItem.name.toLowerCase());
  }, []);

  return (
    <div
      className="carpetCard"
      onClick={() => {
        navigate("/urun/" + url);
      }}
    >
      <div className="carpetCardImg">
        <img src={carpetItem.img} alt={carpetItem.img} />
      </div>
      <h3>{carpetItem.name}</h3>
      <p>{carpetItem.price} tl</p>
      <button>Satın Al</button>
    </div>
  );
}

export default CarpetCard;
