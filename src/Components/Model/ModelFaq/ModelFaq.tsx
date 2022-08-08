import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FAQCard from '../../Brand/FAQ/FAQCard'
import AllModelsData from '../../../Data/AllModels.mock.json'

const ModelFaq: React.FunctionComponent = () => {
  return (
    <>
      <Container fluid className='bg-grey pb-5'>
        <Row>
          <h3 className='d-flex justify-content-center p-5 text-muted'>F.A.Qs</h3>
        </Row>
        <Row>
          <Col className='col-10 m-auto bg-white p-4'>
            {AllModelsData.faq.map((item, index) => {
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

export default ModelFaq
