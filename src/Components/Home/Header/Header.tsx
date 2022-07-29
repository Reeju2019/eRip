import { Button, Container, Image, Modal, Row, InputGroup, Form, Nav } from 'react-bootstrap'
import { useState } from 'react'
import './Header.css'
import HeaderConstant from '../../../Data/HeaderConstant.mock.json'
import Geocode from 'react-geocode'
import Key from '../../../key.json'

const Header: React.FunctionComponent = () => {
  const [city, setCity] = useState('Bengaluru')
  const [error, setError] = useState()
  // GPS
  const geoApi: string = Key.GOOGLE_MAP_API_KEY
  Geocode.setApiKey(geoApi)
  Geocode.setLanguage('en')
  Geocode.setRegion('es')
  Geocode.setLocationType('ROOFTOP')
  Geocode.enableDebug()

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      const lat = pos.coords.latitude.toString()
      const long = pos.coords.longitude.toString()
      Geocode.fromLatLng(lat, long).then(
        (response) => {
          for (let i = 0; i < response.results[0].address_components.length; i++) {
            for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
              if (
                response.results[0].address_components[i].types[j] ===
                response.results[0].address_components[i].long_name
              ) {
                setCity(response.results[0].address_components[i].long_name)
              }
            }
          }
        },
        (error) => {
          setError(error.message)
        },
      )
    })
  }
  // end GPS
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Container className='mt-2 header-comp'>
        <Container fluid>
          <Row className='Navbar'>
            <Image
              src='/static/image/logo_erip.png'
              className='col-2 Logo align-self-center'
              alt='logo'
            />

            <div className='modal-search d-flex col-6'>
              {/* Modal */}
              <Button
                type='button'
                className='btn modal-btn rounded-0 bg-transparent text-muted fw-bold'
                data-toggle='modal'
                data-target='#myModal'
                onClick={handleShow}
              >
                <i className='fas fa-map-marker-alt' />
                {city}
                <i className='fa-solid fa-caret-down' />
              </Button>
              <Modal show={show} onHide={handleClose} backdrop='static' keyboard={true}>
                <Modal.Header className='d-flex m-1'>
                  <div className='col-5'>{HeaderConstant.location}</div>
                  <div className='col-7 d-flex justify-content-end gps' onClick={getLocation}>
                    {HeaderConstant.gps}
                    <i className='fa-solid fa-angle-right align-self-center' />
                  </div>
                </Modal.Header>
                <Modal.Body>
                  <InputGroup className='d-flex search_btn'>
                    <div className=' lign-self-center m-3'>
                      <i className='fas fa-search' />
                    </div>
                    <Form.Control
                      type='search'
                      className='form-control rounded-0 border-0'
                      id='search-border'
                      placeholder='Search for a services'
                      aria-label='Search'
                      aria-describedby='search-addon'
                    />
                  </InputGroup>
                </Modal.Body>
                <Modal.Footer>{error}</Modal.Footer>
              </Modal>

              {/* <!--End of Modal -->  */}

              <InputGroup className='search_btn d-flex'>
                <div className='align-self-center m-3'>
                  <i className='fas fa-search' />
                </div>
                <Form.Control
                  type='search'
                  className='form-control rounded-0 border-0'
                  id='search-border'
                  placeholder='Search for a services'
                  aria-label='Search'
                  aria-describedby='search-addon'
                />
              </InputGroup>
            </div>
            <Nav className='modal-search d-flex col-4 justify-content-end align-self-center'>
              <Nav.Link href='/' className='text-muted fw-bold'>
                {HeaderConstant.home}
              </Nav.Link>
              <Nav.Link href='/contact' className='text-muted fw-bold'>
                {HeaderConstant.contact_us}
              </Nav.Link>
              <Nav.Link href='/login' className='d-flex flex-row text-muted fw-bold'>
                <i className='fa-regular fa-user' />
                {HeaderConstant.login}
              </Nav.Link>
            </Nav>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Header
