import React from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './MyProfile.css'
import MyProfileData from '../../Data/MyProfile.mock.json'
import OrderCard from './OrderCard'
import Footer from '../footer/Footer'
import Header from '../Home/Header/Header'

const MyProfile: React.FunctionComponent = () => {
  const [show, setShow] = useState(true)
  const showClicked = () => {
    setShow(!show)
  }
  return (
    <>
      <Header />
      <Container fluid className=''>
        <Row>
          <Col className='col-9 firstCol'>
            <div className='m-3 d-flex justify-content-center  '>
              <button
                disabled={show}
                className={'leftButton ' + (show ? 'active' : '')}
                onClick={showClicked}
              >
                {MyProfileData.constData.ongoing}
              </button>
              <button
                disabled={!show}
                className={'rightButton ' + (show ? '' : 'active')}
                onClick={showClicked}
              >
                {MyProfileData.constData.compleated}
              </button>
            </div>
            <div className='m-1 cardContainer'>
              {MyProfileData &&
                !show &&
                MyProfileData.compleated.map((item, index) => {
                  return (
                    <div key={index} className='col-5 m-3'>
                      <OrderCard item={item} />
                    </div>
                  )
                })}
              {/* {MyProfileData &&
                show &&
                MyProfileData.ongoing.map((item, index) => {
                  return (
                    <div key={index} className='col-5 m-3'>
                      <OrderCard item={item} />
                    </div>
                  )
                })} */}
            </div>
          </Col>
          <Col className='col-3 secondCol'>
            <div className='d-flex flex-column justify-content-center m-4'>
              <div className='profileImg align-self-center m-4'>
                <img src='/static/my_profile/user_prof.png' className='w-100' alt='user' />
              </div>
              <h4 className='d-flex justify-content-center'>{MyProfileData.name}</h4>
              <div className='d-flex flex-row justify-content-center contactNumber'>
                +91
                <span className='mx-1'>{MyProfileData.phoneNumber}</span>
                <i className='fa-solid fa-pencil' />
              </div>
            </div>
            <div className='m-2'>
              <div className='d-flex justify-content-between'>
                <div>{MyProfileData.constData.saved_address}</div>
                <div className='update'>{MyProfileData.constData.update_address}</div>
              </div>
              <hr className='my-2' />
              <div className='d-flex justify-content-between'>
                <div>{MyProfileData.constData.contact_details}</div>
                <div className='update'>{MyProfileData.constData.update}</div>
              </div>
              <hr className='my-2' />
              <div>{MyProfileData.constData.refer}</div>
              <hr className='my-2' />
              <div>{MyProfileData.constData.get_help}</div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default MyProfile
