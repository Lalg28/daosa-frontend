import React from 'react'
import Link from 'next/link'
import ImageGallery from './Gallery/ImageGallery'

export default function SideBarFullscreen({ isToggledInfo, toggleTrueFalseInfo }) {
    return (
        <>
            <div className="fix d-none d-lg-block">

                <div className={`offset-sidebar side-info ${isToggledInfo ? "info-open" : ""}`}>

                    <div className="offset-widget offset-logo mb-30 pb-20">
                        <div className="row align-items-center">
                            <div className="col-8"><Link href="/"><a><img src="/img/logo/logo.png" alt="Logo" /></a></Link></div>
                            <div className="col-4 text-end"><button onClick={toggleTrueFalseInfo} className="side-info-close"><i className="fal fa-times"></i></button></div>
                        </div>

                    </div>

                    <div className="offset-widget offset_searchbar mb-30">
                        <form method="get" action="#">
                            <div className="offset_search_content">
                                <input type="search" placeholder="What are you searching for?" />
                                <button type="submit" className="offset_search_button"><i className="fal fa-search"></i></button>
                            </div>
                        </form>
                    </div>

                    <div className="offset-widget mb-40">
                        <div className="info-widget">
                            <h4 className="offset-title mb-20 d-none">About Us</h4>
                            <p className="mb-30">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system and expound the actual teachings of the great explore</p>
                            <Link href="#"><a className="c-btn btn-round-02 d-none">Contact Us</a></Link>
                        </div>
                    </div>

                    <div className="row side-row">
                        <ImageGallery/>
                    </div>

                    <div className="side-map mt-20 mb-30">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29176.030811137334!2d90.3883827!3d23.924917699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1605272373598!5m2!1sen!2sbd"></iframe>
                    </div>



                    <div className="contact-infos mt-30 mb-30">
                        <div className="contact-list mb-30">
                            <h4>Contact Info</h4>
                            <Link href="#"><a className="theme-1"><i className="fal fa-map-marker-alt"></i><span>12/A, Mirnada City Tower, NYC</span></a></Link>
                            <Link href="/tel:088889797697"><a className="theme-2"><i className="fal fa-phone"></i><span>088889797697</span></a></Link>
                            <Link href="/mailto:admin@domain.com"><a className="theme-3"><i className="far fa-envelope"></i><span>admin@domain.com</span></a></Link>

                        </div>

                        <div className="top_social offset_social mt-20 mb-30">
                            <Link href="#"><a target="_blank" className="facebook"><i className="fab fa-facebook-f"></i></a></Link>
                            <Link href="#"><a target="_blank" className="twitter"><i className="fab fa-twitter"></i></a></Link>
                            <Link href="#"><a target="_blank" className="instagram"><i className="fab fa-instagram"></i></a></Link>
                            <Link href="#"><a target="_blank" className="linkedin"><i className="fab fa-linkedin"></i></a></Link>
                            <Link href="#"><a target="_blank" className="youtube"><i className="fab fa-youtube"></i></a></Link>
                            <Link href="#"><a className="pinterest"><i className="fab fa-pinterest-p"></i></a></Link>
                        </div>


                    </div>


                </div>

            </div>

        </>
    )
}
