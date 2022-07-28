import React from "react";
import "./offer.css";
import data from "../../Data/const.data.json";

const Offer = () => {
  return (
    <div>
      <section className="offers">
        <div className="container-fluid offer-container">
          {data.offer.map((e: any) => {
            return (
              <div className="row offer-2">
                <div className=" col-7 col-sm-8">
                  <h1 className="offer-text">
                    <strong>
                      {e.heading1} <br /> {e.heading2}
                    </strong>
                  </h1>
                </div>
                <div className="offer-img col-4 col-sm-4">
                  <img src={e.img} alt="" />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Offer;
