import React from 'react'
import Link from 'next/link'

export default function VolunteerDetailsTeam() {
    return (
        //team single area start 
        <div className="team_single_area pt-120 pb-90">
            <div className="container">
                <div className="row align-items-center mb-80">
                    <div className="col-xxl-5 col-xl-5 col-lg-5">
                        <div className="team_single_img">
                            <img src="/img/team/person.jpg" alt="img"/>
                        </div>
                    </div>
                    <div className="col-xxl-7 col-xl-7 col-lg-7">
                        <div className="team_single_info_wrapper pl-50">
                            <div className="section_title">
                                <span className="sub_title sub_title_2">Founder &amp; CDO</span>
                                <h3 className="title title_2">Hawkni K. Hakli</h3>
                            </div>
                            <p className="mb-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis with
                                nostrud exercitation ullamco laboris nisi ut aliquip</p>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="team_person_info">
                                        <Link href="/tell:+09638664967007"><a><strong>Phone:</strong> +09638 664 967007</a></Link>
                                        <Link href="/mailto:example@gmail.com"><a><strong>Email:</strong> example@gmail.com</a></Link>
                                        <Link href="#"><a><strong>Working Area:</strong> African Congo</a></Link>
                                        <Link href="#"><a><strong>Nationality:</strong> American</a></Link>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="team_person_info">
                                        <Link href="#"><a><strong>Website:</strong> webexample.com</a></Link>
                                        <Link href="#"><a><strong>Linkedin:</strong> Webhuntexample</a></Link>
                                        <Link href="#"><a><strong>Address:</strong> 16/A, New Town Hall City, US</a></Link>
                                        <div className="team_info_social">
                                            <Link href="#"><a className="facebook"><i className="fab fa-facebook-f"></i></a></Link>
                                            <Link href="#"><a className="google"><i className="fab fa-google-plus-g"></i></a></Link>
                                            <Link href="#"><a className="twitter"><i className="fab fa-twitter"></i></a></Link>
                                            <Link href="#"><a className="pinterest"><i className="fab fa-pinterest-p"></i></a></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-12">
                        <div className="team_person_description d_flex mb-20">
                            <span className="first_letter">D</span><p>ispensers for Safe Water is underpinned by Nobel Prize-winning research. In 2019, Michael Kremer (Nobel Laureate, Economic Sciences) even
                                contributed one of our dispensers to the Nobel Museum to represent his work! Kremer and colleagues from Harvard and Berkeley tested chlorine
                                dispensers in Kenya against a variety of other water treatment options. They found that 1) chlorine dispensers had much higher usage rates than
                                comparable treatments, and 2) usage stayed high over time.</p>
                        </div>
                        <div className="team_person_description mb-50">
                            <p>But many people around the world don’t have that luxury. Every day, about 1,400 children die from diseases caused by unsafe water and poor sanitation. But it doesn’t have
                                to be that way. There are simple solutions like drilled wells, spring protections and BioSand filters that help provide clean water to communities around the world.</p>

                            <p>In rural parts of low-income countries, most water sources are untreated, meaning that water is not safe to drink directly from the source. Our uniquely-engineered chlorine
                                dispensers are installed next to commonly-used water sources, enabling people to treat their water using a safe and pre-measured dose of chlorine. The chlorine stays
                                active for 2-3 days, ensuring water doesn’t get recontaminated even when stored at home. Adding diluted chlorine to water is a WHO-endorsed approach to improving water
                                quality. In fact, water systems the world over routinely chlorinate water, making it safe to drink.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="team_progress_wrapper mb-30">
                            <span>Work Progress</span>
                            <span className="progress_value theme-1">90%</span>
                            <div className="progress team_progress">
                                <div className="progress-bar theme-1" role="progressbar" style={{"width":"90%"}}  ></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="team_progress_wrapper mb-30">
                            <span>Design Remain</span>
                            <span className="progress_value theme-2">62%</span>
                            <div className="progress team_progress">
                                <div className="progress-bar theme-2" role="progressbar" style={{"width":"62%"}}  ></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="team_progress_wrapper mb-30">
                            <span>UX Process</span>
                            <span className="progress_value theme-6">77%</span>
                            <div className="progress team_progress">
                                <div className="progress-bar theme-6" role="progressbar" style={{"width":"77%"}}  ></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="team_progress_wrapper mb-30">
                            <span>Substince Donation</span>
                            <span className="progress_value theme-1">88%</span>
                            <div className="progress team_progress">
                                <div className="progress-bar theme-1" role="progressbar" style={{"width":"88%"}}  ></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="team_progress_wrapper mb-30">
                            <span>Donation Progress</span>
                            <span className="progress_value theme-2">72%</span>
                            <div className="progress team_progress">
                                <div className="progress-bar theme-2" role="progressbar" style={{"width":"72%"}}  ></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-6 col-md-6">
                        <div className="team_progress_wrapper mb-30">
                            <span>Hospital Bill</span>
                            <span className="progress_value theme-6">92%</span>
                            <div className="progress team_progress">
                                <div className="progress-bar theme-6" role="progressbar" style={{"width":"92%"}}  ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        //team single area end 
    )
}
