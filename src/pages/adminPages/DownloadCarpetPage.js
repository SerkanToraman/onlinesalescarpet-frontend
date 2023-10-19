//Outsource JS library
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

//Internal JS
//Components
//Context
//Store
//Data
//Pages
//CSS

function DownloadCarpetPage() {
  const [carpetData, setCarpetData] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/carpets/download/${id}`)
      .then((response) => {
        setCarpetData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <h2>{carpetData?.carpetName}</h2>
      <img src={`http://localhost:8080/carpets/downloadImage/${id}`} alt="Carpet" />
    </div>
  );
}

export default DownloadCarpetPage;
