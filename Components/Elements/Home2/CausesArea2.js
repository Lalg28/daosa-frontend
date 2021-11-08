import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y, } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CausesArea2() {
    const causes = [
        {
            category: ["*", "water"],
            img: (
                <Image
                    src="/img/causes/cause1.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_1",
            progressData: "65",
            desc: "The various agency help the poor, you also can try.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: ["*", "water"],
            img: (
                <Image
                    src="/img/causes/cause4.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_2",
            progressData: "80",
            desc: "If poor will well educated, you and you country will be rich.",
            goal: "4,7100",
            raised: "43,300",
            toGo: "40,200"
        },
        {
            category: ["*", "water"],
            img: (
                <Image
                    src="/img/causes/cause5.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_3",
            progressData: "80",
            desc: "Give your helping hand to teach poor people always.",
            goal: "20,100",
            raised: "19,300",
            toGo: "31,200"
        },
        {
            category: ["*", "water"],
            img: (
                <Image
                    src="/img/causes/cause6.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_2",
            progressData: "50",
            desc: "We have to careful and helpful to poor people always.",
            goal: "21,100",
            raised: "19,300",
            toGo: "31,200"
        },
        {
            category: ["*", "education"],
            img: (
                <Image
                    src="/img/causes/cause14.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_3",
            progressData: "50",
            desc: "We have to careful and helpful to poor people always.",
            goal: "21,100",
            raised: "19,300",
            toGo: "31,200"
        },
        {
            category: ["*", "education"],
            img: (
                <Image
                    src="/img/causes/cause15.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_1",
            progressData: "50",
            desc: "Putting the power of law in people's hand.",
            goal: "21,100",
            raised: "19,300",
            toGo: "31,200"
        },
        {
            category: ["*", "education"],
            img: (
                <Image
                    src="/img/causes/cause16.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_2",
            progressData: "65",
            desc: "Putting the power of law in people's hand.",
            goal: "45,100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: ["*", "education"],
            img: (
                <Image
                    src="/img/causes/cause17.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_2",
            progressData: "80",
            desc: "Donate now to help the helpless people authentically",
            goal: "21,100",
            raised: "19,300",
            toGo: "31,200"
        },
        {
            category: ["*", "medical"],
            img: (
                <Image
                    src="/img/causes/cause10.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_3",
            progressData: "65",
            desc: "Donate now to help the helpless people authentically",
            goal: "21,100",
            raised: "19,300",
            toGo: "31,200"
        },
        {
            category: ["*", "medical"],
            img: (
                <Image
                    src="/img/causes/cause11.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_2",
            progressData: "80",
            desc: "Donate now to help the helpless people authentically",
            goal: "47,100",
            raised: "43,300",
            toGo: "40,200"
        },
        {
            category: ["*", "medical"],
            img: (
                <Image
                    src="/img/causes/cause12.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_1",
            progressData: "65",
            desc: "Donate now to help the helpless people authentically",
            goal: "45,100",
            raised: "54,300",
            toGo: "45,200"
        },
        {
            category: ["*", "medical"],
            img: (
                <Image
                    src="/img/causes/cause13.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_2",
            progressData: "80",
            desc: "Share your money to serve poor people as far possible.",
            goal: "43,100",
            raised: "47,300",
            toGo: "40,200"
        },
        {
            category: ["*", "food"],
            img: (
                <Image
                    src="/img/causes/cause23.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_3",
            progressData: "50",
            desc: "Donate now to forward for poor at this pandemic time.",
            goal: "21,100",
            raised: "19,300",
            toGo: "31,200"
        },
        {
            category: ["*", "food"],
            img: (
                <Image
                    src="/img/causes/cause24.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_2",
            progressData: "50",
            desc: "Donate now to forward for poor at this pandemic time.",
            goal: "21,100",
            raised: "19,300",
            toGo: "31,200"
        },
        {
            category: ["*", "food"],
            img: (
                <Image
                    src="/img/causes/cause25.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_1",
            progressData: "50",
            desc: "Donate now to forward for poor at this pandemic time.",
            goal: "21,100",
            raised: "19,300",
            toGo: "31,200"
        },
        {
            category: ["*", "food"],
            img: (
                <Image
                    src="/img/causes/cause26.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_1",
            progressData: "50",
            desc: "Donate now to forward for poor at this pandemic time.",
            goal: "21,100",
            raised: "19,300",
            toGo: "31,200"
        },
    ];
    const [filter, setFilter] = useState("*");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects([]);

        const filtered = causes.map((p) => ({
            ...p,
            filtered: p.category.includes(filter),
        }));
        setProjects(filtered);
    }, [filter]);
    return (

        <section className="causes_area gray-bg pt-105 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <div className="section_title mb-45">
                            <span className="sub_title"><i className="fal fa-heart"></i> Causes</span>
                            <h3 className="title">Recent Causes</h3>
                        </div>
                        <div className="cause_button_wrapper mb-25">
                            <nav>
                                <div className="nav tab_buttons" id="nav-tab" role="tablist">
                                    <button className={`nav-link ${filter === "*" ? "active" : ""}`} onClick={() => setFilter("*")} >ALL</button>
                                    <button className={`nav-link ${filter === "water" ? "active" : ""}`} onClick={() => setFilter("water")} >water</button>
                                    <button className={`nav-link ${filter === "education" ? "active" : ""}`} onClick={() => setFilter("education")} >Education</button>
                                    <button className={`nav-link ${filter === "medical" ? "active" : ""}`} onClick={() => setFilter("medical")} >Medical</button>
                                    <button className={`nav-link ${filter === "food" ? "active" : ""}`} onClick={() => setFilter("food")} >Food</button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">


                        <div className="swiper-container cause_container_active">
                            <div className="swiper-wrapper">

                                <Swiper
                                    // install Swiper modules
                                    // modules={[Navigation, Pagination, Scrollbar, A11y,]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    autoplaydisableoninteraction={"false"}
                                    loop={true}
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
                                // pagination={{ clickable: true }}
                                // navigation={{ clickable: true }}
                                // scrollbar={{ draggable: true }}
                                // onSwiper={(swiper) => console.log(swiper)}
                                // onSlideChange={() => console.log('slide change')}
                                >
                                    {projects.map((item, i) =>
                                        item.filtered === true ? (
                                            <SwiperSlide className="single_cause mb-30">
                                                <div className="single_cause_img img_effect_white p-rel">
                                                    <Link href="/cause-details"><a>{item.img}</a></Link>
                                                    <div className={`progress_wrapper ${item.pbar}`}>
                                                        <div className="progress_circle" data-percentage={item.progressData}>
                                                            <span className="progress-left">
                                                                <span className="progress-bar"></span>
                                                            </span>
                                                            <span className="progress-right">
                                                                <span className="progress-bar"></span>
                                                            </span>
                                                            <div className="progress-value">
                                                                <div>
                                                                    {item.progressData}%
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <span>{item.category}</span>
                                                    </div>
                                                </div>
                                                <div className="single_cause_content single_cause_content_2">
                                                    <div className="single_cause">
                                                        <h3 className="title"><Link href="/cause-details"><a>{item.desc}</a></Link></h3>
                                                    </div>
                                                    <div className="single_cause_meta">
                                                        <div className="single_meta d-inline-block">
                                                            <span className="meta_text clr_theme1"><i className="fal fa-globe"></i> Goal</span>
                                                            <span className="meta_price clr_theme1">${item.goal}</span>
                                                        </div>
                                                        <div className="single_meta d-inline-block">
                                                            <span className="meta_text clr_theme2"><i className="fal fa-users"></i> Raised</span>
                                                            <span className="meta_price clr_theme2">${item.raised}</span>
                                                        </div>
                                                        <div className="single_meta d-inline-block">
                                                            <span className="meta_text clr_theme3"><i className="fal fa-reply"></i> To go</span>
                                                            <span className="meta_price clr_theme3">${item.toGo}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>

                                        ) : (
                                            ""
                                        )
                                    )}
                                </Swiper>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section >

    )
}
