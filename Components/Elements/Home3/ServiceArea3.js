import React from 'react'
import Link from 'next/link'

export default function ServiceArea3() {
    return (
        // Services area start 

        <div className="services_area pt-70 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-12 text-center">
                        <div className="section_title mb-50">
                            <span className="sub_title sub_title_2">Feature</span>
                            <h3 className="title">What We Do</h3>
                            <span className="back_title">Services</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="services_single mb-30">
                            <div className="services_img">
                                <Link href="/cause-details"><a><img src="/img/donation/service-1.png" alt="img"/></a></Link>
                            </div>
                            <div className="services_text">
                                <h5 className="services_title"><Link href="/cause-details"><a>Places to get lost</a></Link></h5>
                                <p>Charity is the largest global for crowdfunding
                                    community with connecting nonprofits.</p>
                                <button className="service_btn">Our Mision & Vision</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="services_single mb-30">
                            <div className="services_img">
                                <Link href="/cause-details"><a><img src="/img/donation/service-2.png" alt="img"/></a></Link>
                            </div>
                            <div className="services_text">
                                <h5 className="services_title"><Link href="/cause-details"><a>Make fundrise for world</a></Link></h5>
                                <p>Our primary goal is developing a secure and safe world for poor in the world.</p>
                                <button className="service_btn">Become Donar <span></span></button>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="services_single mb-30">
                            <div className="services_img">
                                <Link href="/cause-details"><a><img src="/img/donation/service-3.png" alt="img"/></a></Link>
                            </div>
                            <div className="services_text">
                                <h5 className="services_title"><Link href="/cause-details"><a>Medical & Blood Donation</a></Link></h5>
                                <p>Lorem ipsum dolor sit amet, cons ectetur adi pisicing elit, sed do eiusmod tempor.</p>
                                <button className="service_btn">Contact With Us</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // Services area end 
    )
}
