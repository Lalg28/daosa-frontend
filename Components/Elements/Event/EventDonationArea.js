import React from 'react'
import { useState } from 'react';

export default function EventDonationArea() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    const [isSelect, setSelect] = useState("USD");
    return (
        // donation area start 
        <div className="donation_area bg_cover pt-120 pb-115" style={{ "background": "url(/img/bg/donate_bg2.jpg)" }}>
            <div className="container">
                <div className="row flex-column-reverse flex-md-row">
                    <div className="col-xxl-4 col-xl-5 col-lg-6 col-md-6">
                        <div className="donation_wrappar">
                            <h4 className="donate_title">Make Donation</h4>
                            <span className="opacity_6">100% of your helping donation funds spinal  cord research.</span>
                            <div className="donate_progress_wrapper">
                                <label className="event_lab">Raised: <span className="theme-3">$1,25,000</span></label>
                                <div className="progress donate_progress">
                                    <div className="progress-bar theme-3" role="progressbar" style={{"width":"30%"}} ></div>
                                </div>
                            </div>
                            <div className="support_search_section event_single mb-20">
                                <input type="text" placeholder="50" id="Support" className="mb-10" />
                                <div onClick={toggleTrueFalse} className={`nice-select support_btn support_select ${isToggled && "open"}`}>
                                    <span className="current">{isSelect}</span>
                                    <ul className="list">
                                        <li  onClick={()=>setSelect("USD")} className="option selected">USD</li>
                                        <li  onClick={()=>setSelect("EUR")} className="option">EUR</li>
                                        <li  onClick={()=>setSelect("JPY")} className="option focus">JPY</li>
                                        <li  onClick={()=>setSelect("BDT")} className="option">BDT</li>
                                    </ul>
                                </div>
                                {/* <select className="support_btn support_select">
                                        <option value="Currency">USD</option>
                                        <option value="">EUR</option>
                                        <option value="">JPY</option>
                                        <option value="">BDT</option>
                                    </select> */}
                                <p className="s_14">Please enter amount over 500 manually</p>
                            </div>
                            <button className="g_btn hbtn_1 to_left rad-30">Donate Now <span></span></button>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-7 col-lg-6 col-md-6">
                        <div className="donate_img_wrapper ml-70">
                            <div className="donate_img_inner p-rel">
                                <img src="/img/donation/donation_s1.jpg" alt="img" />
                                <img src="/img/donation/donation_s2.jpg" alt="img" />
                                <img className="abs_img event_abs_img" src="/img/donation/events_abs.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // donation area end
    )
}
