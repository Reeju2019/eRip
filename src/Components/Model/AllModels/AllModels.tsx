import { Container } from 'react-bootstrap'
import AllModelsCard from './AllModelsCard'
import './AllModels.css'
import ModelData from '../../../Data/Product.mock.json'
import { useEffect, useState } from 'react'

interface Model {
  model_name: string
  image: string
}

const AllModels: React.FunctionComponent = () => {
  const [modelData, setModelData] = useState<Model[]>([])
  useEffect(() => {
    const device: string = localStorage.getItem('deviceId') as string
    const brand: string = localStorage.getItem('brandId') as string
    const deviceId = JSON.parse(device)
    const brandId = JSON.parse(brand)
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
