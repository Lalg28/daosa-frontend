import React from 'react'

export default function Search({toggleTrueFalse, isToggled}) {
    return (
        <>
         {/* Fullscreen search  */}
         <div className={`search-wrap ${isToggled ? "d-block" : "d-none"}`}>
            <div className="search-inner">
                <i  onClick={toggleTrueFalse} className="fas fa-times search-close" id="search-close"></i>
                <div className="search-cell">
                    <form method="get">
                        <div className="search-field-holder">
                            <input type="search" className="main-search-input" placeholder="Search Your Keyword..."/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
         {/* end fullscreen search  */}
            
        </>
    )
}
