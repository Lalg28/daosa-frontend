import React from 'react'
import Link from 'next/link'
import NavFullscreen from './NavFullscreen'

export default function Header3({toggleTrueFalseInfo, isToggledInfo}) {
    return (
        <>
            <header className="header-area header_area_3">
                <div className="container-fluid">
                    <div className="col-xxl-12">
                        <div className="spacial_logo">
                            <Link href="/"><a><img src="/img/logo/logo-vertical.png" alt="logo" /></a></Link>
                            <div onClick={toggleTrueFalseInfo} className={`logo_absicon open-mobile-menu ${isToggledInfo ? "icon_block" : ""}`}>
                                <i className="fal fa-plus"></i>
                                <i className="far fa-minus"></i>
                            </div>
                        </div>
                        <div className={`main-menu menu_3 text-center ${isToggledInfo ? "menu_block" : ""} d-none d-lg-block `}>
                            <NavFullscreen/>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
