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

export default function FeaturedCauseArea3() {
    const causes = [
        {
            category: ["*", "water"],
            title:"The community state of the art recurring donation.",
            img: (
                <Image
                    src="/img/causes/cause3_2.jpg"
                    layout="responsive"
                    width={498}
                    height={575}
                />
            ),
            progressData: "35",
            desc: "generous actions or donations to aid the poor, ill, or needy: to devote one's life to charity. something given to a person or persons in need; alms: She asked for work, not charity. a charitable act or work.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: ["*", "water"],
            title:"The community state of the art recurring donation.",
            img: (
                <Image
                    src="/img/causes/cause3_3.jpg"
                    layout="responsive"
                    width={498}
                    height={575}
                />
            ),
            progressData: "35",
            desc: "generous actions or donations to aid the poor, ill, or needy: to devote one's life to charity. something given to a person or persons in need; alms: She asked for work, not charity. a charitable act or work.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: ["*", "water"],
            title:"The community state of the art recurring donation.",
            img: (
                <Image
                    src="/img/causes/cause3_4.jpg"
                    layout="responsive"
                    width={498}
                    height={575}
                />
            ),
            progressData: "35",
            desc: "generous actions or donations to aid the poor, ill, or needy: to devote one's life to charity. something given to a person or persons in need; alms: She asked for work, not charity. a charitable act or work.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: ["*", "water"],
            title:"The community state of the art recurring donation.",
            img: (
                <Image
                    src="/img/causes/cause3_1.jpg"
                    layout="responsive"
                    width={498}
                    height={575}
                />
            ),
            progressData: "35",
            desc: "generous actions or donations to aid the poor, ill, or needy: to devote one's life to charity. something given to a person or persons in need; alms: She asked for work, not charity. a charitable act or work.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: ["*", "medical"],
            title:"The community state of the art recurring donation.",
            img: (
                <Image
                    src="/img/causes/cause3_17.jpg"
                    layout="responsive"
                    width={498}
                    height={575}
                />
            ),
            progressData: "35",
            desc: "generous actions or donations to aid the poor, ill, or needy: to devote one's life to charity. something given to a person or persons in need; alms: She asked for work, not charity. a charitable act or work.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: ["*", "medical"],
            title:"The community state of the art recurring donation.",
            img: (
                <Image
                    src="/img/causes/cause3_18.jpg"
                    layout="responsive"
                    width={498}
                    height={575}
                />
            ),
            progressData: "35",
            desc: "generous actions or donations to aid the poor, ill, or needy: to devote one's life to charity. something given to a person or persons in need; alms: She asked for work, not charity. a charitable act or work.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: ["*", "medical"],
            title:"The community state of the art recurring donation.",
            img: (
                <Image
                    src="/img/causes/cause3_19.jpg"
                    layout="responsive"
                    width={498}
                    height={575}
                />
            ),
            progressData: "35",
            desc: "generous actions or donations to aid the poor, ill, or needy: to devote one's life to charity. something given to a person or persons in need; alms: She asked for work, not charity. a charitable act or work.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: ["*", "medical"],
            title:"The community state of the art recurring donation.",
            img: (
                <Image
                    src="/img/causes/cause3_18.jpg"
                    layout="responsive"
                    width={498}
                    height={575}
                />
            ),
            progressData: "35",
            desc: "generous actions or donations to aid the poor, ill, or needy: to devote one's life to charity. something given to a person or persons in need; alms: She asked for work, not charity. a charitable act or work.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: ["*", "education"],
            title:"The community state of the art recurring donation.",
            img: (
                <Image
                    src="/img/causes/cause3_10.jpg"
                    layout="responsive"
                    width={498}
                    height={575}
                />
            ),
            progressData: "35",
            desc: "generous actions or donations to aid the poor, ill, or needy: to devote one's life to charity. something given to a person or persons in need; alms: She asked for work, not charity. a charitable act or work.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: ["*", "education"],
            title:"The community state of the art recurring donation.",
            img: (
                <Image
                    src="/img/causes/cause3_11.jpg"
                    layout="responsive"
                    width={498}
                    height={575}
                />
            ),
            progressData: "35",
            desc: "generous actions or donations to aid the poor, ill, or needy: to devote one's life to charity. something given to a person or persons in need; alms: She asked for work, not charity. a charitable act or work.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: ["*", "education"],
            title:"The community state of the art recurring donation.",
            img: (
                <Image
                    src="/img/causes/cause3_12.jpg"
                    layout="responsive"
                    width={498}
                    height={575}
                />
            ),
            progressData: "35",
            desc: "generous actions or donations to aid the poor, ill, or needy: to devote one's life to charity. something given to a person or persons in need; alms: She asked for work, not charity. a charitable act or work.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: ["*", "education"],
            title:"The community state of the art recurring donation.",
            img: (
                <Image
                    src="/img/causes/cause3_13.jpg"
                    layout="responsive"
                    width={498}
                    height={575}
                />
            ),
            progressData: "35",
            desc: "generous actions or donations to aid the poor, ill, or needy: to devote one's life to charity. something given to a person or persons in need; alms: She asked for work, not charity. a charitable act or work.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: ["*", "food"],
            title:"The community state of the art recurring donation.",
            img: (
                <Image
                    src="/img/causes/cause3_14.jpg"
                    layout="responsive"
                    width={498}
                    height={575}
                />
            ),
            progressData: "35",
            desc: "generous actions or donations to aid the poor, ill, or needy: to devote one's life to charity. something given to a person or persons in need; alms: She asked for work, not charity. a charitable act or work.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        }
    ];
    const [filter, setFilter] = useState("");
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects([]);

        const filtered = filter==="" ? causes : causes.filter(c=>c.category.includes(filter));
        setProjects(filtered);
    }, [filter]);

    return (
        <section className="causes_area pt-110">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <div className="section_title mb-45">
                            <span className="sub_title sub_title_2">Causes</span>
                            <h3 className="title">Featured Causes</h3>
                            <span className="back_title">Causes</span>
                        </div>
                        <div className="cause_button_wrapper mb-0">
                            <nav>
                            <div className="nav tab_buttons" id="nav-tab" role="tablist">
                                    <button className={`nav-link ${filter === "" ? "active" : ""}`} onClick={() => setFilter("")} >ALL</button>
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

                        <div className="swiper-container feature_cause_active">
                            <div className="swiper-wrapper">
                                <Swiper
                                    // install Swiper modules
                                    // modules={[Navigation, Pagination, Scrollbar, A11y,]}
                                    spaceBetween={30}
                                    slidesPerView={1}
                                    autoplaydisableoninteraction={"false"}
                                    loop={true}
                                    pagination={{ clickable: true }}
                                    breakpoints={{

                                        // when window width is >= 768px
                                        768: {
                                            slidesPerView: 1,
                                        },
                                        992: {
                                            // when window width is >= 992px
                                            slidesPerView: 1,
                                        }
                                    }}
                                // navigation={{ clickable: true }}
                                // scrollbar={{ draggable: true }}
                                // onSwiper={(swiper) => console.log(swiper)}
                                // onSlideChange={() => console.log('slide change')}
                                >
                                   
                                        {projects.map((item, i) => (
                                            <SwiperSlide key={item.id}>
                                                console.log(item.id);
                                                <div className="row g-0 justify-content-center swiper-slide">
                                                    <div className="col-xxl-11 col-xl-12">
                                                        <div className="feature_cause_wrapper">
                                                            <div className="feature_single">
                                                                <div className="feature_single_img d-block">
                                                                    {item.img}
                                                                </div>
                                                                <div className="feature_single_content">
                                                                    <h4>{item.title}</h4>
                                                                    <p>{item.desc}</p>
                                                                    <div className="feature_progress_wrapper mb-25 mt-35">
                                                                        <div className="progress feature_progress">
                                                                            <div className="progress-bar" role="progressbar" data-width="50%" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{"width":"50%"}}></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="single_cause_meta mb-45">
                                                                        <div className="single_meta feature_meta feature_border d-inline-block">
                                                                            <span className="meta_text red_clr"><i className="fal fa-globe"></i> Goal</span>
                                                                            <span className="meta_price red_clr">{item.goal}</span>
                                                                        </div>
                                                                        <div className="single_meta feature_meta feature_border d-inline-block">
                                                                            <span className="meta_text red_clr"><i className="fal fa-users"></i> Raised</span>
                                                                            <span className="meta_price red_clr">{item.raised}</span>
                                                                        </div>
                                                                        <div className="single_meta feature_meta d-inline-block">
                                                                            <span className="meta_text red_clr"><i className="fal fa-reply"></i> To go</span>
                                                                            <span className="meta_price red_clr">{item.toGo}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="feature_buttons">
                                                                        <Link href="/donation"><a className="g_btn theme1_bg to_right2 rad-50">Make Donation <span></span></a></Link>
                                                                        <Link href="#"><a className="reply_btn"><i className="fal fa-reply"></i></a></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
