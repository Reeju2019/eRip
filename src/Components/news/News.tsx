import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { newsData } from "./newsData";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./news.css";

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
  };
  return (
    <>
      <section className="news-update">
        <Container>
          <div>
            <h4 className="news_heading">News & Updates</h4>
            <Slider {...settings}>
              {newsData.map((e: any) => {
                return (
                  <div className="card device_card">
                    <div className="img_card">
                      <img
                        src={e.news_image}
                        className="card-img-top"
                        alt="..."
                      />
                    </div>
                    <div className="card-body news_card_body">
                      <h4 className="card-title news_title">{e.des}</h4>
                      <Link to={""} className="news_more">
                        Know More
                      </Link>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
};

export default News;
