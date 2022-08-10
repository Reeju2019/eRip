import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import RepairServiceCard from './RepairServiceCard'
import './ProductDetails.css'
import ProductData from '../../../Data/Product.mock.json'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Slider from 'react-slick'
import moment from 'moment'
import timeSlotData from '../../../Data/Timeslot.data.json'

// interface SingleService {
//   serviceImage: string
//   service_name: string
//   price: number
//   off: number
//   repairTime: string
//   warranty: string
//   repairType: string
// }

interface Service {
  id: string
  model_name: string
  image: string
  service: {
    serviceImage: string
    service_name: string
    price: number
    off: number
    repairTime: string
    warranty: string
    repairType: string
  }[]
}

const ProductDetails: React.FunctionComponent = () => {
  const { deviceId, brandId, modelId } = useParams()
  // console.log(deviceId, brandId, modelId)

  const [modelData, setModelData] = useState<Service>()
  // const [cartItem, setCartItem] = useState<SingleService[]>([])
  const [show1, setShow1] = useState(false)
  const handleClose1 = () => setShow1(false)
  const handleShow1 = () => setShow1(true)
  const [show2, setShow2] = useState(false)
  const handleClose2 = () => setShow2(false)
  const handleShow2 = () => setShow2(true)
  const [show3, setShow3] = useState(false)
  const handleClose3 = () => setShow3(false)
  const handleShow3 = () => setShow3(true)
  // const [active, setActive] = useState(null)
 const [filterTime, setFilterTime] = useState([])

  useEffect(() => {
    localStorage.setItem('modelId', JSON.stringify(modelId))
    localStorage.setItem('brandId', JSON.stringify(brandId))
    localStorage.setItem('deviceId', JSON.stringify(deviceId))
    ProductData.device.map((deviceItem) => {
      if (deviceItem.device_name === deviceId) {
        deviceItem.brand.map((brandItem) => {
          if (brandItem.brand_name === brandId) {
            brandItem.model.map((modelItem) => {
              if (modelItem.id === modelId) {
                setModelData(modelItem)
              }
            })
          }
        })
      }
    })
    
    // @ filter time slot
    // const temp:any=timeSlotData.timeSlot.filter(item=>{
    //   return item.start_time_hour>moment().get('hour')
    // })

    // setFilterTime(temp)



  }, [])
  // console.log(cart)

  const Slot = () => {
    const days: any = []
    const dateStart = moment()
    const dateEnd = moment().add(7, 'days')
    
    while (dateEnd.diff(dateStart, 'days') >= 0) {
      days.push(dateStart.format('dddd Do') && dateStart.calendar())
      dateStart.add(1, 'days')
    }
    return days
  }

  const Week = () => {
    const weekDays:any =[]
    const weekStart = moment()
    const weekEnd = moment().add(7, 'days')
    
    while (weekEnd.diff(weekStart, 'days') >= 0) {
      weekDays.push(weekStart.calendar({
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        sameElse: 'dddd'
    }))
      weekStart.add(1, 'days')
    }
    return weekDays
  }
  console.log(Week(), "nbnb");
  
  


  const settings = {
    accessibility: true,
    adaptiveHeight: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 3000,
    centerMode: false,
    centerPadding: '50px',
    cssEase: 'ease',
    dots: false,
    dotsClass: 'slick-dots',
    draggable: true,
    easing: 'linear',
    edgeFriction: 0.15,
    fade: false,
    focusOnSelect: false,
    focusOnChange: false,
    infinite: false,
    initialSlide: 0,
    mobileFirst: false,
    nextArrow: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='bi bi-arrow-right-short'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z'
        />
      </svg>
    ),
    pauseOnDotsHover: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    prevArrow: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='16'
        height='16'
        fill='currentColor'
        className='bi bi-arrow-left-short'
        viewBox='0 0 16 16'
      >
        <path
          fillRule='evenodd'
          d='M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z'
        />
      </svg>
    ),
    respondTo: 'window',
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    rows: 1,
    rtl: false,
    slide: '',
    slidesPerRow: 1,
    slidesToScroll: 1,
    slidesToShow: 4,
    swipe: true,
    swipeToSlide: false,
    touchMove: true,
    touchThreshold: 5,
    useCSS: true,
    useTransform: true,
    variableWidth: false,
    vertical: false,
    verticalSwiping: false,
    waitForAnimate: true,
    zIndex: 1000,
  }

  console.log(moment().format('LT'))

  // useEffect(() => {
  //   Slot()
  // }, [])
console.log(Slot(),"bb");

  // let a = moment().get('hour')
  // console.log(a);


  // console.log(timeSlot.timeSlot[0].id)

  useEffect(() => {
    const filterTimeSlot:any = timeSlotData.timeSlot.filter(function (item) {
      return  item?.start_time_hour > moment().get('hour')
      
    })
    setFilterTime(filterTimeSlot)
 
  }, [])

 const handleSelection =(event:any)=>{
  if (event?.target.name === 'time') {
    console.log(event.target.value);
    
  }
  
 }





  return (
    <>
      <section className='bg-grey'>
        <Container>
          <Row>
            <Col className='col-6 bg-white m-1'>
              <Row>
                <div className='d-flex flex-row'>
                  <div>
                    <img src={modelData?.image} className='prodImg' alt='' />
                  </div>
                  <h4 className='align-self-center fs-5'>{modelData?.model_name}</h4>
                </div>
              </Row>
              <Row>
                <p className='m-0 mx-2 fs-5'>Select your Repair Services</p>
              </Row>
              <Row>
                <div className='d-flex flex-wrap'>
                  {modelData?.service?.map((item, key) => {
                    return (
                      <div key={key} className='col-6 mb-2 mt-0'>
                        <hr />
                        <RepairServiceCard service={item} />
                      </div>
                    )
                  })}
                </div>
              </Row>
            </Col>
            <Col className='col-5 m-2'>
              <Row>
                <Col className='bg-white mx-3 mt-0 p-5'>
                  <h5>Cart Preview</h5>
                  <hr />
                  <div>
                    <div className='my-3 d-flex flex-row justify-content-between text-muted lh-1'>
                      <p className='m-0'>iPhone 13 Pro Max - OEM Screen</p>
                      <p className='m-0 text-primary'>₹ 32999</p>
                    </div>
                    <hr className='m-0' />
                    <div className='my-3 d-flex flex-row justify-content-between text-muted lh-1'>
                      <p className='m-0 '>iPhone 13 Pro Max - Touch & Glass</p>
                      <p className='m-0 text-primary'>₹ 19999</p>
                    </div>
                    <hr className='m-0' />
                    <div className='my-3 d-flex flex-row justify-content-between text-muted lh-1'>
                      <p className='m-0'>iPhone 13 Pro Max - Back Glass</p>
                      <p className='m-0 text-primary'>₹ 8999</p>
                    </div>
                    <hr className='m-0' />
                  </div>
                  <div>
                    <div className='my-3 d-flex flex-row justify-content-between lh-1'>
                      <p className='m-0'>
                        You saved <span className='text-success'>(33%)</span>
                      </p>
                      <p className='m-0 text-primary'>₹ 30998</p>
                    </div>
                    <hr className='m-0' />
                  </div>
                  <div>
                    <div className='my-3 d-flex flex-row justify-content-between lh-1'>
                      <p className='m-0'>Total Amount</p>
                      <p className='m-0 text-primary'>₹ 61997</p>
                    </div>
                    <hr className='m-0' />
                  </div>

                  <Row className='px-2 mt-5'>
                    <Button onClick={handleShow3}>Book Now</Button>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Modal show={show3} onHide={handleClose3} keyboard={false}>
                  <Modal.Header>
                    <Modal.Title>Schedule Appointment</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Container>
                      <div>
                        <p>Select Date</p>
                        <Slider {...settings}>
                          {Slot().map((e: any, index: any) => (
                            <div onClick={handleSelection}
                              className='card date_picker slot_card'
                              style={{ width: '18rem' }}
                              key={index}
                            >
                              <div className='card-body form-check slot_card_body'>
                                <label className='form-check-label'>
                                  <input
                                    className='form-check-input radio_slot'
                                    type='radio'
                                    name='booking-date'
                                    value={e.index}
                                  />
                                  <span>{e}</span>
                                </label>
                              </div>
                            </div>
                          ))}
                        </Slider>
                      </div>
                      <div className='row'>
                        {filterTime &&  filterTime.map((e: any, id: number) => {
                          return (
                            <button className='d-flex col-4 col-sm-4 g-0' key={id} onClick={handleSelection}>
                              <label>
                                {e.start_time} - {e.end_time}
                                <input type="radio" value={e.id} name="time" />
                              </label>
                            </button>
                          )
                        })}
                      </div>
                    </Container>
                  </Modal.Body>
                </Modal>
                <div className='bg-white mx-3 mt-4 p-5'>
                  <h5>Check Available Offers</h5>
                  <hr />
                  <div className='offerBorder my-3' onClick={handleShow1}>
                    <div className='d-flex flex-row m-2 w-100'>
                      <img src='/static/singleModel/coupon.png' alt='coupon' />
                      <h6 className='couponText'>Book now. Pay after service</h6>
                    </div>
                    <i className='fa-solid fa-angle-right fontAwesome' />
                  </div>
                  <Modal show={show1} onHide={handleClose1} backdrop='static' keyboard={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      I will not close if you click outside me. Dont even try to press escape key.
                    </Modal.Body>
                  </Modal>
                  <div className='offerBorder my-3' onClick={handleShow2}>
                    <div className='d-flex flex-row m-2 w-100'>
                      <img src='/static/singleModel/coupon.png' alt='coupon' />
                      <h6 className='couponText'>Get upto 35% off on your first service</h6>
                    </div>
                    <i className='fa-solid fa-angle-right fontAwesome' />
                  </div>
                  <Modal show={show2} onHide={handleClose2} backdrop='static' keyboard={false}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>I will not close if you click outside me. second part</Modal.Body>
                  </Modal>
                  <div className='d-flex flex-row justify-content-between'>
                    <div>
                      <input type='text' placeholder='Enter Coupon code' className='p-1' />
                    </div>
                    <div>
                      <Button className='applyBtn'>Apply</Button>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default ProductDetails
