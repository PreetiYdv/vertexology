import React from "react";
import { Col, Row } from "react-bootstrap";
import headphones from "../assets/images/gif/headphone.gif";
import wing from "../assets/images/png/wing_img.png";

const TalkToMe = () => {
  return (
    <>
      <section className="position-relative">
        <img
          src={wing}
          alt="wing"
          className="position-absolute bottom-0 start-0 w-100 mw_74 ms-5 mb-5 pt-3 rotate180 d-md-block d-none"
        />
        <Row className="align-items-center justify-content-between flex-column-reverse flex-sm-row">
          <Col
            sm={6}
            className="ps-4 pe-xl-5 py-sm-0 py-5 d-flex justify-content-start flex-column align-items-end"
          >
            <div
              className="pe-md-5 me-xl-5"
              data-aos="fade-right"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <h2 className="ff_gilroyBlack fc_black fs_6x5l text-uppercase mb-1 text_shadow mw_500">
                At tempor, amet viverra eu Quisque
              </h2>
              <p className="ff_gilroyReg fc_black opacity_7 fs_sm mb-md-5 mb-4 mw_500">
                Faucibus pulvinar enim in sagittis. Aliquam libero dolor iaculis
                in aliquam. Cursus nibh enim sed et, mauris morbi. Faucibus
                viverra et diam sit cursus. Pellentesque posuere.
              </p>
              <button className="border-0 rounded-pill contact_btn fc_white fs_sm ff_gilroySemiBold lh_19">
                Talk To Me
              </button>
            </div>
          </Col>
          <Col sm={6} className="p-0">
            <img src={headphones} alt="headphones" className="w-100" />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default TalkToMe;
