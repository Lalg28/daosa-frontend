import React from 'react'
import Link from 'next/link'

export default function EventCountArea() {
    return (
        <>
            {/* <!-- Event Count area start  --> */}

            <div className="eventcount_area">
                <div className="container">
                    <div className="eventcount_wrapper bg_cover" style={{"backgroundImage":"url(/img/bg/event_bg.jpg)"}}>
                        <div className="row align-items-center">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                <div className="eventcount_img">
                                    <Link href="/event-details"><a><img src="/img/causes/cause11.jpg" alt="img"/></a></Link>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-4 col-lg-3 col-md-5 text-center text-md-start">
                                <div className="eventcount_text">
                                    <h5><Link href="/event-details"><a>Every Second Until the Event</a></Link></h5>
                                    <span className="white_txt">Douglas Park, Chicago, IL</span>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-5 col-lg-6 col-md-7 text-md-end text-center">
                                <div className="count_down_box white_txt" data-countdown="2021/05/17"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Event Count area end --> */}

        </>
    )
}
