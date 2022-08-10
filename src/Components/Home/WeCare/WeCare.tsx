import React from 'react'
import { Container, Image, Row } from 'react-bootstrap'
import OfferData from '../../../Data/OfferData.mock.json'
import './WeCare.css'

const WeCare: React.FunctionComponent = () => {
  return (
    <>
      <section
        className='vaccinated'
        style={{ backgroundImage: 'url(/static/image/bg-fleet.png)' }}
      >
        <Container>
          <Row>
            <div className='caro-2 d-flex'>
              <div className='text-vaccinated d-flex justify-content-start col-8'>
                <div className='d-flex flex-column'>
                  <p className='vaccinated-para d-flex justify-content-start m-0'>
                    {OfferData.vaccinPara}
                  </p>
                  <h1 className='vaccinated-heading '>
                    <strong className='d-flex justify-content-start'>
                      {OfferData.vaccinText1}
                    </strong>
                    <strong className='d-flex justify-content-start'>
                      {OfferData.vaccinText2}
                    </strong>
                  </h1>
                </div>
              </div>

              <div className='pre_img'>
                <Image
                  src='/static/Offer_carousel/img-fleet.png'
                  className='d-flex justify-content-end col-4 vaccinated-img'
                  alt='vaccine img'
                />
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default WeCare
