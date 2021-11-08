import React from 'react'
import FAQAccordion from '../Components/Elements/FAQ/FAQAccordion'
import FAQBreadCrumb from '../Components/Elements/FAQ/FAQBreadCrumb'
import FAQGetInTouch from '../Components/Elements/FAQ/FAQGetInTouch'
import FAQNewsFeed from '../Components/Elements/FAQ/FAQNewsFeed'
import Layout2 from '../Components/Layout/Layout2'

export default function faq() {
    return (
        <Layout2>
            <FAQBreadCrumb />
            <FAQAccordion />
            <FAQGetInTouch />
            <FAQNewsFeed />
        </Layout2>
    )
}
