import React from 'react'
import { useState } from 'react';
import Link from 'next/link';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EventCauseDetail() {
    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    const [isSelect, setSelect] = useState("Event");

    const [startDate, setStartDate] = useState(new Date());
    return (
        // cause_details_area start 
        <div className="cause_details_area pt-120 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-7">
                        <div className="single_details_wrapper mb-40">
                            <div className="single_details_img p-rel">
                                <img src="/img/featureEvent/event_sbig.jpg" alt="img" />
                                <div className="details_img_meta details_meta_abs">
                                    <div className="donar_post_content donar_post_event_details">
                                        <h5 className="donar_name"><Link href="volunteer-details"><a>Nilmarendra Max</a></Link></h5>
                                        <div className="donar_meta">

                                            <Link href="#"><a className="donar_date sep theme-2"><i className="fal fa-calendar-alt"></i> February 20, 2022</a></Link>
                                            <Link href="#"><a className="donar_time theme-8"><i className="fal fa-clock"></i> 11:00 - 3:00</a></Link>
                                        </div>
                                    </div>
                                    <div className="donar_category">
                                        <h5 className="donar_name"><Link href="event-details"><a>Category</a></Link></h5>
                                        <span className="category_name theme-1">Water</span>
                                    </div>
                                    <div className="meta_speaker">
                                        <div className="speaker_img"><Link href="volunteer-details"><a><img src="/img/featureEvent/speaker.jpg" alt="img" /></a></Link></div>
                                        <div className="speaker_info">
                                            <h5 className="donar_name"><Link href="volunteer-details"><a>Mahindra H.</a></Link></h5>
                                            <span className="category_name">Speaker</span>
                                        </div>
                                    </div>
                                    <div className="details_meta_button">
                                        <button type="submit" className="rad-30 g_btn theme1_bg to_right2">Book Your Seat <span></span></button>
                                    </div>
                                </div>
                            </div>
                            <div className="single_details_content">
                                <h4 className="details_title">The community state of the art with recurring
                                    donation need to save world.</h4>
                                <p className="mb-40">generous actions or donations to aid the poor, ill, or needy: to devote one&apos;s life to charity. something given to a
                                    \person or persons in need; alms: She asked for work, not charity. a charitable act or work. Thank you so much
                                    for visiting my page, something I never thought I would be setting up. Having fought stage IV cancer for almost
                                    two years, I have ran out of options which makes my diagnosis terminal </p>
                                <p className="mb-30">When I was 21 I had just finished my second year at Uni studying to be a primary school teacher, which is a
                                    career I have always dreamed of achieving. However, during my summer break in August 2017, my world
                                    turned upside down when I was diagnosed with an incredibly rare and aggressive cancer called Alveolar
                                    Rhabdomyosarcoma, stage 4.
                                </p>
                                <p className="mb-45">The symptoms were so minimal (agonising back and leg pain) it had made its way around my full body by the
                                    time I was diagnosed. Since then I have undergone over 20 cycles of chemotherapy, 50 sessions of
                                    radiotherapy and numerous operations to try and stabilise my disease.</p>

                                <div className="row mb-45">
                                    <div className="col-6 w_img">
                                        <img src="/img/featureEvent/event_small1.jpg" alt="img" />
                                    </div>
                                    <div className="col-6 w_img">
                                        <img src="/img/featureEvent/event_small2.jpg" alt="img" />
                                    </div>
                                </div>

                                <p className="mb-30">I have always dreamed of achieving. However, during my summer break in August 2017, my world turned upside
                                    down when I was diagnosed with an incredibly rare and aggressive cancer called Alveolar Rhabdomyosarcoma,
                                    stage 4. The symptoms were so minimal (agonising back and leg pain) it had made its way around my full body
                                    time I was diagnosed. Since then I have undergone over 20 cycles of chemotherapy, 50 sessions of
                                    radiotherapy and numerous operations to try and stabilise my disease.</p>

                                <p className="single_border pb-55 mb-50">At its most basic, charity means: giving someone something they need but can&apos;t get for themselves. And normal
                                    that&apos;s understood to mean something material. We overwhelmingly associate charity with giving money. The
                                    heroes of Christianity are exemplars of such charity.</p>

                                <div className="page_pagination_withimg">
                                    <Link href="event-details"><a className="img_pagination img_pagination_left">
                                        <div className="left_img"><img src="/img/causes/prev.jpg" alt="img" /></div>
                                        <div className="left_text">
                                            <span className="sub_pagination">Prev Cause</span>
                                            <h5 className="pagination_title">World Water Charity</h5>
                                        </div>
                                    </a></Link>
                                    <Link href="event-details"><a className="img_pagination img_pagination_right">
                                        <div className="right_text text-sm-end">
                                            <span className="sub_pagination">Next Cause</span>
                                            <h5 className="pagination_title">Helping poor people</h5>
                                        </div>
                                        <div className="right_img"><img src="/img/causes/next.jpg" alt="img" /></div>
                                    </a></Link>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-5">
                        <div className="single_sidebar_wrapper pl-15">

                            <div className="single_widget has_border form_widget mb-40">
                                <div className="single_widget_title">
                                    <h4 className="widget_title_text has_border">Book Your Seat</h4>
                                </div>
                                <div className="newsletter_content newsletter_widget">
                                    <input type="text" placeholder="Enter Full Name" className="rad-30 has_border" />
                                    <input type="email" placeholder="Enter Email" className="rad-30 has_border" />
                                    <div className="event_select">
                                        <div onClick={toggleTrueFalse} className={`nice-select widget has_border ${isToggled ? "open" : ""}`}>
                                            <span className="current">{isSelect}</span>
                                            <ul className="list">
                                                <li onClick={() => setSelect("Event")} className={`option ${isSelect=="Event" && "selected focus"}`}>Select Event</li>
                                                <li onClick={() => setSelect("Roaming")} className={`option ${isSelect=="Roaming" && "selected focus"}`}>Abroad Roaming</li>
                                                <li onClick={() => setSelect("Moments")} className={`option ${isSelect=="Moments" && "selected focus"}`}>Likely Moments</li>
                                            </ul>
                                        </div>
                                        {/* <select name="select" id="widget_select" className="widget has_border">
                                            <option value="Select Event">Select Event</option>
                                            <option value="Abroad Roaming">Abroad Roaming</option>
                                            <option value="Likely Moments">Likely Moments</option>
                                        </select> */}
                                    </div>
                                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className={`calendar_icon has_border gj-textbox-md`} style={{"zIndex":"1000"}}>
                                        </DatePicker>
                                    <div className="calendar_icon">
                                        {/* <i className="fal fa-calendar-alt" role="right-icon"></i> */}
                                        {/* <input type="text" id="datepicker_event" name="Category" placeholder="Select date" className="has_border" /> */}

                                    </div>
                                    <button style={{"zIndex":"0"}} type="submit" className="rad-30 g_btn theme1_bg to_right2">Book Your Seat <span></span></button>
                                </div>
                            </div>

                            <div className="single_widget has_border post_widget mb-40">
                                <div className="single_widget_title">
                                    <h4 className="widget_title_text has_border">Donors Post</h4>
                                </div>
                                <div className="donor_post_wrapper">
                                    <div className="single_donor_post">
                                        <div className="donar_post_img"><Link href="volunteer-details"><a><img src="/img/causes/donar1.jpg" alt="img" /></a></Link></div>
                                        <div className="donar_post_content">
                                            <h5 className="donar_name"><Link href="volunteer-details"><a>Nilmarendra Max</a></Link></h5>
                                            <div className="donar_meta">
                                                <Link href="#"><a className="donar_amount theme-1 sep">$900</a></Link>
                                                <Link href="#"><a className="donar_date theme-2"><i className="fal fa-calendar-alt"></i> February 20, 2022</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_donor_post">
                                        <div className="donar_post_img"><Link href="volunteer-details"><a><img src="/img/causes/donar2.jpg" alt="img" /></a></Link></div>
                                        <div className="donar_post_content">
                                            <h5 className="donar_name"><Link href="volunteer-details"><a>Miranda H. Hilix</a></Link></h5>
                                            <div className="donar_meta">
                                                <Link href="#"><a className="donar_amount theme-1 sep">$500</a></Link>
                                                <Link href="#"><a className="donar_date theme-2"><i className="fal fa-calendar-alt"></i> February 20, 2022</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_donor_post">
                                        <div className="donar_post_img"><Link href="volunteer-details"><a><img src="/img/causes/donar3.jpg" alt="img" /></a></Link></div>
                                        <div className="donar_post_content">
                                            <h5 className="donar_name"><Link href="volunteer-details"><a>Anayatulla Abbasi</a></Link></h5>
                                            <div className="donar_meta">
                                                <Link href="#"><a className="donar_amount theme-1 sep">$900</a></Link>
                                                <Link href="#"><a className="donar_date theme-2"><i className="fal fa-calendar-alt"></i> February 20, 2022</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_donor_post">
                                        <div className="donar_post_img"><Link href="volunteer-details"><a><img src="/img/causes/donar4.jpg" alt="img" /></a></Link></div>
                                        <div className="donar_post_content">
                                            <h5 className="donar_name"><Link href="volunteer-details"><a>Ahmadullah Fokir</a></Link></h5>
                                            <div className="donar_meta">
                                                <Link href="#"><a className="donar_amount theme-1 sep">$300</a></Link>
                                                <Link href="#"><a className="donar_date theme-2"><i className="fal fa-calendar-alt"></i> February 20, 2022</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_donor_post">
                                        <div className="donar_post_img"><Link href="volunteer-details"><a><img src="/img/causes/donar5.jpg" alt="img" /></a></Link></div>
                                        <div className="donar_post_content">
                                            <h5 className="donar_name"><Link href="volunteer-details"><a>Ahmed Riad</a></Link></h5>
                                            <div className="donar_meta">
                                                <Link href="#"><a className="donar_amount theme-1 sep">$500</a></Link>
                                                <Link href="#"><a className="donar_date theme-2"><i className="fal fa-calendar-alt"></i> February 20, 2022</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_donor_post">
                                        <div className="donar_post_img"><Link href="volunteer-details"><a><img src="/img/causes/donar6.jpg" alt="img" /></a></Link></div>
                                        <div className="donar_post_content">
                                            <h5 className="donar_name"><Link href="volunteer-details"><a>Andreu R.</a></Link></h5>
                                            <div className="donar_meta">
                                                <Link href="#"><a className="donar_amount theme-1 sep">$500</a></Link>
                                                <Link href="#"><a className="donar_date theme-2"><i className="fal fa-calendar-alt"></i> February 20, 2022</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // cause_details_area end 
    )
}
