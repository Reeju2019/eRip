import { Container, Row } from 'react-bootstrap'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import AllModelsData from '../../../Data/AllModels.mock.json'
import ModelCarouselCard from './ModelCarouselCard'
import './ModelCarousel.css'

const ModelCarousel: React.FunctionComponent = () => {
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
      <section className='caro'>
        <Container>
          <Row>
            <h4 className='d-flex justify-content-center mt-5'>Top Required Models</h4>
          </Row>
          <Row>
            <div className='col-12 service-content mb-5'>
              <Slider {...settings}>
                {AllModelsData.iPhone.map((item, index) => {
                  return (
                    <div key={index} className='carousel-item'>
                      <ModelCarouselCard data={item} />
                    </div>
                  )
                })}
              </Slider>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ModelCarousel
