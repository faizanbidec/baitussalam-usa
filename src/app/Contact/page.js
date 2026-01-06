import React from "react";
import { AboutBanner } from "../components/AboutBanner/about-banner";
import ContactPage from "../components/ContactPageCompo/contact-page";
import MapBanner from "../components/ContactPageCompo/map-section";

export const metadata = {
  title: "Contact Us | Baitussalam USA ",
  description:
    " Connect with Baitussalam USA to make an impact. Ensure your Islamic donation online reaches those in need with trust, transparency, and care",
};

const page = () => {
  return (
    <div className="mb-20">
      <AboutBanner
        className="mb-10"
        title={<>Contact us</>}
        description={
          <>
            Connect with us to make a difference. Together we turn your
            generosity into real hope and lasting change for those who need it
            most.
          </>
        }
      />
      <main>
        <div className="max-w-7xl mx-auto">
          <ContactPage />
        </div>
      </main>
      <MapBanner />
    </div>
  );
};

export default page;
