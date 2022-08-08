import React from 'react'
import './Offer.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import { Container, Image, Row } from 'react-bootstrap'
import OfferData from '../../../Data/OfferData.mock.json'
import WeCare from '../WeCare/WeCare'
import OfferCarouselCard from './OfferCarouselCard'
import { OfferCarouselData } from '../../../Data/OfferCarouselCardData'

const Offer: React.FunctionComponent = () => {
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
      <section className='Offer-Carousel mt-5'>
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
