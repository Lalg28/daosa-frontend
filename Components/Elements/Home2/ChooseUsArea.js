import React from 'react'
import VideoPopUp from '../VideoPopUp'
import { useState } from 'react'


export default function ChooseUsArea() {
    const [isPopUp, setPopUp] = useState(false)
    return (
        // <!-- Chooseus area start-->
        <div className="chooseus_area bg_cover p-rel pt-105 pb-90" style={{"backgroundImage":"url(/img/bg/choose_bg.jpg)"}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-xxl-7 col-xl-8 col-lg-12 col-md-12">
                        <div className="chooseus_wrapper">
                             <div className="section_title mb-35">
                                 <span className="sub_title sub_title_2">Why Choose Us</span>
                                 <h3 className="title title_2">For charity water progress
                                     begins &with content</h3>
                             </div>
                             <p className="mb-45">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor <br/>
                                 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis with <br/>
                                 nostrud exercitation ullamco laboris nisi ut aliquip</p>

                             <div className="row space_r60">
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                     <div className="choose_card theme-1 mb-30">
                                         <i className="flaticon-growth-1"></i>
                                         <div className="choose_card_text">
                                             <span className="card_numb">137</span>
                                             <span>Children and families</span>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                     <div className="choose_card theme-2 mb-30">
                                         <i className="flaticon-light-bulb"></i>
                                         <div className="choose_card_text">
                                             <span className="card_numb">135</span>
                                             <span>Idea and growth</span>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                     <div className="choose_card theme-3 space_l30 mb-30">
                                         <i className="flaticon-stethoscope"></i>
                                         <div className="choose_card_text">
                                             <span className="card_numb">109</span>
                                             <span>Skills and education</span>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                                     <div className="choose_card theme-6 space_l30 mb-30">
                                         <i className="flaticon-map"></i>
                                         <div className="choose_card_text">
                                             <span className="card_numb">450</span>
                                             <span>Donar and donation</span>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-4 col-lg-12">
                        <div className="video_wrapper pl-70">
                            <div onClick={setPopUp} style={{"cursor":"pointer"}} className="play_btn"><i className="fas fa-play"></i></div>
                        </div>
                        {isPopUp &&  <VideoPopUp setShow={()=>setPopUp(false)} src={"https://www.youtube.com/embed/B4GwnBrp41s"} />}
                    </div>
                </div>
            </div>
        </div>
         //{/* <!-- Chooseus area end--> */}
    )
}
