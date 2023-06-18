import React from "react";
import { Col, Row } from "react-bootstrap";
import logo from "../assets/images/png/logo.png";
import wing from "../assets/images/png/wing_img.png";
import footer_img from "../assets/images/png/footer_img.png"

const Footer = () => {
  return (
    <>
      <footer className="pt-5 position-relative page_bg">
        <img
          src={wing}
          alt="wing"
          className=" position-absolute top-0 mt-4 start-0 w-100 mw_74 ms-5"
        />
        <img
          src={wing}
          alt="wing"
          className=" position-absolute bottom-0 end-0 w-100 mw_74 me-5 mb-5 pt-5 rotate180"
        />
        <div className="position-fixed start-68 bottom_25 my-5 rotate90 z-3">
          <a href="#" className="ff_gilroyReg fc_black opacity_7 fs_2xl">
            Behance / &nbsp;
          </a>
          <a href="#" className="ff_gilroyReg fc_black opacity_7 fs_2xl">
            Youtube /&nbsp;
          </a>
          <a href="#" className="ff_gilroyReg fc_black opacity_7 fs_2xl">
            LinkedIn
          </a>
        </div>
        <div className="position-fixed end_67 bottom_25 mb-5 rotate90 z-3">
          <a href="#" className="ff_gilroyReg fc_black opacity_7 fs_2xl">
            Twitter / &nbsp;
          </a>
          <a href="#" className="ff_gilroyReg fc_black opacity_7 fs_2xl">
            Facebook /&nbsp;
          </a>
          <a href="#" className="ff_gilroyReg fc_black opacity_7 fs_2xl">
            Instagram
          </a>
        </div>
        <div className="container py-5 my-5">
          <Row className="mb-5">
            <Col lg={7}>
              <img src={logo} alt="logo" className="mb-4" />
              <h2 className="ff_gilroyBlack fs_65xl text_shadow text-uppercase fc_black mb-0 mw_741 text-center text-md-start">
                Utn vulputate rutrum bibend puru.
              </h2>
              <p className="ff_gilroyReg fc_black opacity_7 fs_sm text-center text-md-start">
                Faucibus pulvinar enim in sagittis. Aliquam libero dolor iaculis
                in aliquam. Cursus nibh enim sed et, mauris morbi. Faucibus
                viverra et diam sit cursus.
              </p>
              <div className="d-flex align-items-center position-relative">
                <span className="msg_img position-absolute">
                  <svg
                    width="15"
                    height="13"
                    viewBox="0 0 15 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.67895 0.574219C2.05029 0.574219 1.44738 0.823952 1.00286 1.26848C0.558327 1.71301 0.308594 2.31592 0.308594 2.94458V3.1828L7.41966 7.01211L14.5307 3.18398V2.94458C14.5307 2.31592 14.281 1.71301 13.8365 1.26848C13.3919 0.823952 12.789 0.574219 12.1604 0.574219H2.67895ZM14.5307 4.52916L7.70055 8.20677C7.61422 8.25324 7.51771 8.27757 7.41966 8.27757C7.32162 8.27757 7.22511 8.25324 7.13878 8.20677L0.308594 4.52916V10.0556C0.308594 10.6843 0.558327 11.2872 1.00286 11.7317C1.44738 12.1763 2.05029 12.426 2.67895 12.426H12.1604C12.789 12.426 13.3919 12.1763 13.8365 11.7317C14.281 11.2872 14.5307 10.6843 14.5307 10.0556V4.52916Z"
                      fill="#B2B2B2"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="email_box w-100 rounded-pill"
                />
                <button className="ff_gilroySemiBold fs_xsm rounded-pill fc_white submit_btn border-0 translateX lh_17 position-absolute">
                  SUBMIT
                </button>
              </div>
            </Col>
            <Col
              lg={5}
              className="d-flex justify-content-lg-end justify-content-center position-relative pb-5 pt-lg-0 pt-5"
            >
              <img
                src={footer_img}
                alt="footer_img"
                className="w-50 position-absolute start-0 bottom-0 h-100"
              />
              <div className="d-flex flex-lg-column justify-content-center gap-3 position-relative z-3">
                <a href="https://www.instagram.com/">
                  <span className="footer_icon rounded-pill">
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.6117 8.18854C9.1363 8.18854 7.93229 9.41872 7.93229 10.9262C7.93229 12.4336 9.1363 13.6638 10.6117 13.6638C12.087 13.6638 13.291 12.4336 13.291 10.9262C13.291 9.41872 12.087 8.18854 10.6117 8.18854ZM18.6478 10.9262C18.6478 9.7925 18.6578 8.66911 18.5955 7.53751C18.5332 6.22312 18.2397 5.0566 17.299 4.09546C16.3563 3.13226 15.2166 2.83447 13.9302 2.7708C12.8207 2.70714 11.7212 2.71741 10.6137 2.71741C9.50414 2.71741 8.40465 2.70714 7.29712 2.7708C6.0107 2.83447 4.869 3.13431 3.92831 4.09546C2.9856 5.05866 2.69415 6.22312 2.63184 7.53751C2.56953 8.67117 2.57958 9.79456 2.57958 10.9262C2.57958 12.0578 2.56953 13.1832 2.63184 14.3148C2.69415 15.6292 2.98761 16.7957 3.92831 17.7569C4.87101 18.7201 6.0107 19.0179 7.29712 19.0815C8.40666 19.1452 9.50615 19.1349 10.6137 19.1349C11.7232 19.1349 12.8227 19.1452 13.9302 19.0815C15.2166 19.0179 16.3583 18.718 17.299 17.7569C18.2417 16.7937 18.5332 15.6292 18.5955 14.3148C18.6598 13.1832 18.6478 12.0598 18.6478 10.9262ZM10.6117 15.1384C8.33028 15.1384 6.48909 13.2571 6.48909 10.9262C6.48909 8.59518 8.33028 6.71396 10.6117 6.71396C12.8931 6.71396 14.7342 8.59518 14.7342 10.9262C14.7342 13.2571 12.8931 15.1384 10.6117 15.1384ZM14.9031 7.52519C14.3704 7.52519 13.9403 7.08569 13.9403 6.54145C13.9403 5.99721 14.3704 5.55771 14.9031 5.55771C15.4357 5.55771 15.8659 5.99721 15.8659 6.54145C15.866 6.67068 15.8413 6.79868 15.7929 6.9181C15.7446 7.03753 15.6737 7.14604 15.5842 7.23742C15.4948 7.3288 15.3886 7.40125 15.2717 7.45063C15.1548 7.50001 15.0296 7.52535 14.9031 7.52519Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
                <a href="https://themes.muffingroup.com/be/webdesign/">
                  <span className="footer_icon rounded-pill">
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_1_147)">
                        <path
                          d="M8.62396 9.92493C8.62396 9.92493 10.5711 9.77365 10.5711 7.39429C10.5711 5.01183 8.97798 3.85303 6.95882 3.85303H0.316772V17.1556H6.95882C6.95882 17.1556 11.0146 17.2884 11.0146 13.2285C11.0136 13.2274 11.1906 9.92493 8.62396 9.92493ZM3.24364 6.21592H6.95882C6.95882 6.21592 7.8624 6.21592 7.8624 7.59908C7.8624 8.9843 7.33136 9.18498 6.72829 9.18498H3.24364V6.21592ZM6.77049 14.7907H3.24364V11.235H6.95882C6.95882 11.235 8.30493 11.2165 8.30493 13.0617C8.30493 14.6178 7.29946 14.7794 6.77049 14.7907ZM16.4217 7.2358C11.5117 7.2358 11.5158 12.3475 11.5158 12.3475C11.5158 12.3475 11.1803 17.4325 16.4217 17.4325C16.4217 17.4325 20.7883 17.6939 20.7883 13.8953H18.5428C18.5428 13.8953 18.6169 15.3269 16.4969 15.3269C16.4969 15.3269 14.2492 15.4833 14.2492 13.0113H20.8594C20.8604 13.0103 21.589 7.2358 16.4217 7.2358ZM18.4193 11.235H14.2266C14.2266 11.235 14.5003 9.18498 16.4722 9.18498C18.444 9.18498 18.4193 11.235 18.4193 11.235ZM18.941 4.63414H13.675V6.27459H18.941V4.63414Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_147">
                          <rect
                            width="20.5827"
                            height="20.5827"
                            fill="white"
                            transform="translate(0.316772 0.353027)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                </a>
                <a href="https://www.youtube.com/">
                  <span className="footer_icon rounded-pill">
                    <svg
                      width="21"
                      height="22"
                      viewBox="0 0 21 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.3138 16.8067H10.2967C10.2435 16.8067 4.92372 16.7964 3.58155 16.4319C3.2189 16.3342 2.88827 16.143 2.62277 15.8773C2.35727 15.6117 2.16621 15.2809 2.06872 14.9182C1.82737 13.5566 1.71083 12.1759 1.72053 10.7931C1.7143 9.40806 1.834 8.02532 2.07816 6.66197C2.1784 6.29866 2.37034 5.96721 2.63556 5.69944C2.90078 5.43167 3.23037 5.23656 3.5927 5.13284C4.89799 4.78979 10.0711 4.78979 10.2907 4.78979H10.3087C10.3627 4.78979 15.6962 4.80009 17.0246 5.16457C17.7613 5.3644 18.3368 5.93985 18.5358 6.67654C18.7845 8.04358 18.902 9.43034 18.8848 10.8197C18.8908 12.203 18.7708 13.5841 18.5263 14.9457C18.4276 15.308 18.2357 15.6381 17.9699 15.9034C17.7041 16.1686 17.3735 16.3597 17.0109 16.4576C15.7073 16.8032 10.5334 16.8067 10.3138 16.8067ZM8.59859 8.22454L8.5943 13.3702L13.0642 10.7974L8.59859 8.22454Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
                <a href="https://www.facebook.com/">
                  <span className="footer_icon rounded-pill">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.58484 19.1747H12.6002V11.662H15.1216L15.5024 8.73923H12.6002V6.86621C12.6002 6.02232 12.8369 5.446 14.0513 5.446H15.6053V2.8217C15.3377 2.79083 14.4218 2.7085 13.3515 2.7085C11.108 2.7085 9.58484 4.07725 9.58484 6.57805V8.73923H7.05316V11.662H9.58484V19.1747Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
                <a href="https://twitter.com/i/flow/login">
                  <span className="footer_icon rounded-pill">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9748 6.53417C18.7436 6.07457 19.3189 5.35087 19.5932 4.4982C18.8708 4.92685 18.0804 5.22879 17.2562 5.39097C16.7003 4.80295 15.9664 4.41408 15.1677 4.28431C14.369 4.15454 13.5498 4.29107 12.8364 4.67286C12.1229 5.05464 11.5548 5.66049 11.2197 6.39701C10.8846 7.13352 10.801 7.95982 10.9819 8.74853C9.51867 8.67507 8.08728 8.29475 6.78059 7.63225C5.47391 6.96975 4.32115 6.03987 3.39712 4.90299C2.92721 5.71352 2.78341 6.67253 2.99494 7.58524C3.20648 8.49795 3.75747 9.29593 4.53603 9.81712C3.95175 9.79833 3.38042 9.64014 2.86969 9.35572V9.40203C2.86985 10.2519 3.16396 11.0756 3.70214 11.7333C4.24032 12.3911 4.98944 12.8424 5.82245 13.0109C5.2805 13.1583 4.71202 13.18 4.1604 13.0743C4.39601 13.8053 4.85396 14.4445 5.47032 14.9026C6.08669 15.3608 6.83072 15.6151 7.59857 15.63C6.29485 16.6533 4.68481 17.2082 3.02749 17.2055C2.73333 17.2055 2.44003 17.1883 2.14844 17.1549C3.83143 18.2363 5.79019 18.8103 7.79068 18.8083C9.16852 18.8178 10.5345 18.5534 11.8093 18.0304C13.0841 17.5075 14.2423 16.7365 15.2165 15.7621C16.1908 14.7878 16.9617 13.6295 17.4846 12.3547C18.0074 11.0799 18.2717 9.71386 18.2621 8.33602C18.2621 8.1765 18.2587 8.01784 18.251 7.86004C18.9718 7.33914 19.5939 6.69383 20.088 5.95443C19.4165 6.25206 18.7042 6.44747 17.9748 6.53417Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                </a>
                <a href="https://in.linkedin.com/">
                  <span className="footer_icon rounded-pill">
                    <svg
                      width="22"
                      height="21"
                      viewBox="0 0 22 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_1_163"
                        maskUnits="userSpaceOnUse"
                        x="2"
                        y="1"
                        width="18"
                        height="18"
                      >
                        <path
                          d="M4.68801 5.24418C5.6353 5.24418 6.40323 4.47624 6.40323 3.52895C6.40323 2.58165 5.6353 1.81372 4.68801 1.81372C3.74071 1.81372 2.97278 2.58165 2.97278 3.52895C2.97278 4.47624 3.74071 5.24418 4.68801 5.24418Z"
                          fill="white"
                        />
                        <path
                          d="M2.9729 7.81689H6.40335V18.5371H2.9729V7.81689ZM9.83381 11.8906V18.5371H12.8355V12.5338C12.8355 11.4618 13.4787 10.6041 14.5507 10.6041C15.6227 10.6041 16.2659 11.6762 16.2659 12.5338V18.5371H19.2676V11.8906C19.2676 10.6041 17.7667 7.81689 14.5507 7.81689C11.3346 7.81689 9.83381 10.6041 9.83381 11.8906Z"
                          fill="white"
                        />
                      </mask>
                      <g mask="url(#mask0_1_163)">
                        <path
                          d="M0.826172 0.0986328H21.4089V20.6814H0.826172V0.0986328Z"
                          fill="white"
                        />
                      </g>
                    </svg>
                  </span>
                </a>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        <div className="d-flex container justify-content-between py-4">
          <p className="ff_gilroyReg fs_sm fc_black opacity_6 mb-0">
            Copyright ©2022 | ABA
          </p>
          <p className="ff_gilroyReg fs_sm fc_black opacity_6 mb-0">
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
