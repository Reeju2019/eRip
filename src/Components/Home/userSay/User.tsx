import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import "./user.css";
import data from "../../../Data/const.data.json";
import userData from "../../../Data/User.data.json";

const User = () => {
  const settings = {
    dots: true,
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
    <div className="user_section">
      <Container>
        {data.usersay.map((c: any) => {
          return (
            <div>
              <h4 className="user_heading">{c.heading}</h4>
              <Slider {...settings}>
                {userData.user.map((e: any) => {
                  return (
                    <div className="card user_card">
                      <div className="img_card user_img">
                        <img
                          src={c.quotation}
                          className="card-img-top"
                          alt="..."
                        />
                        <p className="user_card_text">{e.text}</p>
                        <div className="d-flex">
                          <img className="user_dp" src={e.user} alt="" />
                          <div className="user_id">
                            <p className="card-text user_text">{e.username}</p>
                            <p className="user_company">
                              <i>-{e.company}</i>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default User;
