import { Col, Container, Image, Row } from 'react-bootstrap'
import './BrandHeader.css'
import ProductData from '../../../Data/Product.mock.json'
import React, { useEffect, useState } from 'react'

interface Device {
  device_name: string
  device_top_img: string
  device_top_text1: string
  device_top_text2: string
  brand: {
    brand_name: string
    brand_image: string
    model: {
      model_name: string
      image: string
    }[]
  }[]
}

const BrandHeader: React.FunctionComponent = () => {
  const [selectedDevice, setSelectedDevice] = useState<Device>()
  useEffect(() => {
    const device: string = localStorage.getItem('deviceId') as string
    const deviceId: string = JSON.parse(device)
    ProductData.device.map((deviceItem) => {
      deviceItem.device_name === deviceId ? setSelectedDevice(deviceItem) : null;
    })
  }, [])

  return (
    <>
      <Container fluid>
        <Row
          className='brand-header'
          style={{ backgroundImage: 'url(/static/brandPageImage/bg-brand.png)' }}
        >
          <Col className='d-flex justify-content-center align-self-center align-item-center'>
            <h1 className='text-white'>
              {selectedDevice?.device_top_text1} <br />
              {selectedDevice?.device_top_text2}
            </h1>
          </Col>
          <Col className='d-flex justify-content-end'>
            <Image src={selectedDevice?.device_top_img} width='48%' />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BrandHeader
