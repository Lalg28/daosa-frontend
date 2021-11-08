import React from 'react'

export default function CTAArea() {
    return (
        <section className="cta_area cta-bg text-white pt-90 pb-60">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 text-center">
                    <div className="section_title_2 mb-30">
                        <span className="sub_title_2">Make Donation</span>
                        <h3 className="section_title_2 mb-0">Become a Donar</h3>
                    </div>
                </div>
                <div className="col-12">
                    <div className="donar_section d-lg-flex justify-content-center text-center">
                        <div className="donar_form d-inline-block mb-30">
                            <input type="text" placeholder="Your name" className="donar_input mr-15"/>
                            <input type="text" placeholder="Enter email" className="donar_input mr-15"/>
                        </div>
                        <div className="donar_currency d-inline-block mb-30">
                            <button className="currency mr-15">50</button>
                            <button className="currency mr-15">100</button>
                            <button className="currency custom_padd mr-15">Custom</button>
                        </div>
                        <div className="donnar_button text-center">
                            <button className="g_btn theme1_bg to_right2 donation rad-30 p-60 mb-30">Make a Donation<span></span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
