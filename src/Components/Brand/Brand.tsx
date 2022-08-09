import {  useParams } from 'react-router-dom'
import Footer from '../footer/Footer'
import Header from '../Home/Header/Header'
import UserSay from '../Home/userSay/User'
import WeCare from '../Home/WeCare/WeCare'
import WhyUs from '../Home/whyUs/WhyUs'
import AllAccessories from './AllAccessories/AllAccessoriesCarousel'
import BrandHeader from './BrandHeader/BrandHeader'
import ChooseBrand from './BrandHeader/ChooseBrand/ChooseBrand'
import ChooseBrandCarousel from './ChooseBrandCarousel/ChooseBrandCarousel'
import FAQ from './FAQ/FAQ'
import HowItWorks from './HowItWork/HowItWork'
import NewsAndUpdates from './NewsAndUpdates/NewsAndUpdates'
import ServiceIssue from './ServiceIssue/ServiceIssue'
import React, { useEffect, useState } from 'react'
import AllProductData from '../../Data/Product.mock.json'
import PageNotFound from '../Error/PageNotFound'
import Loader from '../Error/Loader'

const Brand: React.FunctionComponent = () => {
  const [found, setFound] = useState(false)
  const [loading, setLoading] = useState(true)
  const paramData = useParams()

  useEffect(() => {
    localStorage.setItem('deviceId', JSON.stringify(paramData.deviceId))
    AllProductData.device.map((deviceItem) => {
      if (deviceItem.device_name === paramData.deviceId) {
        setFound(true)
      }
    })
    if (!found) {
      setLoading(false)
    }
  }, [])

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          {!found ? (
            <PageNotFound />
          ) : (
            <React.Fragment>
              <Header />
              <BrandHeader />
              <ChooseBrand />
              <WeCare />
              <HowItWorks />
              <ServiceIssue />
              <WhyUs />
              <AllAccessories />
              <UserSay />
              <FAQ />
              <ChooseBrandCarousel />
              <NewsAndUpdates />
              <Footer />
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </>
  )
}

export default Brand
