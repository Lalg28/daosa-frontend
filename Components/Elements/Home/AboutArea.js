import React from 'react'
import Link from 'next/link'

export default function AboutArea() {
    return (
       
        <section className="about_area pt-120 pb-80">
        <div className="container">
            <div className="row">
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12">
                    <div className="about_img_wrapper fix mr-30">
                        <div className="row mb-40">
                            <div className="col-12 custom_col">
                                <Link href="/about"><a className="about_img w_img">
                                    <img src="/img/causes/cause_sbig.jpg" alt="img" />
                                    <div className="about_img_text theme-2">
                                        <i className="flaticon-water-drop"></i>
                                        <h6 className="img_text">Pure Water</h6>
                                    </div>
                                </a></Link>
                            </div>
                        </div>
                        <div className="row gutter_40">
                            <div className="col-xxl-6 col-md-6 col-sm-6 custom_col mb-40">
                                <Link href="/about"><a className="about_img w_img rad-50p fix">
                                    <img src="/img/about/about_sm1.jpg" alt="img" />
                                    <div className="about_img_text theme-no1">
                                        <i className="flaticon-doctor"></i>
                                        <h6 className="img_text">Education</h6>
                                    </div>
                                </a></Link>
                            </div>
                            <div className="col-xxl-6 col-md-6 col-sm-6 custom_col mb-40">
                                <Link href="/about"><a className="about_img w_img">
                                    <img src="/img/about/about_sm2.jpg" alt="img" />
                                    <div className="about_img_text theme-no">
                                        <i className="flaticon-stethoscope"></i>
                                        <h6 className="img_text">Medical & Health</h6>
                                    </div>
                                </a></Link>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 d-flex align-items-center">
                    <div className="about_wrapper_home pl-20">
                        <div className="section_title">
                            <span className="sub_title"><i className="fal fa-heart"></i> About Us</span>
                            <h3 className="title">Fight for right cause <br /> for save the world</h3>
                        </div>
                        <p className="mb-45">NewLook unlike many traditional plastic surgery centers in San Diego,
                            are industry recognized experts in a wide variety of cosmetic procedure
                            and are dedicated to providing customers.</p>
                        <div className="row">
                            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <ul className="about_list mtm-20 mb-30">
                                    <li>Food & water charity</li>
                                    <li>Sent a gift anytime</li>
                                    <li>Make donation</li>
                                    <li>24/7 online support</li>
                                </ul>
                            </div>
                            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6 col-sm-6">
                                <div className="about_review text-center mb-30" style={{ "background": "url(/img/about/about_review.jpg)" }}>
                                    <span className="author">-Mironton T.</span>
                                    <h5 className="review_text">Life is a long lesson
                                        in humanity</h5>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    )
}
