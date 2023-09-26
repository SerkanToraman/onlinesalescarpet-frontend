import React from "react";

function DropDown() {
  return (
    <div class="btn-group">
      <button
        class="nav-link"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        id="a"
        data-unclickable="true"
      >
        Alışveriş
        {/* <span class="visually-hidden">Toggle Dropdown</span> */}
      </button>
      <ul class="dropdown-menu">
        <a class="dropdown-item" href="#">
          Jel Halı
        </a>
        <a class="dropdown-item" href="#">
          Makina Halısı
        </a>
        <a class="dropdown-item" href="#">
          Kilim
        </a>
        <a class="dropdown-item" href="#">
          Post Peluş
        </a>
        <a class="dropdown-item" href="#">
          Banyo Halısı
        </a>
        <a class="dropdown-item" href="#">
          Oval Halı
        </a>
      </ul>
    </div>
  );
}

export default DropDown;
