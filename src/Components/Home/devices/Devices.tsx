import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './devices.css'
import { Container } from 'react-bootstrap'
import { Banner } from './Banner'
import device from '../../../Data/Device.data.json'
import data from '../../../Data/const.data.json'

const Devices = () => {
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
    <div className='device_section'>
      <Container>
        <div>
          {data.device.map((c, index) => {
            return (
              <div key={index}>
                <h4> {c.heading} </h4>
                <p>{c.subhead}</p>
              </div>
            )
          })}

          <Slider {...settings}>
            {device.device.map((e, index) => {
              return (
                <div className='card device_card' key={index}>
                  <div className='img_card'>
                    <img src={e.device_image} className='card-img-top' alt='...' />
                    {e.is_comingsoon === 1 ? <Banner /> : ''}
                  </div>
                  <div className='card-body device_card_body'>
                    <p className='card-text device_text'>{e.device_name}</p>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </Container>
    </div>
  )
}

export default Devices
// function solid(arg0: string): import("@fortawesome/fontawesome-svg-core").IconProp {
//   throw new Error('Function not implemented.');
// }
