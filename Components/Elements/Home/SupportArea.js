import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function SupportArea() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    const [isSelect, setSelect] = useState("USD");

    return (
        <>
            {/* <!--support area start--> */}
            <div className="support_area mtm-294 pb-90">
                <div className="container">
                    <div className="support_bg white-bg">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                                <div className="support_images_active swiper-container dots_style">
                                    <div className="swiper-wrapper">
                                        <Swiper
                                            // install Swiper modules
                                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                                            spaceBetween={2}
                                            slidesPerView={1}
                                            autoplaydisableoninteraction={"false"}
                                            loop={true}
                                            pagination={{ clickable: true }}
                                            // navigation={{ clickable: true }}
                                            scrollbar={{ draggable: true }}
                                            onSwiper={(swiper) => console.log(swiper)}
                                            onSlideChange={() => console.log('slide change')}
                                        >
                                            <SwiperSlide className="support_img_single img_effect_white">
                                                <Link href="/volunteer"><a><img src="/img/bg/support1.jpg" alt="img" /></a></Link>
                                            </SwiperSlide>
                                            <SwiperSlide className="support_img_single img_effect_white">
                                                <Link href="/volunteer"><a><img src="/img/bg/support3.jpg" alt="img" /></a></Link>
                                            </SwiperSlide>
                                            <SwiperSlide className="support_img_single img_effect_white">
                                                <Link href="/volunteer"><a><img src="/img/bg/support4.jpg" alt="img" /></a></Link>
                                            </SwiperSlide>
                                            <SwiperSlide className="support_img_single img_effect_white">
                                                <Link href="/volunteer"><a><img src="/img/bg/support3.jpg" alt="img" /></a></Link>
                                            </SwiperSlide>
                                        </Swiper>
                                    </div>
                                    {/* <!-- Add Pagination --> */}
                                    <div className="swiper-pagination-join text-center"></div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 d-flex align-items-center">
                                <div className="support_wrapper">
                                    <div className="section_title">
                                        <span className="sub_title"><i className="fal fa-users"></i> Join Us</span>
                                        <h3 className="title">Become an volunteer
                                            for save children</h3>
                                    </div>
                                    <p className="mb-45">NewLook unlike many traditional plastic surgery centers in San
                                        Diego, are industry recognized experts in a wide variety of with an
                                        cosmetic procedure and are dedicated</p>
                                    <Link href="/volunteer"><a className="g_btn theme1_bg to_right2 i_right rad-30 p-45">Apply Here<i className="fal fa-long-arrow-right"></i><span></span></a></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-120">
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
                                    <div className="choose_single_card p-rel theme-3 mb-30">
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
                            <div className="single-support p-rel ml-50 mb-30" style-={{ "backgroundImage": "url(assets/img/bg/support_bg.jpg)" }}>
                                <form action="#">
                                    <div className="support-wrapper p-rel">
                                        <h4 className="support_title">Support Us</h4>
                                        <p className="mb-35 opacity_6">Charity is the largest global for crowdfunding</p>
                                        <div className="support_search_section mb-20">
                                            <input type="text" placeholder="$100" id="Support" />
                                            <button className="amount_btn">Amount</button>
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
                                        <div className="donar_section support_currency d-sm-flex d-inline-block justify-content-center">
                                            <div className="donar_currency d-flex mb-30">
                                                <button className="currency">$5</button>
                                                <button className="currency ml-10">$10</button>
                                                <button className="currency ml-10">$50</button>
                                                <button className="currency ml-10">$100</button>
                                            </div>
                                            <button type="submit" className="g_btn curr_btn rad-30 ml-10">Donate<span></span></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!--support area end--> */}
        </>
    )
}
