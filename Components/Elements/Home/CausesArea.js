import React from 'react'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CausesArea() {
    return (
        //  {/* <!-- causes area start--> */}
        <section className="causes_area grey-bg pt-105 pb-385" style={{ "background-image": "url(/img/causes/cause_map.png)" }}>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <div className="section_title mb-45">
                            <span className="sub_title"><i className="fal fa-heart"></i> Causes</span>
                            <h3 className="title">Latest Causes</h3>
                        </div>
                    </div>
                </div>
                <div className="swiper-container cause_container_active">
                    <Swiper
                        // install Swiper modules
                        // modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                                                        
                            // when window width is >= 768px
                            768: {
                              slidesPerView: 2,
                            },
                            992: {
                            // when window width is >= 992px
                              slidesPerView: 3,
                            }
                          }}
                    // navigation={{ clickable: true }}
                    // pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    // onSwiper={(swiper) => console.log(swiper)}
                    // onSlideChange={() => console.log('slide change')}
                    >
                        <SwiperSlide className="single_cause mb-30">
                            <div className="single_cause_img img_effect_white p-rel">
                                <Link href="/cause-details"><a><img src="/img/causes/cause1.jpg" alt="img" /></a></Link>
                                <div className="progress_wrapper pbar_1">
                                    <div className="progress_circle" data-percentage="65">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            <div>
                                                65%
                                            </div>
                                        </div>
                                    </div>
                                    <span>Water</span>
                                </div>
                            </div>
                            <div className="single_cause_content single_cause_content_2">
                                <div className="single_cause">
                                    <h3 className="title"><Link href="/cause-details"><a>The various agency help the poor, you also can try.</a></Link></h3>
                                </div>
                                <div className="single_cause_meta">
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme1"><i className="fal fa-globe"></i> Goal</span>
                                        <span className="meta_price clr_theme1">$4,5100</span>
                                    </div>
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme2"><i className="fal fa-users"></i> Raised</span>
                                        <span className="meta_price clr_theme2">$45,300</span>
                                    </div>
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme3"><i className="fal fa-reply"></i> To go</span>
                                        <span className="meta_price clr_theme3">$45,200</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="single_cause mb-30">
                            <div className="single_cause_img p-rel img_effect_white">
                                <Link href="/cause-details"><a><img src="/img/causes/cause17.jpg" alt="img" /></a></Link>
                                <div className="progress_wrapper pbar_2">
                                    <div className="progress_circle" data-percentage="80">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            <div>
                                                80%
                                            </div>
                                        </div>
                                    </div>
                                    <span>Education</span>
                                </div>
                            </div>
                            <div className="single_cause_content single_cause_content_2">
                                <div className="single_cause">
                                    <h3 className="title"><Link href="/cause-details"><a>If poor will well educated, you and you country will be rich.</a></Link></h3>
                                </div>
                                <div className="single_cause_meta">
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme1"><i className="fal fa-globe"></i> Goal</span>
                                        <span className="meta_price clr_theme1">$4,7100</span>
                                    </div>
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme2"><i className="fal fa-users"></i> Raised</span>
                                        <span className="meta_price clr_theme2">$43,300</span>
                                    </div>
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme3"><i className="fal fa-reply"></i> To go</span>
                                        <span className="meta_price clr_theme3">$40,200</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="single_cause mb-30">
                            <div className="single_cause_img p-rel img_effect_white">
                                <Link href="/cause-details"><a><img src="/img/causes/cause3.jpg" alt="img" /></a></Link>
                                <div className="progress_wrapper pbar_3">
                                    <div className="progress_circle" data-percentage="80">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            <div>
                                                50%
                                            </div>
                                        </div>
                                    </div>
                                    <span>Education</span>
                                </div>
                            </div>
                            <div className="single_cause_content single_cause_content_2">
                                <div className="single_cause">
                                    <h3 className="title"><Link href="/cause-details"><a>Give your helping hand to teach poor people always</a></Link></h3>
                                </div>
                                <div className="single_cause_meta">
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme1"><i className="fal fa-globe"></i> Goal</span>
                                        <span className="meta_price clr_theme1">$21,100</span>
                                    </div>
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme2"><i className="fal fa-users"></i> Raised</span>
                                        <span className="meta_price clr_theme2">$19,300</span>
                                    </div>
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme3"><i className="fal fa-reply"></i> To go</span>
                                        <span className="meta_price clr_theme3">$31,200</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="single_cause mb-30">
                            <div className="single_cause_img p-rel img_effect_white">
                                <Link href="/cause-details"><a><img src="/img/causes/cause10.jpg" alt="img" /></a></Link>
                                <div className="progress_wrapper pbar_3">
                                    <div className="progress_circle" data-percentage="80">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            <div>
                                                50%
                                            </div>
                                        </div>
                                    </div>
                                    <span>Medical</span>
                                </div>
                            </div>
                            <div className="single_cause_content single_cause_content_2">
                                <div className="single_cause">
                                    <h3 className="title"><Link href="/cause-details"><a>We have to careful and helpful to poor people always.</a></Link></h3>
                                </div>
                                <div className="single_cause_meta">
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme1"><i className="fal fa-globe"></i> Goal</span>
                                        <span className="meta_price clr_theme1">$21,100</span>
                                    </div>
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme2"><i className="fal fa-users"></i> Raised</span>
                                        <span className="meta_price clr_theme2">$19,300</span>
                                    </div>
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme3"><i className="fal fa-reply"></i> To go</span>
                                        <span className="meta_price clr_theme3">$31,200</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="single_cause mb-30">
                            <div className="single_cause_img p-rel img_effect_white">
                                <Link href="/cause-details"><a><img src="/img/causes/cause11.jpg" alt="img" /></a></Link>
                                <div className="progress_wrapper pbar_3">
                                    <div className="progress_circle" data-percentage="80">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            <div>
                                                50%
                                            </div>
                                        </div>
                                    </div>
                                    <span>Medical</span>
                                </div>
                            </div>
                            <div className="single_cause_content single_cause_content_2">
                                <div className="single_cause">
                                    <h3 className="title"><Link href="/cause-details"><a>Share your money to serve poor people as far possible.</a></Link></h3>
                                </div>
                                <div className="single_cause_meta">
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme1"><i className="fal fa-globe"></i> Goal</span>
                                        <span className="meta_price clr_theme1">$21,100</span>
                                    </div>
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme2"><i className="fal fa-users"></i> Raised</span>
                                        <span className="meta_price clr_theme2">$19,300</span>
                                    </div>
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme3"><i className="fal fa-reply"></i> To go</span>
                                        <span className="meta_price clr_theme3">$31,200</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="single_cause mb-30">
                            <div className="single_cause_img p-rel img_effect_white">
                                <Link href="/cause-details"><a><img src="/img/causes/cause12.jpg" alt="img" /></a></Link>
                                <div className="progress_wrapper pbar_3">
                                    <div className="progress_circle" data-percentage="80">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            <div>
                                                50%
                                            </div>
                                        </div>
                                    </div>
                                    <span>Medical</span>
                                </div>
                            </div>
                            <div className="single_cause_content single_cause_content_2">
                                <div className="single_cause">
                                    <h3 className="title"><Link href="/cause-details"><a>Donate now to forward for poor at this pandemic time.</a></Link></h3>
                                </div>
                                <div className="single_cause_meta">
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme1"><i className="fal fa-globe"></i> Goal</span>
                                        <span className="meta_price clr_theme1">$21,100</span>
                                    </div>
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme2"><i className="fal fa-users"></i> Raised</span>
                                        <span className="meta_price clr_theme2">$19,300</span>
                                    </div>
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme3"><i className="fal fa-reply"></i> To go</span>
                                        <span className="meta_price clr_theme3">$31,200</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="single_cause mb-30">
                            <div className="single_cause_img p-rel img_effect_white">
                                <Link href="/cause-details"><a><img src="/img/causes/cause24.jpg" alt="img" /></a></Link>
                                <div className="progress_wrapper pbar_3">
                                    <div className="progress_circle" data-percentage="80">
                                        <span className="progress-left">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <span className="progress-right">
                                            <span className="progress-bar"></span>
                                        </span>
                                        <div className="progress-value">
                                            <div>
                                                50%
                                            </div>
                                        </div>
                                    </div>
                                    <span>Food</span>
                                </div>
                            </div>
                            <div className="single_cause_content single_cause_content_2">
                                <div className="single_cause">
                                    <h3 className="title"><Link href="/cause-details"><a>Putting the power of law in people&apos;s hand</a></Link></h3>
                                </div>
                                <div className="single_cause_meta">
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme1"><i className="fal fa-globe"></i> Goal</span>
                                        <span className="meta_price clr_theme1">$21,100</span>
                                    </div>
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme2"><i className="fal fa-users"></i> Raised</span>
                                        <span className="meta_price clr_theme2">$19,300</span>
                                    </div>
                                    <div className="single_meta d-inline-block">
                                        <span className="meta_text clr_theme3"><i className="fal fa-reply"></i> To go</span>
                                        <span className="meta_price clr_theme3">$31,200</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>


            </div>
        </section>
        //  {/* <!-- causes area end--> */}
    )
}
