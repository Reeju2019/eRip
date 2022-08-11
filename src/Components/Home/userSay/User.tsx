import React from 'react'
import { Container } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './user.css'
import data from '../../../Data/const.data.json'
import userData from '../../../Data/User.data.json'

const User = () => {
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
    <div className='user_section'>
      <Container>
        {data.usersay.map((c, index) => {
          return (
            <div key={index}>
              <h4 className='user_heading d-flex justify-content-center'>{c.heading}</h4>
              <Slider {...settings}>
                {userData.user.map((e, index) => {
                  return (
                    <div key={index} className='card user_card'>
                      <div className='img_card user_img'>
                        <img src={c.quotation} className='card-img-top' alt='...' />
                        <p className='user_card_text'>{e.text}</p>
                        <div className='d-flex'>
                          <img className='user_dp' src={e.user} alt='' />
                          <div className='user_id'>
                            <p className='card-text user_text'>{e.username}</p>
                            <p className='user_company'>
                              <i>-{e.company}</i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Slider>
            </div>
          )
        })}
      </Container>
    </div>
  )
}

export default User
