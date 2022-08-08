import React from 'react'
import { Container } from 'react-bootstrap'
import AllModelsCard from './AllModelsCard'
import './AllModels.css'
import ModelData from '../../../Data/Product.mock.json'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

interface Service {
  serviceImage: string
  service_name: string
  price: number
  off: number
  repairTime: string
  warranty: string
  repairType: string
}

interface Model {
  id: string
  model_name: string
  image: string
  service: Service[]
}

const AllModels: React.FunctionComponent = () => {
  const { deviceId, brandId } = useParams()

  const [modelData, setModelData] = useState<Model[]>([])
  useEffect(() => {
    localStorage.setItem('brandId', JSON.stringify(brandId))
    ModelData.device.map((deviceItem) => {
      if (deviceItem.device_name === deviceId) {
        deviceItem.brand.map((brandItem) => {
          if (brandItem.brand_name === brandId) {
            setModelData(brandItem.model)
          }
        })
      }
    })
  }, [])

  return (
    <>
      <section className='allmodels'>
        <Container className='d-flex flex-wrap justify-content-center'>
          {modelData.map((item, index) => {
            return (
              <div key={index} className='m-3'>
                <AllModelsCard models={item} />
              </div>
            )
          })}
        </Container>
      </section>
    </>
  )
}

export default AllModels
