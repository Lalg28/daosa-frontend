import React from 'react'
import Link from 'next/link'

export default function MissionAboutSingle() {
    return (
        //bout single area start
        <div className="about_single_area about_subscribe pt-105 pb-120">
            <img src="/img/bg/mission_bg.jpg" alt="img"/>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6 offset-xl-6 col-md-10 offset-md-1">
                        <div className="about_wrapper subscribe_mission pl-50">
                            <div className="section_title">
                                <Link href="#"><a className="sub_title sub_title_2">subscribe</a></Link>
                                <h3 className="title title_2 text_white">Get every weekly update
                                    from here.</h3>
                            </div>
                            <p className="mb-45">NewLook unlike many traditional plastic surgery centers in San Diego, are
                                industry recognized experts in a wide variety of cosmetic procedure and are
                                dedicated to providing customers.</p>
                                <div className="subscribe_form height_70">
                                    <form action="#">
                                        <input type="text" placeholder="Enter email address"/>
                                        <button className="submit_btn abs_submit" type="submit"><i className="fal fa-envelope i_left"></i>Subscribe Now</button>
                                    </form>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //about single area end
    )
}
