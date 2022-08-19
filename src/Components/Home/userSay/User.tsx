import React from 'react'
import { Container } from 'react-bootstrap'
import './user.css'
import data from '../../../Data/const.data.json'
import userData from '../../../Data/User.data.json'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const User = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 1, 
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1, 
    },
  }

  return (
    <div className='user_section'>
      <Container>
        {data.usersay.map((c, index) => {
          return (
            <div key={index}>
              <h4 className='user_heading d-flex justify-content-center'>{c.heading}</h4>
              <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                customTransition='all .5'
                transitionDuration={500}
                containerClass='carousel-container'
                removeArrowOnDeviceType={['tablet', 'mobile']}
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
                partialVisible={true}
                rewindWithAnimation={true}
                sliderClass='react-multi-carousel-track'
              >
                {userData.user.map((e, index) => {
                  return (
                    <div key={index} className='card user_card'>
                      <div className='img_card user_img'>
                        <img src={c.quotation} className='card-img-top' alt='...' />
                        <p className='user_card_text'>{e.text}</p>
                        <div className='d-flex'>
                          <img className='user_dp' src={e.user} alt='' />
                          <div className='user_id'>
                            <p className='card-text user_text'>{e.username}</p>
                            <p className='user_company'>
                              <i>-{e.company}</i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Carousel>
            </div>
          )
        })}
      </Container>
    </div>
  )
}

export default User
