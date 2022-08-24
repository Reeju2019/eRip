import React from 'react'
import { Container, Row } from 'react-bootstrap'
import AllModelsData from '../../../Data/AllModels.mock.json'
import ModelCarouselCard from './ModelCarouselCard'
import './ModelCarousel.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const ModelCarousel: React.FunctionComponent = () => {
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
      <section className='caro'>
        <Container>
          <Row>
            <h4 className='d-flex justify-content-center mt-5'>Top Required Models</h4>
          </Row>
          <Row>
            <div className='col-12 service-content mb-5'>
              <Carousel
                swipeable={true}
                draggable={true}
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
                partialVisible={true}
                rewindWithAnimation={true}
                sliderClass='react-multi-carousel-track'
              >
                {AllModelsData.iPhone.map((item, index) => {
                  return (
                    <div key={index} className='carousel-item'>
                      <ModelCarouselCard data={item} />
                    </div>
                  )
                })}
              </Carousel>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ModelCarousel
