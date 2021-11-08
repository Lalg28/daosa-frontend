import React from 'react'
import Link from 'next/link';
import Image from 'next/image'
import { useState, useEffect } from 'react';
export default function CauseRecentCause() {
    const causes = [
        {
            category: [ "water"],
            img: (
                <Image
                    src="/img/causes/cause1.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            pbar: "pbar_1",
            progressData: "63",
            desc: "The various agency help the poor, you also can try.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: [ "water"],
            img: (
                <Image
                    src="/img/causes/cause2.jpg"
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
            category: [ "water"],
            img: (
                <Image
                    src="/img/causes/cause3.jpg"
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
            category: [ "water",""],
            img: (
                <Image
                    src="/img/causes/cause4.jpg"
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
            category: [ "education"],
            img: (
                <Image
                    src="/img/causes/cause13.jpg"
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
            category: [ "education"],
            img: (
                <Image
                    src="/img/causes/cause14.jpg"
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
            category: [ "education"],
            img: (
                <Image
                    src="/img/causes/cause15.jpg"
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
            category: [ "","education"],
            img: (
                <Image
                    src="/img/causes/cause16.jpg"
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
            category: [ "medical"],
            img: (
                <Image
                    src="/img/causes/cause10.jpg"
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
            category: [ "medical"],
            img: (
                <Image
                    src="/img/causes/cause11.jpg"
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
            category: [ "medical"],
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
            desc: "The various agency help the poor, you also can try.",
            goal: "4,5100",
            raised: "45,300",
            toGo: "45,200"
        },
        {
            category: [ "","medical"],
            img: (
                <Image
                    src="/img/causes/cause28.jpg"
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
            category: [ "food"],
            img: (
                <Image
                    src="/img/causes/cause23.jpg"
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
            category: [ "food"],
            img: (
                <Image
                    src="/img/causes/cause24.jpg"
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
            category: [ "food"],
            img: (
                <Image
                    src="/img/causes/cause25.jpg"
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
            category: [ "","food"],
            img: (
                <Image
                    src="/img/causes/cause26.jpg"
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
    ];

    const [filter, setFilter] = useState("");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects([]);

        const filtered = filter==="" ? causes : causes.filter(c=>c.category.includes(filter));
        setProjects(filtered);
    }, [filter]);
    return (
        //Recent causes area start
        <section className="causes_area gray-bg pt-120 pb-85">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <div className="cause_button_wrapper mb-25">
                            <nav>
                                <div className="nav tab_buttons" id="nav-tab" role="tablist">
                                    <button className={`nav-link ${filter === "" ? "active" : ""}`} onClick={() => setFilter("")}>All Categories</button>
                                    <button className={`nav-link ${filter === "water" ? "active" : ""}`} onClick={() => setFilter("water")}>Water</button>
                                    <button className={`nav-link ${filter === "education" ? "active" : ""}`} onClick={() => setFilter("education")}>Education</button>
                                    <button className={`nav-link ${filter === "medical" ? "active" : ""}`} onClick={() => setFilter("medical")}>Medical</button>
                                    <button className={`nav-link ${filter === "food" ? "active" : ""}`} onClick={() => setFilter("food")}>Food</button>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">

                        <div className="row">

                            {projects.map((item, i) => (
                                    <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6" key={item.id}>
                                        <div className="single_cause mb-30">
                                            <div className="single_cause_img_wrapper">
                                                <div className="single_cause_img w_img img_effect_white">
                                                    <Link href="/cause-details"><a>{item.img}</a></Link>
                                                </div>
                                                <div className="progress cause_progress">
                                                    <div className="progress-bar" role="progressbar" style={{width: "65%"}} aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"><span>{item.progressData}%</span></div>
                                                </div>
                                            </div>

                                            <div className="single_cause_content">
                                                <div className="single_cause">
                                                    <span className="sub_title">{item.category}</span>
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
                                        </div>
                                    </div>
                                ))}

                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="cause_button text-center mt-10 mb-30">
                        <Link href="/cause"><a className="cause_btn g_btn to_right1 rad-30">Load More <i className="far fa-plus"></i> <span></span></a></Link>
                    </div>
                </div>
            </div>
        </section>
        //Recent causes area end
    )
}
