import React from 'react'
import Link from 'next/link'

export default function AboutArea2() {
    return (
        // about area start
            <section className="about_area about_area_2 pt-120 pb-100">
                <div className="container">
                    <div className="row flex-column-reverse flex-lg-row">

                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="about_wrapper">
                                <div className="section_title">
                                    <span className="sub_title sub_title_2">About Us</span>
                                    <h3 className="title title_2">Charity to Change Child’s 
                                        and Poor People Life</h3>
                                </div>
                                <p className="mb-40 n_mb20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis with
                                    nostrud exercitation ullamco laboris nisi ut aliquip</p>
                                <div className="about_summary">
                                    <p>Helped Fund <span className="theme-1">24,537</span> Projects in <span className="theme-4">24 Countries</span>, <br/>
                                        Benefiting Over <span className="theme-2">8.2 Million</span> People.</p>
                                </div>
                                <Link href="/about"><a className="g_btn trans_btn rad-50 p-45">Learn More <span></span></a></Link>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="about_img_wrapper_2 w_img border_radius10 ml-100">
                                <Link href="/about"><a><img src="/img/about/about2_1_big.jpg" alt="img"/></a></Link>
                                <div className="about_champ_card about_abs2">
                                    <i className="flaticon-creativity"></i>
                                    <h3 className="abs_numb">40 <span className="plus">+</span></h3>
                                    <span>Years Experience</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            // about area end 
    )
}
