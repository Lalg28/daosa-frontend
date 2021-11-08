import React from 'react'

export default function VolunteerNewsletter() {
    return (
        //Newsletter cta area start

             <div className="newsletter_cta_area">
                 <div className="container">
                     <div className="row">
                         <div className="col-xxl-12">
                             <div className="newsletter_cta_wrapper">
                                <div className="nfeed_title nfeed_title_single">
                                    <span className="sub_title sub_title_2">Newsletter</span>
                                    <h3 className="n_title n_title_single mb-0">Get Weekly Newsletter</h3>
                                </div>
                                <div className="newsletter_content newsletter_content_single">
                                    <input type="text" placeholder="Enter Full Name" className="rad-30"/>
                                    <input type="email" placeholder="Enter Email" className="rad-30"/>
                                    <button type="submit" className="rad-30 g_btn to_left">Subscribe Now <span></span></button>
                                </div>
                             </div>
                         </div>
                     </div>
                 </div>
             </div>
             //Newsletter cta area end
    )
}
