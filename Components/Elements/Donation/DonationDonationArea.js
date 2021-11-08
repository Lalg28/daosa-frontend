import React from 'react'
import Link from 'next/link'
export default function DonationDonationArea() {
    return (
        //single donation area start
        <div className="single_donation_area pt-120 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-5">
                        <div className="single_donation_img_wrapper pr-30">
                            <div className="single_donation_img mb-40">
                                <img src="/img/donation/donation_single1.jpg" alt="img"/>
                            </div>
                            <div className="single_donation_img mb-40">
                                <img src="/img/donation/donation_single2.jpg" alt="img"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-7">
                        <div className="single_donation_content donation_border">
                            <div className="section_title">
                                <Link href="#"><a className="sub_title sub_title_2">Water</a></Link>
                            </div>
                            <h4 className="donation_title">The community state of the art <br/>
                                recurring donation.</h4>
                            <p>generous actions or donations to aid the poor, ill, or needy: to devote
                                one&apos;s life to charity. something given to a person or persons in need;
                                alms: She asked for work, not charity. a charitable act or work.</p>
                            <div className="feature_progress_wrapper mb-25 mt-35">
                                <div className="progress feature_progress">
                                    <div className="progress-bar" role="progressbar" style={{"width":"50%"}}></div>
                                </div>
                            </div>
                            <div className="single_cause_meta mb-20">
                                <div className="single_meta feature_meta feature_border d-inline-block">
                                    <span className="meta_text red_clr"><i className="fal fa-globe"></i> Goal</span>
                                    <span className="meta_price red_clr">$4,5100</span>
                                </div>
                                <div className="single_meta feature_meta feature_border d-inline-block">
                                    <span className="meta_text red_clr"><i className="fal fa-users"></i> Raised</span>
                                    <span className="meta_price red_clr">$45,300</span>
                                </div>
                                <div className="single_meta feature_meta d-inline-block">
                                    <span className="meta_text red_clr"><i className="fal fa-reply"></i> To go</span>
                                    <span className="meta_price red_clr">$45,200</span>
                                </div>
                            </div>
                        </div>
                        <div className="single_donation_input donation_border">
                            <div className="donation_submit_wrapper mb-20">
                                <div className="donation_submit_box">
                                    <button type="submit">$</button>
                                    <input type="text" placeholder="$100"/>
                                </div>
                            </div>
                            <div className="input_value_wrapper">
                                <button className="input_value">$05</button>
                                <button className="input_value">$10</button>
                                <button className="input_value">$50</button>
                                <button className="input_value">$100</button>
                            <button className="input_value">Custom</button>
                            </div>
                        </div>
                        <div className="single_donation_payment donation_border">
                            <h5 className="single_title mb-0">Payment Method</h5>
                            <div className="payment_icons">
                                <Link href="#"><a><i className="icofont-amazon"></i></a></Link>
                                <Link href="#"><a><i className="icofont-paypal"></i></a></Link>
                                <Link href="#"><a><i className="icofont-visa"></i></a></Link>
                                <Link href="#"><a><i className="icofont-cash-on-delivery"></i></a></Link>
                                <Link href="#"><a><i className="icofont-google-wallet-alt-3"></i></a></Link>
                            </div>
                        </div>
                        <div className="single_donation_info">
                            <h5 className="single_title">Personal Information</h5>

                            <div className="input_info_wrapper">
                                <form action="#">
                                    <div className="input_info_name info_input"><input type="text" placeholder="Enter full name"/><i className="fal fa-user"></i></div>
                                    <div className="input_info_email info_input"><input type="email" placeholder="Enter email"/><i className="fal fa-envelope"></i></div>
                                </form>
                            </div>
                            <div className="submit_info_wrapper d-inline-flex">
                                <div className="donation_submit_wrapper">
                                    <div className="donation_submit_box w_208">
                                        <button type="submit">Donation</button>
                                        <input type="text" placeholder="$100"/>
                                    </div>
                                </div>
                                <div className="submit_info_button">
                                    <Link href="/cause"><a className="g_btn hbtn_1 to_right1 i_left rad-30 p-35"><i className="fal fa-heart"></i> Explore Causes<span></span></a></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //single donation area end
    )
}
