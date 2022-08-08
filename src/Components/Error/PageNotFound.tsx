import React from 'react'
import { Container } from 'react-bootstrap'
import './PageNotFound.css'
import { useNavigate } from 'react-router-dom'

const PageNotFound: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }
  return (
    <>
      <Container fluid className='p-5 cont'>
        <div className='notFoundCard'>
          <div className='cardInner'>
            <div className='d-flex justify-content-between'>
              <div className='fs-1'>
                <div>OOPS!</div>
                <div>Page Not Found</div>
                <div>🥺</div>
              </div>
              <div>
                <img src='/static/errorPage/giff.gif' className='errorImg' alt='' />
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-center m-4'>
            <button onClick={handleClick} type='button' className='notFoundBtn'>
              Go to Home?
            </button>
          </div>
        </div>
      </Container>
    </>
  )
}

export default PageNotFound
