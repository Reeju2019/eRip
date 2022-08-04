import * as React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './devices.css'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import { Container } from 'react-bootstrap'
import { Banner } from './Banner'
import device from '../../../Data/Device.data.json'
import data from '../../../Data/const.data.json'

const Devices = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <BsArrowLeftShort />,
    nextArrow: <BsArrowRightShort />,
    initialSlide: 0,
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
  }

  return (
    <div className='device_section'>
      <Container>
        <div>
          {data.device.map((c, key) => {
            return (
              <div key={key}>
                <h4> {c.heading} </h4>
                <p>{c.subhead}</p>
              </div>
            )
          })}

          <Slider {...settings}>
            {device.device.map((e, key) => {
              return (
                <div className='card device_card' key={key}>
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
