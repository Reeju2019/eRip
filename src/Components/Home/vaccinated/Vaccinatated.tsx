import React from "react";
import data from "../../../Data/const.data.json";
import "./vaccine.css";

const Vaccinatated = () => {
  return (
    <div>
      <section className="vaccinated">
        <div className="container">
          <div className="row">
            {data.vaccinated.map((c: any) => {
              return (
                <div className="caro-2 d-flex">
                  <div className="text-vaccinated justify-content-start col-8">
                    <h4 className="vaccinated-para">{c.para}</h4>
                    <h1 className="vaccinated-heading">
                      <strong>
                        {c.text1} <br />
                        {c.text2}
                      </strong>
                    </h1>
                  </div>
                  <img
                    src={c.img}
                    className="justify-content-end col-4 vaccinated-img"
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vaccinatated;
