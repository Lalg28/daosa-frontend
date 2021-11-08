import React from 'react'
import Link from 'next/link'

export default function MissionIconBox() {
    return (
        //Icon Box area start
            <div className="icon_box_area pt-120 pb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <Link href="/cause"><a className="single_iconbox text-center theme-1 mb-40">
                                <i className="flaticon-lotus-flower"></i>
                                <h5 className="icon_title">Community & Culture</h5>
                            </a></Link>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <Link href="/cause"><a className="single_iconbox text-center theme-2 mb-40">
                                <i className="flaticon-graduation-cap"></i>
                                <h5 className="icon_title">Family & Education</h5>
                            </a></Link>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <Link href="/cause"><a className="single_iconbox text-center theme-3 mb-40">
                                <i className="flaticon-care"></i>
                                <h5 className="icon_title">Charity & Causes</h5>
                            </a></Link>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <Link href="/cause"><a className="single_iconbox text-center theme-5 mb-40">
                                <i className="flaticon-dumbbell"></i>
                                <h5 className="icon_title">Sports & Fitness</h5>
                            </a></Link>
                        </div>
                        <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-sm-6">
                            <Link href="/cause"><a className="single_iconbox text-center theme-6 mb-40">
                                <i className="flaticon-creativity"></i>
                                <h5 className="icon_title">Conference & Ideas</h5>
                            </a></Link>
                        </div>
                    </div>
                </div>
            </div>
              //Icon Box area end
    )
}
