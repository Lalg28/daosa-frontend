import React from 'react'
import { useState } from 'react';
import Link from 'next/link'

export default function Funfact3() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    const [isSelect, setSelect] = useState("USD");
    return (
        //funfact area start 
        <div className="funfact_area p-rel pt-95 pb-40">

            <div className="shape_topleft funshape">
                <div className="stuff">
                    <img data-depth="2" src="/img/team/member6.png" alt="img" />
                </div>
            </div>


            <div className="shape_topright funshape">
                <div className="stuff2">
                    <img data-depth="4" src="/img/team/member2.png" alt="img" />
                </div>
            </div>


            <div className="shape_bottomleft funshape">
                <div className="stuff3">
                    <img data-depth="1" src="/img/team/member3.png" alt="img" />
                </div>
            </div>

            <div className="shape_bottomright funshape">
                <div className="stuff4">
                    <img data-depth="3" src="/img/team/member4.png" alt="img" />
                </div>
            </div>

            <div className="container">
                <div className="row g-0 justify-content-center">
                    <div className="col-12">
                        <div className="funfact_wrapper">
                            <div className="funfact_upper text-center">
                                <Link href="/"><a className="funfact_icon play_btn popup-video p-rel"><img src="/img/bg/funfact_icon.png" alt="img" /></a></Link>
                                <div className="funfact_title_section">
                                    <span className="funfact_sub">Fun fact</span>
                                    <h3>We’ve funded projects for</h3>
                                    <div className="funfact_text_wrapper">
                                        <span className="funfact_bigtext">5M</span>
                                        <span className="funfact_righttext"><span>Children around</span> <br /> the world</span>
                                    </div>
                                </div>
                                <span className="funfact_backtitle">Donation</span>
                            </div>
                            <form action="#">
                                <div className="funfact_lower">

                                    <div className="support_search_section funfact_input mb-30">
                                        <input type="text" placeholder="$100" id="Support" />
                                        <button className="amount_btn funfact_amount">Amount</button>
                                        <div onClick={toggleTrueFalse} className={`nice-select support_btn support_select ${isToggled ? "open" : ""}`}>
                                            <span className="current">{isSelect}</span>
                                            <ul className="list">
                                                <li onClick={() => setSelect("USD")} className={`option ${isSelect == "USD" && "selected focus"}`}>USD</li>
                                                <li onClick={() => setSelect("EUR")} className={`option ${isSelect == "EUR" && "selected focus"}`}>EUR</li>
                                                <li onClick={() => setSelect("JPY")} className={`option ${isSelect == "JPY" && "selected focus"}`}>JPY</li>
                                                <li onClick={() => setSelect("BDT")} className={`option ${isSelect == "BDT" && "selected focus"}`}>BDT</li>
                                            </ul>
                                        </div>
                                        {/* <select className="support_btn support_select">
                                                    <option value="Currency">USD</option>
                                                    <option value="">EUR</option>
                                                    <option value="">JPY</option>
                                                    <option value="">BDT</option>
                                                </select> */}
                                    </div>
                                    <div className="donar_section d-sm-flex justify-content-center justify-content-xxl-end text-center">
                                        <div className="donar_currency d-flex justify-content-center mb-30">
                                            <button className="currency funfact">$5</button>
                                            <button className="currency funfact">$10</button>
                                            <button className="currency funfact">$50</button>
                                            <button className="currency funfact">$100</button>
                                        </div>
                                        <div className="funfact_button text-center">
                                            <button type="submit" className="g_btn theme1_bg to_right2 rad-30 mb-30">Make a Donation<span></span></button>
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //funfact area end
    )
}
