import React, { Component, Fragment } from "react";
import "./Shop.css";
import './Part.css'
import { Carousel } from 'react-bootstrap';
import img1 from "../../Assetsshop/one.webp";
import img2 from "../../Assetsshop/two.webp";
import Logoo from "../../Assets/download-5.png";
import image_slider_1 from "../../Assetsshop/IMG_0156.webp";
import image_slider_2 from "../../Assetsshop/151.webp";
import image_slider_3 from "../../Assetsshop/52acsvmykzxrpmmxreyfnfuxbj8ahxrtfolbtxryac0lebef (1).webp";
import image_slider_4 from "../../Assetsshop/074-2.webp";
import image_slider_5 from "../../Assetsshop/bria_ed694339b1313333.webp";
import image_slider_6 from "../../Assetsshop/213A.webp";
import image_slider_7 from "../../Assetsshop/306.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import styleShop from "./Shop.module.css";

export default class Shop extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <a className={`navbar-brand ${styleShop["navbar-brand"]}`} href="/">
              <img src={Logoo} alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className={`nav-link active ${styleShop["nav-link"]}`}
                    aria-current="page"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Browse by category
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdown"
                  >
                    <li>
                      <a className="dropdown-item" href="/">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        Another action
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Contact
                  </a>
                </li>
              </ul>

              <div className={`icons d-flex col-2  ${styleShop["icons"]}`}>
                <div className="col-3">
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      size="xl"
                      style={{ color: "#0B8C38" }}
                    />
                  </a>
                </div>

                <div className="col-3">
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faUser}
                      size="xl"
                      style={{ color: "#0B8C38" }}
                    />
                  </a>
                </div>
                <div className="col-3">
                  <a href="/">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      size="xl"
                      style={{ color: "#0B8C38" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        {/*--------------------------------------------start section youssef----------------------------------------- */}




        <div className="images-shop-slider">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image_slider_1}
                alt="First slide"

              />
              <Carousel.Caption>
                <h5 className="text-slider-1">Clothing</h5>
                <button className="slider-btn-1">shop all</button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image_slider_2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5 className="text-slider-2">Badges & Keyrings</h5>
                <button className="slider-btn-2">shop all</button>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={image_slider_3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5 className="text-slider-3">Accessories</h5>
                <button className="slider-btn-3">shop all</button>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>














        <section className="section-image">
          <div className="about-slider">
            <div className="row">
              <div className="slider-h1">
                <h1>Collections</h1>
              </div>
              <div className="col-md-3">
                <div className="slider-image">
                  <img src={image_slider_4} alt="" />
                  <h5>
                    Clothing{" "}
                    <span>
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </h5>
                </div>
              </div>
              <div className="col-md-3">
                <div className="slider-image">
                  <img src={image_slider_5} alt="" />
                  <h5>
                    {" "}
                    Accessories
                    <span>
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </h5>
                </div>
              </div>

              <div className="col-md-3">
                <div className="slider-image">
                  <img src={image_slider_6} alt="" />
                  <h5>
                    Other Items{" "}
                    <span>
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </h5>
                </div>
              </div>

              <div className="col-md-3">
                <div className="slider-image">
                  <img src={image_slider_7} alt="" />
                  <h5>
                    {" "}
                    Badges & Keyrings
                    <span>
                      <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </h5>
                </div>
              </div>

              <div className="view-all-btn">
                {" "}
                <button>View all</button>
              </div>
            </div>
          </div>
        </section>

        {/*--------------------------------------------end section youssef----------------------------------------- */}
        {/* -------------------------------------------start section kareem ---------------------------------------- */}
        <section className="part1">
          <div className="container">
            <div className="row d-flex col-12">
              <div className="col-lg-6">
                <img src={img1} alt="" width="500px" height="550px" />
              </div>
              <div className="col-lg-6">
                <h2>Solidarity iPhone Cover</h2>
                <p>
                  The Eco Case is made from a biodegradable copolymer PBAT which
                  is a composite made from a range of materials such as coffee
                  grounds, palm tree fibre and wheat-straw, designed to
                  decompose over time. AVAILABLE IN DIFFERENT SIZES
                </p>
                <br />
                <a className="btn btn-dark " href="">
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="part2">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2>
                  Book of the Month - Daybreak in Gaza Stories of Palestinian
                  Lives and Culture
                </h2>
                <p>
                  Daybreak in Gaza is a record of an extraordinary place and
                  people, and of a culture preserved by the people themselves.
                  Vignettes of artists, acrobats, doctors, students, shopkeepers
                  and teachers offer stories of love, life, loss and survival.
                  They display the wealth of Gaza’s cultural landscape and the
                  breadth of its history. Daybreak in Gaza humanises the people
                  dismissed as statistics. It stands as a mark of resistance to
                  the destruction and as a testament to the people of Gaza.
                </p>
                <br />
                <a className="btn btn-dark" href="">
                  Buy Now
                </a>
              </div>
              <div className="col-lg-6">
                <img src={img2} alt="" width="500px" height="550px" />
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------end section kareem ---------------------------------------- */}

        <section
          className={`getinvolved  py-4 px-2 d-flex justify-content-center ${styleShop["getinvolved"]}`}
        >
          <div
            className={`wrap container  d-grid justify-items-center ${styleShop["d-grid"]}`}
          >
            <div className="content row   ">
              <div className="main  py-4 px-5 d-flex justify-content-center ">
                <div className={`inner py-4 px-2 col-8 ${styleShop["inner"]}`}>
                  <h5>Get Involved</h5>
                  <p>
                    Our campaigns are only strong because of people across the
                    country and around the world are working together for
                    change. There are many different ways for you to get
                    involved in the campaign for freedom, equality, and justice
                    for Palestine.
                  </p>
                  <p>
                    You can become a member of PSC, take action on our
                    campaigns, get involved in your local branch, affiliate your
                    organisation, come to one of our events, or donate to our
                    work.
                  </p>
                </div>
              </div>
            </div>
            <div className={`btnmore ${styleShop["btnmore"]}`}>
              <a href="/GetInvolved" className="btn main-btn ">
                Learn more{" "}
              </a>
            </div>
          </div>
        </section>

        <footer className={`mainfootershop ${styleShop["mainfootershop"]}`}>
          <section
            className={`footerShop  py-5 px-2 ${styleShop["footerShop"]}`}
          >
            <div className="main ">
              <div className=" d-flex col-11">
                <div className="col-4">
                  <div className="row d-grid justify-content-center">
                    <h6>Terms</h6>
                    <br />
                    <p>Delivery</p>
                    <p>Returns</p>
                    <p>Privacy Policy</p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="row d-grid justify-content-center">
                    <h6>Quick Links</h6>
                    <br />
                    <p>About us</p>
                    <p>get involved</p>
                    <p>Donate</p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="row d-grid justify-content-center">
                    <h6>Our Mission</h6>
                    <br />
                    <br />
                    <p>
                      PSC campaigns for justice, peace and self-determination
                      for the Palestinians, in support of international law and
                      human rights & against all racism.
                    </p>
                  </div>
                </div>
              </div>
              <div className=" d-flex m-5 justify-content-end ">
                <div className={`icons d-flex col-2 ${styleShop["icons"]}`}>
                  <div className="col-3">
                    <a href="/">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        size="xl"
                        style={{ color: "#000000" }}
                      />
                    </a>
                  </div>

                  <div className="col-3">
                    <a href="/">
                      <FontAwesomeIcon
                        icon={faInstagram}
                        size="xl"
                        style={{ color: "#000000" }}
                      />
                    </a>
                  </div>

                  <div className="col-3">
                    <a href="/">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="xl"
                        style={{ color: "#000000" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </footer>
      </Fragment>
    );
  }
}
