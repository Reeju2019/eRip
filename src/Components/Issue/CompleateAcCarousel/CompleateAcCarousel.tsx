import { Carousel, Col, Container, Row } from 'react-bootstrap'
import './CompleateAcCarousel.css'

const CompleateAcCarousel: React.FunctionComponent = () => {
  return (
    <>
      <section className='acSection'>
        <Container>
          <Carousel>
            <Carousel.Item className='caro_item'>
              <Row>
                <Col className='col-6 d-flex justify-content-center align-self-center'>
                  <h2 className=' align-self-center fs-1 text-white'>Complete AC Cleanup</h2>
                </Col>
                <Col className='col-6 d-flex justify-content-end'>
                  <img src='/static/issuePage/ac.png' alt='' />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item className='caro_item'>
              <Row>
                <Col className='col-6 d-flex justify-content-center'>
                  <h2 className=' align-self-center fs-1 text-white'>Complete AC Cleanup</h2>
                </Col>
                <Col className='col-6 d-flex justify-content-end'>
                  <img src='/static/issuePage/ac.png' alt='' />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item className='caro_item'>
              <Row>
                <Col className='col-6 d-flex justify-content-center'>
                  <h2 className=' align-self-center fs-1 text-white'>Complete AC Cleanup</h2>
                </Col>
                <Col className='col-6 d-flex justify-content-end'>
                  <img src='/static/issuePage/ac.png' alt='' />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
    </>
  )
}

export default CompleateAcCarousel
