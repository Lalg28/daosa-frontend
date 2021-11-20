import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/img/logo/nissan-logo.svg";
import NavFullscreen from "./NavFullscreen";

export default function Header1({ toggleTrueFalse, toggleTrueFalseInfo }) {
  return (
    <header className="header-area header-transparent" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
      <div id="sticky-header" className="header_menu_area header_menu_area_2">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
              <div className="logo">
                <Link href="/">
                  <a className="d-block py-3" style={{maxWidth: 140}}>
                    <Image src={logo} alt="logo" className="imgLogo"/>
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
