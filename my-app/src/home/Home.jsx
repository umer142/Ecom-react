import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import CategoryShowCase from './CategoryShowCase'
import Regester from './Regester'
import LocationSpread from './LocationSpread'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponsor from './Sponsor'

const Home = () => {
  return (
    <div>
      <Banner/>
      <HomeCategory/>
      <CategoryShowCase/>
      <Regester/>
      <LocationSpread/>
      <AboutUs/>
      <AppSection/>
      <Sponsor/>
    </div>
  )
}

export default Home
