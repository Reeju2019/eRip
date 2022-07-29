import * as React from 'react'
import Devices from '../devices/Devices'
import Footer from '../footer/Footer'
import News from '../news/News'
import Offer from '../offer/Offer'
import User from '../userSay/User'
import Vaccinatated from '../vaccinated/Vaccinatated'
import WhyUs from '../whyUs/WhyUs'
import Getfix from './Get-fix/Get-fix'
import HeaderCarousel from './Header/HeaderCarousel'
import OfferCaroulsel from "./OfferCarousel/Offer"


const Home = () => {
  return (
    <>
      <HeaderCarousel />
      <Getfix/>
      <OfferCaroulsel/>
      <Devices />
      <WhyUs />
      <Offer />
      <User />
      <Vaccinatated />
      <News />
      <Footer />
    </>
  )
}

export default Home
