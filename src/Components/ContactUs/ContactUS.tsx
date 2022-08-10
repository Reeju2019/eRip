import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import './Contact.css'
import ContactPageData from '../../Data/ContactPageData.mock.json'
import Header from '../Home/Header/Header'

const ContactUs: React.FunctionComponent = () => {
  return (
    <>
      <Header />
      <Container fluid className='contact'>
        <Container>
          <Row>
            <Col className='col-12'>
              <div>
                <h4 className='mb-lg-4 mt-3 mb-3 d-flex justify-content-center'>
                  {ContactPageData.contact_title}
                </h4>
              </div>
            </Col>
          </Row>
          <Row className='d-flex'>
            <Col className='col-12 col-md-4 bg-white p-4'>
              <div className='left-column'>
                <h4 className='lg-4 fs-5 d-flex justify-content-left'>
                  {ContactPageData.contact_left_title}
                </h4>
                <div className='col-12'>
                  <hr className='mt-0' />
                </div>
                <p className='fw-bolder m-0 text-muted d-flex justify-content-left'>
                  {ContactPageData.contact_left_mid}
                </p>
                <div className='address text-muted m-0'>
                  <p className='m-0 d-flex justify-content-left'>
                    {ContactPageData.contact_left_l1}
                  </p>
                  <p className='m-0 d-flex justify-content-left'>
                    {ContactPageData.contact_left_l2}
                  </p>
                  <p className='m-0 d-flex justify-content-left'>
                    {ContactPageData.contact_left_l3}
                  </p>
                  <p className='m-0 d-flex justify-content-left text-decoration-none'>
                    {ContactPageData.contact_left_l4}
                  </p>
                </div>
                <a
                  className='d-flex justify-content-left text-decoration-none'
                  rel='noopener noreferrer'
                  href='https://www.google.com/maps/place/ERIP,+1709,+1st+Main+Rd,+Austin+Town,+Neelasandra,+Bengaluru,+Karnataka+560047/@12.9582971,77.6152016,17z/data=!4m5!3m4!1s0x3bae15605263ebe3:0x4067d9247ec36adf!8m2!3d12.9582971!4d77.6152016?hl=en-IN&gl=in'
                  target='_blank'
                >
                  {ContactPageData.get_direction}
                </a>
                <div className='col-12'>
                  <hr className='mt-10' />
                </div>
                <p className='d-flex justify-content-left m-0 text-muted'>
                  {ContactPageData.helpline_number}
                </p>
                <p className='mt-2 fs-6 '>
                  <a href='tel:080-47184455' className='d-flex justify-content-left'>
                    <span className='contact-no m-0'>{ContactPageData.helpline_no}</span>
                  </a>
                  <span className='contact-time d-flex justify-content-left m-0'>
                    {ContactPageData.time}
                  </span>
                </p>
              </div>
            </Col>
            <Col className='col-12 col-md-4'>
              <iframe
                src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3888.211763521468!2d77.6152016!3d12.9582971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15605263ebe3%3A0x4067d9247ec36adf!2sERIP!5e0!3m2!1sen!2sin!4v1659006780823!5m2!1sen!2sin'
                width='100%'
                height='100%'
                // style='border:0;'
                // allowfullscreen=''
                loading='lazy'
                // referrerpolicy='no-referrer-when-downgrade'
              ></iframe>
            </Col>
            <Col className='col-12 col-md-4 bg-white p-4'>
              <Form>
                <h4 className='lg-4 fs-5 d-flex justify-content-left'>
                  {ContactPageData.contact_right_title}
                </h4>
                <div className='col0'>
                  <hr className='mt-10' />
                </div>
                <Form.Text className='text-muted d-flex justify-content-left'>
                  {ContactPageData.contact_right_para}
                </Form.Text>
                <Form.Group className='mt-3' controlId='formBasicName'>
                  <Form.Control type='text' placeholder='Name' />
                </Form.Group>
                <Form.Group className='mt-3' controlId='formBasicMobile'>
                  <Form.Control type='' placeholder='Mobile' />
                </Form.Group>
                <Form.Group className='mt-3' controlId='formBasicEmail'>
                  <Form.Control type='email' placeholder='Email' />
                </Form.Group>
                <Form.Group className='mt-3' controlId='formBasicMessage'>
                  <Form.Control as='textarea' rows={3} placeholder='Message' />
                </Form.Group>
                <Button className='mt-4'>Request a Callback</Button>
                <p className='form-footer'>{ContactPageData.connect_us}</p>
              </Form>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  )
}

export default ContactUs
