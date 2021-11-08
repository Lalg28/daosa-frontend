import React from 'react'
import VideoPopUp from '../VideoPopUp'
import { useState } from 'react'
import Link from 'next/link'

export default function AboutVideoArea() {    
    const [isShow, setShow] = useState(false);
    return (

        //  about videos area start 

        <div className="about_videos_area mtm-300">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="about_video_section text-center p-250 bg_cover" style={{ "backgroundImage": "url(/img/bg/video_bg.jpg)" }}>
                            <div style={{"cursor":"pointer"}} onClick={setShow} className="play_btn p-rel popup-video ab_4"><i className="fas fa-play"></i></div>
                        </div>
                    </div>
                </div>
               {isShow &&  <VideoPopUp setShow={()=>setShow(false)} src={"//www.youtube.com/embed/B4GwnBrp41s?autoplay=1"} />}
            </div>
        </div>

        // about videos area end
    )
}

