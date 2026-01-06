import React from 'react'
import IjtemaQurbani from '@/app/components/IjtemaQurbani/ijtemaqurbani'
import { AboutBanner } from '../components/AboutBanner/about-banner'
import QurbaniPage from '../components/IjtemaQurbani/how-we-carry-qurbani'
import ServiceCardsSection from '../components/HomeComponents/ServiceCards/page'
import Banner from '../components/HomeComponents/SecondBanner/banner'
import NewsSection from '../components/NewsSection/news-section'

const page = () => {
  return (
    <>
      <div className="mb-20">
        <AboutBanner />
      </div>
      <IjtemaQurbani />
      <div className="mb-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24"> 
        <QurbaniPage />
      </div>
      <div className='mb-10'>
        <ServiceCardsSection />
      </div>
      <div className="mb-20">
        <Banner />
      </div>
      <NewsSection />
    </>
  )
}

export default page