import { Container, Form, InputGroup, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './ModelHeader.css'

const ModelHeader: React.FunctionComponent = () => {
  const device: string = localStorage.getItem('deviceId') as string
  const brand: string = localStorage.getItem('brandId') as string
  const deviceId = JSON.parse(device)
  const brandId = JSON.parse(brand)

  return (
    <>
      <section className='mod-header'>
        <Container>
          <Row>
            <div className='d-flex flex-row justify-content-between'>
              <div className=''>
                <h3>Choose Your Model</h3>
                <div>
                  <Link to='/' className='link-btn'>
                    Home
                    <i className='fa-solid fa-angle-right m-0' />
                  </Link>
                  <Link to={`/${deviceId}`} className='link-btn'>
                    Brand <i className='fa-solid fa-angle-right m-0' />
                  </Link>
                  <Link to={`/${deviceId}/${brandId}`} className='link-btn active-link'>
                    Model
                  </Link>
                </div>
              </div>
              <div className='search_btn'>
                <InputGroup className=' d-flex m-0 p-0'>
                  <div className='align-self-center m-3'>
                    <i className='fas fa-search' />
                  </div>
                  <Form.Control
                    type='search'
                    className='form-control rounded-0 border-0'
                    id='search-border'
                    placeholder='Search Model'
                    aria-label='Search'
                    aria-describedby='search-addon'
                    aria-rowspan={1}
                  />
                </InputGroup>
              </div>
            </div>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ModelHeader
