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
              <div
                className="text-vaccinated justify-content-start col-8"
                style={{ textAlign: "left", paddingTop:"3rem" }}
              >
                <h4
                  className="vaccinated-para"
                  style={{
                    fontSize: "1.2rem",
                    marginBottom: "0.5rem",
                    fontWeight: "400",
                  }}
                >
                  #WeCare
                </h4>
                <h1
                  className="vaccinated-heading"
                  style={{
                    color: "#6dbc88",
                    fontSize: "50px",
                    fontWeight: "700",
                  }}
                >
                  <strong>
                    Our Fleet is <br />
                    Fully Vaccinated!
                  </strong>
                </h1>
              </div>

              <img
                style={{ width: "276px", marginLeft:"4rem" }}
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
