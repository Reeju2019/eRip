import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { newsData } from "./newsData";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const News = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    // prevArrow: <BsArrowLeftShort />,
    // nextArrow: <BsArrowRightShort />,
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
      <section className="news-update" style={{paddingTop:"70px", paddingBottom:"80px"}}>
        <Container>
          <div>
            <h4 style={{ color: "#333946", fontWeight: "bold"}}>
              News & Updates
            </h4>
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
                    <div
                      className="card-body"
                      style={{
                        paddingLeft: 0,
                        paddingRight: 0,
                        textAlign: "left",
                        fontWeight: "600",
                      }}
                    >
                      <h4
                        className="card-title"
                        style={{
                          fontSize: "16px",
                          paddingBottom: "17px",
                        }}
                      >
                        {e.des}
                      </h4>
                      <Link
                        to={""}
                        style={{
                          textDecoration: "none",
                          color: "#0056b3",
                          fontSize: "13px",
                        }}
                      >
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
