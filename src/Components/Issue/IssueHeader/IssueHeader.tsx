import React from 'react'
import { Container } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const IssueHeader: React.FunctionComponent = () => {
  const { modelId } = useParams()
  const device: string = localStorage.getItem('deviceId') as string
  const brand: string = localStorage.getItem('brandId') as string
  const deviceId = JSON.parse(device)
  const brandId = JSON.parse(brand)
  return (
    <>
      <section className='bg-grey py-5'>
        <Container>
          <h3>Device Repair Details</h3>
          <div>
            <Link to='/' className='link-btn'>
              Home
              <i className='fa-solid fa-angle-right m-0' />
            </Link>
            <Link to={`/${deviceId}`} className='link-btn text-capitalize'>
              {deviceId} <i className='fa-solid fa-angle-right m-0' />
            </Link>
            <Link to={`/${deviceId}/${brandId}`} className='link-btn text-capitalize'>
              {brandId} <i className='fa-solid fa-angle-right m-0' />
            </Link>
            <Link to={``} className='link-btn active-link'>
              {modelId}
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}

export default IssueHeader
