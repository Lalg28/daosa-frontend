import React from 'react'
import Link from 'next/link'
import SwiperCore, {Autoplay, Navigation, Pagination, Scrollbar, EffectFade  } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';

// install Swiper modules
SwiperCore.use([Autoplay,Navigation, Pagination, EffectFade]);

export default function SliderArea() {
    return (
         <section className="hero_area fix">
         <div className="swiper-container slider-active">
             <div className="swiper-wrapper">

                 <Swiper
                     // install Swiper modules
                     spaceBetween={2}
                     slidesPerView={1}
                     autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                      }}
                     loop={true}
                     effect={"fade"}
                     fadeEffect= {{
                        crossFade: true
                      }}
                     pagination={{ clickable: true }}
                     // navigation={{ clickable: true }}
                     // scrollbar={{ draggable: true }}
                     // onSwiper={(swiper) => console.log(swiper)}
                     // onSlideChange={() => console.log('slide change')}
                 >
                     <SwiperSlide className="hero_wrapper hero_height p-rel d-flex align-items-center justify-content-center">
                         <div className="slide-bg" style={{ "background": "url(/img/slider/hero_bg2_3.jpg)" }}></div>

                         <div className="img_center" data-animation="fadeInUp" data-delay="0.9s"><img src="/img/slider/hero_shape.png" alt="img" /></div>

                         <div className="hero_single p-rel">
                             <div className="container">
                                 <div className="row">
                                     <div className="col-xxl-12 text-center">
                                         <div className="hero_content">
                                             <div className="hero_meta" data-animation="fadeInUp" data-delay="0.3s">
                                                 <Link href="/cause"><a>Education</a></Link>
                                                 <Link href="/cause"><a>Water</a></Link>
                                                 <Link href="/cause"><a>Medical</a></Link>
                                             </div>
                                             <h3 className="hero_title" data-animation="fadeInUp" data-delay="0.5s">Redusing Poverty</h3>
                                             <p data-animation="fadeInUp" data-delay="0.7s">Organization Set Up to Provide Help and Raise <br /> Money for Those in Need.</p>
                                             <div className="hero_buttons mt-35" data-animation="fadeInUp" data-delay="0.9s">
                                                 <Link href="/cause"><a className="g_btn theme1_bg to_rightout_heading rad-30 mr-20">Our Causes<span></span></a></Link>
                                                 <Link href="/about"><a className="g_btn heading_bg  to_right1 rad-30">Learn More<span></span></a></Link>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </SwiperSlide>
                     <SwiperSlide className="hero_wrapper hero_height p-rel d-flex align-items-center justify-content-center">
                         <div className="slide-bg" style={{ "background": "url(/img/slider/hero_bg2_4.jpg)" }}></div>

                         <div className="img_center wow fadeInUp" data-animation="fadeInUp" data-delay="0.9s"><img src="/img/slider/hero_shape.png" alt="img" /></div>

                         <div className="hero_single p-rel">
                             <div className="container">
                                 <div className="row">
                                     <div className="col-xxl-12 text-center">
                                         <div className="hero_content">
                                             <div className="hero_meta wow fadeInUp" data-animation="fadeInUp" data-delay="0.3s">
                                                 <Link href="/cause"><a>Education</a></Link>
                                                 <Link href="/cause"><a>Water</a></Link>
                                                 <Link href="/cause"><a>Medical</a></Link>
                                             </div>
                                             <h3 className="hero_title wow fadeInUp" data-animation="fadeInUp" data-delay="0.5s">Sharing Prosperity</h3>
                                             <p className="wow fadeInUp" data-animation="fadeInUp" data-delay="0.7s">Organization Set Up to Provide Help and Raise <br /> Money for Those in Need.</p>
                                             <div className="hero_buttons mt-35 wow fadeInUp" data-animation="fadeInUp" data-delay="0.9s">
                                                 <Link href="/cause"><a className="g_btn theme1_bg to_rightout_heading rad-30 mr-20">Our Causes<span></span></a></Link>
                                                 <Link href="/about"><a className="g_btn heading_bg  to_right1 rad-30">Learn More<span></span></a></Link>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </SwiperSlide>
                     <SwiperSlide className="hero_wrapper hero_height p-rel d-flex align-items-center justify-content-center">
                         <div className="slide-bg" style={{ "background": "url(/img/slider/hero_bg2_1.jpg)" }}></div>

                         <div className="img_center wow fadeInUp" data-animation="fadeInUp" data-delay="0.9s"><img src="/img/slider/hero_shape.png" alt="img" /></div>

                         <div className="hero_single p-rel">
                             <div className="container">
                                 <div className="row">
                                     <div className="col-xxl-12 text-center">
                                         <div className="hero_content">
                                             <div className="hero_meta wow fadeInUp" data-animation="fadeInUp" data-delay="0.3s">
                                                 <Link href="/cause"><a>Education</a></Link>
                                                 <Link href="/cause"><a>Water</a></Link>
                                                 <Link href="/cause"><a>Medical</a></Link>
                                             </div>
                                             <h3 className="hero_title wow fadeInUp " data-animation="fadeInUp" data-delay="0.5s">Change a Child&#39;s Life</h3>
                                             <p className="wow fadeInUp" data-animation="fadeInUp" data-delay="0.7s">Organization Set Up to Provide Help and Raise <br /> Money for Those in Need.</p>
                                             <div className="hero_buttons mt-35 wow fadeInUp" data-animation="fadeInUp" data-delay="0.9s">
                                                 <Link href="/cause"><a className="g_btn theme1_bg to_rightout_heading rad-30 mr-20">Our Causes<span></span></a></Link>
                                                 <Link href="/about"><a className="g_btn heading_bg  to_right1 rad-30">Learn More<span></span></a></Link>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </SwiperSlide>
                 </Swiper>

             </div>
         </div>
     </section>
    //   <!--slider area end-->  
    )
}
