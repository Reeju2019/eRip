import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import CartPreviewCard from './CartPreviewCard'
import IssueData from '../../../Data/IssuePage.mock.json'
import { useEffect, useState } from 'react'
import TimeCard from './TimeCard'
import DateCard from './DateCart'
import { BiArrowBack } from 'react-icons/bi'
import timeSlotData from '../../../Data/Timeslot.data.json'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
interface ICartPreview {
  cartitem:
    | {
        model?: string
        serviceImage: string
        serviceName: string
        price: number
        off: number
        repairTime: string
        warranty: string
        repairType: string
      }[]
    | undefined
}

const CartPreview: React.FunctionComponent<ICartPreview> = (props) => {
  const cartitem = props
  const [show3, setShow3] = useState(false)
  const handleClose3 = () => setShow3(false)
  const handleShow3 = () => setShow3(true)
  const [slot, setSlot] = useState<any[][]>([])
  const [slotTime, setSlotTime] = useState<string[]>([])
  const [activeTime, setActiveTime] = useState('')
  const [activeDate, setActiveDate] = useState<string[]>([])
  const [todaySlotFlag, setTodaySlotFlag] = useState(true)

  const totalDiscount = (allItem: ICartPreview) => {
    let discount = 0
    allItem.cartitem?.map((item) => {
      const offer = (item.price * item.off) / 100
      discount += offer
      Math.ceil(offer)
    })
    return Math.ceil(discount)
  }
  const totalAmount = (allItem: ICartPreview) => {
    let total = 0
    allItem.cartitem?.map((item) => {
      total += item.price
    })
    return total
  }
  const currentDateString = (currentDate: number) => {
    if (currentDate === 1 || (currentDate > 20 && currentDate % 10 === 1)) {
      return String(currentDate) + 'st'
    } else if (currentDate === 2 || (currentDate > 20 && currentDate % 10 === 2)) {
      return String(currentDate) + 'nd'
    } else if (currentDate === 3 || (currentDate > 20 && currentDate % 10 === 3)) {
      return String(currentDate) + 'rd'
    } else {
      return String(currentDate) + 'th'
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
      function addDays(theDate: any, day: any) {
        return new Date(theDate.getTime() + day * 24 * 60 * 60 * 1000)
      }
      const currentTimestamp = new Date()
      const AvailableSlotList = []
      for (let i = 0; i < 15; i++) {
        // const currentDay = days[currentTimestamp.getDay()]
        // const currentMonth = currentTimestamp.getMonth()
        // const currentDate = currentTimestamp.getDate()
        const currentDate = addDays(currentTimestamp, i).getDate()
        const currentDay = days[addDays(currentTimestamp, i).getDay()]
        const currentMonth = addDays(currentTimestamp, i).getMonth()
        AvailableSlotList.push([
          // currentDay + i > 13 ? days[currentDay + i - 14] : days[currentDay + i],
          currentDay,
          currentDateString(currentDate),
          // addDays(new Date(), i).getDate(),
          i > 1 ? months[currentMonth] : i === 0 ? 'Today' : 'Tomorrow',
        ])
      }
      return AvailableSlotList
    }
    const time = () => {
      const currentTimestamp = new Date()
      const times: any = []
      const startHours = currentTimestamp.getHours()
      if (todaySlotFlag) {
        timeSlotData.timeSlot.map((slot) => {
          if (slot.start_time_hour > startHours) {
            times.push(slot.start_time + '-' + slot.end_time)
          }
        })
        setTodaySlotFlag(false)
      } else {
        if (activeDate[2] === 'Today') {
          timeSlotData.timeSlot.map((slot) => {
            if (slot.start_time_hour > startHours) {
              times.push(slot.start_time + '-' + slot.end_time)
            }
          })
        } else {
          timeSlotData.timeSlot.map((slot) => {
            times.push(slot.start_time + '-' + slot.end_time)
          })
        }
      }
      return times
    }
    // console.log(time())

    time()
    setSlot(Slot())
    setSlotTime(time())
  }, [activeDate])
  console.log(slot, 'slot')

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  }

  return (
    <>
      <Container fluid className='w-100 mx-1'>
        <Row>
          <Col className='bg-white mt-0 p-5'>
            <h5>{IssueData.constData.cartPreview.heading}</h5>
            <hr />
            <div>
              {cartitem &&
                cartitem.cartitem?.map((item, index) => {
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
                    {Math.floor((totalDiscount(cartitem) * 100) / totalAmount(cartitem))
                      ? Math.floor((totalDiscount(cartitem) * 100) / totalAmount(cartitem))
                      : 0}
                  </span>
                  <span className='text-success'>%)</span>
                </p>
                <p className='m-0 text-primary'>₹ {totalDiscount(cartitem)}</p>
              </div>
              <hr className='m-0' />
            </div>
            <div>
              <div className='my-3 d-flex flex-row justify-content-between lh-1'>
                <p className='m-0'>{IssueData.constData.cartPreview.totalAmount}</p>
                <p className='m-0 text-primary'>
                  ₹ {totalAmount(cartitem) - totalDiscount(cartitem)}
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
                  <button className='book_modal_back' onClick={handleClose3}>
                    <BiArrowBack className='closeButton' />
                  </button>
                  <Modal.Title id='example-custom-modal-styling-title'>
                    Schedule Appointment
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body className='appoinmentModal'>
                  <Container>
                    <div>
                      <p className='m-0'>Select Date</p>
                      <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true}
                        infinite={true}
                        autoPlay={false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition='all .5'
                        transitionDuration={500}
                        containerClass='carousel-container'
                        removeArrowOnDeviceType={['tablet', 'mobile']}
                        dotListClass='custom-dot-list-style'
                        itemClass='carousel-item-padding-40-px'
                        partialVisible={true}
                        rewindWithAnimation={true}
                        sliderClass='react-multi-carousel-track'
                      >
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
                      </Carousel>
                    </div>
                  </Container>
                </Modal.Body>
                <Modal.Footer className='justify-content-center d-block'>
                  <div>
                    {activeDate.length > 0 ? (
                      <div className='timeCard'>
                        <p className='align-text-center m-0'>Select Time</p>
                        <Row className='d-flex justify-content-center'>
                          {slotTime.map((item, index) => {
                            return (
                              <Col
                                key={index}
                                className={
                                  'col-3 p-2 m-3 fw-bold ' +
                                  (activeTime === item ? 'active' : 'times')
                                }
                              >
                                <TimeCard time={item} setActiveTime={setActiveTime} />
                              </Col>
                            )
                          })}
                        </Row>
                      </div>
                    ) : (
                      <div></div>
                    )}
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
            Total: ₹ {totalAmount(cartitem) - totalDiscount(cartitem)}
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
