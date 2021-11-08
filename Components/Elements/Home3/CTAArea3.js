import React from 'react'
import VideoPopUp from '../VideoPopUp'
import { useState } from 'react'
import Link from 'next/link'

export default function CTAArea3() {
    const [isPopUp, setPopUp] = useState(false)
    return (
        //cta area fluid start 
        <div className="cta_area_fluid">
            <div className="container-fluid px-0">
                <div className="row g-0">
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
                        <div className="cta_single cta_color_1">
                            <span className="cta_sub">Make Donation</span>
                            <p>Don’t make you hurter for
                                saving this world. Just
                                we are like postman for
                                takeout to children.</p>

                            <Link href="/donation"><a className="g_btn red_bg to_right1 rad-50 p-55">Donate Now <span></span></a></Link>
                        </div>
                    </div>
                    <div className="col-xxl-3 col-xl-6 col-lg-6 col-md-6">
                        <div className="cta_single cta_color_2">
                            <span className="cta_sub">Join With Us</span>
                            <p>Join with our creative &
                                friendly team in easy way
                                for move forward in smart
                                way for save world.</p>

                            <Link href="/volunteer"><a className="g_btn theme1_bg to_right2 rad-50 p-55">Become Volunteer <span></span></a></Link>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-12 col-lg-12 col-md-12">
                        <div className="video_wrapper video_wrapper_3" style={{"background":"url(/img/bg/cta_bg3.jpg)"}}>
                            <a onClick={setPopUp} style={{"cursor":"pionter"}} className="play_btn p-rel focus_theme-1"><i className="fas fa-play"></i></a>
                        </div>
                        {isPopUp &&  <VideoPopUp setShow={()=>setPopUp(false)} src={"https://www.youtube.com/embed/B4GwnBrp41s"} />}
                    </div>
                </div>
            </div>
        </div>
        //cta area fluid end
    )
}
