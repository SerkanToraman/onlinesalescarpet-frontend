import React from "react";

function SideBarAccordion() {
  return (
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="false"
            aria-controls="collapseOne"
          >
            Koleksiyonlar
          </button>
        </h2>

        <div
          id="collapseOne"
          class="accordion-collapse collapse"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <ul class="accordion-body">
            <a class="accordion-subItem" href="#">
              Jel Halı
            </a>
            <a class="accordion-subItem" href="#">
              Makina Halısı
            </a>
            <a class="accordion-subItem" href="#">
              Kilim
            </a>
            <a class="accordion-subItem" href="#">
              Post Peluş
            </a>
            <a class="accordion-subItem" href="#">
              Banyo Halısı
            </a>
            <a class="accordion-subItem" href="#">
              Oval Halı
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideBarAccordion;
