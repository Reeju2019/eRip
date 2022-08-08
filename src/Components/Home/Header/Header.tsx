import {
  Button,
  Container,
  Image,
  Modal,
  Row,
  InputGroup,
  Form,
  Nav,
  Dropdown,
  DropdownButton,
} from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import './Header.css'
import HeaderConstant from '../../../Data/HeaderConstant.mock.json'
import Geocode from 'react-geocode'
import Key from '../../../key.json'
import { useNavigate } from 'react-router-dom'

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

  const navigate = useNavigate()

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
  const validPhone = RegExp(/^[6-9]{1}[0-9]{9}$/)
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)
  const [resend, setresend] = useState(false)
  const [phone, setPhone] = useState<string>('')
  const [valid, setValid] = useState<any>('')
  const [otp, setOtp] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const handleShow1 = () => setShow1(true)
  const handleClose1 = () => setShow1(false)
  const handleShow2 = () => setShow2(true)
  const handleClose2 = () => setShow2(false)

  const [timer, settimer] = useState(20)
  const [flag, setFlag] = useState(true)

  useEffect(() => {
    if (timer > 0 && resend === true) {
      const interval = setInterval(() => {
        settimer(timer - 1)
        // setFlag(false)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [timer, resend])

  console.log(resend, timer)

  const handleChange = (event: any) => {
    if (event.target.name === 'phone') {
      setPhone(event.target.value)
    }
  }

  const handleChange1 = (e: any) => {
    // if(e.target.value.length===4){
    //   window.alert("Username shouldn't exceed 4 characters")
    // }
    setOtp(e.target.value)
  }

  const submitHandler = (event: any) => {
    event.preventDefault()
    if (phone) {
      // axios
      //   .post("", phone)
      //   .then((res) => {
      //     console.log("Axios res: ", res);
      //     alert(
      //       ""
      //     );
      //     setPhone("")
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     alert("wrong information");
      //   });
      if (validPhone.test(phone)) {
        handleClose1()
        handleShow2()
        window.localStorage.setItem('phone', phone)
        setPhone('')
      } else {
        setValid('Enter a valid phone number')
      }
    } else {
      setValid('Please enter your phone number')
    }
  }

  const otpsubmitHandler = (e: any) => {
    e.preventDefault()
    if (otp) {
      // axios
      //   .post("", phone)
      //   .then((res) => {
      //     console.log("Axios res: ", res);
      //     alert(
      //       ""
      //     );
      //     setPhone("")
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //     alert("wrong information");
      //   });
      handleClose2()
      setOtp('')

      navigate('/profile')
    }
  }

  const Logout = () => {
    settimer(20)
    navigate('/')
    localStorage.clear()
  }

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
              <Modal show={show} onHide={handleClose} backdrop='static' keyboard={true} >
                <Modal.Header className='d-flex m-1' closeButton>
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
                {HeaderConstant.Home}
              </Nav.Link>
              <Nav.Link href='/contact' className='text-muted fw-bold'>
                {HeaderConstant.contact_us}
              </Nav.Link>
              {window.localStorage.getItem('phone') ? (
                <Nav.Link className='d-flex flex-row text-muted fw-bold'>
                  <i className='fa-regular fa-user' />
                  <DropdownButton
                    title={window.localStorage.getItem('phone')}
                    align='end'
                    drop='down'
                    variant='secondary'
                    id='dropdownbtn'
                  >
                    <Dropdown.Item className='drop' href='/profile'>
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item className='drop' onClick={Logout}>
                      Logout
                    </Dropdown.Item>
                  </DropdownButton>
                </Nav.Link>
              ) : (
                <Nav.Link onClick={handleShow1} className='d-flex flex-row text-muted fw-bold'>
                  <i className='fa-regular fa-user' />
                  {HeaderConstant.login}
                </Nav.Link>
              )}

              {/* <!--start of phone number Modal -->  */}
              <Modal
                className='log_modal'
                show={show1}
                onHide={handleClose1}
                style={{ marginTop: '80px' }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>
                    Enter Your Mobile Number
                    <br />
                    <span>We will send you an OTP on this No.</span>
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className='input-group mb-3'>
                    <div className='input-group-prepend'>
                      <div className='input-group-text'>+91</div>
                    </div>
                    <input
                      type='number'
                      className='form-control'
                      id='inlineFormInputGroupUsername'
                      placeholder='Enter Your Mobile Number'
                      name='phone'
                      value={phone}
                      onChange={handleChange}
                    />
                    <p>{valid}</p>
                  </div>
                  <button
                    onClick={(event) => {
                      submitHandler(event)
                      setresend(!resend)
                    }}
                  >
                    Continue
                  </button>
                </Modal.Body>
              </Modal>

              {/* <!--start of otp Modal -->  */}

              <Modal
                className='log_modal'
                show={show2}
                onHide={handleClose2}
                style={{ marginTop: '80px' }}
              >
                <Modal.Header closeButton>
                  <Modal.Title>
                    Enter OTP
                    {/* <br /> */}
                    {/* <span>We've sent an OTP to </span> */}
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className='input-group mb-3'>
                    <input
                      max={4}
                      type='number'
                      className='form-control'
                      id='otp'
                      value={otp}
                      name='otp'
                      placeholder='Enter Your Mobile Number'
                      onChange={handleChange1}
                    />
                  </div>
                  <button
                    onClick={(e) => {
                      otpsubmitHandler(e)
                    }}
                  >
                    Continue
                  </button>
                  {resend === true && timer === 0 ? (
                    <button
                      onClick={(event) => {
                        setresend(!resend)
                      }}
                    >
                      Resend
                    </button>
                  ) : (
                    <p>Resend OTP after {timer} second</p>
                  )}
                  {/* { flag && (<p>Resend OTP after {timer} second</p>)} */}
                </Modal.Body>
              </Modal>
            </Nav>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Header
