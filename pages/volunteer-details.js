import React from 'react'
import Layout2 from '../Components/Layout/Layout2'
import VolunteerDetailsArea from '../Components/Elements/VolunteerDetails/VolunteerDetailsArea'
import VolunteerDetailsTeam from '../Components/Elements/VolunteerDetails/VolunteerDetailsTeam'

export default function VolunteerDetails() {
    return (
        <Layout2>
            <VolunteerDetailsArea/>
            <VolunteerDetailsTeam/>
        </Layout2>
    )
}
