import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import { MobileBrand } from '../../../Data/MobileBrand'
import BrandCarouselCard from './BrandCarouselCard'
import './ChooseBrandCarousel.css'
import { Col, Container, Row } from 'react-bootstrap'

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
                  <strong>Choose A Brand</strong>
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
              Get your Tablet Fixed by ERIP Experts in Bangalore
            </p>
          </Row>
          <Row>
            <Col className='col-11 caro-div'>
              <p className='caro-para'>
                ERIP is a reputed service repair brand in Bangalore. We house a team of technicians
                who have undergone training for years in technical repair skills.ERIP ensures that
                your Tablet is fixed with 100% genuine spare parts and provides a QR code for
                customers to scan and view its authenticity along with up to 6 months warranty on
                the spare parts.Experience superior navigation and seamless booking on our website,
                where it takes less than two minutes to book an appointment.With our unwavering
                commitment to repair your Tablet issues,we have surpassed our competitors in the
                Tablet repair service industry in Bangalore.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ChooseBrandCarousel
