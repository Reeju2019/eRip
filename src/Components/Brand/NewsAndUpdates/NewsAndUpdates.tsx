import { Container, Row } from 'react-bootstrap'
import React from 'react'
import NewsAndUpdatesCard from './NewsAndUpdatesCard'
import './NewsAndUpdates.css'

const NewsAndUpdates: React.FunctionComponent = () => {
  return (
    <>
      <section className='pb-5'>
        <Container>
          <Row>
            <h3 className='mt-5 d-flex justify-content-center mb-3'>News & Updates</h3>
          </Row>
          <Row>
            <div>
              <NewsAndUpdatesCard />
              <NewsAndUpdatesCard />
              <NewsAndUpdatesCard />
              <NewsAndUpdatesCard />
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default NewsAndUpdates
