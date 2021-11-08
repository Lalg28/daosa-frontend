import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade"
import "swiper/css/navigation"
import "swiper/css/pagination"
// import Swiper core and required modules
import SwiperCore, {Autoplay, EffectFade} from 'swiper';
// install Swiper modules
SwiperCore.use([Autoplay, EffectFade]);

export default function BrandArea2() {
    return (
        // brand_area start
        <div className="brand_area brand-bg pt-70 text-center">
            <div className="container">
                <div className="brand_active swiper-container pb-70">
                    <div className="swiper-wrapper">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={3}
                            centeredSlides={true}
                            autoplay={{
                                "delay": 2500,
                                "disableOnInteraction": false
                              }}
                            loop={true}
                            fadeEffect= {{
                                crossFade: true
                              }}
                            breakpoints={{

                                // when window width is >= 768px
                                768: {
                                    slidesPerView: 4,
                                },
                                1200: {
                                    // when window width is >= 992px
                                    slidesPerView: 6,
                                }
                            }}
                        pagination={{ clickable: true }}
                        // navigation={{ clickable: true }}
                        // scrollbar={{ draggable: true }}
                        // onSwiper={(swiper) => console.log(swiper)}
                        // onSlideChange={() => console.log('slide change')}
                        >
                            <SwiperSlide className="single_brand swiper-slide" >
                                <img src="/img/brand/brand1.png" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide className="single_brand swiper-slide" >
                                <img src="/img/brand/brand2.png" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide className="single_brand swiper-slide" >
                                <img src="/img/brand/brand3.png" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide className="single_brand swiper-slide" >
                                <img src="/img/brand/brand4.png" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide className="single_brand swiper-slide" >
                                <img src="/img/brand/brand5.png" alt="img" />
                            </SwiperSlide>
                            <SwiperSlide className="single_brand swiper-slide" >
                                <img src="/img/brand/brand6.png" alt="img" />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>
            </div>
        </div>
        //brand_area end 
    )
}
