import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./devices.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { Data } from "./data";
import { Container } from "react-bootstrap";

const Devices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
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
    <div id="device_section">
      <Container>
        <div>
          <h4 style={{ color: "#333946", fontWeight: "bold" }}> Devices </h4>
          <p style={{ color: "#a1a1a1" }}>
            Servicing, Hardware & Software Repair
          </p>
          <Slider {...settings}>
            {Data.map((e: any) => {
              return (
                <div className="card">
                  <div className="img_card">
                    <img
                      src={e.device_image}
                      className="card-img-top"
                      alt="..."
                    />
                    {e.is_comingsoon === 1 ? (
                      <h5 id="banner">COMMING SOON</h5>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="card-body">
                    <p className="card-text">{e.device_name}</p>
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
