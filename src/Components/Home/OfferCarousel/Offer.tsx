import React from 'react'
import './Offer.css'
import { Container, Image, Row } from 'react-bootstrap'
import OfferData from '../../../Data/OfferData.mock.json'
import WeCare from '../WeCare/WeCare'
import OfferCarouselCard from './OfferCarouselCard'
import { OfferCarouselData } from '../../../Data/OfferCarouselCardData'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const Offer: React.FunctionComponent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  }

  return (
    <>
      <section className='Offer-Carousel m-5'>
        <div className='container'>
          <div className='row carousel-content-1'>
            <Carousel
              swipeable={false}
              draggable={false}
              showDots={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition='all .5'
              transitionDuration={500}
              containerClass='carousel-container'
              removeArrowOnDeviceType={['tablet', 'mobile']}
              dotListClass='custom-dot-list-style'
              itemClass='carousel-item-padding-40-px'
            >
              {OfferCarouselData.map((item, index) => {
                return (
                  <div key={index} className='carousel-item'>
                    <OfferCarouselCard data={item.image} />
                  </div>
                )
              })}
            </Carousel>
          </div>
        </div>
      </section>
      <WeCare />
      <section className='works'>
        <Container>
          <Row>
            <div className='col-12'>
              <h4 className='text-center mt-5'>
                <strong>{OfferData.workTitle}</strong>
              </h4>
            </div>
          </Row>
          <div className='row side-gap work-row d-flex '>
            <div className='first-work d-flex justify-content-center col-5 g-0'>
              <Image src='static/image/pick.png' className='works-img-pick' alt='' />
              <div className='work-text'>
                <h4 className='work-heading'>{OfferData.workSubtitle1}</h4>
                <p className='work-para'>
                  {OfferData.workSubtitle1Text1} <br /> {OfferData.workSubtitle1Text2}
                  <br /> {OfferData.workSubtitle1Text3}
                </p>
              </div>
            </div>

            <div className='middle-border col-2 g-0'>
              <hr className='hr-mid-blue' />
            </div>

            <div className='second-work d-flex justify-content-center col-5 g-0'>
              <Image src='static/image/Service.png' className='works-img-service' alt='' />
              <div className='work-test-1'>
                <h4 className='work-heading'>{OfferData.workSubtitle2}</h4>
                <p className='work-para'>
                  {OfferData.WorkSubtitle2Text1} <br /> {OfferData.workSubtitle2Text2} <br />
                  {OfferData.workSubtitle2Text3}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Offer
