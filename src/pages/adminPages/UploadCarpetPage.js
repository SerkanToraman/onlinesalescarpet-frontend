//Outsource JS library
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
//Internal JS
//Components
//Context
//Store
//Data
//Pages
//CSS

function UploadCarpetPage() {
  const [registerErrorReponse, setRegisterErrorReponse] = useState();
  const [collection, setCollections] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/collections/")
      .then((response) => {
        setCollections(response.data);
      })
      .catch((error) => {
        console.error("Error fetching collection IDs:", error);
      });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const registerHandleSubmit = async (data) => {
    const formData = new FormData();
    formData.append("carpetName", data.carpetName);
    formData.append("squaremetrePrice", parseInt(data.squaremetrePrice, 10));
    formData.append("imageFile", data.imageFile[0]);
    formData.append("collection_id", parseInt(data.collectionId, 10));
    console.log(data);
    console.log(formData);
    try {
      const response = await axios.post(
        "http://localhost:8080/carpets/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    } catch (error) {
      setRegisterErrorReponse(
        error.response?.data?.message || "An error occurred."
      );
    }
  };

  return (
    <form className="uploadForm" onSubmit={handleSubmit(registerHandleSubmit)}>
      <label htmlFor="collectionId">Collection Name:</label>
      <select
        id="collectionId"
        {...register("collectionId", {
          required: "Please select a collection Name",
        })}
      >
        <option value="">Select a collection ID</option>
        {collection.map((item) => (
          <option key={item.id} value={item.id}>
            {item.collectionName}
          </option>
        ))}
      </select>
      {errors?.collectionId && (
        <p className="formError">{errors.collectionId.message}</p>
      )}
      <label htmlFor="carpetName">Carpet Name:</label>
      <input
        type="text"
        id="carpetName"
        {...register("carpetName", { required: "Please enter carpetName" })}
      />
      {errors?.carpetName && (
        <p className="formError">{errors.carpetName.message}</p>
      )}
      <br />
      <label htmlFor="squaremetrePrice">Square Metre Price:</label>
      <input
        type="number"
        id="squaremetrePrice"
        {...register("squaremetrePrice", {
          required: "Please enter squaremetrePrice",
        })}
      />
      {errors?.squaremetrePrice && (
        <p className="formError">{errors.squaremetrePrice.message}</p>
      )}
      <br />
      <label htmlFor="carpetName">Carpet Image:</label>
      <input
        type="file"
        accept="image/*"
        {...register("imageFile", { required: "Please select an image file" })}
      />
      {errors?.imageFile && (
        <p className="formError">{errors.imageFile.message}</p>
      )}
      <br />

      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadCarpetPage;
