import React from "react";
import "./offer.css";
import img from "./img-offers.png"

const Offer = () => {
  return (
    <div>
      <section className="offers" style={{ textAlign: "left" }}>
        <div className="container-fluid offer-container">
          <div className="row offer-2">
            <div className=" col-7 col-sm-8">
              <h1 className="offer-text">
                <strong>
                  Browse All <br /> Available Offers
                </strong>
              </h1>
            </div>

            <div className="offer-img col-4 col-sm-4">
              <img src={img}  alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Offer;
