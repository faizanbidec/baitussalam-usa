import React from "react";
import { AboutBanner } from "../components/AboutBanner/about-banner";
import TransformingLives from "../components/ServicesPageComponents/transforming-lives";
import ProgramsSectionService from "../components/ServicesPageComponents/our-programs-servicepage";
import TogetherWeAchieve from "../components/ServicesPageComponents/Together-we-acheive";
import Banner from "../components/HomeComponents/SecondBanner/banner";
import NewsSection from "../components/NewsSection/news-section";
import ServiceCardsSection from "../components/HomeComponents/ServiceCards/page";

export const metadata = {
  title: "Baitussalam USA Services | Education & Orphan Support, Welfare & Relief Programs",
  description:
    " Discover Baitussalam USA's impactful humanitarian aid programs, education and orphan support, welfare and relief programs, health and medical aid, and community service programs.",
};

const page = () => {
  return (
    <>
      <div className="mb-20">
        <AboutBanner   title={<>Our Services</>}
          description={
            <>
              Baitussalam USA continues the global legacy of Baitussalam Welfare Trust, bringing impactful humanitarian aid programs, education and orphan support, and community service programs to American neighborhoods. Guided by Islamic values, we strive to create meaningful change, one life at a time.

            </>
          } />
      </div>
      <TransformingLives />
      <ServiceCardsSection  showViewAll={false} />
      <div>
        <TogetherWeAchieve />
      </div>
      <div className="mb-10">
        <Banner />
      </div>
      <div className="max-w-7xl mx-auto mb-10 ">
        <NewsSection />
      </div>
    </>
  );
};

export default page;
