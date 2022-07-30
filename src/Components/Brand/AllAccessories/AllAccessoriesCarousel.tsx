import * as React from 'react'
import { Carousel, Container, Image } from 'react-bootstrap'

const AllAccessories: React.FunctionComponent = () => {
  return (
    <>
      <Container fluid className='carousel-container-1 mt-2' style={{ backgroundColor: 'blue' }}>
        <div className='row carousel-content mx-4'>
          <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='true'>
            <Carousel>
              <Carousel.Item>
                <div className='d-flex flex-row'>
                  <div className='w-100 d-flex justify-content-center align-item-center align-self-center'>
                    <h1 className='txt col-8 justify-content-start text-white fs-1'>
                      All Original Accessories
                    </h1>
                  </div>
                  <Image
                    style={{ width: '16vw' }}
                    className='d-flex justify-content-center'
                    src='/static/Mobile_Services/usb-cable.png'
                    alt='First slide'
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='d-flex flex-row'>
                  <div className='w-100 d-flex justify-content-center align-item-center align-self-center'>
                    <h1 className='txt col-8 justify-content-start text-white fs-1'>
                      All Original Accessories
                    </h1>
                  </div>
                  <Image
                    style={{ width: '16vw' }}
                    className='d-flex  justify-content-center'
                    src='/static/Mobile_Services/usb-cable.png'
                    alt='First slide'
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='d-flex flex-row'>
                  <div className='w-100 d-flex justify-content-center align-item-center align-self-center'>
                    <h1 className='txt col-8 justify-content-start text-white fs-1'>
                      All Original Accessories
                    </h1>
                  </div>
                  <Image
                    style={{ width: '16vw' }}
                    className='d-flex justify-content-center'
                    src='/static/Mobile_Services/usb-cable.png'
                    alt='First slide'
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </Container>
    </>
  )
}

export default AllAccessories
