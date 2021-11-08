import React from 'react'
import Link from 'next/link'

export default function SliderArea() {
    return (
           
           <section className="slider_area">
           <div className="img_topleft"><img data-depth="1" src="/img/slider/lefttop.png" alt="img" /></div>
           <div className="img_topright"><img data-depth="1.3" src="/img/slider/righttop.png" alt="img" /></div>
           <div className="img_bottomleft"><img data-depth="1.5" src="/img/slider/bottomleft.png" alt="img" /></div>
           <div className="slider_active">
               <div className="single_slider slider_height p-rel d-flex align-items-center align-items-md-end">
                   <div className="img_bottomright"><img data-depth="0.8" src="/img/slider/bottomright.png" alt="img" /></div>
                   <div className="container">
                       <div className="row">
                           <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
                               <div className="slider_content text_space">
                                   <div className="slider_text text_overlay">
                                       <h2 className="slider_title"> <span>Make</span> <br /> Donation</h2>
                                       <div className="slider_button"><Link href="/cause"><a className="g_btn theme1_bg to_right2 slider_btn i_left rad-30 p-35"><i className="fal fa-heart"></i> Explore Causes<span></span></a></Link></div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>

    )
}
