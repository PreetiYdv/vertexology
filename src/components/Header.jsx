import React, { useState } from "react";
import logo from "../assets/images/png/logo.png";
import { TiThMenuOutline } from "react-icons/ti";
import { GrClose } from "react-icons/gr";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const shownavBar = () => {
    setToggle(!toggle);
    document.body.classList.toggle("overflow-hidden");
  };
  return (
    <>
      <header className="header_bg min_vh_100 d-flex flex-column position-relative">
        <nav className="position-relative z-index-50 pt-4">
          <div className="container d-flex justify-content-between align-items-center">
            <a href="#home">
              <img src={logo} alt="vertexology" />
            </a>
            <ul className="d-none d-lg-flex gap-4 mb-0 p-0 align-items-center myNav">
              <li>
                <a
                  href="#home"
                  className="ff_gilroyMed fc_white lh_19 fs_sm nav_links"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="ff_gilroyMed fc_white lh_19 fs_sm nav_links"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="ff_gilroyMed fc_white lh_19 fs_sm nav_links"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="ff_gilroyMed fc_white lh_19 fs_sm nav_links"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <ul
              className={`d-lg-none ${toggle ? "showNav p-0 myNav" : "myNav"}`}
            >
              <li>
                <a
                  onClick={shownavBar}
                  href="#home"
                  className="ff_gilroyMed fc_white lh_19 fs_sm nav_links"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={shownavBar}
                  href="#about"
                  className="ff_gilroyMed fc_white lh_19 fs_sm nav_links"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={shownavBar}
                  href="#products"
                  className="ff_gilroyMed fc_white lh_19 fs_sm nav_links"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  onClick={shownavBar}
                  href="#contact"
                  className="ff_gilroyMed fc_white lh_19 fs_sm nav_links"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <span onClick={shownavBar} className="nav_btn d-lg-none">
              {toggle ? (
                <GrClose className="stroke_white" />
              ) : (
                <TiThMenuOutline className="fc_white" />
              )}
            </span>
          </div>
        </nav>
        <section
          id="home"
          className="py-5 my-5 flex-grow-1 d-flex  justify-content-center align-items-center"
        >
          <div className="container py-5 my-5">
            <h2 className="ff_gilroyBlack fc_white text-center fs_12x2l mb-0 text-uppercase text_shadow">
              3D Product
            </h2>
            <h2 className="ff_gilroyBlack fc_white text-center fs_13x7l text-uppercase text_shadow">
              Animation
            </h2>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
