import React from "react";
import SideBarAccordion from "./SideBarAccordion";

function SideBar() {
  return (
    <div className="sideBarMain">
      <nav
        className="d-flex flex-column justify-content-between"
        id="sideBarNav"
      >
        <ul className="sideBarTop">
          <li className="sideBarItem">
            <a class="sideBarSubItem" href="#">
              Anasayfa
            </a>
          </li>
          <li className="sideBarItem">
            <a class="sideBarSubItem" href="#">
              Kurumsal
            </a>
          </li>
          <li className="sideBarItem">
            <SideBarAccordion />
          </li>
          <li className="sideBarItem">
            <a class="sideBarSubItem" href="#">
              İletişim
            </a>
          </li>
        </ul>
        <ul className="sideBarBottom">
          <li className="sideBarItem">
            <h1 class="sideBarSubItemh1" href="#">
              <svg fill="black" className="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
              </svg>
              Hesabim
            </h1>
          </li>
          <li className="sideBarItem">
            <button class="sideBarSubItemBtn" href="#">
              Giriş
            </button>
          </li>
          <li className="sideBarItem">
            <button class="sideBarSubItemBtn" href="#">
              Kayıt Ol
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default SideBar;
