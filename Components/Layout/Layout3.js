import React from 'react'
import { useState, useEffect } from 'react'
import Footer3 from './Footer3';
import Header3 from './Header3';
import SideBarMobile from './SideBarMobile'


export default function Layout3({ children }) {

    const [isToggledInfo, setToggledInfo] = useState(false);
    const toggleTrueFalseInfo = () => setToggledInfo(!isToggledInfo);


    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, [scroll]);

    return (
        <>
            <Header3 toggleTrueFalseInfo={toggleTrueFalseInfo} isToggledInfo={isToggledInfo} />

            <SideBarMobile toggleTrueFalseInfo={toggleTrueFalseInfo} isToggledInfo={isToggledInfo} />


            <div onClick={toggleTrueFalseInfo} className={`offcanvas-overlay d-lg-none ${isToggledInfo ? "overlay-open" : ""}`}></div>

            {/* back to top Start  */}
            <a href="#" className={`progress-wrap ${scroll ? "active-progress" : ""}`}>
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </a>
            {/* back to top end  */}

            {children}

            <Footer3/>

        </>
    )
}
