import React from 'react'
import './Offer.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Container, Image, Row } from 'react-bootstrap'
import OfferData from '../../../Data/OfferData.mock.json'
import WeCare from '../WeCare/WeCare'
import OfferCarouselCard from './OfferCarouselCard'
import { OfferCarouselData } from '../../../Data/OfferCarouselCardData'

const Offer: React.FunctionComponent = () => {
  const SlickArrowLeft = ({ currentSlide, ...props }:any) => (
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
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }:any) => (
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
    nextArrow: <SlickArrowRight/>,
    pauseOnDotsHover: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    prevArrow: <SlickArrowLeft/>,
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
      <section className='Offer-Carousel m-5'>
        <div className='container'>
          <div className='row carousel-content-1'>
            <Slider {...settings}>
              {OfferCarouselData.map((item, index) => {
                return (
                  <div key={index} className='carousel-item'>
                    <OfferCarouselCard data={item.image} />
                  </div>
                )
              })}
            </Slider>
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
