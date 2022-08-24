import { Container, InputGroup } from 'react-bootstrap'
import BrandCard from './BrandCard'
import './ChooseBrand.css'
import { MobileBrand } from '../../../../Data/MobileBrand'
import React, { useState } from 'react'
import { ChooseBrandCarouselData } from '../../../../Data/ChooseBrandCarousel'
import OfferCarouselCard from '../../../Home/OfferCarousel/OfferCarouselCard'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const ChooseBrand: React.FunctionComponent = () => {
  const [expand, setExpand] = useState(false)
  const normalData = [
    MobileBrand[0],
    MobileBrand[1],
    MobileBrand[2],
    MobileBrand[3],
    MobileBrand[4],
  ]

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
      <Container fluid className='search-box g-0'>
        <div className='container-fluid bg-grey g-0'>
          <InputGroup className='input-position'>
            <span className='input-group-text input-width bg-white' id='search-addon'>
              <i className='fas fa-search' />
              <input
                type='search'
                className='form-control rounded-0 border-0'
                id='search-border'
                placeholder='Search for Mobile to Repair'
                aria-label='Search'
                aria-describedby='search-addon'
              />
            </span>
          </InputGroup>
        </div>
      </Container>
      <section className='Mobile-brand'>
        <div className='container-fluid inner'>
          <div className='row'>
            <div className='col-12'>
              <div className='center-title'>
                <h4>
                  <strong>Choose a Brand</strong>
                </h4>
              </div>
            </div>
          </div>

          <Container fluid className='my-5'>
            <div className='d-flex flex-row'>
              <div className='col-10 middle-content'>
                {!expand &&
                  normalData.map((brand) => {
                    return (
                      <div key={brand.brandName}>
                        <BrandCard brand={brand} />
                      </div>
                    )
                  })}
                {expand &&
                  MobileBrand.map((brand) => {
                    return (
                      <div key={brand.brandName}>
                        <BrandCard brand={brand} />
                      </div>
                    )
                  })}
              </div>
              <div className='m-0 p-0 d-flex align-item-center'>
                {!expand && (
                  <div className='viewAll' onClick={() => setExpand(!expand)}>
                    ViewAll <i className='fa-solid fa-angle-right' />
                  </div>
                )}
              </div>
            </div>
          </Container>
          <Container>
            {/* <!-- offer section  --> */}
            <div className='row'>
              <div className='col-12'>
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
                >
                  {ChooseBrandCarouselData.map((item, index) => {
                    return (
                      <div key={index} className='offer-img'>
                        <OfferCarouselCard data={item.image} />
                      </div>
                    )
                  })}
                </Carousel>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  )
}

export default ChooseBrand
