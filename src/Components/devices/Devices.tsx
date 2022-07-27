import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./devices.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { Data } from "./data";
import { Container } from "react-bootstrap";
import { Banner } from "./Banner";

const Devices = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <BsArrowLeftShort />,
    nextArrow: <BsArrowRightShort />,
    initialSlide: 0,
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
    <div className="device_section">
      <Container>
        <div>
          <h4> Devices </h4>
          <p>Servicing, Hardware & Software Repair</p>
          <Slider {...settings}>
            {Data.map((e: any) => {
              return (
                <div className="card device_card">
                  <div className="img_card">
                    <img
                      src={e.device_image}
                      className="card-img-top"
                      alt="..."
                    />
                    {e.is_comingsoon === 1 ? <Banner /> : ""}
                  </div>
                  <div className="card-body device_card_body">
                    <p className="card-text device_text">{e.device_name}</p>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </Container>
    </div>
  );
};

export default Devices;
