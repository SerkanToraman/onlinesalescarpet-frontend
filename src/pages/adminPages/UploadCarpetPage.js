//Outsource JS library
import React, { useState } from "react";
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const registerHandleSubmit = async (data) => {
    const formData = new FormData();
    formData.append("carpetName", data.carpetName);
    formData.append("squaremetrePrice", parseInt(data.squaremetrePrice,10));
    formData.append("imageFile", data.imageFile[0]);
    console.log(data);
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
      <input
        type="file"
        accept="image/*"
        {...register("imageFile", { required: "Please select an image file" })}
      />
      <br />
      {errors?.imageFile && (
        <p className="formError">{errors.imageFile.message}</p>
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
      <button type="submit">Upload</button>
    </form>
  );
}

export default UploadCarpetPage;
