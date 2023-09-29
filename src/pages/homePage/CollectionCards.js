//Outsource JS library
import React from "react";
//Internal JS
//Components
//Context
//Store
//Pages
//CSS

function CollectionCards({ collectionItem }) {
  return (
    <div className="collectionCard">
      <div className="collectionCardImg">
        <img src={collectionItem.img} alt={collectionItem.img} />
      </div>
      <h3>{collectionItem.name}</h3>
      <button>Satın Al</button>
    </div>
  );
}

export default CollectionCards;
