import * as React from 'react'
import { Col, Row } from 'react-bootstrap'

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
}

const RepairServiceCard: React.FunctionComponent<IRepairServiceCardProps> = ({ service }) => {
  // console.log(service)
  const offPrice = (price: number, off: number) => {
    const offer = price - (price * off) / 100
    return Math.floor(offer)
  }

  return (
    <>
      <Row className=''>
        <Col className='col-2'>
          <div className=''>
            <img src={service.serviceImage} alt={service.service_name} className='servicesImg' />
          </div>
        </Col>
        <Col className='col-6'>
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
        <Col className='col-3 '>
          <div className='btnbtn'>
            <button className='serviceBtn'>Add +</button>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default RepairServiceCard
