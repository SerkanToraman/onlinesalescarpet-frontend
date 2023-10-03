import React from "react";

function ProductStockStatusGrid() {
  return (
    <section className="productStockStatusGridContainer">
      <div class="container text-center border border-secondary-subtle">
        <div class="row border-bottom border-secondary-subtle" id="row1">
          <div class="col-12">Stok Durumu</div>
        </div>
        <div class="row border-bottom border-secondary-subtle" id="row2">
          <div class="col border-end border-secondary-subtle">200cm</div>
          <div class="col border-end border-secondary-subtle">150cm</div>
          <div class="col border-end border-secondary-subtle">120cm</div>
          <div class="col border-end border-secondary-subtle">100cm</div>
          <div class="col ">80cm</div>
        </div>
        <div class="row" id="row3">
          <div class="col border-end border-secondary-subtle">var</div>
          <div class="col border-end border-secondary-subtle ">var</div>
          <div class="col border-end border-secondary-subtle">var</div>
          <div class="col border-end border-secondary-subtle">var</div>
          <div class="col ">var</div>
        </div>
      </div>
    </section>
  );
}

export default ProductStockStatusGrid;
