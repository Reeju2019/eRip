import * as React from 'react'
import { Col, Row } from 'react-bootstrap'

// interface SingleService {
//   serviceImage: string
//   service_name: string
//   price: number
//   off: number
//   repairTime: string
//   warranty: string
//   repairType: string
// }

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
  // cart: SingleService[]
  // cartItem: SingleService[]
  // setCartItem: React.Dispatch<React.SetStateAction<SingleService[]>>
}

const RepairServiceCard: React.FunctionComponent<IRepairServiceCardProps> = (props) => {
  const { service } = props
  const [add, setAdd] = React.useState(false)

  const offPrice = (price: number, off: number) => {
    const offer = price - (price * off) / 100
    return Math.floor(offer)
  }
  const btnClickAdd = () => {
    setAdd(!add)
    // cart.push(service)
  }
  const btnClickRemove = () => {
    setAdd(!add)
  }

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
            <p className='m-0'>Repair Time: {service.repairTime}</p>
            <p className='m-0'>Warranty: {service.warranty}</p>
            <p className='m-0'>Repair Type: {service.repairType}</p>
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
