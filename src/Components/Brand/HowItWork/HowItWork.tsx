import { Container } from 'react-bootstrap'
import './HowItWork.css'
const HowItWorks: React.FunctionComponent = () => {
  return (
    <>
      <Container fluid className=''>
        <Container className=''>
          <div className='row'>
            <div className='col-12'>
              <div className='center-title'>
                <h4>
                  <strong>How it works</strong>
                </h4>
              </div>
            </div>
          </div>

          <div className='row work-row justify-content-center'>
            <div className='first col-5 g-0  d-flex justify-content-first'>
              <img src='static/Mobile_Services/work1.svg' alt='work1' className='work1' />
              <div className='first-row-text'>
                <h4 className='works-heading '>Choose your brand</h4>
                <p className='works-para'>
                  Select your brand from our variegated line-up of mobile phones.
                </p>
              </div>
            </div>

            <div className='work-middle-border col-1 g-0 '>
              <hr className='hr-mid-blue' />
            </div>

            <div className='last col-5 g-0 d-flex justify-content-first'>
              <img src='static/Mobile_Services/work2.svg' alt='work2' className='work2' />
              <div className='first-row-text'>
                <h4 className='works-heading'>Receive the exact quote</h4>
                <p className='works-para '>
                  Once you select the issue, we’ll send you the apt quote for its service.
                </p>
              </div>
            </div>
          </div>

          <div className='row work-row'>
            <div className='first col-5 g-0 d-flex justify-content-first'>
              <img src='static/Mobile_Services/work3.svg' alt='work3' className='work3' />
              <div className='second-row-text  m-3'>
                <h4 className='works-heading d-flex justify-content-start'>Book a technician</h4>
                <p className='works-para text-muted'>
                  Post the quotation shared, you can easily book a technician at your selected time
                  and place of convenience
                </p>
              </div>
            </div>

            <div className='work-middle-border col-1 g-0'>
              <hr className='hr-mid-blue' />
            </div>

            <div className='last col-5 g-0 d-flex justify-content-first'>
              <img src='static/Mobile_Services/work4.svg' alt='work4' className='work4' />
              <div className='second-row-text'>
                <h4 className='works-heading'>Get back your phone as good as new</h4>
                <p className='works-para'>
                  Our verified technicians work around the issue as soon as the request is received
                  to deliver you your device as good as new. We never compromise on quality.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  )
}

export default HowItWorks
