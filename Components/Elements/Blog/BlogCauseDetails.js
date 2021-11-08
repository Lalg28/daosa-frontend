import React from 'react'
import VideoPopUp from '../VideoPopUp'
import { useState } from 'react'
import Link from 'next/link'

export default function BlogCauseDetails() {
    const [isShow, setShow] = useState(false)
    return (        
        <div className="blog_details_area pt-120 pb-80">
            <div className="container">
                <div className="row">
                    <div className="col-xxl-8 col-xl-8 col-lg-7">
                        <div className="blog_area mb-40">
                            <div className="blog_image_wrapper mb-40">
                                <div className="blog_image">
                                    <Link href="/blog-details"><a className="w_img"><img src="/img/news/blog_image.jpg" alt="img" /></a></Link>
                                    <div className="admin_meta has_abs">
                                        <Link href="/blog-details"><a className="blog_cat">Business</a></Link>
                                        <div className="blog_admin">
                                            <Link href="/volunteer-details"><a><img src="/img/news/admin.jpg" alt="img" /></a></Link>
                                            <Link href="/volunteer-details"><a className="admin_by">By Hetmayer</a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog_content">
                                    <h4 className="blog_title"><Link href="/blog-details"><a>Become a monthly giver and save a child’s life today</a></Link></h4>
                                    <p>Novia&apos;s spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.</p>
                                    <div className="blog_meta has_border_top">
                                        <Link href="#"><a className="eye sep"><i className="fal fa-eye"></i>100 Views</a></Link>
                                        <Link href="#"><a className="comments sep"><i className="fal fa-comments"></i>30 Comments</a></Link>
                                        <Link href="#"><a className="calendar"><i className="fal fa-calendar-alt"></i>24 March 2022</a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="blog_video_wrapper mb-40">
                                <div className="blog_image">
                                    <Link href="/blog-details"><a className="w_img"><img src="/img/news/blog_video.jpg" alt="img" /></a></Link>
                                    <div style={{ "cursor": "pointer" }} onClick={setShow} className="video_play has_abs"><i className="fal fa-play"></i></div>
                                    <div className="admin_meta has_abs">
                                        <Link href="/blog-details"><a className="blog_cat">Medical</a></Link>
                                        <div className="blog_admin">
                                            <Link href="/volunteer-details"><a><img src="/img/news/admin.jpg" alt="img" /></a></Link>
                                            <Link href="/volunteer-details"><a className="admin_by">By Mark</a></Link>
                                        </div>
                                    </div>
                                    {isShow && <VideoPopUp setShow={() => setShow(false)} src={"https://www.youtube.com/embed/LiydZUP8__I"} />}
                                </div>
                                <div className="blog_content">
                                    <h4 className="blog_title"><Link href="/blog-details"><a>What takes an online fundraising site from good to great?</a></Link></h4>
                                    <p>Novia&apos;s spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.</p>
                                    <div className="blog_meta has_border_top">
                                        <Link href="#"><a className="eye sep"><i className="fal fa-eye"></i>150 Views</a></Link>
                                        <Link href="#"><a className="comments sep"><i className="fal fa-comments"></i>20 Comments</a></Link>
                                        <Link href="#"><a className="calendar"><i className="fal fa-calendar-alt"></i>24 March 2021</a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="blog_image_wrapper mb-40">
                                <div className="blog_image">
                                    <Link href="/blog-details"><a className="w_img"><img src="/img/news/blog_image2.jpg" alt="img" /></a></Link>
                                    <div className="admin_meta has_abs">
                                        <Link href="/blog-details"><a className="blog_cat">Education</a></Link>
                                        <div className="blog_admin">
                                            <Link href="/volunteer-details"><a><img src="/img/news/admin.jpg" alt="img" /></a></Link>
                                            <Link href="/volunteer-details"><a className="admin_by">By Salim</a></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="blog_content">
                                    <h4 className="blog_title"><Link href="/blog-details"><a>Themepure always offers for everybody to enrich knowledge by yourself</a></Link></h4>
                                    <p>Novia&apos;s spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.</p>
                                    <div className="blog_meta has_border_top">
                                        <Link href="#"><a className="eye sep"><i className="fal fa-eye"></i>300 Views</a></Link>
                                        <Link href="#"><a className="comments sep"><i className="fal fa-comments"></i>30 Comments</a></Link>
                                        <Link href="#"><a className="calendar"><i className="fal fa-calendar-alt"></i>21 March 2022</a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="blog_audio_wrapper mb-40">
                                <div className="blog_audio_img">
                                    <Link href="/blog-details"><a className="w_img"><img src="/img/news/blog_audio.jpg" alt="img" /></a></Link>
                                    <Link href="/blog-details"><a className="audio_logo_abs"><img src="/img/news/audio_logo.png" alt="" /></a></Link>
                                </div>
                                <div className="blog_content">
                                    <h4 className="blog_title"><Link href="/blog-details"><a>How to Survive a Recession When the Future Feels Uncertain</a></Link></h4>
                                    <p>Novia&apos;s spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.</p>
                                    <div className="blog_meta has_border_top">
                                        <Link href="#"><a className="eye sep"><i className="fal fa-eye"></i>100 Views</a></Link>
                                        <Link href="#"><a className="comments sep"><i className="fal fa-comments"></i>30 Comments</a></Link>
                                        <Link href="#"><a className="calendar"><i className="fal fa-calendar-alt"></i>14 March 2022</a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="blog_noimg_wrapper mb-40">
                                <div className="blog_content noimg_content">
                                    <h4 className="blog_title"><Link href="/blog-details"><a>All People can help others but can not do normally for a social restriction</a></Link></h4>
                                    <p>Novia&apos;s spaciously two bedroom apartments are perfect for families and even business partners. Look out into the Manhattan skyline from the open fully equipped kitchen.</p>
                                    <div className="blog_meta has_border_top">
                                        <Link href="#"><a className="eye sep"><i className="fal fa-eye"></i>100 Views</a></Link>
                                        <Link href="#"><a className="comments sep"><i className="fal fa-comments"></i>30 Comments</a></Link>
                                        <Link href="#"><a className="calendar"><i className="fal fa-calendar-alt"></i>24 March 2022</a></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="blog_blockquote_wrapper bg_cover mb-40" data-background="/img/news/blog_quote.jpg">
                                <div className="blog_blockquote_content">
                                    <i className="fas fa-quote-left"></i>
                                    <h4 className="blog_title"><Link href="/blog-details"><a>Dharma Home Suites at Novia offers fully plain
                                        furnished</a></Link></h4>
                                </div>
                            </div>

                            <div className="page_pagination text-center mt-10">
                                <Link href="#"><a><i className="fal fa-chevron-double-left"></i></a></Link>
                                <Link href="#"><a>1</a></Link>
                                <Link href="#"><a className="current">2</a></Link>
                                <Link href="#"><a>1</a></Link>
                                <Link href="#"><a>...</a></Link>
                                <Link href="#"><a>10</a></Link>
                                <Link href="#"><a><i className="fal fa-chevron-double-right"></i></a></Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-4 col-lg-5">
                        <div className="blog_sidebar_wrapper pl-15 mb-40">

                            <div className="sidebar_widget has_border about_widget mb-40">
                                <div className="sidebar_title">
                                    <h4 className="sidebar_title_text has_border"><span className="theme-1"></span>About Me</h4>
                                </div>
                                <div className="about_widget_content text-center">
                                    <div className="widget_about_img">
                                        <Link href="/volunteer-details"><a><img src="/img/news/blog_person.jpg" alt="img" /></a></Link>
                                    </div>

                                    <h6 className="about_person_title"><Link href="/volunteer-details"><a>Rosalina D. Willaimson</a></Link></h6>
                                    <p>Lorem ipsum dolor sit amet, consect etur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                                    <div className="widget_social">
                                        <Link href="#"><a className="facebook"><i className="fab fa-facebook-f"></i></a></Link>
                                        <Link href="#"><a className="twitter"><i className="fab fa-twitter"></i></a></Link>
                                        <Link href="#"><a className="behance"><i className="fab fa-behance"></i></a></Link>
                                        <Link href="#"><a className="linkedin"><i className="fab fa-linkedin-in"></i></a></Link>
                                        <Link href="#"><a className="youtube"><i className="fab fa-youtube"></i></a></Link>

                                    </div>
                                </div>
                            </div>

                            <div className="sidebar_widget has_border search_widget mb-40">
                                <div className="sidebar_title">
                                    <h4 className="sidebar_title_text has_border"><span className="theme-1"></span>Search Here</h4>
                                </div>
                                <div className="search_widget_content">
                                    <form action="#">
                                        <input type="text" placeholder="Search your keyword..." />
                                        <button type="submit"><i className="fal fa-search"></i></button>
                                    </form>
                                </div>
                            </div>


                            <div className="sidebar_widget has_border feed_widget mb-40">
                                <div className="sidebar_title">
                                    <h4 className="sidebar_title_text has_border"><span className="theme-1"></span>Popular Feeds</h4>
                                </div>
                                <div className="feed_widget_content">
                                    <div className="single_feed_widget has_border">
                                        <div className="feed_widget_img"><Link href="/blog-details"><a><img src="/img/news/blog_feed1.jpg" alt="img" /></a></Link></div>
                                        <div className="feed_widget_text">
                                            <h5 className="feed_widget_title theme-1"><Link href="/blog-details"><a>How to improve knowledge for myself</a></Link></h5>
                                            <Link href="#"><a className="feed_widget_date theme-1"><i className="fal fa-calendar-alt"></i>24th March 2022</a></Link>
                                        </div>
                                    </div>
                                    <div className="single_feed_widget has_border">
                                        <div className="feed_widget_img"><Link href="/blog-details"><a><img src="/img/news/blog_feed2.jpg" alt="img" /></a></Link></div>
                                        <div className="feed_widget_text">
                                            <h5 className="feed_widget_title theme-1"><Link href="/blog-details"><a>Everybody needs to know how to help myself</a></Link></h5>
                                            <Link href="#"><a className="feed_widget_date theme-1"><i className="fal fa-calendar-alt"></i>24th March 2022</a></Link>
                                        </div>
                                    </div>
                                    <div className="single_feed_widget has_border">
                                        <div className="feed_widget_img"><Link href="/blog-details"><a><img src="/img/news/blog_feed3.jpg" alt="img" /></a></Link></div>
                                        <div className="feed_widget_text">
                                            <h5 className="feed_widget_title theme-1"><Link href="/blog-details"><a>Good foods available on behalf of fundraise</a></Link></h5>
                                            <Link href="#"><a className="feed_widget_date theme-1"><i className="fal fa-calendar-alt"></i>24th Sep 2021</a></Link>
                                        </div>
                                    </div>
                                    <div className="single_feed_widget">
                                        <div className="feed_widget_img"><Link href="/blog-details"><a><img src="/img/news/blog_feed4.jpg" alt="img" /></a></Link></div>
                                        <div className="feed_widget_text">
                                            <h5 className="feed_widget_title theme-1"><Link href="/blog-details"><a>Keep focus on you to find out yourself</a></Link></h5>
                                            <Link href="#"><a className="feed_widget_date theme-1"><i className="fal fa-calendar-alt"></i>24th March 2022</a></Link>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div className="sidebar_widget has_border categories_widget mb-40">
                                <div className="sidebar_title">
                                    <h4 className="sidebar_title_text has_border"><span className="theme-1"></span>Categories</h4>
                                </div>
                                <ul>
                                    <li><Link href="#"><a>Business</a></Link></li>
                                    <li><Link href="#"><a>Consultant</a></Link></li>
                                    <li><Link href="#"><a>Creative</a></Link></li>
                                    <li><Link href="#"><a>UI/UX</a></Link></li>
                                    <li><Link href="#"><a>Technology</a></Link></li>
                                </ul>
                            </div>

                            <div className="sidebar_widget has_border instagram_widget mb-40">
                                <div className="sidebar_title">
                                    <h4 className="sidebar_title_text has_border"><span className="theme-1"></span>Instagram Feeds</h4>
                                </div>
                                <div className="instagram_widget_img_wrapper">
                                    <Link href="#"><a><img src="/img/news/insta1.jpg" alt="img" /></a></Link>
                                    <Link href="#"><a><img src="/img/news/insta2.jpg" alt="img" /></a></Link>
                                    <Link href="#"><a><img src="/img/news/insta3.jpg" alt="img" /></a></Link>
                                    <Link href="#"><a><img src="/img/news/insta4.jpg" alt="img" /></a></Link>
                                    <Link href="#"><a><img src="/img/news/insta5.jpg" alt="img" /></a></Link>
                                    <Link href="#"><a><img src="/img/news/insta6.jpg" alt="img" /></a></Link>
                                    <Link href="#"><a><img src="/img/news/insta7.jpg" alt="img" /></a></Link>
                                    <Link href="#"><a><img src="/img/news/insta8.jpg" alt="img" /></a></Link>
                                    <Link href="#"><a><img src="/img/news/insta9.jpg" alt="img" /></a></Link>
                                    <Link href="#"><a><img src="/img/news/insta10.jpg" alt="img" /></a></Link>
                                    <Link href="#"><a><img src="/img/news/insta11.jpg" alt="img" /></a></Link>
                                    <Link href="#"><a><img src="/img/news/insta12.jpg" alt="img" /></a></Link>
                                </div>
                            </div>

                            <div className="sidebar_widget has_border tagcloud_widget mb-40">
                                <div className="sidebar_title">
                                    <h4 className="sidebar_title_text has_border"><span className="theme-1"></span>Tags</h4>
                                </div>
                                <div className="tagcloud">
                                    <Link href="#"><a>Popular</a></Link>
                                    <Link href="#"><a>Design</a></Link>
                                    <Link href="#"><a>UX</a></Link>
                                    <Link href="#"><a>UX</a></Link>
                                    <Link href="#"><a>Usability</a></Link>
                                    <Link href="#"><a>Develop</a></Link>
                                    <Link href="#"><a>Icon</a></Link>
                                    <Link href="#"><a>Icon</a></Link>
                                    <Link href="#"><a>Business</a></Link>
                                    <Link href="#"><a>Consult</a></Link>
                                    <Link href="#"><a>Kit</a></Link>
                                    <Link href="#"><a>Kit</a></Link>
                                    <Link href="#"><a>Keyboard</a></Link>
                                    <Link href="#"><a>Mouse</a></Link>
                                    <Link href="#"><a>Tech</a></Link>
                                    <Link href="#"><a>Tech</a></Link>
                                </div>
                            </div>

                            <div className="sidebar_widget has_border addverise_widget mb-40">
                                <div className="sidebar_title">
                                    <h4 className="sidebar_title_text has_border"><span className="theme-1"></span>Sponsor Adds</h4>
                                </div>
                                <div className="advertise_img">
                                    <Link href="/blog-details"><a><img src="/img/news/blog_add.jpg" alt="img" /></a></Link>
                                    <div className="advertise_abs">
                                        <span>270x240</span>
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
