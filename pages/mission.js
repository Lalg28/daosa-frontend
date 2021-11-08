import React from 'react'
import Layout2 from '../Components/Layout/Layout2'
import MissionAbout from '../Components/Elements/Mission/MissionAbout'
import MissionAboutSingle from '../Components/Elements/Mission/MissionAboutSingle'
import MissionBreadCrumb from '../Components/Elements/Mission/MissionBreadCrumb'
import MissionIconBox from '../Components/Elements/Mission/MissionIconBox'
import MissionSupport from '../Components/Elements/Mission/MissionSupport'

export default function Mission() {
    return (
        <Layout2>
            <MissionBreadCrumb/>
            <MissionAbout/>
            <MissionSupport/>
            <MissionAboutSingle/>
            <MissionIconBox/>
        </Layout2>
    )
}
