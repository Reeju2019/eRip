import React from "react";
import { Container } from "react-bootstrap";
import "./whyus.css";
import { WhyusData } from "./whyus_data";

const WhyUs = () => {
  return (
    <div>
      <Container>
        <section className="why-us" style={{padding:"50px"}}>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="center-title">
                  <h4
                    style={{
                      color: "#333946",
                    }}
                  >
                    <strong>Why Us</strong>
                  </h4>
                </div>
              </div>
            </div>

            <div
              className="row side-gap-1 why-us-row"
              style={{ textAlign: "left" }}
            >
              {WhyusData.map((e: any) => {
                return (
                  <div className="whyus-work d-flex col-6 col-sm-6 g-0">
                    <img src={e.image} className="row-1-img" alt="" />
                    <div className="why-text">
                      <h4 className="work-heading">{e.heading}</h4>
                      <p className="work-para">{e.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default WhyUs;
