import { Col, Container, Row } from 'react-bootstrap'
import RepairServiceCard from './RepairServiceCard'
import './ProductDetails.css'
import ProductData from '../../../Data/Product.mock.json'

const ProductDetails: React.FunctionComponent = () => {
  const serviceData = ProductData?.device[0]?.brand[0]?.model[0]?.service
  // console.log(serviceData)

  return (
    <>
      <section className='bg-grey'>
        <Container>
          <Row>
            <Col className='col-7 bg-white m-2'>
              <Row>
                <div className='d-flex flex-row'>
                  <div>
                    <img src='/static/iphoneBrand/iphone13ProMax.jpg' className='prodImg' alt='' />
                  </div>
                  <h4 className='align-self-center fs-5'>iPhone 13 Pro Max</h4>
                </div>
              </Row>
              <Row>
                <p className='mx-2 fs-5'>Select your Repair Services</p>
              </Row>
              <Row>
                <div className='d-flex flex-wrap'>
                  {serviceData?.map((item, key) => {
                    return (
                      <div key={key} className='col-6 my-2'>
                        <hr/>
                        <RepairServiceCard service={item} />
                      </div>
                    )
                  })}
                </div>
              </Row>
            </Col>
            <Col className='col-4 m-2'>hie</Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ProductDetails
