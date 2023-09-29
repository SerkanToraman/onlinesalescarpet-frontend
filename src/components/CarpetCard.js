//Outsource JS library
import React from "react";
//Internal JS
//Components
//Context
//Store
//Pages
//CSS

function CarpetCard({ carpetItem }) {
  return (
    <div className="carpetCard">
      <div className="carpetCardImg">
        <img src={carpetItem.img} alt={carpetItem.img} />
      </div>
      <h3>{carpetItem.name}</h3>
      <p>  
        {carpetItem.price} tl
      </p>
      <button>Satın Al</button>
    </div>
  );
}

export default CarpetCard;
