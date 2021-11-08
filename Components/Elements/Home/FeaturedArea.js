import React from 'react'
import Link from 'next/link'

export default function FeaturedArea() {
    return (
        // <!--featureevent area start -->
        <div className="f_event_area bg_cover p-rel pt-105 pb-120" style={{"backgroundImage":"url(/img/featureEvent/fevent_bg.jpg)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="section_title text-center mb-45">
                            <span className="sub_title"><i className="fal fa-heart"></i> Events</span>
                            <h3 className="title">Featured Events</h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="fevent_table">
                            <div className="fevent_wrapper">
                                <div className="fevent_heading bg_cover" style={{"background":"url(/img/featureEvent/heading_bg.jpg)"}} data-overlay="theme" data-opacity="9">
                                    <div className="fevent_heading_wrapper d-flex p-rel">
                                        <div className="fdate">Calender</div>
                                        <div className="fcontent">Details</div>
                                        <div className="fauthor">Author & Location</div>
                                        <div className="fbooking">Booking</div>
                                    </div>
                                </div>
                                <div className="single_fevent_wrapper">
                                    <div className="single_fevent event_border">
                                        <div className="fdate single_fdate theme-3"><span className="date">25</span><span>Feb</span></div>
                                        <div className="fcontent single_fcontent">
                                            <Link href="/event-details"><a className="sub_title theme-3">Charity, Water</a></Link>
                                            <h3 className="title theme-3"><Link href="/event-details"><a>Your Rennovation Programm 2021</a></Link></h3>
                                        </div>
                                        <div className="fauthor single_fauthor">
                                            <Link href="/volunteer-details"><a className="fdot"><img src="/img/causes/donar1.jpg" alt="img"/></a></Link>
                                            <div className="fauthor_address">
                                                <Link href="/volunteer-details"><a>Mark Salim</a></Link>
                                                <span className="fauthor_location"><i className="fal fa-map-marker-alt"></i> 24/a New Town</span>
                                            </div>
                                        </div>
                                        <div className="fbooking single_fbooking">
                                            <Link href="/event-details"><a className="booking_btn theme-3 g_btn to_right3 rad-30">Book Your Seat <span></span></a></Link>
                                        </div>
                                    </div>
                                    <div className="single_fevent event_border">
                                        <div className="fdate single_fdate theme-2"><span className="date">15</span><span>MAR</span></div>
                                        <div className="fcontent single_fcontent">
                                            <Link href="/event-details"><a className="sub_title theme-2">Charity, Education</a></Link>
                                            <h3 className="title theme-2"><Link href="/event-details"><a>Your Reparation Programm 2022</a></Link></h3>
                                        </div>
                                        <div className="fauthor single_fauthor">
                                            <Link href="/volunteer-details"><a className="fdot"><img src="/img/causes/donar2.jpg" alt="img"/></a></Link>
                                            <div className="fauthor_address">
                                                <Link href="/volunteer-details"><a>Rossania D.</a></Link>
                                                <span className="fauthor_location"><i className="fal fa-map-marker-alt"></i> 24/a New Town</span>
                                            </div>
                                        </div>
                                        <div className="fbooking single_fbooking">
                                            <Link href="/event-details"><a className="booking_btn theme-2 g_btn to_right2 rad-30">Book Your Seat <span></span></a></Link>
                                        </div>
                                    </div>
                                    <div className="single_fevent">
                                        <div className="fdate single_fdate theme-1"><span className="date">29</span><span>SEP</span></div>
                                        <div className="fcontent single_fcontent">
                                            <Link href="/event-details"><a className="sub_title theme-1">Charity, Medical</a></Link>
                                            <h3 className="title theme-1"><Link href="#"><a>Your Alteration Project 2021</a></Link></h3>
                                        </div>
                                        <div className="fauthor single_fauthor">
                                            <Link href="/volunteer-details"><a className="fdot"><img src="/img/causes/donar3.jpg" alt="img"/></a></Link>
                                            <div className="fauthor_address">
                                                <Link href="/volunteer-details"><a>M. Billah</a></Link>
                                                <span className="fauthor_location"><i className="fal fa-map-marker-alt"></i> 24/a New Town</span>
                                            </div>
                                        </div>
                                        <div className="fbooking single_fbooking">
                                            <Link href="/event-details"><a className="booking_btn theme-1 g_btn to_right1 rad-30">Book Your Seat <span></span></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        // <!--featureevent area end--> 
    )
}
