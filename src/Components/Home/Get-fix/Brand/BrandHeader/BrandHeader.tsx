import { Col, Container, Image, Row } from 'react-bootstrap'
import './BrandHeader.css'

const BrandHeader: React.FunctionComponent = () => {
  return (
    <>
      <Container fluid>
        <Row className='brand-header mt-2'>
          <Col className='d-flex justify-content-center align-self-center align-item-center'>
            <h1 className='text-white'>
              On-site Mobile Repare <br /> Service in 30 Minutes
            </h1>
          </Col>
          <Col className='d-flex justify-content-end'>
            <Image src='/static/brandPageImage/Mobile.png' width='48%' />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default BrandHeader
