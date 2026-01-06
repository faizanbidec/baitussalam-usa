import React from 'react'
import AboutSectionLayout from '@/app/components/BlogsPageComponent/blogdetailcompo'
import { AboutBanner } from '@/app/components/AboutBanner/about-banner'

const page = () => {
  return (
    <>
    <AboutBanner title={<>Restoring Hope Amid Devastation</>} description={<>A simple act of kindness became a lifeline for a struggling family, bringing warmth, dignity, and hope back into their lives.
</>} />
    <div className="mb-20 mt-20">
      <AboutSectionLayout />
    </div>
    </>
  )
}

export default page
