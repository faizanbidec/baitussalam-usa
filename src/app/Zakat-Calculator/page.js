import React from 'react'
import { AboutBanner } from "../components/AboutBanner/about-banner";
import ZakatCalculator from '../components/DonationPageComponents/ZakatCalculator';
import ProgramsCardsDonationSection from './programscardsecition2';
import ProgramsCardsSection from '../components/HomeComponents/OurPrograms/page';

export const metadata = {
  title: "Accurate Online Zakat Calculator & Islamic Zakat Guide",
  description:
    " Calculate your Zakat online with accuracy. Our trusted Zakat Calculator follows authentic Islamic principles to help you give the right amount with confidence.",
};

const page = () => {
  return (
    <>
        <div className="mb-20">
        <AboutBanner   title={<>Online Zakat Calculator</>}
          description={
            <>
              Easily calculate your Zakat in minutes, ensure accurate giving, and fulfill your obligation with confidence.
            </>
          } />
      </div>
      <ZakatCalculator/>
        <div className="mb-20 mt-20">
          <ProgramsCardsSection showViewAll={false} />
        </div>
    </>
  )
}

export default page