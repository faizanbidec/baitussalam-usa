import React from 'react'
import { AboutBanner } from '../components/AboutBanner/about-banner'
import NewsSectionBlogPage from '../components/BlogsPageComponent/blogpagenewssection'

const page = () => {
  return (
    <div>
      <div className="mb-20">
        <AboutBanner title={<>Our Blog</>} description={<>Explore inspiring stories, updates, and insights from Baitussalam’s initiatives, showcasing impact, community service, and the spirit of giving.

</>}/>
      </div>
        <NewsSectionBlogPage />
    </div>
  )
}

export default page
