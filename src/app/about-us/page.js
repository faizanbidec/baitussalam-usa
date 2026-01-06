import React from "react";
import { AboutBanner } from "../components/AboutBanner/about-banner";
import VisionMissionSection from "../components/VisionMissionSection/vision-mission-section";
import ServiceCardsSection from "../components/HomeComponents/ServiceCards/page";
import ImpactSection from "../components/HomeComponents/ImpactSection/impact-section";
import TeamSection from "../components/OurTeamCompo/team-section";
import LocationsSection from "../components/WhereWeWork/locations-section";
import Banner from "../components/HomeComponents/SecondBanner/banner";
import NewsSection from "../components/NewsSection/news-section";

export const metadata = {
  title: "About US | Baitussalam USA",
  description:
    " Baitussalam USA offers education & orphan support, welfare & relief programs, health aid, and community services. Support vulnerable families via Islamic donation online.",
};

const page = () => {
  return (
    <>
      <AboutBanner title={<>About Us</>} description={<>Baitussalam USA is a non-profit organization dedicated to serving communities through education, healthcare, food aid, and development, bringing hope and dignity with compassion and faith.
</>} className="mb-10" />
      <main>
        <VisionMissionSection />
        <ServiceCardsSection />

        <ImpactSection />
      </main>
      <div className="mb-20">
        <TeamSection />
      </div>
      <div>
        <LocationsSection />
      </div>
      <div className="mb-20">
        <Banner />
      </div>
      <div className=" mb-20">
        <NewsSection />
      </div>
    </>
  );
};

export default page;
