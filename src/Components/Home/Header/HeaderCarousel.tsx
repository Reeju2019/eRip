import { Carousel, Container, Image } from 'react-bootstrap'
import './Header.css'
import HeaderData from '../../../Data/Header.mock.json'

const HeaderCarousel: React.FunctionComponent = () => {
  return (
    <>
      <Container fluid className='carousel-container-1 mt-2'>
        <div className='row carousel-content mx-4'>
          <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='true'>
            <Carousel>
              <Carousel.Item>
                <div className='d-flex flex-row'>
                  <div className='w-100 d-flex justify-content-center align-item-center align-self-center'>
                    <h2 className='txt col-8 justify-content-start text-white fs-2'>
                      {HeaderData.header_caro_1_1}
                      <br />
                      {HeaderData.header_caro_1_2}
                    </h2>
                  </div>
                  <Image
                    className='d-flex caro-img justify-content-center'
                    src='/static/image/carousel-img-1.png'
                    alt='First slide'
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='d-flex flex-row'>
                  <div className='w-100 d-flex justify-content-center align-item-center align-self-center'>
                    <h2 className='txt col-8 justify-content-start text-white fs-2'>
                      {HeaderData.header_caro_2_1} <br />
                      {HeaderData.header_caro_2_2}
                    </h2>
                  </div>
                  <Image
                    className='d-flex caro-img justify-content-center'
                    src='/static/image/carousel-img-2.png'
                    alt='First slide'
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className='d-flex flex-row'>
                  <div className='w-100 d-flex justify-content-center align-item-center align-self-center'>
                    <h2 className='txt col-8 justify-content-start text-white fs-2'>
                      {HeaderData.header_caro_3_1} <br />
                      {HeaderData.header_caro_3_2}
                    </h2>
                  </div>
                  <Image
                    className='d-flex caro-img justify-content-center'
                    src='/static/image/carousel-img-3.png'
                    alt='First slide'
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </Container>
    </>
  )
}

export default HeaderCarousel
