import * as React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import IssueData from '../../../Data/IssuePage.mock.json'

interface SingleService {
  model?: string
  serviceImage: string
  serviceName: string
  price: number
  off: number
  repairTime: string
  warranty: string
  repairType: string
}

interface IRepairServiceCardProps {
  service: {
    model?: string
    serviceImage: string
    serviceName: string
    price: number
    off: number
    repairTime: string
    warranty: string
    repairType: string
  }
  cartitem: SingleService[]
  setcartitem: React.Dispatch<React.SetStateAction<SingleService[]>>
}

const RepairServiceCard: React.FunctionComponent<IRepairServiceCardProps> = (props) => {
  const { service, cartitem, setcartitem } = props
  const [add, setAdd] = React.useState(false)
  const [show, setShow] = React.useState(false)
  const handleClose = () => {
    setShow(false)
    setcartitem([service])
    localStorage.setItem('Cart', JSON.stringify([service]))
  }
  const handleCancel = () => {
    setShow(false)
  }

  React.useEffect(() => {
    const localModel = JSON.parse(localStorage.getItem('Model') as string)
    service.model = localModel
  }, [])

  const offPrice = (price: number, off: number) => {
    const offer = price - (price * off) / 100
    return Math.floor(offer)
  }
  const btnClickAdd = () => {
    if (cartitem.length > 0 && cartitem[0].model !== service.model) {
      setShow(true)
    } else {
      setAdd(!add)
      setcartitem([...cartitem, service])
    }
  }
  const btnClickRemove = () => {
    const filterArr = []
    for (let i = 0; i < cartitem.length; i++) {
      if (
        cartitem[i].model === service.model &&
        cartitem[i].serviceName === service.serviceName
      ) {
        continue
      }
      filterArr.push(cartitem[i])
    }
    setcartitem(filterArr)

    setAdd(!add)
  }
  React.useEffect(() => {
    cartitem.map((item) => {
      if (item.serviceName === service.serviceName && item.model === service.model) {
        setAdd(true)
      }
    })
  }, [service, cartitem])

  return (
    <>
      <Row className=''>
        <Col className='col-2'>
          <div className=''>
            <img src={service?.serviceImage} alt={service?.serviceName} className='servicesImg' />
          </div>
        </Col>
        <Col className='col-7'>
          <h6 className=''>{service?.serviceName}</h6>
          <div className='m-0 lineHeight colorGreen'>
            <span className='sticThrough'>₹ {service?.price}</span>
            <span className='m-0 '> {service?.off}</span>% off
          </div>
          <p className='m-0'>₹ {offPrice(service?.price, service?.off)}</p>
          <div className='serviceParagraph lineHeight'>
            <p className='m-0'>
              {IssueData?.constData?.rapairServiceCard?.repairTime} {service?.repairTime}
            </p>
            <p className='m-0'>
              {IssueData?.constData?.rapairServiceCard?.warrenty} {service?.warranty}
            </p>
            <p className='m-0'>
              {IssueData?.constData?.rapairServiceCard?.reapairType} {service?.repairType}
            </p>
          </div>
        </Col>
        <Col className='col-2 '>
          <div className='btnbtn'>
            {!add && (
              <button onClick={btnClickAdd} className='serviceBtn'>
                Add+
              </button>
            )}
            {add && (
              <button onClick={btnClickRemove} className={'serviceBtn ' + (add ? 'removeBtn' : '')}>
                Remove
              </button>
            )}
          </div>
          {
            <Modal
              show={show}
              onHide={handleClose}
              animation={false}
              backdrop='static'
              keyboard={false}
            >
              <Modal.Header>
                <Modal.Title>
                  <div className='p-3 text-center m-2'>
                    Some other device issue is already added in cart
                  </div>
                </Modal.Title>
              </Modal.Header>
              <Modal.Footer className='justify-content-center'>
                <Button variant='secondary' onClick={handleCancel}>
                  Cancel
                </Button>
                <Button variant='primary' onClick={handleClose}>
                  Clear Cart
                </Button>
              </Modal.Footer>
            </Modal>
          }
        </Col>
      </Row>
      <div className='knowMore'>
        <p className='m-0 knowMorePara'>Know More</p>
      </div>
    </>
  )
}

export default RepairServiceCard
