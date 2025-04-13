import React from 'react'
import Hero from '../components/Hero'
import Homeaboutus from '../components/Homeaboutus'
import HomeServices from '../components/HomeServices'
import Eligibilityform from '../components/Eligibilityform'
import HomeBenfits from '../components/HomeBenfits'
import Team from '../components/team'
function Home() {
  return (
    <div>
      <Hero />
      <Homeaboutus />
      <HomeServices />
      <Eligibilityform />
      <HomeBenfits />
      <Team />
    </div>
  )
}

export default Home
