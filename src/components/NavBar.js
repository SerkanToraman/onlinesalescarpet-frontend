//Outsource JS library
import React, { useState, useRef, useEffect } from "react";
import $ from "jquery";
//Internal JS
//Components
import DropDown from "./DropDown";
import SideBar from "./SideBar";
//Context

//png
import logo from '../assets/logo.png'
//Store
//Pages
//CSS

function NavBar() {
  const [isSideBarVisible, setSideBarVisible] = useState(false);

  const toggleSideBar = () => {
    setSideBarVisible(!isSideBarVisible);
  };

  useEffect(() => {
    const closeSideBarOnClickOutside = (e) => {
      if (
        isSideBarVisible &&
        e.target.closest(".sideBarMain") === null &&
        e.target.closest(".navbar-toggler") === null
      ) {
        setSideBarVisible(false);
      }
    };

    if (isSideBarVisible) {
      window.addEventListener("click", closeSideBarOnClickOutside);
    } else {
      window.removeEventListener("click", closeSideBarOnClickOutside);
    }

    return () => {
      window.removeEventListener("click", closeSideBarOnClickOutside);
    };
  }, [isSideBarVisible]);

  return (
    <header className="navBar">
      <nav className="navbar navbar-expand-lg navbar-light bg-faded" id="nav">
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSideBar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {isSideBarVisible && <SideBar />}
        <div className="headerFirstRow">
          <div className="headerContainer">
            <div className="navbar-brand" id="header" href="#">
             <img src={logo}></img>
            </div>
            <ul className="navbar-nav" id="headerIconContainer">
              <li className="collapse navbar-collapse">
                <a href="#">
                  <svg
                    fill="black"
                    className="bi bi-person"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <svg
                    fill="black"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a href="#">
                  <svg
                    fill="black"
                    className="bi bi-cart  "
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a className="collapse navbar-collapse" href="#">
                  <svg fill="black" className="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="collapse navbar-collapse w-50 mx-auto" id="">
          <ul className="navbar-nav d-flex justify-content-evenly w-100">
            <li className="nav-item">
              <a className="nav-link" id="a" href="#">
                Anasayfa
                {/* <span class="sr-only">(current)</span> */}
              </a>
            </li>
            <li className="nav-item">
              <a class="nav-link" id="a" href="#">
                Kurumsal
              </a>
            </li>
            <li className="nav-item" id="dropDownList">
              <DropDown />
            </li>
            <li className="nav-item">
              <a class="nav-link" id="a" href="#">
                İletişim
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
