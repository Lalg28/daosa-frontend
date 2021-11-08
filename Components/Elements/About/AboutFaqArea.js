import React from 'react'
import { useState } from 'react';

export default function AboutFaqArea() {
    const [activeDefault, setActiveDefault] = useState(0);
    const defaultAccordion = [
        {
            title: "How to edit this kind plugin base theme?",
            desc:
                "We are called by God to to raise awareness of the 147 million orphaned and abandoned children in our world and then educate and equip people with the resources.",
            
        },
        {
            title: "How to use this kind plugin base theme?",
            desc:
                "We are called by God to to raise awareness of the 147 million orphaned and abandoned children in our world and then educate and equip people with the resources",

            
        },
        {
            title: "How to build this kind plugin base theme?",
            desc:
                "We are called by God to to raise awareness of the 147 million orphaned and abandoned children in our world and then educate and equip people with the resources",

            
        }

    ];
    const [isOpen, setOpen] = useState(false);
    const isOpenFalse = () => setOpen(!isOpen);
    const [isSelect, setSelect] = useState("Bangla");
    return (
        //about_faq area start 
        <div className="about_faq_area pt-110 pb-120">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5 col-xl-5">
                        <div className="accordion_wrapper mr-30">
                            <div className="section_title mb-50">
                                <span className="sub_title sub_title_2">FAQ</span>
                                <h3 className="title title_2">Get every answers
                                    from here.</h3>
                            </div>
                            <div className="accordion" id="accordionExample">
                            {defaultAccordion.map((d, i) => (
                                <div className="accordion-item" key={i}>                                    
                                    <h2 className="accordion-header" id="headingOne" onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}>
                                        <button onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}  className={`accordion-button faq_button ${activeDefault === i ? i : "collapsed"}`} >{" "}{d.title}</button>
                                    </h2>
                                    <div id="collapseOne" className={`accordion-collapse collapse  ${activeDefault === i ? "show" : ""}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">{d.desc}
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-7">
                        <div className="contact_section has_border mt-60">
                            <form action="#">
                                <div className="row">
                                    <div className="col-xxl-6 col-sm-6">
                                        <input type="text" placeholder="Enter full name" />
                                    </div>
                                    <div className="col-xxl-6 col-sm-6">
                                        <input type="email" placeholder="Enter email address" />
                                    </div>

                                    <div className="col-xxl-6 col-sm-6">
                                        <input type="tel" placeholder="Phone number" />
                                    </div>
                                    <div className="col-xxl-6 col-sm-6">
                                        <div onClick={isOpenFalse} className={`nice-select contact_select ${isOpen && "open"}`} >
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
                </div>
            </div>
        </div>
        // about_faq_area end 
    )
}
