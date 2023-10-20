import React, { useState, useEffect } from "react";

function ProductStockStatusGrid({ item }) {
  console.log(item);

  return (
    <table className="productStockStatusGridContainer">
      <div className="" id="row1">
        Stok Durumu
      </div>
      <div className="" id="wrapper">
        {item?.map((value, index) => (
          <div key={index} className="singleCard">
            <div className="singleCardTop">
              {value.length === 0
                ? value.width
                : `${value.width}x${value.leght}`}{" "}
              cm
            </div>
            <div className="singleCardBottom">
              {value.available === true ? "var" : "yok"}
            </div>
          </div>
        ))}
      </div>
    </table>
  );
}

export default ProductStockStatusGrid;

