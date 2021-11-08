import React from 'react'
import Link from 'next/link'

export default function CauseDetailsArea() {
    return (
        // cause_details_area start  
        <div className="cause_details_area pt-120 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-7">
                        <div className="single_details_wrapper mb-40">
                            <div className="single_details_img">
                                <img src="/img/causes/cause_sbig.jpg" alt="img"/>
                            </div>
                            <div className="single_details_content">
                                <div className="single_donation_content single_border pb-45 mb-45">
                                    <div className="section_title">
                                        <Link href="#"><a className="sub_title_details line_h2_2">Water</a></Link>
                                    </div>
                                    <h4 className="details_title">The community state of the art with recurring
                                        donation need to save world.</h4>
                                    <p>generous actions or donations to aid the poor, ill, or needy: to devote one&apos;s life to charity. something given to a
                                        \person or persons in need; alms: She asked for work, not charity. a charitable act or work. Thank you so much
                                        for visiting my page, something I never thought I would be setting up. Having fought stage IV cancer for almost
                                        two years, I have ran out of options which makes my diagnosis terminal </p>
                                    <div className="feature_progress_wrapper mb-25 mt-35">
                                        <div className="progress feature_progress">
                                            <div className="progress-bar" role="progressbar" data-width="5%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{"width": "50%"}}></div>
                                        </div>
                                    </div>
                                    <div className="single_cause_meta">
                                        <div className="single_meta feature_meta feature_border d-inline-block">
                                            <span className="meta_text clr_theme1"><i className="fal fa-globe"></i> Goal</span>
                                            <span className="meta_price single_price clr_theme1">$4,5100</span>
                                        </div>
                                        <div className="single_meta feature_meta feature_border d-inline-block">
                                            <span className="meta_text clr_theme2"><i className="fal fa-users"></i> Raised</span>
                                            <span className="meta_price single_price clr_theme2">$45,300</span>
                                        </div>
                                        <div className="single_meta feature_meta d-inline-block">
                                            <span className="meta_text clr_theme3"><i className="fal fa-reply"></i> To go</span>
                                            <span className="meta_price single_price clr_theme3">$45,200</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="mb-30">When I was 21 I had just finished my second year at Uni studying to be a primary school teacher, which is a
                                    career I have always dreamed of achieving. However, during my summer break in August 2017, my world
                                    turned upside down when I was diagnosed with an incredibly rare and aggressive cancer called Alveolar
                                    Rhabdomyosarcoma, stage 4.</p>
                                <p className="mb-45">The symptoms were so minimal (agonising back and leg pain) it had made its way around my full body by the
                                    time I was diagnosed. Since then I have undergone over 20 cycles of chemotherapy, 50 sessions of
                                    radiotherapy and numerous operations to try and stabilise my disease.</p>

                                <div className="row mb-45">
                                    <div className="col-6 w_img">
                                        <img src="/img/causes/casuse_s1.jpg" alt="img"/>
                                    </div>
                                    <div className="col-6 w_img">
                                        <img src="/img/causes/cause_s2.jpg" alt="img"/>
                                    </div>
                                </div>

                                <p className="mb-45">I have always dreamed of achieving. However, during my summer break in August 2017, my world turned upside
                                    down when I was diagnosed with an incredibly rare and aggressive cancer called Alveolar Rhabdomyosarcoma,
                                    stage 4. The symptoms were so minimal (agonising back and leg pain) it had made its way around my full body
                                    time I was diagnosed. Since then I have undergone over 20 cycles of chemotherapy, 50 sessions of
                                    radiotherapy and numerous operations to try and stabilise my disease.</p>

                                <div className="single_person_quote">
                                    <i className="icofont-speech-comments"></i>
                                    <div className="person_image"><Link href="/volunteer-details"><a><img src="/img/causes/cause_person.jpg" alt="img"/></a></Link></div>
                                    <div className="person_quote_text">
                                        <p>After endless hours and incredibly late nights of research, we have
                                            found that the USA have a trial drug available which works
                                            alongside my current chemotherapy.</p>
                                        <div className="person_designation">
                                            <h5 className="person_nam"><Link href="#"><a>Anarkoli Disco Cali</a></Link></h5>
                                            <span className="person_surname">Founder,Anarkoli Co.</span>
                                        </div>
                                    </div>
                                </div>
                                <p className="single_border pb-45 mb-50">The symptoms were so minimal (agonising back and leg pain) it had made its way around my full body by the
                                    time I was diagnosed. Since then I have undergone over 20 cycles of chemotherapy, 50 sessions of radio
                                    therapy and numerous operations to try and stabilise my disease. We have now been told that I have stopped
                                    responding to the few drugs available for Sarcoma. After endless hours and incredibly late nights of research,
                                    we have found that the USA have a trial drug available which works alongside.</p>

                                    <div className="single_donation_input single_border mb-50 pb-30">
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
                                    <div className="single_donation_payment single_border mb-50 pb-30">
                                        <h5 className="single_title mb-0">Payment Method</h5>
                                        <div className="payment_icons">
                                            <Link href="#"><a><i className="icofont-amazon"></i></a></Link>
                                            <Link href="#"><a><i className="icofont-paypal"></i></a></Link>
                                            <Link href="#"><a><i className="icofont-visa"></i></a></Link>
                                            <Link href="#"><a><i className="icofont-cash-on-delivery"></i></a></Link>
                                            <Link href="#"><a><i className="icofont-google-wallet-alt-3"></i></a></Link>
                                        </div>
                                    </div>
                                    <div className="single_donation_info single_border mb-50 pb-45">
                                        <h5 className="single_title">Personal Information</h5>
                                        <form action="#">
                                            <div className="input_info_wrapper">
                                            
                                                <div className="input_info_name info_input"><input type="text" placeholder="Enter full name"/><i className="fal fa-user"></i></div>
                                                <div className="input_info_email info_input"><input type="email" placeholder="Enter email"/><i className="fal fa-envelope"></i></div>
                                            
                                            </div>
                                        </form>
                                        <div className="submit_info_wrapper d-sm-inline-flex">
                                            <div className="donation_submit_wrapper">
                                                <div className="donation_submit_box w_208">
                                                    <button type="submit">Donation</button>
                                                    <input type="text" placeholder="$100"/>
                                                </div>
                                            </div>
                                            <div className="submit_info_button">
                                                <Link href="/cause"><a className="g_btn hbtn_1 to_right1 i_left rad-30"><i className="fal fa-heart"></i> Explore Causes<span></span></a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="page_pagination_withimg">
                                        <Link href="/cause-details"><a className="img_pagination img_pagination_left">
                                            <div className="left_img"><img src="/img/causes/prev.jpg" alt="img"/></div>
                                            <div className="left_text">
                                                <span className="sub_pagination">Prev Cause</span>
                                                <h5 className="pagination_title">World Water Charity</h5>
                                            </div>
                                        </a></Link>
                                        <Link href="/cause-details"><a className="img_pagination img_pagination_right">
                                            <div className="right_text text-sm-end">
                                                <span className="sub_pagination">Next Cause</span>
                                                <h5 className="pagination_title">Helping poor people</h5>
                                            </div>
                                            <div className="right_img"><img src="/img/causes/next.jpg" alt="img"/></div>
                                        </a></Link>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-5">
                        <div className="single_sidebar_wrapper pl-15 mb-40">

                            <div className="single_widget has_border person_widget text-center mb-40">
                                <div className="widget_person_img">
                                    <Link href="/volunteer-details"><a><img src="/img/causes/person_main.jpg" alt="img"/></a></Link>
                                    <span className="check_sign"><i className="fal fa-check"></i></span>
                                </div>
                                <div className="person_designation widget_mb25">
                                    <h5 className="person_nam f_size24"><Link href="/volunteer-details"><a>MR. Muhammad Ali</a></Link></h5>
                                    <span className="person_surname">Founder,Anarkoli Co.</span>
                                </div>
                                <div className="feature_buttons widget_buttons">
                                    <Link href="/donation"><a className="g_btn hbtn_1 to_right1 i_left rad-30"><i className="fal fa-heart"></i>Donate Now<span></span></a></Link>
                                    <Link href="#"><a className="reply_btn theme-2"><i className="fal fa-reply"></i></a></Link>
                                </div>
                            </div>

                            <div className="single_widget has_border post_widget mb-40">
                                <div className="single_widget_title">
                                    <h4 className="widget_title_text has_border">Donors Post</h4>
                                </div>
                                <div className="donor_post_wrapper">
                                    <div className="single_donor_post">
                                        <div className="donar_post_img"><Link href="/volunteer-details"><a><img src="/img/causes/donar1.jpg" alt="img"/></a></Link></div>
                                        <div className="donar_post_content">
                                            <h5 className="donar_name"><Link href="/volunteer-details"><a>Nilmarendra Max</a></Link></h5>
                                            <div className="donar_meta">
                                                <Link href="#"><a className="donar_amount theme-1 sep">$900</a></Link>
                                                <Link href="#"><a className="donar_date theme-2"><i className="fal fa-calendar-alt"></i> February 20, 2022</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_donor_post">
                                        <div className="donar_post_img"><Link href="/volunteer-details"><a><img src="/img/causes/donar2.jpg" alt="img"/></a></Link></div>
                                        <div className="donar_post_content">
                                            <h5 className="donar_name"><Link href="/volunteer-details"><a>Miranda H. Hilix</a></Link></h5>
                                            <div className="donar_meta">
                                                <Link href="#"><a className="donar_amount theme-1 sep">$500</a></Link>
                                                <Link href="#"><a className="donar_date theme-2"><i className="fal fa-calendar-alt"></i> February 20, 2022</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_donor_post">
                                        <div className="donar_post_img"><Link href="/volunteer-details"><a><img src="/img/causes/donar3.jpg" alt="img"/></a></Link></div>
                                        <div className="donar_post_content">
                                            <h5 className="donar_name"><Link href="/volunteer-details"><a>Anayatulla Abbasi</a></Link></h5>
                                            <div className="donar_meta">
                                                <Link href="#"><a className="donar_amount theme-1 sep">$900</a></Link>
                                                <Link href="#"><a className="donar_date theme-2"><i className="fal fa-calendar-alt"></i> February 20, 2022</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_donor_post">
                                        <div className="donar_post_img"><Link href="/volunteer-details"><a><img src="/img/causes/donar4.jpg" alt="img"/></a></Link></div>
                                        <div className="donar_post_content">
                                            <h5 className="donar_name"><Link href="/volunteer-details"><a>Ahmadullah Fokir</a></Link></h5>
                                            <div className="donar_meta">
                                                <Link href="#"><a className="donar_amount theme-1 sep">$300</a></Link>
                                                <Link href="#"><a className="donar_date theme-2"><i className="fal fa-calendar-alt"></i> February 20, 2022</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_donor_post">
                                        <div className="donar_post_img"><Link href="/volunteer-details"><a><img src="/img/causes/donar5.jpg" alt="img"/></a></Link></div>
                                        <div className="donar_post_content">
                                            <h5 className="donar_name"><Link href="/volunteer-details"><a>Ahmed Riad</a></Link></h5>
                                            <div className="donar_meta">
                                                <Link href="#"><a className="donar_amount theme-1 sep">$500</a></Link>
                                                <Link href="#"><a className="donar_date theme-2"><i className="fal fa-calendar-alt"></i> February 20, 2022</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="single_donor_post">
                                        <div className="donar_post_img"><Link href="/volunteer-details"><a><img src="/img/causes/donar6.jpg" alt="img"/></a></Link></div>
                                        <div className="donar_post_content">
                                            <h5 className="donar_name"><Link href="/volunteer-details"><a>Andreu R.</a></Link></h5>
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
