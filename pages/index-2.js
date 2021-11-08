import React from 'react'
import Layout2 from '../Components/Layout/Layout2'
import SliderArea from '../Components/Elements/Home2/SliderArea'
import IconBox from '../Components/Elements/Home2/IconBox'
import EventCountArea from '../Components/Elements/Home2/EventCountArea'
import AboutArea2 from '../Components/Elements/Home2/AboutArea2'
import CausesArea2 from '../Components/Elements/Home2/CausesArea2'
import DonationArea2 from '../Components/Elements/Home2/DonationArea2'
import BrandArea2 from '../Components/Elements/Home2/BrandArea2'
import TeamArea2 from '../Components/Elements/Home2/TeamArea2'
import ChooseUsArea from '../Components/Elements/Home2/ChooseUsArea'
import NewsFeeds2 from '../Components/Elements/Home2/NewsFeeds2'

export default function Index2() {

    return (
        <>
            <Layout2>
                <main>
                    <SliderArea/>
                    <IconBox/>
                    <EventCountArea/>
                    <AboutArea2/>
                    <CausesArea2/>
                    <DonationArea2/>
                    <BrandArea2/>
                    <TeamArea2/>
                    <ChooseUsArea/>
                    <NewsFeeds2/>
                </main>
            </Layout2>
        </>
    )
}
