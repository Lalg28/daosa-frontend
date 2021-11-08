import React from 'react'
import Layout2 from '../Components/Layout/Layout2'
import EventBreadCrumb from '../Components/Elements/Event/EventBreadCrumb'
import EventDonationArea from '../Components/Elements/Event/EventDonationArea'
import EventRecentCause from '../Components/Elements/Event/EventRecentCause'

export default function Event() {
    return (
        <Layout2>
            <EventBreadCrumb/>
            <EventRecentCause/>
            <EventDonationArea/>
        </Layout2>
    )
}
