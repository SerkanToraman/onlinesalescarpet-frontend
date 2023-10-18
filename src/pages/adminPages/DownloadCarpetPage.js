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
  const [imageData, setImageData] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/carpets/download/${id}`)
      .then((response) => {
      
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <img src={"http://localhost:8080/carpets/download/42"} alt="Carpet" />
    </div>
  );
}

export default DownloadCarpetPage;
