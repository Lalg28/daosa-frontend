import React from 'react'
import { useState } from 'react';
import Link from 'next/link'

export default function ContactGetInTouch() {
    const [isOpen, setOpen] = useState(false);
    const isOpenFalse = () => setOpen(!isOpen);
    const [isSelect, setSelect] = useState("Bangla");
    return (
        <div className="get_intouch_area pt-120 pb-120" style={{"background":"url(/img/bg/contact_map.png)"}}>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-6 col-xl-6 col-lg-7 order-1 order-lg-0">
                        <div className="contact_section contact_contact bottom_radius0">
                            <form action="#">
                                <div className="row">
                                    <div className="col-xxl-6 col-sm-6">
                                        <input type="text" placeholder="Enter full name"/>
                                    </div>
                                    <div className="col-xxl-6 col-sm-6">
                                        <input type="email" placeholder="Enter email address"/>
                                    </div>
                                
                                    <div className="col-xxl-6 col-sm-6">
                                        <input type="tel" placeholder="Phone number"/>
                                    </div>
                                    <div className="col-xxl-6 col-sm-6">
                                    <div onClick={isOpenFalse} className={`nice-select contact_select ${isOpen && "open"}`}>
                                            <span className="current">{isSelect}</span>
                                            <ul className="list">
                                                <li onClick={() => setSelect("Select Subject")} className={`option ${isSelect=="Select Subject" && "selected focus"}`}>Select Subject</li>
                                                <li onClick={() => setSelect("Bangla")} className={`option ${isSelect=="Bangla" && "selected focus"}`}>Bangla</li>
                                                <li onClick={() => setSelect("English")} className={`option ${isSelect=="English" && "selected focus"}`}>English</li>
                                                <li onClick={() => setSelect("Mathmatics")} className={`option ${isSelect=="Mathmatics" && "selected focus"}`}>Mathmatics</li>
                                                <li onClick={() => setSelect("Textile")} className={`option ${isSelect=="Textile" && "selected focus"}`}>Textile</li>
                                            </ul>
                                        </div>
                                        {/* <select name="contact_select" id="contact_select" className="contact_select">
                                            <option value="Select Subject">Select Subject</option>
                                            <option value="Bangla">Bangla</option>
                                            <option value="English">English</option>
                                            <option value="Mathmatics">Mathmatics</option>
                                            <option value="Textile">Textile</option>
                                        </select> */}
                                    </div>
                                    <div className="col-xxl-12">
                                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter Message"></textarea>
                                    </div>
                                    <div className="col-xxl-12">
                                        <button type="submit" className="contact_btn">Get A Quote</button>
                                    </div>
                            </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xxl-6 col-xl-6 col-lg-5 order-0 order-lg-1">
                        <div className="contact_location_section pl-50 mb-50">
                            <div className="section_title mb-40">
                                <Link href="/contact"><a className="sub_title sub_title_2">Contact Us</a></Link>
                                <h3 className="title">Get In Touch</h3>
                            </div>
                            <div className="contact_location_wrapper">
                                <div className="single_contact_location theme-6">
                                    <Link href="#"><a className="icon"><i className="far fa-map-marker-alt"></i></a></Link>
                                    <div className="contact_location_text">
                                        <span>Location</span>
                                        <h5 className="contact_address_title">14/A, Kinglo City Hall, NYC</h5>
                                    </div>
                                </div>
                                <div className="single_contact_location theme-1">
                                    <Link href="/mailto:info@webexample.com"><a className="icon"><i className="fal fa-envelope"></i></a></Link>
                                    <div className="contact_location_text">
                                        <span>Email</span>
                                        <Link href="/mailto:info@webexample.com"><a className="contact_address_title">Info@webexample.com</a></Link>
                                    </div>
                                </div>
                                <div className="single_contact_location theme-2">
                                    <Link href="/tel:789.765.741.69"><a className="icon"><i className="fal fa-phone"></i></a></Link>
                                    <div className="contact_location_text">
                                        <span>Phone</span>
                                        <Link href="/tel:789.765.741.69"><a className="contact_address_title">789. 765. 741. 69</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
