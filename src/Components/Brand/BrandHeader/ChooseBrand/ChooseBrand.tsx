import { Container, InputGroup } from 'react-bootstrap'
import BrandCard from './BrandCard'
import './ChooseBrand.css'
import { MobileBrand } from '../../../../Data/MobileBrand'
import React, { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import { ChooseBrandCarouselData } from '../../../../Data/ChooseBrandCarousel'
import OfferCarouselCard from '../../../Home/OfferCarousel/OfferCarouselCard'

const ChooseBrand: React.FunctionComponent = () => {
  const [expand, setExpand] = useState(false)
  const normalData = [
    MobileBrand[0],
    MobileBrand[1],
    MobileBrand[2],
    MobileBrand[3],
    MobileBrand[4],
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <BsArrowLeftShort />,
    nextArrow: <BsArrowRightShort />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
                <Slider {...settings}>
                  {ChooseBrandCarouselData.map((item, index) => {
                    return (
                      <div key={index} className='offer-img'>
                        <OfferCarouselCard data={item.image} />
                      </div>
                    )
                  })}
                </Slider>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </>
  )
}

export default ChooseBrand
