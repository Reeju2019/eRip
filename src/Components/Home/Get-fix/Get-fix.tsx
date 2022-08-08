import React from 'react'
import './Get-fix.css'
import GetFixData from '../../../Data/Get_fix.mock.json'
import { Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Getfix: React.FunctionComponent = () => {
  const nevigate = useNavigate()
  const handleRepair = (product: string) => {
    localStorage.setItem('deviceId', JSON.stringify(product))
    nevigate(`/${product}`, { state: { id: 1, product: product } })
  }

  return (
    <>
      <Container fluid className='Get-fix'>
        <Container>
          <Row>
            <div className='col-12'>
              <div className='center-title d-flex flex-column'>
                <h4>
                  <strong>{GetFixData.title}</strong>
                </h4>
                <p className='fix-text'>{GetFixData.subtitle}</p>
              </div>
            </div>
          </Row>

          <Row>
            <div className='col-12'>
              <ul className='service'>
                <li className='middle-all' onClick={() => handleRepair('mobile')}>
                  <img src='/static/get-fix/Mobile.png' alt='Mobile' className=' Fix-img' />
                  <p className='text-center small-font mt-4'>
                    <strong>Mobile</strong>
                  </p>
                </li>

                <li className='middle-all' onClick={() => handleRepair('tablet')}>
                  <img src='/static/get-fix/Tablet.png' alt='Tablet' className=' Fix-img' />
                  <p className='text-center small-font mt-4'>
                    <strong>Tablet</strong>
                  </p>
                </li>

                <li className='middle-all' onClick={() => handleRepair('laptop')}>
                  <img src='/static/get-fix/Laptop.png' alt='Laptop' className=' Fix-img' />
                  <p className='text-center small-font mt-4'>
                    <strong>Laptop</strong>
                  </p>
                </li>

                <li className='middle-all'>
                  <img
                    src='/static/get-fix/smart-watch.png'
                    alt='Smart Watch'
                    className=' Fix-img'
                  />
                  <p className='text-center small-font mt-4'>
                    <strong>Smart Watch</strong>
                  </p>
                </li>

                <li className='middle-all'>
                  <img
                    src='/static/get-fix/Air-condition.png'
                    alt='Air Conditioner'
                    className=' Fix-img'
                  />
                  <p className='text-center small-font mt-4'>
                    <strong>
                      Air
                      <br />
                      Conditioner
                    </strong>
                  </p>
                </li>

                <li className='middle-all'>
                  <img
                    src='/static/get-fix/Washing-Machine.png'
                    alt='Washing Machine'
                    className=' Fix-img'
                  />
                  <p className='text-center small-font mt-4'>
                    <strong>
                      Washing <br /> Machine
                    </strong>
                  </p>
                </li>

                <li className='middle-all'>
                  <img src='/static/get-fix/Fridge.png' alt='Refrigerator' className=' Fix-img' />
                  <p className='text-center small-font mt-4'>
                    <strong>Refrigerator</strong>
                  </p>
                </li>
              </ul>
            </div>
          </Row>

          <Row>
            <div className='col-12'>
              <div className='service-1'>
                <li className='middle-all'>
                  <img
                    src='/static/get-fix/water-filter.png'
                    alt='Water Filter'
                    className=' Fix-img1'
                  />
                  <p className='text-center small-font mt-4'>
                    <strong>Water Purifier</strong>
                  </p>
                </li>

                <li className='middle-all'>
                  <img src='/static/get-fix/Television.png' alt='Television' className=' Fix-img' />
                  <p className='text-center small-font mt-4'>
                    <strong>Television</strong>
                  </p>
                </li>

                <li className='middle-all'>
                  <img src='/static/get-fix/chimni.png' alt='Chimni' className=' Fix-img' />
                  <p className='text-center small-font mt-4 csoon'>
                    <strong>Coming soon</strong>
                  </p>
                </li>

                <li className='middle-all'>
                  <img src='/static/get-fix/Plug.png' alt='Plug' className=' Fix-img' />
                  <p className='text-center small-font mt-4 csoon'>
                    <strong>Coming soon</strong>
                  </p>
                </li>

                <li className='middle-all'>
                  <img src='/static/get-fix/Microwave.png' alt='Microwave' className=' Fix-img' />
                  <p className='text-center small-font mt-4 csoon'>
                    <strong>Coming soon</strong>
                  </p>
                </li>
              </div>
            </div>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default Getfix
