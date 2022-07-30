import React from 'react'
import { Container } from 'react-bootstrap'
import './whyus.css'
import whyusData from '../../../Data/whyus.data.json'
import data from '../../../Data/const.data.json'

const WhyUs = () => {
  return (
    <div>
      <Container>
        <section className='why-us'>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-12'>
                {data.whyus.map((e, index) => {
                  return (
                    <div className='center-title' key={index}>
                      <h4>
                        <strong>{e.heading}</strong>
                      </h4>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className='row side-gap-1 why-us-row'>
              {whyusData.whyus.map((e, index) => {
                return (
                  <div key={index} className='whyus-work d-flex col-6 col-sm-6 g-0'>
                    <img src={e.image} className='row-1-img' alt='' />
                    <div className='why-text'>
                      <h4 className='work-heading'>{e.heading}</h4>
                      <p className='work-para'>{e.text}</p>
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

export default WhyUs
