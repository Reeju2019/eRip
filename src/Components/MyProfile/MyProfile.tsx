import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './MyProfile.css'
import MyProfileData from '../../Data/MyProfile.mock.json'
import OrderCard from './OrderCard'

const MyProfile: React.FunctionComponent = () => {
  const [show, setShow] = useState(true)
  const showClicked = () => {
    setShow(!show)
  }
  return (
    <>
      <Container fluid className='mt-2'>
        <Row>
          <Col className='col-9 firstCol'>
            <div className='m-3 d-flex justify-content-center  '>
              <button
                disabled={show}
                className={'leftButton ' + (show ? 'active' : '')}
                onClick={showClicked}
              >
                Ongoing
              </button>
              <button
                disabled={!show}
                className={'rightButton ' + (show ? '' : 'active')}
                onClick={showClicked}
              >
                Compleated
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
              <h4 className='d-flex justify-content-center'>Name</h4>
              <div className='d-flex flex-row justify-content-center contactNumber'>
                +91
                <span className='mx-1'>9876543210</span>
                <i className='fa-solid fa-pencil' />
              </div>
            </div>
            <div className='m-2'>
              <div className='d-flex justify-content-between'>
                <div>Saved Address</div>
                <div className='update'>Update Address</div>
              </div>
              <hr className='my-2' />
              <div className='d-flex justify-content-between'>
                <div>Contact Details</div>
                <div className='update'>Update</div>
              </div>
              <hr className='my-2' />
              <div>Refer a Friend</div>
              <hr className='my-2' />
              <div>Get Help</div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default MyProfile
