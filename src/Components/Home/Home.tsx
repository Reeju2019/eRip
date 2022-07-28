<<<<<<< HEAD
import * as React from "react";
import Devices from "../devices/Devices";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import News from "../news/News";
import Offer from "../offer/Offer";
import User from "../userSay/User";
import Vaccinatated from "../vaccinated/Vaccinatated";
import WhyUs from "../whyUs/WhyUs";

const Home = () => {
  return (
    <>
    <Header/>
      <Devices />
      <WhyUs />
      <Offer />
      <User />
      <Vaccinatated />
      <News />
      <Footer />
=======
import Getfix from './Get-fix/Get-fix'
import HeaderCarousel from './Header/HeaderCarousel'
import Offer from './OfferCarousel/Offer'

const Home: React.FunctionComponent = () => {
  return (
    <>
      <HeaderCarousel />
      <Getfix />
      <Offer />
>>>>>>> 66a5ca7bfd3568e5ecc59b9a30b614cb91cb651d
    </>
  )
}

export default Home
