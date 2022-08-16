import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import CartPreviewCard from './CartPreviewCard'
import IssueData from '../../../Data/IssuePage.mock.json'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import TimeCard from './TimeCard'
import DateCard from './DateCart'
import { BiArrowBack } from 'react-icons/bi';
// import moment from 'moment'
// import timeSlotData from '../../../Data/Timeslot.data.json'

interface ICartPreview {
  cartItem:
    | {
        model?: string
        serviceImage: string
        service_name: string
        price: number
        off: number
        repairTime: string
        warranty: string
        repairType: string
      }[]
    | undefined
}

// interface FilterTimeSlot {
//   id: number
//   start_time_hour: number
//   start_time: string
//   end_time: string
// }

const CartPreview: React.FunctionComponent<ICartPreview> = (props) => {
  const cartItem = props
  const [show3, setShow3] = useState(false)
  const handleClose3 = () => setShow3(false)
  const handleShow3 = () => setShow3(true)
  const [slot, setSlot] = useState<string[][]>([])
  const [slotTime, setSlotTime] = useState<string[]>([])
  const [activeTime, setActiveTime] = useState('')
  const [activeDate, setActiveDate] = useState<string[]>([])
  // console.log(activeDate, activeTime)

  const totalDiscount = (allItem: ICartPreview) => {
    let discount = 0
    allItem.cartItem?.map((item) => {
      const offer = (item.price * item.off) / 100
      discount += offer
      Math.ceil(offer)
    })
    return Math.ceil(discount)
  }
  const totalAmount = (allItem: ICartPreview) => {
    let total = 0
    allItem.cartItem?.map((item) => {
      total += item.price
    })
    return total
  }
  const currentDateString = (i: number, currentDate: number) => {
    if (currentDate + i === 1 || (i + currentDate > 20 && (i + currentDate) % 10 === 1)) {
      return String(currentDate + i) + 'st'
    } else if (currentDate + i === 2 || (i + currentDate > 20 && (i + currentDate) % 10 === 2)) {
      return String(currentDate + i) + 'nd'
    } else if (currentDate + i === 3 || (i + currentDate > 20 && (i + currentDate) % 10 === 3)) {
      return String(currentDate + i) + 'rd'
    } else {
      return String(currentDate + i) + 'th'
    }
  }

  useEffect(() => {
    const Slot = () => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      const currentTimestamp = new Date()
      const AvailableSlotList = []
      for (let i = 0; i < 8; i++) {
        const currentDay = currentTimestamp.getDay()
        const currentMonth = currentTimestamp.getMonth()
        const currentDate = currentTimestamp.getDate()
        AvailableSlotList.push([
          currentDay + i > 6 ? days[currentDay + i - 7] : days[currentDay + i],
          currentDateString(i, currentDate),
          i > 1 ? months[currentMonth] : i === 0 ? 'Today' : 'Tomorrow',
        ])
      }
      // console.log(AvailableSlotList)
      return AvailableSlotList
    }
    const time = () => {
      const times = []
      const startHours = 9
      const endHours = 9 + 2
      for (let i = 0; i < 6; i++) {
        let sHours = startHours + i * 2
        let eHours = endHours + i * 2
        const startAmpm = sHours > 11 ? 'PM' : 'AM'
        if (sHours > 12) {
          sHours -= 12
        }
        const endAmpm = eHours > 11 ? 'PM' : 'AM'
        if (eHours > 12) {
          eHours -= 12
        }
        const strTime =
          sHours.toString() + ' ' + startAmpm + '-' + eHours.toString() + ' ' + endAmpm
        times.push(strTime)
      }
      return times
    }
    time()
    setSlot(Slot())
    setSlotTime(time())
  }, [])

  const SlickArrowLeft = ({ currentSlide, ...props }: any) => (
    <button
      {...props}
      className={'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')}
      aria-hidden='true'
      aria-disabled={currentSlide === 0 ? true : false}
      type='button'
    >
      Previous
    </button>
  )
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }: any) => (
    <button
      {...props}
      className={
        'slick-next slick-arrow' + (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden='true'
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type='button'
    >
      Next
    </button>
  )
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
    nextArrow: <SlickArrowRight />,
    pauseOnDotsHover: false,
    pauseOnFocus: true,
    pauseOnHover: true,
    prevArrow: <SlickArrowLeft />,
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

  return (
    <>
      <Container fluid className='w-100 mx-1'>
        <Row>
          <Col className='bg-white mt-0 p-5'>
            <h5>{IssueData.constData.cartPreview.heading}</h5>
            <hr />
            <div>
              {cartItem &&
                cartItem.cartItem?.map((item, index) => {
                  return (
                    <div key={index}>
                      <CartPreviewCard item={item} />
                    </div>
                  )
                })}
            </div>
            <div>
              <div className='my-3 d-flex flex-row justify-content-between lh-1'>
                <p className='m-0'>
                  {IssueData.constData.cartPreview.youSaved}
                  <span className='text-success'>
                    {' '}
                    (
                    {Math.floor((totalDiscount(cartItem) * 100) / totalAmount(cartItem))
                      ? Math.floor((totalDiscount(cartItem) * 100) / totalAmount(cartItem))
                      : 0}
                  </span>
                  <span className='text-success'>%)</span>
                </p>
                <p className='m-0 text-primary'>₹ {totalDiscount(cartItem)}</p>
              </div>
              <hr className='m-0' />
            </div>
            <div>
              <div className='my-3 d-flex flex-row justify-content-between lh-1'>
                <p className='m-0'>{IssueData.constData.cartPreview.totalAmount}</p>
                <p className='m-0 text-primary'>
                  ₹ {totalAmount(cartItem) - totalDiscount(cartItem)}
                </p>
              </div>
              <hr className='m-0' />
            </div>

            <Row className='px-2 mt-5'>
              <Button variant='primary' onClick={handleShow3}>
                {IssueData.constData.cartPreview.bookNow}
              </Button>
              <Modal
                show={show3}
                onHide={handleClose3}
                keyboard={false}
                {...props}
                aria-labelledby='example-custom-modal-styling-title'
                centered
                style={{ textAlign: 'center' }}
                backdrop='static'
              >
                <Modal.Header className='appoinmentModal'>
                <button className='book_modal_back' onClick={handleClose3}><BiArrowBack className='closeButton'/></button>
                  <Modal.Title id='example-custom-modal-styling-title'>
                    Schedule Appointment
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='appoinmentModal'>
                  <Container>
                    <div>
                      <p className='m-0'>Select Date</p>
                      <Slider {...settings}>
                        {slot.map((item, index) => {
                          return (
                            <div
                              key={index}
                              className={
                                'col-3 p-2 m-3 fw-bold dateCard ' +
                                (activeDate === item ? 'active' : 'times')
                              }
                            >
                              <DateCard date={item} setActiveDate={setActiveDate} />
                            </div>
                          )
                        })}
                      </Slider>
                    </div>
                  </Container>
                </Modal.Body>
                <Modal.Footer>
                  <div>
                    <p className='align-text-center m-0'>Select Time</p>
                    <Row className='d-flex justify-content-center'>
                      {slotTime.map((item, index) => {
                        return (
                          <Col
                            key={index}
                            className={
                              'col-3 p-2 m-3 fw-bold ' + (activeTime === item ? 'active' : 'times')
                            }
                          >
                            <TimeCard time={item} setActiveTime={setActiveTime} />
                          </Col>
                        )
                      })}
                    </Row>
                  </div>
                </Modal.Footer>
              </Modal>
            </Row>
          </Col>
        </Row>
        <Row className='cartFooter'>
          <Col className='col-1 text-muted m-auto d-flex justify-content-center fs-5 cartFontawesome'>
            <i className='fa-solid fa-cart-arrow-down' />
          </Col>
          <Col className='col-5 text-center text-muted align-self-center d-flex justify-content-center'>
            Total: ₹ {totalAmount(cartItem) - totalDiscount(cartItem)}
          </Col>
          <Col className='col-6 text-center'>
            <Row className=' p-2'>
              <Button onClick={handleShow3}>{IssueData.constData.cartPreview.bookNow}</Button>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CartPreview
