import React from 'react'
import Image from 'next/image'
import { useState, useEffect } from 'react';
import Timer from '../TimeCountDown';
import Link from 'next/link'

export default function EventRecentCause() {
    const date = new Date();
    
    // console.log(date)
    const causes = [
        {
            category: ["water"],
            img: (
                <Image
                    src="/img/causes/cause1.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: date.setDate(date.getDate() + 1),

        },
        {
            category: ["water"],
            img: (
                <Image
                    src="/img/causes/cause2.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: "2022-11-27 00:00:00"

        },
        {
            category: ["water"],
            img: (
                <Image
                    src="/img/causes/cause3.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: "2022-11-27 00:00:00"

        },
        {
            category: ["water", ""],
            img: (
                <Image
                    src="/img/causes/cause4.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: "2022-11-27 00:00:00"

        },
        {
            category: ["education"],
            img: (
                <Image
                    src="/img/causes/cause13.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: "2022-11-27 00:00:00"

        },
        {
            category: ["education"],
            img: (
                <Image
                    src="/img/causes/cause14.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: "2022-11-27 00:00:00"

        },
        {
            category: ["education"],
            img: (
                <Image
                    src="/img/causes/cause15.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: "2022-11-27 00:00:00"

        },
        {
            category: ["", "education"],
            img: (
                <Image
                    src="/img/causes/cause16.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: "2022-11-27 00:00:00"

        },
        {
            category: ["medical"],
            img: (
                <Image
                    src="/img/causes/cause10.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: "2022-11-27 00:00:00"

        },
        {
            category: ["medical"],
            img: (
                <Image
                    src="/img/causes/cause11.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: "2022-11-27 00:00:00"

        },
        {
            category: ["medical"],
            img: (
                <Image
                    src="/img/causes/cause12.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: "2022-11-27 00:00:00"

        },
        {
            category: ["", "medical"],
            img: (
                <Image
                    src="/img/causes/cause28.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: "2022-11-27 00:00:00"

        },
        {
            category: ["food"],
            img: (
                <Image
                    src="/img/causes/cause23.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: "2022-11-27 00:00:00"

        },
        {
            category: ["food"],
            img: (
                <Image
                    src="/img/causes/cause24.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: "2022-11-27 00:00:00"

        },
        {
            category: ["food"],
            img: (
                <Image
                    src="/img/causes/cause25.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: "2022-11-27 00:00:00"

        },
        {
            category: ["", "food"],
            img: (
                <Image
                    src="/img/causes/cause26.jpg"
                    layout="responsive"
                    width={350}
                    height={225}
                />
            ),
            title: "Every Second Until the Event",
            address: "Douglas Park, Chicago, IL",
            date: "2022-11-27 00:00:00"

        },
    ];
    const [filter, setFilter] = useState("");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects([]);

        const filtered = filter === "" ? causes : causes.filter(c => c.category.includes(filter));
        setProjects(filtered);
    }, [filter]);
    return (
        //Recent causes area start
        <section className="event_causes_area pt-120 pb-85">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <div className="cause_button_wrapper mb-25">
                            <nav>
                                <div className="nav tab_buttons" id="nav-tab" role="tablist">
                                    <button className={`nav-link ${filter === "" ? "active" : ""}`} onClick={() => setFilter("")} >All Categories</button>
                                    <button className={`nav-link ${filter === "water" ? "active" : ""}`} onClick={() => setFilter("water")} >Water</button>
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
                        {projects.map((item, i) => (
                            <div className="single_events_wrapper tab-border mb-30" key={item.id}>
                                <div className="row align-items-center">
                                    <div className="col-xxl-3 col-xl-3 col-lg-3 d-md-none d-lg-block">
                                        <div className="eventcount_img w_img">
                                            <Link href="/event-details"><a>{item.img}</a></Link>
                                        </div>
                                    </div>
                                    <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-4 text-center text-md-start">
                                        <div className="eventcount_text heading-clr">
                                            <h5><Link href="/event-details"><a>{item.title}</a></Link></h5>
                                            <span>{item.address}</span>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-8 text-center text-md-end">
                                        <div className="count_down_box heading-clr"><Timer endDateTime={item.date} /></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>

                <div className="row">
                    <div className="cause_button text-center mt-10 mb-30">
                        <Link href="/event"><a className="cause_btn g_btn to_right1 rad-30">Load More <i className="far fa-plus"></i> <span></span></a></Link>
                    </div>
                </div>
            </div>
        </section>
        //Recent causes area end
    )
}
