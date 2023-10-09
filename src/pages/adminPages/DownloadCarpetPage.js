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
  const [data, setData] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:8080/carpets/download/${id}`)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <div>
      <h1>{data.carpetName}</h1>
      <img src={`data:image/jpeg;base64,${data.imageBase64}`} alt="Carpet" />
    </div>
  );
}

export default DownloadCarpetPage;
