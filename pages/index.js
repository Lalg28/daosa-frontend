import React from "react";
import Layout2 from "../Components/Layout/Layout2";
import SupportArea from "../Components/Elements/Home/SupportArea";
import FeaturedArea from "../Components/Elements/Home/FeaturedArea";
import NewsFeed from "../Components/Elements/Home/NewsFeed";
import CausesArea from "../Components/Elements/Home/CausesArea";
import AboutArea from "../Components/Elements/Home/AboutArea";
import SliderArea from "../Components/Elements/Home/SliderArea";
import CTAArea from "../Components/Elements/Home/CTAArea";

export default function Home() {
  return (
    <Layout2>
      <main>
        <SliderArea />
        <CTAArea />
        <AboutArea />
        <CausesArea />

        <SupportArea />
        <FeaturedArea />
        <NewsFeed />
      </main>
    </Layout2>
  );
}
