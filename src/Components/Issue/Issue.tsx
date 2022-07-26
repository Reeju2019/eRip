import Header from '../Home/Header/Header'
import IssueHeader from './IssueHeader/IssueHeader'
import ProductDetails from './ProductDetails/ProductDetails'
import PageNotFound from '../Error/PageNotFound'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import ProductData from '../../Data/Product.mock.json'
import Loader from '../Error/Loader'
import WeCare from '../Home/WeCare/WeCare'
import ServiceHilights from './ServiceHilights/ServiceHilights'
import CompleateAcCarousel from './CompleateAcCarousel/CompleateAcCarousel'
import UserSay from '../Home/userSay/User'
import IssueFAQ from './FAQ/IssueFAQ'
import Footer from '../footer/Footer'
import tabTitle from '../../tabTitle'

const Issue: React.FunctionComponent = () => {
  tabTitle('eRip: Issue')
  const { deviceId, brandId, modelId } = useParams()
  const [found, setFound] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    ProductData.device.map((deviceItem) => {
      if (deviceItem.device_name === deviceId) {
        deviceItem.brand.map((brandItem) => {
          if (brandItem.brand_name === brandId) {
            brandItem.model.map((modelItem) => {
              if (modelItem.id === modelId) {
                setFound(true)
              }
            })
          }
        })
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
              <IssueHeader />
              <ProductDetails />
              <WeCare />
              <ServiceHilights />
              <CompleateAcCarousel />
              <UserSay />
              <IssueFAQ />
              <Footer />
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </>
  )
}

export default Issue
