import React from 'react'
import { Container } from 'react-bootstrap'
import './ModelWhyUs.css'
import AllModelData from '../../../Data/AllModels.mock.json'

const ModelWhyUs = () => {
  return (
    <div>
      <Container>
        <section className='why-us'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                <div className='center-title'>
                  <h4>
                    <strong>{AllModelData.whyUs.title}</strong>
                  </h4>
                </div>
              </div>
            </div>

            <div className='row side-gap-1 why-us-row'>
              {AllModelData.whyUs.Data.map((e, index) => {
                return (
                  <div key={index} className='whyus-work d-flex col-6 col-sm-6 g-0'>
                    <img src={e.image} className='row-1-img' alt='' />
                    <div className='why-text'>
                      <h4 className='work-heading'>{e.question}</h4>
                      <p className='work-para'>{e.answer}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </Container>
    </div>
  )
}

export default ModelWhyUs
