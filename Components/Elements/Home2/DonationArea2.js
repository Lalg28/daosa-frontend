import React from 'react'
import { useState } from 'react';


export default function DonationArea2() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    const [isSelect, setSelect] = useState("USD");

    return (
        // donation area start
        <div className="donation_area bg_cover pt-120 pb-110" style={{ "backgroundImage": "url(/img/donation/donation_bg.jpg)" }}>
            <div className="container">
                <div className="row flex-column-reverse flex-md-row">
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="donation_wrappar">
                            <h4 className="donate_title">Make Donation</h4>
                            <span className="white">100% of your helping donation funds spinal  cord research.</span>
                            <div className="donate_progress_wrapper mb-45">
                                <label>Raised: <span>$1,25,000</span></label>
                                <div className="progress cause_progress donate_progress">
                                    <div className="progress-bar" role="progressbar" data-width="30%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ "width": "30%;" }}></div>
                                </div>
                            </div>
                            <div className="suppor_form">
                                <form action="#">
                                    <div className="support_search_section donate_section mb-20">
                                        <input type="text" placeholder="50" id="Support" className="mb-10" />
                                        <div onClick={toggleTrueFalse} className={`nice-select support_btn support_select ${isToggled ? "open" : ""}`}>
                                            <span className="current">{isSelect}</span>
                                            <ul className="list">
                                                <li onClick={() => setSelect("USD")} className={`option ${isSelect == "USD" && "selected focus"}`}>USD</li>
                                                <li onClick={() => setSelect("EUR")} className={`option ${isSelect == "EUR" && "selected focus"}`}>EUR</li>
                                                <li onClick={() => setSelect("JPY")} className={`option ${isSelect == "JPY" && "selected focus"}`}>JPY</li>
                                                <li onClick={() => setSelect("BDT")} className={`option ${isSelect == "BDT" && "selected focus"}`}>BDT</li>
                                            </ul>
                                        </div>
                                        {/* <select className="nice-select support_btn support_select">
                                                <option value="Currency">USD</option>
                                                <option value="">EUR</option>
                                                <option value="">JPY</option>
                                                <option value="">BDT</option>
                                            </select> */}
                                        <p className="fs_14">Please enter amount over 500 manually</p>
                                    </div>
                                    <button type="submit" className="g_btn donation_btn p-45">Donate Now <span></span></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-8 col-xl-8 col-lg-6 col-md-6">
                        <div className="donate_img_wrapper ml-70">
                            <div className="donate_img_inner p-rel">
                                <img src="/img/donation/donation1.jpg" alt="img" />
                                <img src="/img/donation/donation2.jpg" alt="img" />
                                <img className="abs_img" src="/img/donation/donation_small.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // donation area end 
    )
}
