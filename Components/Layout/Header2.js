import React from "react";
import NavFullscreen from "./NavFullscreen";
import Link from "next/link";

export default function Header2({ toggleTrueFalseInfo }) {
  return (
    <header className="header-area">
      <div id="sticky-header" className="header_menu_area header_menu_area_2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
              <div className="logo">
                <Link href="/">
                  <a className="d-block">
                    <img src="/img/logo/logo.png" alt="" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-xxl-10 col-xl-7 col-lg-9 d-none d-lg-block">
              <div className="main-menu menu_2 text-end">
                <NavFullscreen />
              </div>
            </div>
            <div className="d-lg-none col-6">
              <div className="header-right d-flex align-items-center justify-content-end">
                <div className="hamburger-menu menu-bar info-bar d-inline-block ml-20">
                  <button
                    onClick={toggleTrueFalseInfo}
                    className="hamburger-btn open-mobile-menu"
                  >
                    <i className="fal fa-bars"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
