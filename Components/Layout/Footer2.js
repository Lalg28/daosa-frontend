import React from 'react'
import Link from 'next/link'

export default function Footer2() {
    return (
        // <!-- Footer Area Start -->

        <footer>
            <div className="footer_top_area footer_top_2">
                <div className="footer_top_wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-7 col-sm-7">
                                <div className="footer_widget footer_about mb-50">
                                   <div className="footer_logo mb-35">
                                       <Link href="/"><a className="animation"><img src="/img/logo/logo_white.png" alt="img"/></a></Link>
                                   </div>
                                    <p className="mb-30">Eaque ipsa quae ab illo inventore veris 
                                        quasi architecto beatae vitae dicta exp
                                        enim ipsam voluptatem.</p>
                                        <div className="footer_social_2">
                                            <Link href="#"><a className="facebook"><i className="fab fa-facebook-f"></i></a></Link>
                                            <Link href="#"><a className="twitter"><i className="fab fa-twitter"></i></a></Link>
                                            <Link href="#"><a className="behance"><i className="fab fa-behance"></i></a></Link>
                                            <Link href="#"><a className="youtube"><i className="fab fa-youtube"></i></a></Link>
                                         </div>
                                </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-5 col-sm-5">
                                <div className="footer_widget mb-50 pl_15">
                                    <div className="footer_widget_title mb-25">
                                        <h4 className="footer_title footer_title_2">Useful links</h4>
                                    </div>
                                    <div className="footer_links footer_links_2">
                                        <ul>
                                            <li><Link href="/about"><a>About Us</a></Link></li>
                                            <li><Link href="/volunteer"><a>Meet The Team</a></Link></li>
                                            <li><Link href="/volunteer"><a>Volenteers</a></Link></li>
                                            <li><Link href="/about"><a>Service Provided</a></Link></li>
                                            <li><Link href="/blog"><a>Latest News</a></Link></li>
                                            <li><Link href="/contact"><a>Contact Us</a></Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-7 col-sm-7"> 
                                <div className="footer_widget mb-50 pl_25">
                                    <div className="footer_widget_title mb-25">
                                        <h4 className="footer_title footer_title_2">Donations</h4>
                                    </div>
                                    <div className="footer_links footer_links_2">
                                        <ul>
                                            <li><Link href="/donation"><a>How to Donate</a></Link></li>
                                            <li><Link href="/donation"><a>Donation List</a></Link></li>
                                            <li><Link href="/cause"><a>Recent Causes</a></Link></li>
                                            <li><Link href="/faq"><a>FAQ</a></Link></li>
                                        </ul>
                                    </div>
                                    <div className="footer_btn">
                                        <Link href="/about"><a className="g_btn fbtn_2 to_right1 p-40 rad-50">Get Support<span></span></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-5 col-sm-5">
                                <div className="footer_widget footer_news mb-50">
                                    <div className="footer_widget_title mb-25">
                                        <h4 className="footer_title footer_title_2">Keep In Touch</h4>
                                    </div>
                                    <div className="footer_info_content">
                                        <p><span><strong>Address :</strong>44 New Design Street, <br/> Melbourne 005</span></p>
                                        <p><Link href="/tel:800433633"><a><span><strong>Phone :</strong>(01) 800 433 633</span></a></Link></p>
                                        <p><Link href="/mailto:info@Example.com"><a><span><strong>Email :</strong>info@Example.com</span></a></Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12">
                                <div className="fcta_sigle has_bg mb-30">
                                    <img src="/img/footer/fcta2_1.png" alt="img"/>
                                    <div className="fcta_text">
                                        <h4>Help & Support Now</h4>
                                        <span>Might as well say Would you Could be you be mine? </span>
                                    </div>
                                    <div className="fcta_button">
                                        <Link href="/donation"><a className="g_btn fca_btn1 to_right2 p-40 rad-50">Donate <span></span></a></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-sm-12">
                                <div className="fcta_sigle has_bg mb-30">
                                    <img src="/img/footer/fcta2_2.png" alt="img"/>
                                    <div className="fcta_text">
                                        <h4>Join as Volunteer</h4>
                                        <span>Might as well say Would you Could be you be mine? </span>
                                    </div>
                                    <div className="fcta_button">
                                        <Link href="/about"><a className="g_btn fca_btn to_left p-40 rad-50">Join <span></span></a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer_copyright_area">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12 text-center">
                            <p>Copyright © 2021 All Rights Reserved by <strong><Link href="#"><a>ThemePure</a></Link></strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


         //<!-- Footer Area End -->
    )
}
