import React from 'react'
import Link from 'next/link'

export default function AboutAboutArea() {
    return (
        //about area start
        <section className="about_area pt-120">
            <div className="about_white_bg">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-6 col-xl-4 col-lg-4">
                            <div className="donate_img_wrapper about_img_wrapper mr-10">
                                <div className="donate_img_inner about_img_inner p-rel">
                                    <img className="about_block" src="/img/about/aboutus1.jpg" alt="img"/>
                                    <img className="space_t30" src="/img/about/aboutus2.jpg" alt="img"/>
                                    <div className="about_champ_card about_abs_single">
                                        <i className="flaticon-creativity"></i>
                                        <h3 className="abs_numb">40 <span className="plus">+</span></h3>
                                        <span>Years Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-8 col-lg-8">
                            <div className="about_wrapper pl-30">
                                <div className="section_title">
                                    <span className="sub_title sub_title_2">About Us</span>
                                    <h3 className="title title_2 mb-20">Charity to Change Child’s 
                                        and Poor People Life</h3>
                                </div>
                                <p className="mb-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis with
                                    nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                <div className="about_summary">
                                    <p>Helped Fund <span className="theme-1">24,537</span> Projects in <span className="theme-4">24 Countries</span>, <br/>
                                        Benefiting Over <span className="theme-2">8.2 Million</span> People.</p>
                                </div>
                                <Link href="/about"><a className="g_btn trans_btn rad-50 p-45">Learn More <span></span></a></Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         //about area end
    )
}
