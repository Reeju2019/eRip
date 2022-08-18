import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { MobileBrand } from '../../../Data/MobileBrand'
import BrandCarouselCard from './BrandCarouselCard'
import './ChooseBrandCarousel.css'
import { Col, Container, Row } from 'react-bootstrap'
import BrandPageData from './../../../Data/BrandPage.mock.json'

const ChooseBrandCarousel: React.FunctionComponent = () => {
  const SlickArrowLeft = ({ currentSlide, ...props }: any) => (
    <button
      {...props}
      className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')}
      aria-hidden='true'
      aria-disabled={currentSlide === 0 ? true : false}
      type='button'
    >
      Previous
    </button>
  )
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
    <button
      {...props}
      className={
        'slick-next slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden='true'
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type='button'
    >
      Next
    </button>
  )

  const settings = {
    accessibility: true,
    adaptiveHeight: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: '50px',
    cssEase: 'ease',
    dots: false,
    dotsClass: 'slick-dots',
    draggable: true,
    easing: 'linear',
    edgeFriction: 0.15,
    fade: false,
    focusOnSelect: false,
    focusOnChange: false,
    infinite: false,
    initialSlide: 0,
    mobileFirst: false,
    nextArrow: <SlickArrowRight />,
    pauseOnDotsHover: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    prevArrow: <SlickArrowLeft />,
    respondTo: 'window',
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
    rows: 1,
    rtl: false,
    slide: '',
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 4,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    useTransform: true,
    variableWidth: false,
    vertical: false,
    verticalSwiping: false,
    waitForAnimate: true,
    zIndex: 1000,
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
              <Slider {...settings}>
                {MobileBrand.map((item, index) => {
                  return (
                    <div key={index} className='carousel-item'>
                      <BrandCarouselCard data={item} />
                    </div>
                  )
                })}
              </Slider>
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
