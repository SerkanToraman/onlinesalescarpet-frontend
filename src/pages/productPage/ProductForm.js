import React, { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
//Internal JS
//Components
//Context
//Store
//Pages
//CSS

function ProductForm({ item }) {
  const [selectedRollSize, setSelectedRollSize] = useState("");
  const [finalRollSize, setFinalRollSize] = useState("");
  const [finalRollLength, setFinalRollLength] = useState(0);
  const [quantity, setQuantity] = useState("");
  const [selectedCheckbox, setSelectedCheckbox] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const handleSelectChange = (e) => {
    setSelectedRollSize(e.target.value);
    setFinalRollSize(e.target.value);
  };
  const incrementRollSizeValue = () => {
    setFinalRollSize((parseInt(finalRollSize) + 1).toString());
  };

  const decrementRollSizeValue = () => {
    if (finalRollSize > 0) {
      setFinalRollSize((parseInt(finalRollSize) - 1).toString());
    }
  };

  const handleInputRollSize = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // Allow only digits
      setFinalRollSize(value);
    }
  };

  const incrementRollLengthValue = () => {
    setFinalRollLength((parseInt(finalRollLength) + 1).toString());
  };

  const decrementRollLengthValue = () => {
    if (finalRollLength > 0) {
      setFinalRollLength((parseInt(finalRollLength) - 1).toString());
    }
  };

  const handleInputRollWidth = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      // Allow only digits
      setFinalRollLength(value);
    }
  };

  const handleSelectQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleCheckboxChange = (value) => {
    setSelectedCheckbox(value);
  };

  const checkboxes = [
    { id: 1, label: "Kes Gönder" },
    { id: 2, label: "Overlok" },
    { id: 3, label: "Oval Overlok" },
    { id: 4, label: "Oval Saçaklı" },
    { id: 5, label: "Saçak" },
    { id: 6, label: "Yapıştırma" },
  ];

  return (
    <form className="productFormContainer">
      <h3>Kullanılacak Rulo</h3>
      <select
        id="formElements"
        className="form-select"
        class="form-select"
        aria-label="Default select example"
        onChange={handleSelectChange}
        value={selectedRollSize}
      >
        <option selected value=" ">
          Kullanılacak Rulo
        </option>
        {item?.map((value, index) =>
          value.length === 0 ? (
            <option
              key={index}
              disabled={value.available === false}
              value={value.width}
            >
              {value.width} cm
            </option>
          ) : (
            <option
              key={index}
              disabled={value.available === false}
              value={`${value.width}x${value.length}`}
            >
              {value.width}x{value.length} cm
            </option>
          )
        )}
      </select>
      <h3>En (cm)</h3>
      <div class="input-group mb-3" id="formElements">
        <input
          type="text"
          class="form-control form-control-sm"
          placeholder="En Ölçüsü"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={finalRollSize === 0 ? "" : finalRollSize}
          onChange={handleInputRollSize}
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={incrementRollSizeValue}
          disabled={finalRollSize === "200"}
        >
          +
        </button>
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={decrementRollSizeValue}
          disabled={finalRollSize === "1"}
        >
          -
        </button>
      </div>
      <h3>Boy (cm)</h3>
      <div class="input-group  mb-3" id="formElements">
        <input
          type="text"
          class="form-control"
          placeholder="Boy Ölçüsü"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={finalRollLength === 0 ? "" : finalRollLength}
          onChange={handleInputRollWidth}
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={incrementRollLengthValue}
        >
          +
        </button>
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={decrementRollLengthValue}
        >
          -
        </button>
      </div>
      <select
        id="formElements"
        class="form-select"
        aria-label="Default select example"
        onChange={handleSelectQuantity}
        value={quantity}
      >
        <option selected value=" ">
          Adet
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
      <div className="list-group" id="formElements">
        {checkboxes.map((checkbox) => (
          <label className="list-group-item" key={checkbox.id}>
            <input
              className="form-check-input me-1"
              type="checkbox"
              value={checkbox.label}
              checked={selectedCheckbox === checkbox.label}
              onChange={() => handleCheckboxChange(checkbox.label)}
            />
            {checkbox.label}
          </label>
        ))}
      </div>
      <h3>Fiyat tl </h3>
      <input
        id="formElements"
        type="text"
        class="form-control"
        placeholder="Fiyat"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <div class="col-auto">
        <button type="submit" class="btn btn-secondary mb-3" id="button">
          <a href="#">
            <svg fill="black" className="bi bi-cart  " viewBox="0 0 16 16">
              <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
            </svg>
          </a>
          <p>Sepete Ekle</p>
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
