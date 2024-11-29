import React, { Component, Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import styleresourses from "../Resourses/resourses.module.css";
export default class Resourses extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <section className={`container  ${styleresourses["container"]}`}>
          <nav aria-label="breadcrumb ">
            <ol className={`breadcrumb ${styleresourses["breadcrumb"]}`}>
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Resourses
              </li>
            </ol>
          </nav>

          <div className={`container mt-3 p-0  ${styleresourses["container"]}`}>
            <h1>Resourses</h1>
          </div>
        </section>

        <section
          className={`resourses-content py-4 px-2 ${styleresourses["resourses-content"]}`}
        >
          <div className="wrap container">
            <div className="content row">
              <div className="main">
                <div className={`inner bg-light ${styleresourses["inner"]}`}>
                  <h1>Literature</h1>

                  <div
                    className={`flexible-content ${styleresourses["flexible-content"]}`}
                  >
                    <div className={`box_grid${styleresourses["box_grid"]}`}>
                      <div className="row px-6">
                        <div
                          className={`box col-md-4 ${styleresourses["box"]}`}
                        >
                          <div
                            className={`wrapper41 px-4 py-4  ${styleresourses["wrapper41"]}`}
                          >
                            <h4>Leaflets, flyers, reports & action cards</h4>
                            <p>
                              See our range of informative leaflets, flyers, and
                              more.
                              <br />
                              <br />
                              You can download or order print resources for your
                              stall here.
                            </p>
                            <div className={`BTN ${styleresourses["BTN"]}`}>
                              <a
                                className={`btn1 ${styleresourses["btn1"]}`}
                                href="/"
                              >
                                SEE OUR LEAFLETS
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`box col-md-4 ${styleresourses["box"]}`}
                        >
                          <div
                            className={`wrapper42 px-4 py-4 ${styleresourses["wrapper42"]}`}
                          >
                            <h4>Factsheets</h4>
                            <p>
                              Learn about Israeli settler-colonialism in
                              Palestine, historically and today.
                              <br />
                              <br />
                              We have factsheets on everything from the Nakba
                              and political prisoners, to BDS and apartheid.
                            </p>
                            <div className={`BTN ${styleresourses["BTN"]}`}>
                              <a
                                className={`btn2 ${styleresourses["btn2"]}`}
                                href="/"
                              >
                                GET FACTSHEETS
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`box col-md-4 ${styleresourses["box"]}`}
                        >
                          <div
                            className={`wrapper43 px-4 py-4 ${styleresourses["wrapper43"]}`}
                          >
                            <h4>Palestine News</h4>
                            <p>
                              Read past issues of PSC’s magazine, produced from
                              the 1980s till the 2010s.
                              <br />
                              <br />
                              Includes comment and analysis on the situation in
                              Palestine as well as campaigning updates.
                            </p>
                            <div className={`BTN ${styleresourses["BTN"]}`}>
                              <a
                                className={`btn3 ${styleresourses["btn3"]}`}
                                href="/"
                              >
                                READ PAST ISSUES
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <br />

                  <h1>Merch</h1>

                  <div
                    className={`flexible-content ${styleresourses["flexible-content"]}`}
                  >
                    <div className={`box_grid${styleresourses["box_grid"]}`}>
                      <div className="row px-6">
                        <div
                          className={`box col-md-4 ${styleresourses["box"]}`}
                        >
                          <div
                            className={`wrapper11 px-4 py-4  ${styleresourses["wrapper11"]}`}
                          >
                            <h4>Shop</h4>
                            <p>
                              We sell everything you need to show your support
                              for Palestine wherever you go.
                              <br />
                              <br />
                              From stickers, badges, t-shirts, and key rings, to
                              delicious Zaytoun products and keffiyehs made in
                              Hebron.
                            </p>
                            <div className={`BTN ${styleresourses["BTN"]}`}>
                              <a
                                className={`btn1 ${styleresourses["btn1"]}`}
                                href="/"
                              >
                                VISIT OUR SHOP
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <br />

                  <h1>Digital resources</h1>

                  <div
                    className={`flexible-content ${styleresourses["flexible-content"]}`}
                  >
                    <div className={`box_grid${styleresourses["box_grid"]}`}>
                      <div className="row px-6">
                        <div
                          className={`box col-md-4 ${styleresourses["box"]}`}
                        >
                          <div
                            className={`wrapper21 px-4 py-4  ${styleresourses["wrapper21"]}`}
                          >
                            <h4>PSC videos</h4>
                            <p className="pb-5">
                              A collection of short videos from PSC: speeches, poetry and protest.
                              <br/><br/>
                            </p>
                            <div className={`BTN ${styleresourses["BTN"]}`}>
                              <a
                                className={`btn1 ${styleresourses["btn1"]}`}
                                href="/"
                              >
                                WATCH VIDEOS
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`box col-md-4 ${styleresourses["box"]}`}
                        >
                          <div
                            className={`wrapper22 px-4 py-4 ${styleresourses["wrapper22"]}`}
                          >
                            <h4>Films about Palestine</h4>
                            <p className="pb-5">
                              A list of recommended films about Palestine.
                              <br />
                              <br />
                              
                            </p>
                            <div className={`BTN ${styleresourses["BTN"]}`}>
                              <a
                                className={`btn2 ${styleresourses["btn2"]}`}
                                href="/"
                              >
                                FIND FILMS
                              </a>
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>



                  <br/><br/>


                  <h1>Further information</h1>

                  <div
                    className={`flexible-content ${styleresourses["flexible-content"]}`}
                  >
                    <div className={`box_grid${styleresourses["box_grid"]}`}>
                      <div className="row px-6">
                        <div
                          className={`box col-md-4 ${styleresourses["box"]}`}
                        >
                          <div
                            className={`wrapper31 px-4 py-4  ${styleresourses["wrapper31"]}`}
                          >
                            <h4>UN resolutions</h4>
                            <p className="pb-5">
                              Information about UN resolutions relating to Palestine and Israel.
                              <br/><br/>
                            </p>
                            <div className={`BTN ${styleresourses["BTN"]}`}>
                              <a
                                className={`btn1 ${styleresourses["btn1"]}`}
                                href="/"
                              >
                                MORE INFORMATION
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`box col-md-4 ${styleresourses["box"]}`}
                        >
                          <div
                            className={`wrapper32 px-4 py-4 ${styleresourses["wrapper32"]}`}
                          >
                            <h4>Historic Palestine</h4>
                            <p className="pb-5">
                              Read more about the history of Palestine.
                              <br />
                              <br />
                              
                            </p>
                            <div className={`BTN ${styleresourses["BTN"]}`}>
                              <a
                                className={`btn2 ${styleresourses["btn2"]}`}
                                href="/"
                              >
                                FIND OUT MORE
                              </a>
                            </div>
                          </div>
                        </div>

                        
                      </div>
                    </div>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
