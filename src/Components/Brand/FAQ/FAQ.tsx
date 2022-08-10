import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './FAQ.css'
import BrandData from '../../../Data/BrandFAQ.mock.json'
import FAQCard from './FAQCard'

const FAQ: React.FunctionComponent = () => {
  return (
    <>
      <Container fluid className='bg-grey'>
        <Row>
          <h3 className='d-flex justify-content-center p-5 text-muted'>F.A.Qs</h3>
        </Row>
        <Row>
          <Col className='col-10 m-auto bg-white p-4'>
            {BrandData.faQ.map((item, index) => {
              return (
                <div key={index}>
                  <FAQCard faq={item} />
                </div>
              )
            })}
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default FAQ
