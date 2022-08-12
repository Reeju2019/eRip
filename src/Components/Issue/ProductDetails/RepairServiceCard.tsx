import * as React from 'react'
import { Col, Row } from 'react-bootstrap'
import IssueData from '../../../Data/IssuePage.mock.json'

interface SingleService {
  serviceImage: string
  service_name: string
  price: number
  off: number
  repairTime: string
  warranty: string
  repairType: string
}

interface IRepairServiceCardProps {
  service: {
    serviceImage: string
    service_name: string
    price: number
    off: number
    repairTime: string
    warranty: string
    repairType: string
  }
  cartItem: SingleService[]
  setCartItem: React.Dispatch<React.SetStateAction<SingleService[]>>
}

const RepairServiceCard: React.FunctionComponent<IRepairServiceCardProps> = (props) => {
  const { service, cartItem, setCartItem } = props
  const [add, setAdd] = React.useState(false)

  const offPrice = (price: number, off: number) => {
    const offer = price - (price * off) / 100
    return Math.floor(offer)
  }
  const btnClickAdd = () => {
    setAdd(!add)
    setCartItem([...cartItem, service])
  }
  const btnClickRemove = () => {
    const isExist = cartItem.find((i) => i.service_name === service.service_name)
    let filterArr: SingleService[]
    if (isExist) {
      filterArr = cartItem.filter((i) => i.service_name !== service.service_name)
      setCartItem(filterArr)
    }
    setAdd(!add)
  }
  React.useEffect(() => {
    cartItem.map((item) => {
      if (item.service_name === service.service_name) {
        setAdd(true)
      }
    })
  })

  return (
    <>
      <Row className=''>
        <Col className='col-2'>
          <div className=''>
            <img src={service.serviceImage} alt={service.service_name} className='servicesImg' />
          </div>
        </Col>
        <Col className='col-7'>
          <h6 className=''>{service.service_name}</h6>
          <div className='m-0 lineHeight colorGreen'>
            <span className='sticThrough'>₹ {service.price}</span>
            <span className='m-0 '> {service.off}</span>% off
          </div>
          <p className='m-0'>₹ {offPrice(service.price, service.off)}</p>
          <div className='serviceParagraph lineHeight'>
            <p className='m-0'>
              {IssueData.constData.rapairServiceCard.repairTime} {service.repairTime}
            </p>
            <p className='m-0'>
              {IssueData.constData.rapairServiceCard.warrenty} {service.warranty}
            </p>
            <p className='m-0'>
              {IssueData.constData.rapairServiceCard.reapairType} {service.repairType}
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
        </Col>
      </Row>
      <div className='knowMore'>
        <p className='m-0 knowMorePara'>Know More</p>
      </div>
    </>
  )
}

export default RepairServiceCard
