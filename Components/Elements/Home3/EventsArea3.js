import React from 'react'
import Link from 'next/link'

export default function EventsArea3() {
    return (
        // Events area start 
            <div className="events_area blue-bg pt-110 pb-90">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="section_title mb-55">
                                <span className="sub_title sub_title_2">Events</span>
                                <h3 className="title text-white">New Events</h3>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="events_wrapper mb-30">
                                <div className="events_img img_effect_white">
                                    <Link href="/event-details"><a><img src="/img/news/events_big.jpg" alt="img"/></a></Link>
                                </div>
                                <div className="events_content">
                                    <div className="date_card has_abs">
                                        <span className="events_date">02</span>
                                        <span className="events_month">feb</span>
                                    </div>
                                    <div className="events_inner_text has_abs_card">
                                        <h4><Link href="/event-details"><a>Charity meetup for change the world</a></Link></h4>
                                        <div className="nfeed_meta_wrapper d-sm-flex">
                                            <div className="nfeed_meta nfeed_meta_3 mr-20">
                                                <Link href="#"><a className="nmeta_icon theme-1"><i className="fal fa-clock"></i></a></Link>
                                                <Link href="#"><a className="nmeta_text theme-1">2:00 pm - 5:00 pm</a></Link>
                                            </div>
                                            <div className="nfeed_meta nfeed_meta_3">
                                                <Link href="#"><a className="nmeta_icon theme-1"><i className="fal fa-map-marker-alt"></i></a></Link>
                                                <Link href="#"><a className="nmeta_text theme-1">12/A, New York, Us</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="events_feed_wrapper">
                                <div className="events_feed_sigle">
                                    <div className="date_card efeed_card">
                                        <span className="events_date">29</span>
                                        <span className="events_month">Jun</span>
                                    </div>
                                    <div className="events_inner_text">
                                        <h4><Link href="/event-details"><a>Charity meetup satisfy human beings</a></Link></h4>
                                        <div className="nfeed_meta_wrapper d-sm-flex">
                                            <div className="nfeed_meta nfeed_meta_3 mr-20">
                                                <Link href="#"><a className="nmeta_icon theme-1"><i className="fal fa-clock"></i></a></Link>
                                                <Link href="#"><a className="nmeta_text theme-1">2:00 pm - 5:00 pm</a></Link>
                                            </div>
                                            <div className="nfeed_meta nfeed_meta_3">
                                                <Link href="#"><a className="nmeta_icon theme-1"><i className="fal fa-map-marker-alt"></i></a></Link>
                                                <Link href="#"><a className="nmeta_text theme-1">12/A, New York, Us</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="events_feed_sigle">
                                    <div className="date_card efeed_card">
                                        <span className="events_date">10</span>
                                        <span className="events_month">feb</span>
                                    </div>
                                    <div className="events_inner_text">
                                        <h4><Link href="/event-details"><a>Charity meetup is helpful for poor</a></Link></h4>
                                        <div className="nfeed_meta_wrapper d-sm-flex">
                                            <div className="nfeed_meta nfeed_meta_3 mr-20">
                                                <Link href="#"><a className="nmeta_icon theme-1"><i className="fal fa-clock"></i></a></Link>
                                                <Link href="#"><a className="nmeta_text theme-1">2:00 pm - 5:00 pm</a></Link>
                                            </div>
                                            <div className="nfeed_meta nfeed_meta_3">
                                                <Link href="#"><a className="nmeta_icon theme-1"><i className="fal fa-map-marker-alt"></i></a></Link>
                                                <Link href="#"><a className="nmeta_text theme-1">12/A, New York, Us</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="events_feed_sigle">
                                    <div className="date_card efeed_card">
                                        <span className="events_date">05</span>
                                        <span className="events_month">May</span>
                                    </div>
                                    <div className="events_inner_text">
                                        <h4><Link href="/event-details"><a>Charity meetup meets the peace</a></Link></h4>
                                        <div className="nfeed_meta_wrapper d-sm-flex">
                                            <div className="nfeed_meta nfeed_meta_3 mr-20">
                                                <Link href="#"><a className="nmeta_icon theme-1"><i className="fal fa-clock"></i></a></Link>
                                                <Link href="#"><a className="nmeta_text theme-1">2:00 pm - 5:00 pm</a></Link>
                                            </div>
                                            <div className="nfeed_meta nfeed_meta_3">
                                                <Link href="#"><a className="nmeta_icon theme-1"><i className="fal fa-map-marker-alt"></i></a></Link>
                                                <Link href="#"><a className="nmeta_text theme-1">12/A, New York, Us</a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // Events area end
    )
}
