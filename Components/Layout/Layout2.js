import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import SideBarMobile from './SideBarMobile'
import SideBarFullscreen from './SideBarFullscreen'
import Header2 from './Header2'
import Footer1 from './Footer1'
import { loginUserStorage } from '../../redux/ducks/userDuck'

export default function Layout2({ children }) {
    const dispatch = useDispatch()
    const [isToggledInfo, setToggledInfo] = useState(false);
    const toggleTrueFalseInfo = () => setToggledInfo(!isToggledInfo);


    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 100);
        });
    }, [scroll]);

    useEffect(() => {
        dispatch(loginUserStorage())
    }, [])

    return (
        <>
            <Header2 toggleTrueFalseInfo={toggleTrueFalseInfo} />

            
            <SideBarMobile toggleTrueFalseInfo={toggleTrueFalseInfo} isToggledInfo={isToggledInfo} />

            <SideBarFullscreen toggleTrueFalseInfo={toggleTrueFalseInfo} isToggledInfo={isToggledInfo} />

            <div onClick={toggleTrueFalseInfo} className={`offcanvas-overlay ${isToggledInfo ? "overlay-open" : ""}`}></div>

            {/* back to top Start  */}
            <a href="#" className={`progress-wrap ${scroll ? "active-progress" : ""}`}>
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </a>
            {/* back to top end  */}

            {children}

            <Footer1 />

        </>
    )
}
