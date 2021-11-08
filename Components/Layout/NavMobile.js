import React from 'react'
import Link from 'next/link'
import MetisMenu from 'metismenujs'
import {useEffect } from "react";


export default function NavMobile() {

    useEffect(() => {
        new MetisMenu("#metismenu");
    }, []);
    return (
        <>
            <ul className="metismenu text-muted" id="metismenu">
                <li className="active menu-item-has-children"><Link href="/"><a className="has-arrow">Home</a></Link>
                    <ul className="sub-menu">
                        <li><Link href="/"><a className="has-arrow">Home 1</a></Link>
                            <ul>
                            <li><Link href="/"><a>Home 1</a></Link></li>
                                <li><Link href="/"><a>Home 1</a></Link></li>
                                <li><Link href="/"><a>Home 1</a></Link></li>
                            </ul>
                        </li>
                        <li><Link href="/index-2"><a>Home 2</a></Link></li>
                        <li><Link href="/index-3"><a>Home 3</a></Link></li>
                    </ul>
                </li>
                <li><Link href="/about"><a>About</a></Link></li>
                <li className="menu-item-has-children"><Link href="/cause-details"><a>Causes</a></Link>
                    <ul className="sub-menu">
                        <li><Link href="/cause-details"><a>Causes</a></Link></li>
                        <li><Link href="/cause-details"><a>Cause Details</a></Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link href="#"><a>Pages</a></Link>
                    <ul className="sub-menu">
                        <li><Link href="/event"><a>Events</a></Link></li>
                        <li><Link href="/event-details"><a>Events Details</a></Link></li>
                        <li><Link href="/volunteer"><a>Volunteer</a></Link></li>
                        <li><Link href="/volunteer-details"><a>Volunteer Details</a></Link></li>
                        <li><Link href="/donation"><a>Donation</a></Link></li>
                        <li><Link href="/mission"><a>Mission</a></Link></li>
                        <li><Link href="/faq"><a>Faq</a></Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children"><Link href="/blog"><a>News</a></Link>
                    <ul className="sub-menu">
                        <li><Link href="/blog"><a>News</a></Link></li>
                        <li><Link href="/blog-details"><a>News Details</a></Link></li>
                    </ul>
                </li>

                <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
        </>
    )
}
