import React from 'react'
import Link from 'next/link'

export default function SubscribsArea3() {
    return (
        // Subscribe area start 

            <div className="subscribe_area">
                <div className="container">
                    <div className="footer_subscribe_wrapper">
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6">
                                <div className="hotline_wrapper mb-30">
                                    <Link href="tel:98798798797"><a><img src="/img/footer/cell_icon.png" alt="img"/></a></Link>
                                    <div className="hotline_text">
                                        <span className="sub_hottext">Support Hotline: </span>
                                        <span className="cell_number"><Link href="/tel:98798798797"><a>987 987 987 97</a></Link> - <Link href="/tel:03465476578"><a>034 654 765 78</a></Link></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 text-end">
                                <div className="subscribe_form mb-30">
                                    <form action="#">
                                        <input type="text" placeholder="Enter email address"/>
                                        <button className="submit_btn abs_submit" type="submit">Subscribe Now</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            //subscribe area end
    )
}
