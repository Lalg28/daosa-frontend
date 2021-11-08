import React from 'react'
import Link from 'next/link'

export default function VolunteerNewsfeed() {
    return (
        
        // newsfeed area start 

            <div className="nfeed_area pt-105 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section_title mb-50 text-center">
                                <span className="sub_title sub_title_2">Insights</span>
                                <h3 className="title title_2">News Feeds</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter_85">
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="single_nfeed single_nfeed_2 has_before mb-30">
                                <div className="single_feed_img img_effect_white">
                                    <Link href="/blog-details"><a><img src="/img/news/nfeed2_1.jpg" alt="img"/></a></Link>
                                </div>
                                <div className="nfeed_content nfeed_content_2">
                                    <div className="nfeed_title">
                                        <Link href="/blog-details"><a className="nsub_title nsub_title_2">Charity, Goods</a></Link>
                                        <h3 className="n_title"><Link href="/blog-details"><a>Expected Goods for everybody in a fund
                                            campagin anyways to win.</a></Link></h3>
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
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="single_nfeed single_nfeed_2 has_before mb-30">
                                <div className="single_feed_img img_effect_white">
                                    <Link href="/blog-details"><a><img src="/img/news/nfeed2_2.jpg" alt="img"/></a></Link>
                                </div>
                                
                                <div className="nfeed_content nfeed_content_2">
                                    <div className="nfeed_title">
                                        <Link href="/blog-details"><a className="nsub_title nsub_title_2">Charity, Cloths</a></Link>
                                        <h3 className="n_title"><Link href="/blog-details"><a>Necessary Cloths for everyone in a fund
                                            campaign anyways to win.</a></Link></h3>
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
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12">
                            <div className="single_nfeed single_nfeed_2 mb-30">
                                <div className="single_feed_img img_effect_white">
                                    <Link href="/blog-details"><a><img src="/img/news/nfeed2_3.jpg" alt="img"/></a></Link>
                                </div>
                                <div className="nfeed_content nfeed_content_2">
                                    <div className="nfeed_title">
                                        <Link href="/blog-details"><a className="nsub_title nsub_title_2">Charity, Food</a></Link>
                                        <h3 className="n_title"><Link href="/blog-details"><a>Healthy food for everyone in a fund
                                            campaign anyways to win.</a></Link></h3>
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
                    </div>
                </div>
            </div>

            // newsfeed area end 
    )
}
