import React from 'react'
import newsData from '../../../Data/News.data.json'
import data from '../../../Data/const.data.json'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './news.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const News = () => {
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
    <>
      <section className='news-update'>
        <Container>
          {data.news.map((c, index) => {
            return (
              <div key={index}>
                <h4 className='news_heading'>{c.heading}</h4>
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
                  {newsData.news.map((e, index) => {
                    return (
                      <div className='card device_card' key={index}>
                        <div className='img_card'>
                          <img src={e.news_image} className='card-img-top' alt='...' />
                        </div>
                        <div className='card-body news_card_body'>
                          <h4 className='card-title news_title'>{e.des}</h4>
                          <Link to='' className='news_more'>
                            {c.button}
                          </Link>
                        </div>
                      </div>
                    )
                  })}
                </Carousel>
              </div>
            )
          })}
        </Container>
      </section>
    </>
  )
}

export default News
