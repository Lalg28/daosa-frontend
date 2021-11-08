import React from 'react'
import Link from 'next/link'

export default function NewsFeed3() {
    return (
        // newsfeed area start 
            <div className="nfeed_area nfeed_area_3 pt-110 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 text-center">
                            <div className="section_title mb-45">
                                <span className="sub_title sub_title_2">Insights</span>
                                <h3 className="title">News Feeds</h3>
                                <span className="back_title">News</span>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="nfeed_single_3 w_img mb-30">
                                <div className="single_feed_img img_effect_white">
                                    <Link href="/blog-details"><a><img src="/img/news/nfeed1.jpg" alt="img"/></a></Link>
                                </div>
                                
                                <div className="nfeed_content_wrapper_3 has_abs_card">
                                    <div className="date_card feed_card nhas_abs">
                                        <span className="events_date feed_date">29</span>
                                        <span className="events_month">Jun</span>
                                    </div>
                                    <div className="nfeed_cat">
                                        <Link href="#"><a className="nfeed_admin sep"><span className="nfeed_by">By</span>Admin</a></Link>
                                        <Link href="/blog-details"><a className="nfeed_cattext">Charity,Fundrise</a></Link>
                                    </div>
                                    <div className="nfeed_content_3">
                                        <h3 className="nfeed_title"><Link href="/blog-details"><a>Consult with customers not a good
                                            way for forward.</a></Link></h3>
                                        <p>Our primary goal is developing a secure and safe world for poor peoples in the world.</p>
                                    </div>

                                </div>
                            </div>
                        </div> 
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="nfeed_single_3 w_img mb-30">
                                <div className="single_feed_img img_effect_white">
                                    <Link href="/blog-details"><a><img src="/img/news/nfeed2_4.jpg" alt="img"/></a></Link>
                                </div>
                                
                                <div className="nfeed_content_wrapper_3 has_abs_card">
                                    <div className="date_card feed_card nhas_abs">
                                        <span className="events_date feed_date">19</span>
                                        <span className="events_month">Jan</span>
                                    </div>
                                    <div className="nfeed_cat">
                                        <Link href="#"><a className="nfeed_admin sep"><span className="nfeed_by">By</span>Admin</a></Link>
                                        <Link href="/blog-details"><a className="nfeed_cattext">Charity,Medical</a></Link>
                                    </div>
                                    <div className="nfeed_content_3">
                                        <h3 className="nfeed_title"><Link href="/blog-details"><a>Consult with doctors is a good
                                            way for forward.</a></Link></h3>
                                        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur velit.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-6">
                            <div className="nfeed_single_3 w_img mb-30">
                                <div className="single_feed_img img_effect_white">
                                    <Link href="/blog-details"><a><img src="/img/news/nfeed3.jpg" alt="img"/></a></Link>
                                </div>
                                
                                <div className="nfeed_content_wrapper_3 has_abs_card">
                                    <div className="date_card feed_card nhas_abs">
                                        <span className="events_date feed_date">29</span>
                                        <span className="events_month">Jun</span>
                                    </div>
                                    <div className="nfeed_cat">
                                        <Link href="#"><a className="nfeed_admin sep"><span className="nfeed_by">By</span>Admin</a></Link>
                                        <Link href="/blog-details"><a className="nfeed_cattext">Charity,Education</a></Link>
                                    </div>
                                    <div className="nfeed_content_3">
                                        <h3 className="nfeed_title"><Link href="/blog-details"><a>Discuss with teachers is a good
                                            way for forward.</a></Link></h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipi sicing elit, sed do eiusmod tempor.</p>
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
