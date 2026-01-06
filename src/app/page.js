import Image from "next/image";
import DonationBar from "./components/HomeComponents/DonationBarHomeCompo/page";
import SectionThree from "./components/HomeComponents/AboutUsHomeCompo/page";
import ServiceCardsSection from "./components/HomeComponents/ServiceCards/page";
import DonationSection from "./components/HomeComponents/DonationSection/donation-section";
import ProgramsCardsSection from "./components/HomeComponents/OurPrograms/page";
import StoriesOfHope from "./components/HomeComponents/StoriesOfHope/page";
import ImpactSection from "./components/HomeComponents/ImpactSection/impact-section";
import Banner from "./components/HomeComponents/SecondBanner/banner";
import NewsSection from "./components/NewsSection/news-section";
import { Hero } from "./components/HomeComponents/Hero";
import VideoSliderSection from "./components/VideoSliderCompo/VideoSlider";
import GalleryPage from "./components/HomeComponents/GallerySectionCompo/gallery-section";
import UpcomingCampaigns from "./components/HomeComponents/CampaignsSectionCompo/campaign-section";
import EmpowerWomenSection from "./components/HomeComponents/WomenEmpowermentCompo/EmpowerWomenSection";

export const metadata = {
  title: "Islamic Charity & Online Donation Welfare | Baitussalam USA",
  description: "Support Baitussalam USA, a trusted Islamic charity US. Donate online for Zakat, Sadqah, and welfare causes. Join us in spreading hope and compassion globally.",
};
export default function Home() {
  return (
    <div className="relative">
    
      <Hero />
      <div className="px-10 sm:px-6 md:px-18 mt-20 sm:mt-52 md:mt-40">
        <DonationBar />
      </div>
      <div className="relative">
      <main className="mt-10 px-10 sm:px-4 md:px-0 ">
        
        <SectionThree />
      </main>
      {/* <img src="/homeLine1.png" alt="" className="absolute left-[42%] top-[20%] z-10"/> */}
      <ServiceCardsSection showViewAll={true}  />
      </div>
      <VideoSliderSection />
      <div className="mt-20">
        <DonationSection />
      </div>
      <div className="mb-20">
      <ProgramsCardsSection  showViewAll={true} />
      </div>
      <div className="mb-10">
        <EmpowerWomenSection />
      </div>
      {/* <main className="container mx-auto px-2 sm:px-6 lg:px-20"> */}
        <ImpactSection />
      {/* </main> */}
      

        <StoriesOfHope />
    
      
      {/* <UpcomingCampaigns /> */}
          
      <div className="mb-10 ">
        <GalleryPage />
      </div>
      <div className="mb-20 w-full">
        <Banner />
      </div>
      <div className="mb-20">
        <NewsSection />
      </div>
    </div>
  );
}
