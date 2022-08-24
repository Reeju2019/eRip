import React from 'react'
import BrandPageData from '../../../Data/BrandPage.mock.json'
import BrandServiceIssueCard from './BrandServiceIssueCard'
import './ServiceIssue.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const ServiceIssue: React.FunctionComponent = () => {
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
      <section className='service-issue'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='center-title mb-0'>
                <h3>
                  <strong>Service Issues</strong>
                </h3>
              </div>
            </div>
          </div>

          <div className='row d-flex justify-content-center pb-4'>
            <div className='col-8 service-content'>
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
                {BrandPageData.brandServiceIssue.map((item, index) => {
                  return (
                    <div key={index} className='carousel-item'>
                      <BrandServiceIssueCard data={item} />
                    </div>
                  )
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceIssue
