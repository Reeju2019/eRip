import { Button, Col, Container, Modal, Row } from 'react-bootstrap'
import CartPreviewCard from './CartPreviewCard'
import IssueData from '../../../Data/IssuePage.mock.json'
import { useEffect, useState } from 'react'
import Slider from 'react-slick'
import moment from 'moment'
import timeSlotData from '../../../Data/Timeslot.data.json'

interface ICartPreview {
  cartItem:
    | {
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

interface FilterTimeSlot {
  id: number
  start_time_hour: number
  start_time: string
  end_time: string
}

const CartPreview: React.FunctionComponent<ICartPreview> = (props) => {
  const cartItem = props
  const [show3, setShow3] = useState(false)
  const handleClose3 = () => setShow3(false)
  const handleShow3 = () => setShow3(true)
  const [filterTime, setFilterTime] = useState<FilterTimeSlot[]>([])

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
  const handleSelection = (event: any) => {
    if (event?.target.name === 'time') {
      console.log(event.target.value)
    }
  }

  const Slot = () => {
    const days = []
    const dateStart = moment()
    const dateEnd = moment().add(7, 'days')

    while (dateEnd.diff(dateStart, 'days') >= 0) {
      days.push(dateStart.format('dddd Do'))
      dateStart.add(1, 'days')
    }
    return days
  }

  //  const Week = () => {
  //    const weekDays: any = []
  //    const weekStart = moment()
  //    const weekEnd = moment().add(7, 'days')

  //    while (weekEnd.diff(weekStart, 'days') >= 0) {
  //      weekDays.push(
  //        weekStart.calendar({
  //          sameDay: '[Today]',
  //          nextDay: '[Tomorrow]',
  //          sameElse: 'dddd',
  //        }),
  //      )
  //      weekStart.add(1, 'days')
  //    }
  //    return weekDays
  //  }

  useEffect(() => {
    const filterTimeSlot: FilterTimeSlot[] = timeSlotData.timeSlot.filter(function (item) {
      return item?.start_time_hour > moment().get('hour')
    })
    setFilterTime(filterTimeSlot)
  }, [])
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
              <Button onClick={handleShow3}>{IssueData.constData.cartPreview.bookNow}</Button>
              <Modal show={show3} onHide={handleClose3} keyboard={false}>
                <Modal.Header>
                  <Modal.Title>Schedule Appointment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Container>
                    <div>
                      <p>Select Date</p>
                      <Slider {...settings}>
                        {Slot().map((e: any, index) => (
                          <div
                            onClick={handleSelection}
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
                      {filterTime &&
                        filterTime.map((e: any, id: number) => {
                          return (
                            <button
                              className='d-flex col-4 col-sm-4 g-0'
                              key={id}
                              onClick={handleSelection}
                            >
                              <label>
                                {e.start_time} - {e.end_time}
                                <input type='radio' value={e.id} name='time' />
                              </label>
                            </button>
                          )
                        })}
                    </div>
                  </Container>
                </Modal.Body>
              </Modal>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default CartPreview
