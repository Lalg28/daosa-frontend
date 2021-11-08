import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '/public/img/logo/logo.png'
import NavFullscreen from './NavFullscreen'

export default function Header1({toggleTrueFalse,toggleTrueFalseInfo}) {
    return (
        <header className="header-area header-transparent">
                <div id="sticky-header" className="header_menu_area res_padd">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                                <div className="logo">
                                    <Link href="/"><a><Image src={logo} alt="" /></a></Link>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-xl-6 col-lg-8 d-none d-lg-block">
                                <div className="main-menu theme-1 text-center">
                                    <NavFullscreen />
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-2 col-md-6 col-6">
                                <div className="header-right d-flex align-items-center justify-content-end">
                                    <div className="header-icon d-inline-block">
                                        <h1>Yiiii</h1>
                                        <Link href="#"><a onClick={toggleTrueFalse} className="nav-search search-trigger"><i className="fal fa-search"></i></a></Link>
                                    </div>
                                    <div className="header-sing d-inline-block ml-20 d-none d-xl-block">
                                        <Link href="/donation"><a className="g_btn hbtn_1 to_right1 rad-30">Make Donation<span></span></a></Link>
                                    </div>
                                    <div className="hamburger-menu menu-bar info-bar d-inline-block ml-20">
                                        <button onClick={toggleTrueFalseInfo} className="hamburger-btn open-mobile-menu"><i className="fal fa-bars"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
    )
}
