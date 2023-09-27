import React, { useEffect } from "react";
import $ from "jquery";
import kilim from "../../assets/kilimCarousel.jpg";
import iskandinav from "../../assets/iskandinavCarousel2.jpg";
import aspendons from "../../assets/aspendosCarousel2.jpg";
// src="https://picsum.photos/1200/400?grayscale"

function Carousel() {
  return (
    <div
      id="myCarousel"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="50000">
          <div className="imgContainer">
            <img src={iskandinav} class="d-block imgIs" alt="..." />
          </div>
          <div class="carousel-caption">
            <h5 className="animated fadeInUp ">İskandinav</h5>

            <button className="animated fadeInUp ">Satin al</button>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="50000">
          <div className="imgContainer">
            <img src={kilim} class="d-block imgKil" alt="..." />
          </div>
          <div class="carousel-caption">
            <h5 className="animated fadeInUp ">Kilim</h5>
            <button className="animated fadeInUp ">Satin al</button>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="50000">
          <div className="imgContainer">
            <img src={aspendons} class="d-block imgAsp" alt="..." />
          </div>
          <div class="carousel-caption">
            <h5 className="animated fadeInUp"> Aspendos </h5>
            <button className="animated fadeInUp ">Satin al</button>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#myCarousel"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
