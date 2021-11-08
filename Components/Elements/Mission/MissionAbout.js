import React from 'react'
import { useState } from 'react';
import VideoPopUp from '../VideoPopUp'
import Link from 'next/link'

export default function MissionAbout() {
    const [isShow, setShow] = useState(false);
    return (
        //about single area start 
        <div className="about_single_area pt-120 pb-80">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xl-6">
                        <div className="about_signle_video mb-40">
                            <div className="img_effect_white about_video_image_wrapper">
                                <Link href="/event"><a><img src="/img/bg/mission.jpg" alt="img"/></a></Link>
                            </div>
                            
                            <a onClick={setShow} style={{cursor:'pointer'}} className="video_icon">
                                <i className="fal fa-play"></i>
                            </a>
                        </div>
                        {isShow && <VideoPopUp setShow={()=>setShow(false)} src="//www.youtube.com/embed/B4GwnBrp41s?autoplay=1" />}
                    </div>
                    <div className="col-xl-6">
                        <div className="about_wrapper pl-50 mb-40">
                            <div className="section_title mb-30">
                                <span className="sub_title sub_title_2">Work Program</span>
                                <h3 className="title title_2 no_br">Keep Track of Our <br/>
                                    Annual Charity Program</h3>
                            </div>
                            <p className="mb-55">NewLook unlike many traditional plastic surgery centers in San Diego, are
                                industry recognized experts in a wide variety of cosmetic procedure and are
                                dedicated to providing customers.</p>
                            <div className="mission_progress_wrapper">
                                <div className="mission_progress_single">
                                    <div className="progress_circle theme-1" data-percentage="65">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            <div className="value">65<span>%</span></div>
                                        </div>
                                    </div>
                                    <span className="progress_text">Annual Program</span>
                                </div>
                                <div className="mission_progress_single">
                                    <div className="progress_circle theme-3" data-percentage="75">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            <div className="value">75<span>%</span></div>
                                        </div>
                                    </div>
                                    <span className="progress_text">Monthly Program</span>
                                </div>
                                <div className="mission_progress_single">
                                    <div className="progress_circle theme-2" data-percentage="55">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            <div className="value">55<span>%</span></div>
                                        </div>
                                    </div>
                                    <span className="progress_text">Global Program</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // about single area end 
    )
}
