import React from "react";
import "./footer.css";
import { footerData } from "./footerData";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
  return (
    <>
      <section className="footer" style={{ textAlign: "left" }}>
        {footerData.map((e: any) => {
          return (
            <div
              className="container-fluid g-0 footer-container"
              style={{
                paddingTop: "50px",
                paddingBottom: "50px",
                display: "flex",
                backgroundColor: "#24252a",
              }}
            >
              <div className="first-footer ">
                <img
                  src={e.first_footer.logo}
                  alt="white-logo"
                  className="erip-logo"
                />
                <p className="footer-text">{e.footer_text}</p>
                <i className="fa-brands fa-twitter"></i>
                <i className="facebook fab fa-facebook-square"></i>
                <i className="Instagram fab fa-instagram"></i>
                <i className="youtube fab fa-youtube"></i>
                <i className="Linkdin fab fa-linkdin"></i>
                <i className="printerest fab fa-pinterest-p"></i> 
                {/* <div className="d-flex">
                  <Link to={""}>
                    <img
                      style={{ height: "20px", width: "20px" }}
                      src={e.icon}
                      alt=""
                    />
                  </Link>
                </div> */}
              </div>

              <div className="col-6">
                        <ul className="second-footer">
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Terms of use</li>
                            <li>Customers Support</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Footer;
