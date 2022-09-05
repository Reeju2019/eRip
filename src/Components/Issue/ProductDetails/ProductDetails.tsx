import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import RepairServiceCard from './RepairServiceCard'
import './ProductDetails.css'
import ProductData from '../../../Data/Product.mock.json'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CartPreview from './CartPreview'

interface SingleService {
  model?: string
  serviceImage: string
  serviceName: string
  price: number
  off: number
  repairTime: string
  warranty: string
  repairType: string
}

interface Service {
  id: string
  modelName: string
  image: string
  service: {
    model?: string
    serviceImage: string
    serviceName: string
    price: number
    off: number
    repairTime: string
    warranty: string
    repairType: string
  }[]
}

const ProductDetails: React.FunctionComponent = () => {
  const { deviceId, brandId, modelId } = useParams()
  // console.log(deviceId, brandId, modelId)

  const [modelData, setModelData] = useState<Service>()
  const [cartitem, setcartitem] = useState<SingleService[]>([])
  const [show1, setShow1] = useState(false)
  const handleClose1 = () => setShow1(false)
  const handleShow1 = () => setShow1(true)
  const [show2, setShow2] = useState(false)
  const handleClose2 = () => setShow2(false)
  const handleShow2 = () => setShow2(true)

  useEffect(() => {
    localStorage.setItem('modelId', JSON.stringify(modelId))
    localStorage.setItem('brandId', JSON.stringify(brandId))
    localStorage.setItem('deviceId', JSON.stringify(deviceId))
    ProductData.device.map((deviceItem) => {
      if (deviceItem.device_name === deviceId) {
        deviceItem.brand.map((brandItem) => {
          if (brandItem.brand_name === brandId) {
            brandItem.model.map((modelItem) => {
              if (modelItem.id === modelId) {
                setModelData(modelItem)
                localStorage.setItem('Model', JSON.stringify(modelItem.modelName))
              }
            })
          }
        })
      }
    })
    const cart = JSON.parse(localStorage.getItem('Cart') as string)

    setcartitem(cart)
  }, [])

  useEffect(() => {
    localStorage.setItem('Cart', JSON.stringify(cartitem))
  }, [cartitem])
  return (
    <>
      <section className='bg-grey pb-5' data-testid="custom-element">
        <Container>
          <Row className='d-flex justify-content-between'>
            <Col className='w-100 bg-white m-1'>
              <Row>
                <div className='d-flex flex-row'>
                  <div>
                    <img src={modelData?.image} className='prodImg' alt='' />
                  </div>
                  <h4 className='align-self-center fs-5'>{modelData?.modelName}</h4>
                </div>
              </Row>
              <Row>
                <p className='m-0 mx-2 fs-5'>
                  <b>Select your Repair Services</b>
                </p>
              </Row>
              <hr />
              <Row>
                <div className='d-flex flex-wrap'>
                  {modelData?.service?.map((item, key) => {
                    return (
                      <div key={key} className='col-6 mb-2 mt-0 hr'>
                        {/* <hr /> */}
                        <RepairServiceCard
                          service={item}
                          cartitem={cartitem}
                          setcartitem={setcartitem}
                        />
                      </div>
                    )
                  })}
                </div>
              </Row>
            </Col>

            <Col className='col-5 m-1'>
              <CartPreview cartitem={cartitem} />
              <Row className='prodRow'>
                <div className='bg-white mx-3 mt-4 p-5'>
                  <h5>Check Available Offers</h5>
                  <hr />
                  <div className='offerBorder my-3' onClick={handleShow1}>
                    <div className='d-flex flex-row m-2 w-100'>
                      <img src='/static/singleModel/coupon.png' alt='coupon' />
                      <h6 className='couponText'>Book now. Pay after service</h6>
                    </div>
                    <i className='fa-solid fa-angle-right fontAwesome' />
                  </div>
                  <Modal show={show1} onHide={handleClose1} backdrop='static' keyboard={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      I will not close if you click outside me. Dont even try to press escape key.
                    </Modal.Body>
                  </Modal>
                  <div className='offerBorder my-3' onClick={handleShow2}>
                    <div className='d-flex flex-row m-2 w-100'>
                      <img src='/static/singleModel/coupon.png' alt='coupon' />
                      <h6 className='couponText'>Get upto 35% off on your first service</h6>
                    </div>
                    <i className='fa-solid fa-angle-right fontAwesome' />
                  </div>
                  <Modal show={show2} onHide={handleClose2} backdrop='static' keyboard={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>I will not close if you click outside me. second part</Modal.Body>
                  </Modal>
                  <div className='d-flex flex-row justify-content-between'>
                    <div>
                      <input type='text' placeholder='Enter Coupon code' className='p-1' />
                    </div>
                    <div>
                      <Button className='applyBtn'>Apply</Button>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ProductDetails
