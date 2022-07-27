import React from "react";
import vaccineimg from "./img-fleet.png";
import "./vaccine.css";

const Vaccinatated = () => {
  return (
    <div>
      <section className="vaccinated">
        <div className="container">
          <div className="row">
            <div className="caro-2 d-flex">
              <div className="text-vaccinated justify-content-start col-8">
                <h4 className="vaccinated-para">#WeCare</h4>
                <h1 className="vaccinated-heading">
                  <strong>
                    Our Fleet is <br />
                    Fully Vaccinated!
                  </strong>
                </h1>
              </div>

              <img
                src={vaccineimg}
                className="justify-content-end col-4 vaccinated-img"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vaccinatated;
