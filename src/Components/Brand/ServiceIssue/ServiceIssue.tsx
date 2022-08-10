import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import BrandPageData from '../../../Data/BrandPage.mock.json'
import BrandServiceIssueCard from './BrandServiceIssueCard'
import './ServiceIssue.css'

const ServiceIssue: React.FunctionComponent = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
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
                  <strong>Service Issues</strong>
                </h3>
              </div>
            </div>
          </div>

          <div className='row d-flex justify-content-center pb-4'>
            <div className='col-8 service-content'>
              <Slider {...settings}>
                {BrandPageData.brandServiceIssue.map((item, index) => {
                  return (
                    <div key={index} className='carousel-item'>
                      <BrandServiceIssueCard data={item} />
                    </div>
                  )
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ServiceIssue
