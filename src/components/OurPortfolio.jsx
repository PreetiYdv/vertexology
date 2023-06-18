import React, { useRef } from "react";
import Slider from "react-slick";
import flower from "../assets/images/png/sliderFlower.png";
import chair from "../assets/images/gif/chair.gif";
import capsule from "../assets/images/png/capsule.png";
import mail_box from "../assets/images/png/mail_box.png"
import wing from "../assets/images/png/portfolio_wing.png"

const OurPortfolio = () => {
  const slider = useRef();
  var settings = {
    dots: false,
    infinite: true,
    speed: 300,
    cssEase: "linear",
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1.8,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 578,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section id="products" className="position-relative page_bg py-5">
        <img
          src={wing}
          alt="wing"
          className="position-absolute bottom-0 start-0 ms-3 z-3 mw_90"
        />
        <div className="container pb-lg-5 mb-5">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="fc_black text_shadow ff_gilroyBlack fs_65xl text-uppercase">
              Our Portfolios
            </h1>
            <div className="d-flex justify-content-center justify-content-sm-start gap-3 align-items-center">
              <div
                className="slider_arrows rounded-pill Cursor_Pointer"
                onClick={() => slider.current.slickPrev()}
              >
                <span>
                  <svg
                    width="11"
                    height="19"
                    viewBox="0 0 11 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6142 15.887L4.24898 9.5218L10.6142 3.15658L9.34115 0.610496L0.429849 9.5218L9.34115 18.4331L10.6142 15.887Z"
                      fill="white"
                    />
                    <path
                      d="M10.6142 15.887L4.24898 9.5218L10.6142 3.15658L9.34115 0.610496L0.429849 9.5218L9.34115 18.4331L10.6142 15.887Z"
                      fill="url(#paint0_linear_1_45)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_45"
                        x1="9.3883"
                        y1="20.6471"
                        x2="-4.59239"
                        y2="12.294"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF2801" />
                        <stop offset="1" stop-color="#FF6500" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
              <div
                className="slider_arrows rounded-pill rotate180 Cursor_Pointer"
                onClick={() => slider.current.slickNext()}
              >
                <span>
                  <svg
                    width="11"
                    height="19"
                    viewBox="0 0 11 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6142 15.887L4.24898 9.5218L10.6142 3.15658L9.34115 0.610496L0.429849 9.5218L9.34115 18.4331L10.6142 15.887Z"
                      fill="white"
                    />
                    <path
                      d="M10.6142 15.887L4.24898 9.5218L10.6142 3.15658L9.34115 0.610496L0.429849 9.5218L9.34115 18.4331L10.6142 15.887Z"
                      fill="url(#paint0_linear_1_45)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1_45"
                        x1="9.3883"
                        y1="20.6471"
                        x2="-4.59239"
                        y2="12.294"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#FF2801" />
                        <stop offset="1" stop-color="#FF6500" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <Slider ref={slider} {...settings} className="Portfolio_slider pt-5">
            <div className="pe-4">
              <div className="portfolio_cards">
                <img src={flower} alt="flower" className="w-100 h-100" />
              </div>
            </div>
            <div className="pe-4">
              <div className="portfolio_cards">
                <img src={chair} alt="flower" className="w-100 h-100" />
              </div>
            </div>
            <div className="pe-4">
              <div className="portfolio_cards">
                <img src={capsule} alt="capsule" className="w-100 h-100" />
              </div>
            </div>
            <div className="pe-4">
              <div className="portfolio_cards">
                <img src={mail_box} alt="mail_box" className="w-100 h-100" />
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default OurPortfolio;
