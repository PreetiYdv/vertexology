import React from "react";
import { Col, Row } from "react-bootstrap";
import men from "../assets/images/png/men_img.png";
import wing from "../assets/images/png/contact_wing.png";

const ContactWithMe = () => {
  return (
    <>
      <section className="position-relative">
        <img
          src={wing}
          alt="wing"
          className="position-absolute bottom-0 end-0 w-100 mw_74 me-5 mb-5 pt-3"
        />
        <Row className="align-items-center justify-content-between bg_black">
          <Col sm={6} className="p-0">
            <img src={men} alt="men" className="w-100 h-100" />
          </Col>
          <Col sm={6} className=" ps-xl-5 py-5 py-sm-0">
            <div
              className="ps-md-5 ms-xl-5 px-3"
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="500"
            >
              <p className="ff_gilroyReg text_shadow fs_sm text-uppercase fc_white mb-md-3 mb-1">
                About me
              </p>
              <h2 className="ff_gilroyBlack fc_white fs_6x5l text-uppercase mb-1 text_shadow">
                John Smith
              </h2>
              <p className="ff_gilroyReg fc_white fs_sm mb-md-5 mb-3 mw_500">
                Euismod nunc mauris lacinia sapien nulla accumsan condimentum.
                Lectus vitae tristique tellus amet quis eu faucibus leo. Dictum
                mauris ultrices sed urna, eget cras. Nullam egestas eros
                senectus et, erat aliquet in. Egestas interdum gravida
                pellentesque amet, quisque. In quis vitae lectus aenean congue
                odio sit semper porta. Pellentesque id tempus, mauris donec
                facilisis.
              </p>
              <button className="border-0 rounded-pill contact_btn fc_white fs_sm ff_gilroySemiBold lh_19">
                Contact with Me
              </button>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default ContactWithMe;
