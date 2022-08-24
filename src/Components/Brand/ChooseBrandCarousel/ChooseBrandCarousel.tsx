import React from 'react'
import { MobileBrand } from '../../../Data/MobileBrand'
import BrandCarouselCard from './BrandCarouselCard'
import './ChooseBrandCarousel.css'
import { Col, Container, Row } from 'react-bootstrap'
import BrandPageData from './../../../Data/BrandPage.mock.json'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const ChooseBrandCarousel: React.FunctionComponent = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  }
  return (
    <>
      <section className='service-issue'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='center-title mb-0'>
                <h3>
                  <strong>{BrandPageData.constData.chooseBrandCarousel.title}</strong>
                </h3>
              </div>
            </div>
          </div>

          <div className='row d-flex justify-content-center pb-4'>
            <div className='col-11 service-content'>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
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
                partialVisible={true}
                rewindWithAnimation={true}
                sliderClass='react-multi-carousel-track'
              >
                {MobileBrand.map((item, index) => {
                  return (
                    <div key={index} className='carousel-item'>
                      <BrandCarouselCard data={item} />
                    </div>
                  )
                })}
              </Carousel>
            </div>
          </div>
        </div>
        <Container className='pb-5'>
          <Row className='m-3'>
            <p className='d-flex justify-content-center fs-6'>
              {BrandPageData.constData.chooseBrandCarousel.subtitle}
            </p>
          </Row>
          <Row>
            <Col className='col-11 caro-div'>
              <p className='caro-para'>{BrandPageData.constData.chooseBrandCarousel.paragraph}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ChooseBrandCarousel
