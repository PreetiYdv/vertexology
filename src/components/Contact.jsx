import React from "react";
import { Col, Row } from "react-bootstrap";
import contact from "../assets/images/png/contact_img.png";
import wing from "../assets/images/png/contact_wing.png";

const Contact = () => {
  return (
    <>
      <section id="about" className="position-relative">
        <img
          src={wing}
          alt="wing"
          className=" position-absolute bottom-0 end-0 w-100 mw_74 me-5 mb-5 pt-3"
        />
        <Row className="align-items-center justify-content-between bg_black">
          <Col sm={6} className="p-0">
            <img src={contact} alt="contact" className="w-100" />
          </Col>
          <Col sm={6} className="pe-3 ps-lg-5 py-sm-5 py-4">
            <div className="ms-md-5 ps-xl-5">
              <h2 className=" ff_gilroyBlack fc_white fs_6x5l text-uppercase mb-1 text_shadow mw_500">
                Sed volutpat erat dignissim iaculis aenean
              </h2>
              <p className=" ff_gilroyReg fc_white fs_sm mb-5 mw_500">
                Tincidunt phasellus id imperdiet lorem blandit. Congue donec
                scelerisque congue pellentesque massa porta vel donec dapibus.
              </p>
              <button className=" border-0 rounded-pill contact_btn fc_white fs_sm ff_gilroySemiBold lh_19">
                Contact Us
              </button>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Contact;
