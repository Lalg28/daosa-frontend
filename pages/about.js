import React from 'react'
import AboutAboutArea from '../Components/Elements/About/AboutAboutArea'
import AboutBreadCumb from '../Components/Elements/About/AboutBreadCumb'
import AboutFaqArea from '../Components/Elements/About/AboutFaqArea'
import AboutFeatureArea from '../Components/Elements/About/AboutFeatureArea'
import AboutVideoArea from '../Components/Elements/About/AboutVideoArea'
import Layout2 from '../Components/Layout/Layout2'

export default function About() {
    return (
        <Layout2>
            <AboutBreadCumb/>
            <AboutAboutArea/>
            <AboutFeatureArea/>
            <AboutVideoArea/>
            <AboutFaqArea/>
        </Layout2>
    )
}
