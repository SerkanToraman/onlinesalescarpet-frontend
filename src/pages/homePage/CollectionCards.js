//Outsource JS library
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
//Internal JS
//Components
//Context
//Store
//Pages
//CSS

function CollectionCards({ collectionItem }) {
  const navigate = useNavigate();
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(
      collectionItem.name.replace(/ /g, "").replace(/ı/g, "i").toLowerCase()
    );
  }, []);

  return (
    <div
      className="collectionCard"
      onClick={() => {
        navigate("/koleksiyonlar/" + url);
        // window.location.reload();
      }}
    >
      <div className="collectionCardImg">
        <img src={collectionItem.img} alt={collectionItem.img} />
      </div>
      <h3>{collectionItem.name}</h3>
      <button>Satın Al</button>
    </div>
  );
}

export default CollectionCards;
