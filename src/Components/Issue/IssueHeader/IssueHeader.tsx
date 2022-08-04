import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const IssueHeader: React.FunctionComponent = () => {
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
            <Link to={`/${deviceId}`} className='link-btn'>
              Device <i className='fa-solid fa-angle-right m-0' />
            </Link>
            <Link to={`/${deviceId}/${brandId}`} className='link-btn'>
              Brand <i className='fa-solid fa-angle-right m-0' />
            </Link>
            <Link to={`/${deviceId}/${brandId}`} className='link-btn active-link'>
              Model
            </Link>
          </div>
        </Container>
      </section>
    </>
  )
}

export default IssueHeader
