import { Container } from 'react-bootstrap'
import './HowItWork.css'
import BrandPageData from '../../../Data/BrandPage.mock.json'

const HowItWorks: React.FunctionComponent = () => {
  return (
    <>
      <Container fluid className=''>
        <Container className=''>
          <div className='row'>
            <div className='col-12'>
              <div className='center-title'>
                <h4>
                  <strong>{BrandPageData.constData.howItWorks.heading}</strong>
                </h4>
              </div>
            </div>
          </div>

          <div className='row work-row justify-content-center'>
            <div className='first col-5 g-0  d-flex justify-content-first'>
              <img src='static/Mobile_Services/work1.svg' alt='work1' className='work1' />
              <div className='first-row-text'>
                <h4 className='works-heading '>{BrandPageData.constData.howItWorks.title1}</h4>
                <p className='works-para'>{BrandPageData.constData.howItWorks.text1}</p>
              </div>
            </div>

            <div className='work-middle-border col-1 g-0 '>
              <hr className='hr-mid-blue' />
            </div>

            <div className='last col-5 g-0 d-flex justify-content-first'>
              <img src='static/Mobile_Services/work2.svg' alt='work2' className='work2' />
              <div className='first-row-text'>
                <h4 className='works-heading'>{BrandPageData.constData.howItWorks.title2}</h4>
                <p className='works-para '>{BrandPageData.constData.howItWorks.text2}</p>
              </div>
            </div>
          </div>

          <div className='row work-row'>
            <div className='first col-5 g-0 d-flex justify-content-first'>
              <img src='static/Mobile_Services/work3.svg' alt='work3' className='work3' />
              <div className='second-row-text  m-3'>
                <h4 className='works-heading d-flex justify-content-start'>
                  {BrandPageData.constData.howItWorks.title3}
                </h4>
                <p className='works-para text-muted'>{BrandPageData.constData.howItWorks.text3}</p>
              </div>
            </div>

            <div className='work-middle-border col-1 g-0'>
              <hr className='hr-mid-blue' />
            </div>

            <div className='last col-5 g-0 d-flex justify-content-first'>
              <img src='static/Mobile_Services/work4.svg' alt='work4' className='work4' />
              <div className='second-row-text'>
                <h4 className='works-heading'>{BrandPageData.constData.howItWorks.title4}</h4>
                <p className='works-para'>{BrandPageData.constData.howItWorks.text4}</p>
              </div>
            </div>
          </div>
        </Container>
      </Container>
    </>
  )
}

export default HowItWorks
