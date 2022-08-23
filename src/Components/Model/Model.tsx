import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Header from '../Home/Header/Header'
import AllModels from './AllModels/AllModels'
import ModelCarousel from './ModelCarousel/ModelCarousel'
import ModelFaq from './ModelFaq/ModelFaq'
import ModelHeader from './ModelHeader/ModelHeader'
import ModelWhyUs from './ModelWhyUS/ModelWhyUs'
import ModelData from '../../Data/Product.mock.json'
import { useParams } from 'react-router-dom'
import PageNotFound from '../Error/PageNotFound'
import Loader from '../Error/Loader'
import tabTitle from '../../tabTitle'

const Model: React.FunctionComponent = () => {
  tabTitle('eRip: Model')
  const [found, setFound] = useState(false)
  const [loading, setLoading] = useState(true)
  const paramData = useParams()

  useEffect(() => {
    const { deviceId, brandId } = paramData
    ModelData.device.map((deviceItem) => {
      if (deviceItem.device_name === deviceId) {
        deviceItem.brand.map((brandItem) => {
          if (brandItem.brand_name === brandId) {
            setFound(true)
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
              <ModelHeader />
              <AllModels />
              <ModelWhyUs />
              <ModelCarousel />
              <ModelFaq />
              <Footer />
            </React.Fragment>
          )}
        </React.Fragment>
      )}
    </>
  )
}

export default Model
