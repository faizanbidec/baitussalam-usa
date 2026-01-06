import React from "react";
import { AboutBanner } from "../components/AboutBanner/about-banner";
import WhyChooseOurProgram from "../components/WhyChooseOurProgram/why-our-program";

import StoriesOfHope from "../components/HomeComponents/StoriesOfHope/page";
import Banner from "../components/HomeComponents/SecondBanner/banner";
import NewsSection from "../components/NewsSection/news-section";
import ProgramsCardsSection from "../components/HomeComponents/OurPrograms/page";

export const metadata = {
  title: "Baitussalam USA Islamic charity programs",
  description:
    " Discover Baitussalam USA Islamic charity programs, a trusted Islamic charity organization empowering lives through education, health, and humanitarian aid.",
};

const page = () => {
  return (
    <>
      <div className="mb-20">
        <AboutBanner
          title={<>Our Program</>}
          description={
            <>
              We are committed to serving communities through impactful Islamic
              charity programs that uplift lives and bring lasting change.
            </>
          }
        />
      </div>
      <WhyChooseOurProgram />
      <ProgramsCardsSection showViewAll={false} />
      <StoriesOfHope />
      <div className="mb-10">
        <Banner />
      </div>
      <div className="max-w-7xl mx-auto">
        <NewsSection />o
      </div>
    </>
  );
};

export default page;
