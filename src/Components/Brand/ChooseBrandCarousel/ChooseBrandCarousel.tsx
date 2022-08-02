import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import { MobileBrand } from '../../../Data/MobileBrand'
import BrandCarouselCard from './BrandCarouselCard'
import './ChooseBrandCarousel.css'
import { Col, Container, Row } from 'react-bootstrap'
import BrandPageData from './../../../Data/BrandPage.mock.json'

const ChooseBrandCarousel: React.FunctionComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: <BsArrowLeftShort />,
    nextArrow: <BsArrowRightShort />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
    ],
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
