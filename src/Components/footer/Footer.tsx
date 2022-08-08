import React from 'react'
import './footer.css'
import data from '../../Data/const.data.json'

const Footer = () => {
  return (
    <>
      <section className='footer'>
        {data.footer.map((c, index) => {
          return (
            <div
              key={index}
              className='container-fluid g-0 footer-container'
              style={{
                paddingTop: '50px',
                paddingBottom: '50px',
                display: 'flex',
                backgroundColor: '#24252a',
              }}
            >
              <div className='first-footer '>
                <img src={c.logo} alt='white-logo' className='erip-logo' />
                <p className='footer-text'>{c.erip}</p>
                <i className='fa-brands fa-twitter' />
                <i className='facebook fab fa-facebook-square' />
                <i className='Instagram fab fa-instagram' />
                <i className='youtube fab fa-youtube' />
                <i className='fa-brands fa-linkedin' />
                <i className='printerest fab fa-pinterest-p' />
              </div>

              <div className='col-6'>
                <ul className='second-footer'>
                  {/* <li>{c.footer_list}</li> */}
                  <li>About Us</li>
                  <li>Contact Us</li>
                  <li>Terms of use</li>
                  <li>Customers Support</li>
                  <li>Privacy Policy</li>
                </ul>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}

export default Footer
