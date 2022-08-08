import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import newsData from '../../../Data/News.data.json'
import data from '../../../Data/const.data.json'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './news.css'

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <>
      <section className='news-update'>
        <Container>
          {data.news.map((c: any, index) => {
            return (
              <div key={index}>
                <h4 className="news_heading">{c.heading}</h4>
                <Slider {...settings}>
                  {newsData.news.map((e: any, index) => {
                    return (
                      <div className="card device_card" key={index}>
                        <div className="img_card">
                          <img
                            src={e.news_image}
                            className="card-img-top"
                            alt="..."
                          />
                        </div>
                        <div className='card-body news_card_body'>
                          <h4 className='card-title news_title'>{e.des}</h4>
                          <Link to={''} className='news_more'>
                            {c.button}
                          </Link>
                        </div>
                      </div>
                    )
                  })}
                </Slider>
              </div>
            )
          })}
        </Container>
      </section>
    </>
  )
}

export default News
