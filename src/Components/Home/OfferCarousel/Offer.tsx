import './Offer.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs'
import { Container, Image, Row } from 'react-bootstrap'
import OfferData from '../../../Data/OfferData.mock.json'

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
              <div className='carousel-item active justify-content-center'>
                <Image
                  src='static/Offer_carousel/Offer1.png'
                  className='d-block h-100 w-auto'
                  alt='...'
                />
              </div>

              <div className='carousel-item'>
                <Image
                  src='static/Offer_carousel/Offer2.png'
                  className='d-block h-100 w-auto'
                  alt='...'
                />
              </div>

              <div className='carousel-item'>
                <Image
                  src='static/Offer_carousel/Offer3.png'
                  className='d-block h-100 w-auto'
                  alt='...'
                />
              </div>
              <div className='carousel-item'>
                <Image
                  src='static/Offer_carousel/Offer4.png'
                  className='d-block h-100 w-auto'
                  alt='...'
                />
              </div>
              <div className='carousel-item'>
                <Image
                  src='static/Offer_carousel/Offer5.png'
                  className='d-block h-100 w-auto'
                  alt='...'
                />
              </div>
              <div className='carousel-item'>
                <Image
                  src='static/Offer_carousel/Offer6.png'
                  className='d-block h-100 w-auto'
                  alt='...'
                />
              </div>

              <div className='carousel-item'>
                <Image
                  src='static/Offer_carousel/Offer7.png'
                  className='d-block h-100 w-auto'
                  alt='...'
                />
              </div>

              <div className='carousel-item'>
                <Image
                  src='static/Offer_carousel/Offer8.png'
                  className='d-block h-100 w-auto'
                  alt='...'
                />
              </div>

              <div className='carousel-item'>
                <Image
                  src='static/Offer_carousel/Offer9.png'
                  className='d-block h-100 w-auto'
                  alt='...'
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className='vaccinated'>
        <Container>
          <Row>
            <div className='caro-2 d-flex'>
              <div className='text-vaccinated d-flex justify-content-start col-8'>
                <div className='d-flex flex-column'>
                  <p className='vaccinated-para d-flex justify-content-start m-0'>
                    {OfferData.vaccinPara}
                  </p>
                  <h1 className='vaccinated-heading '>
                    <strong className='d-flex justify-content-start'>
                      {OfferData.vaccinText1}
                    </strong>
                    <strong className='d-flex justify-content-start'>
                      {OfferData.vaccinText2}
                    </strong>
                  </h1>
                </div>
              </div>

              <Image
                src='static/Offer_carousel/img-fleet.png'
                className='d-flex justify-content-end col-4 vaccinated-img'
                alt=''
              />
            </div>
          </Row>
        </Container>
      </section>
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
