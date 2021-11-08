import React from 'react'
import { useState } from 'react';

export default function FAQAccordion() {
    const [activeDefault, setActiveDefault] = useState(0);
    const [activeDefault2, setActiveDefault2] = useState(0);
    const defaultAccordion = [
        {
            title: "How to edit this kind plugin base theme?",
            desc:
                "We are called by God to, and our purpose. is to raise awareness of the 147 million orphaned and abandoned children in our world and then educate and equip people with the resources",
            
        },
        {
            title: "How to build this kind plugin base theme?",
            desc:
                "We are called by God to, and our purpose. is to raise awareness of the 147 million orphaned and abandoned children in our world and then educate and equip people with the resources",

            
        },
        {
            title: "How to edit this kind plugin base theme?",
            desc:
                "We are called by God to, and our purpose. is to raise awareness of the 147 million orphaned and abandoned children in our world and then educate and equip people with the resources",

            
        },
        {
            title: "How to use this kind plugin base theme?",
            desc:
                "We are called by God to, and our purpose. is to raise awareness of the 147 million orphaned and abandoned children in our world and then educate and equip people with the resources",

            
        },        
        {
            title: "How to submit this theme on Envato?",
            desc:
                "We are called by God to, and our purpose. is to raise awareness of the 147 million orphaned and abandoned children in our world and then educate and equip people with the resources",

            
        },
        

    ];
    const defaultAccordion2 = [
        {
            title: "How to edit this kind plugin base theme?",
            desc:
                "We are called by God to, and our purpose. is to raise awareness of the 147 million orphaned and abandoned children in our world and then educate and equip people with the resources",
            
        },
        {
            title: "How to build this kind plugin base theme?",
            desc:
                "We are called by God to, and our purpose. is to raise awareness of the 147 million orphaned and abandoned children in our world and then educate and equip people with the resources",

            
        },
        {
            title: "How to edit this kind plugin base theme?",
            desc:
                "We are called by God to, and our purpose. is to raise awareness of the 147 million orphaned and abandoned children in our world and then educate and equip people with the resources",

            
        }
        

    ];
    return (
        <div className="accordion_area pt-120 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <div className="accordion_wrapper mr-35 mb-40">
                            <div className="accordion" id="accordionExample"> 
                            {defaultAccordion.map((d, i) => (
                                <div className="accordion-item"key={i}>
                                  <h2 className="accordion-header" id="headingOne" onClick={() => setActiveDefault(activeDefault === i ? -1 : i)}>
                                    <button onClick={() => setActiveDefault(activeDefault === i ? -1 : i)} className={`accordion-button faq_button ${activeDefault === i ? i : "collapsed"}`}>{" "}{d.title}</button>
                                  </h2>
                                  <div id="collapseOne" className={`accordion-collapse collapse  ${activeDefault === i ? "show" : ""}`}>
                                    <div className="accordion-body">{d.desc}
                                    </div>
                                  </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                        <div className="accordion_wrapper soft-grey-bg padd_80 mb-40">
                            <div className="accordion" id="accordionExample2">
                            {defaultAccordion2.map((right, x) => (
                                <div className="accordion-item" key={x}>
                                  <h2 className="accordion-header" id="headingOne2">
                                    <button onClick={() => setActiveDefault2(activeDefault2 === x ? -1 : x)} className={`accordion-button faq_button ${activeDefault2 === x ? x : "collapsed"}`} >{" "}{right.title}</button>
                                  </h2>
                                  <div id="collapseOne2" className={`accordion-collapse collapse  ${activeDefault2 === x ? "show" : ""}`}>
                                    <div className="accordion-body">{right.desc}
                                    </div>
                                  </div>
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
