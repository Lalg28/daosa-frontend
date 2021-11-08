import React from 'react'
import NavFullscreen from './NavFullscreen'
import Link from 'next/link'

export default function Header2( {toggleTrueFalseInfo}) {
    return (
        
        <header className="header-area">
                <div className="header_top_area d-none d-lg-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-9 col-xl-9 col-lg-8">
                                <div className="top_mailing">
                                    <Link href="#"><a className="theme-1"><i className="fal fa-envelope"></i>admin@domain.com</a></Link>
                                    <Link href="#"><a className="theme-2"><i className="fal fa-phone"></i>088889797697</a></Link>
                                    <Link href="#"><a className="theme-3"><i className="fal fa-map-marker-alt"></i>street 222, South Africa</a></Link>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-4 text-start text-md-end">
                                <div className="top_social">
                                    <Link href="#"><a className="facebook"><i className="fab fa-facebook-f"></i></a></Link>
                                    <Link href="#"><a className="google"><i className="fab fa-google-plus-g"></i></a></Link>
                                    <Link href="#"><a className="twitter"><i className="fab fa-twitter"></i></a></Link>
                                    <Link href="#"><a className="pinterest"><i className="fab fa-pinterest-p"></i></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className="header_menu_area header_menu_area_2">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-6 col-6">
                                <div className="logo">
                                    <Link href="/"><a><img src="/img/logo/logo.png" alt="" /></a></Link>
                                </div>
                            </div>
                            <div className="col-xxl-7 col-xl-7 col-lg-9 d-none d-lg-block">
                                <div className="main-menu menu_2 text-center">
                                    <NavFullscreen/>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-1 col-md-6 col-6">
                                <div className="header-right d-flex align-items-center justify-content-end">
                                    <div className="header-sing d-inline-block d-none d-xl-block">
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
