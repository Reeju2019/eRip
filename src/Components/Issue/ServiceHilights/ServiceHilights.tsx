import { Container, Row } from 'react-bootstrap'
import './ServiceHilights.css'
import IssueData from '../../../Data/IssuePage.mock.json'
import ServiceHilightsCard from './ServiceHilightsCard'

const ServiceHilights: React.FunctionComponent = () => {
  return (
    <>
      <section className='p-5'>
        <Container>
          <Row>
            <h4 className='d-flex justify-content-center mt-3'>Service Highlights</h4>
          </Row>
          <Row>
            <div className='d-flex  flex-wrap justify-content-center'>
              {IssueData.constData.serviceHilights.map((item, index) => {
                return (
                  <div key={index}>
                    <ServiceHilightsCard item={item} />
                  </div>
                )
              })}
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ServiceHilights
