'use client';

import React, { useEffect, useState } from "react";
import IjtemaQurbani from "@/app/components/IjtemaQurbani/ijtemaqurbani";
import { AboutBanner } from "@/app/components/AboutBanner/about-banner";
import QurbaniPage from "@/app/components/IjtemaQurbani/how-we-carry-qurbani";
import ServiceCardsSection from "@/app/components/HomeComponents/ServiceCards/page";
import Banner from "@/app/components/HomeComponents/SecondBanner/banner";
import NewsSection from "@/app/components/NewsSection/news-section";
import { getServiceById, getServicesBySlug } from "@/app/lib/api/services.server";

// export async function generateMetadata({ params }) {
//   const { slug } = params;
//   const serviceData = await getServicesBySlug(slug);

//   if (!serviceData || !serviceData.data) {
//     return {
//       title: "Baitussalam USA",
//       description: "Serving humanity with compassion and faith.",
//     };
//   }

//   const metaTitle =
//     serviceData.data.meta_title || serviceData.data.title || "Baitussalam USA";
//   const metaDescription =
//     serviceData.data.meta_description ||
//     serviceData.data.short_description ||
//     "Learn more about our humanitarian services and initiatives.";

//   return {
//     title: metaTitle,
//     description: metaDescription,
//   };
// }

export default function Page({ params }) {
  
  const { slug } = React.use(params); 

  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchService = async () => {
      try {
        setLoading(true);
        const data = await getServicesBySlug(slug);
        setServiceData(data);
      } catch (error) {
        console.error("Client fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center py-20 font-semibold">
        Loading service...
      </div>
    );
  }

  if (!serviceData) {
    return (
      <div className="text-center py-20 text-red-500 font-semibold">
        Service not found or failed to load.
      </div>
    );
  }


  return (
    <>
      <div className="mb-20">
       <AboutBanner
    title={serviceData.data.banner_heading || serviceData.data.title}
    description={
      serviceData.data.banner_description || serviceData.data.description
    }
  />
      </div>

      <IjtemaQurbani data={serviceData.data} />

      <div className="mb-20 px-4 sm:px-6 md:px-4 lg:px-16 xl:px-0">
        <QurbaniPage data={serviceData.data} />
      </div>

      <div className="mb-10">
        <ServiceCardsSection />
      </div>

      <div className="mb-20">
        <Banner />
      </div>

      <NewsSection />
    </>
  );
}
