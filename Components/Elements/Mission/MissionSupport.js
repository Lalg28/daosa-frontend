import React from 'react'
import { useState } from 'react';

export default function MissionSupport() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    const [isSelect, setSelect] = useState("USD");
    return (
        //Support area start 
        <div className="support_area gray-bg pt-115 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-12 col-sm-12">
                        <div className="section_title mb-55">
                            <span className="sub_title"><i className="fal fa-heart"></i>Why Choose Us</span>
                            <h3 className="title">The perfect help</h3>
                        </div>
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                                <div className="choose_single_card theme-2 p-rel mb-30">
                                    <div className="choose_abs theme-2">
                                        <i className="flaticon-map"></i>
                                    </div>
                                    <span className="card_number">01</span>
                                    <div className="choose_card_content">
                                        <h5 className="choose_card_title">Places to get lost</h5>
                                        <p>Charity is the largest global for
                                            crowdfunding community with
                                            connecting nonprofits.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-6">
                                <div className="choose_single_card theme-3 p-rel mb-30">
                                    <div className="choose_abs theme-3">
                                        <i className="flaticon-user"></i>
                                    </div>
                                    <span className="card_number clr-theme-3">02</span>
                                    <div className="choose_card_content">
                                        <h5 className="choose_card_title">Free Refuge Shelter</h5>
                                        <p>Lorem ipsum dolor sit ametco bns ectetur adi pisicing elit sed do eiusmod tempor incid.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-12 col-sm-12 d-flex align-items-center text-center">
                        <div className="single-support p-rel ml-50 mb-30" style={{ "background": "url(/img/bg/support_bg.jpg)" }}>
                            <div className="support-wrapper p-rel">
                                <h4 className="support_title">Support Us</h4>
                                <p className="mb-35">Charity is the largest global for crowdfunding</p>
                                <div className="support_form">
                                    <form action="#">
                                        <div className="support_search_section mb-20">
                                            <input type="text" placeholder="$100" id="Support" />
                                            <button className="amount_btn">Amount</button>
                                            <div onClick={toggleTrueFalse} className={`nice-select support_btn support_select ${isToggled ? "open" : ""}`}>
                                                <span className="current">{isSelect}</span>
                                                <ul className="list">
                                                    <li  onClick={()=>setSelect("USD")} className={`option ${isSelect=="USD" && "selected focus"}`}>USD</li>
                                                    <li  onClick={()=>setSelect("EUR")} className={`option ${isSelect=="EUR" && "selected focus"}`}>EUR</li>
                                                    <li  onClick={()=>setSelect("JPY")} className={`option ${isSelect=="JPY" && "selected focus"}`}>JPY</li>
                                                    <li  onClick={()=>setSelect("BDT")} className={`option ${isSelect=="BDT" && "selected focus"}`}>BDT</li>
                                                </ul>
                                            </div>
                                            {/* <select className="support_btn support_select">
                                                <option value="Currency">USD</option>
                                                <option value="">EUR</option>
                                                <option value="">JPY</option>
                                                <option value="">BDT</option>
                                            </select> */}
                                        </div>
                                        <div className="donar_section support_currency d-sm-flex d-inline-block justify-content-center">
                                            <div className="donar_currency mb-30">
                                                <button className="currency">$5</button>
                                                <button className="currency ml-10">$10</button>
                                                <button className="currency ml-10">$50</button>
                                                <button className="currency ml-10">$100</button>
                                            </div>
                                            <button type="submit" className="g_btn curr_btn rad-30 ml-10">Donate<span></span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //Support area end 
    )
}
