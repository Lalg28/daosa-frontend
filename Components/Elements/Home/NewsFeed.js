import React from 'react'
import Link from 'next/link'

export default function NewsFeed() {
    return (
        <div className="nfeed_area pt-105 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section_title mb-45">
                                <span className="sub_title"><i className="fal fa-heart"></i> Insights</span>
                                <h3 className="title">News Feeds</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                            <div className="single_nfeed mb-30">
                                <div className="nfeed_img img_effect_white">
                                    <Link href="/blog-details"><a><img src="/img/news/nfeed1.jpg" alt="img"/></a></Link>
                                </div>
                                
                                <div className="nfeed_content">
                                    <div className="nfeed_title">
                                        <Link href="/blog-details"><a className="nsub_title">Charity Water</a></Link>
                                        <h3 className="n_title"><Link href="/blog-details"><a>Healthy food for everyone in
                                            a campagin.</a></Link></h3>
                                    </div>
                                    <div className="nfeed_meta_wrapper d-flex">
                                        <div className="nfeed_meta mr-20">
                                            <Link href="#"><a className="nmeta_icon theme-1"><i className="fal fa-user"></i></a></Link>
                                            <Link href="#"><a className="nmeta_text theme-1"><span className="nmeta_by">By</span>Admin</a></Link>
                                        </div>
                                        <div className="nfeed_meta">
                                            <Link href="#"><a className="nmeta_icon theme-2"><i className="fal fa-calendar-alt"></i></a></Link>
                                            <Link href="#"><a className="nmeta_text theme-2"><span className="nmeta_date">24th June 2021</span></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                            <div className="single_nfeed mb-30">
                                <div className="nfeed_img img_effect_white">
                                    <Link href="/blog-details"><a><img src="/img/news/nfeed2.jpg" alt="img"/></a></Link>
                                </div>
                                
                                <div className="nfeed_content">
                                    <div className="nfeed_title">
                                        <Link href="/blog-details"><a className="nsub_title">Charity Goods</a></Link>
                                        <h3 className="n_title"><Link href="/blog-details"><a>Desired goods for all in
                                            a campagin.</a></Link></h3>
                                    </div>
                                    <div className="nfeed_meta_wrapper d-flex">
                                        <div className="nfeed_meta mr-20">
                                            <Link href="#"><a className="nmeta_icon theme-1"><i className="fal fa-user"></i></a></Link>
                                            <Link href="#"><a className="nmeta_text theme-1"><span className="nmeta_by">By</span>Admin</a></Link>
                                        </div>
                                        <div className="nfeed_meta">
                                            <Link href="#"><a className="nmeta_icon theme-2"><i className="fal fa-calendar-alt"></i></a></Link>
                                            <Link href="#"><a className="nmeta_text theme-2"><span className="nmeta_date">24th June 2021</span></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                            <div className="single_nfeed mb-30">
                                <div className="nfeed_img img_effect_white">
                                    <Link href="/blog-details"><a><img src="/img/news/nfeed3.jpg" alt="img"/></a></Link>
                                </div>
                                <div className="nfeed_content">
                                    <div className="nfeed_title">
                                        <Link href="/blog-details"><a className="nsub_title">Charity Cloths</a></Link>
                                        <h3 className="n_title"><Link href="/blog-details"><a>Expected cloths for all in
                                            a campagin.</a></Link></h3>
                                    </div>
                                    <div className="nfeed_meta_wrapper d-flex">
                                        <div className="nfeed_meta mr-20">
                                            <Link href="#"><a className="nmeta_icon theme-1"><i className="fal fa-user"></i></a></Link>
                                            <Link href="#"><a className="nmeta_text theme-1"><span className="nmeta_by">By</span>Admin</a></Link>
                                        </div>
                                        <div className="nfeed_meta">
                                            <Link href="#"><a className="nmeta_icon theme-2"><i className="fal fa-calendar-alt"></i></a></Link>
                                            <Link href="#"><a className="nmeta_text theme-2"><span className="nmeta_date">24th June 2021</span></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4 col-lg-6 col-md-6">
                            <div className="newsletter_feed mb-30">
                                <div className="nfeed_title">
                                    <span className="nsub_title">Newsletter</span>
                                    <h3 className="n_title">Get Weekly Newsletter</h3>
                                </div>
                                <div className="newsletter_content">
                                    <form action="#">
                                        <input type="text" placeholder="Enter Full Name" className="rad-30 mb-12"/>
                                        <input type="email" placeholder="Enter Email" className="rad-30 mb-17"/>
                                        <button type="submit" className="rad-30 g_btn to_right1">Subscribe Now <span></span></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
