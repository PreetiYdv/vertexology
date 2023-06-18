import React from "react";
import { Col, Row } from "react-bootstrap";
import wing from "../assets/images/png/portfolio_wing.png";

const ContactUs = () => {
  return (
    <>
      <section id="contact" className=" py-lg-5 page_bg position-relative">
        <img
          src={wing}
          alt="wing"
          className="position-absolute top-0 end-0 me-4 mt-4 z-3 mw_90"
        />
        <div className="container py-5 ">
          <Row className="justify-content-between align-items-center py-lg-5 my-lg-5">
            <Col lg={6}>
              <h1 className="ff_gilroyBlack mw_662 text_shadow fc_black fs_4x5l text-uppercase">
                Nisi et diam euismod suspendisse tristique quis
              </h1>
            </Col>
            <Col lg={5}>
              <p className="ff_gilroyReg fc_black opacity_7 fs_sm mb-4">
                Tincidunt phasellus id imperdiet lorem blandit. Congue donec
                scelerisque congue pellentesque.
              </p>
              <button className="border-0 lh_19 rounded-pill fc_white fs_sm ff_gilroySemiBold contact_btn">
                Contact Us
              </button>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
