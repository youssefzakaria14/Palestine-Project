import React, { Component, Fragment } from "react";
import stylecampaigns from "./Campaigns.module.css";
import Navbar from "../Navbar/Navbar";

export default class Campaigns extends Component {
  render() {
    return (
      <Fragment>
        <Navbar/>

        <section className={`container  ${stylecampaigns["container"]}`}>
          <nav aria-label="breadcrumb ">
            <ol className={`breadcrumb ${stylecampaigns["breadcrumb"]}`}>
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Campaingns
              </li>
            </ol>
          </nav>

          <div className={`container mt-3 p-0  ${stylecampaigns["container"]}`}>
            <h1>Campaingns</h1>
          </div>
        </section>

        <section
          className={`campaigns-content py-4 px-2 ${stylecampaigns["campaigns-content"]}`}
        >
          <div className="wrap container">
            <div className="content row">
              <div className="main">
                <div className={`inner bg-light ${stylecampaigns["inner"]}`}>
                  <div
                    className={`flexible-content ${stylecampaigns["flexible-content"]}`}
                  >
                    <div className={`box_grid${stylecampaigns["box_grid"]}`}>
                      <div className="row px-6">
                        <div
                          className={`box col-md-4 ${stylecampaigns["box"]}`}
                        >
                          <div
                            className={`wrapper11 px-4 py-4  ${stylecampaigns["wrapper11"]}`}
                          >
                            <h4>Boycott Barclays</h4>
                            <p>
                              Both the UK government and UK based businesses are
                              complicit with Israel’s crimes against
                              Palestinians through their involvement in the arms
                              trade with Israel.
                              <br />
                              <br />
                              Join us in calling on Barclays to stop bankrolling
                              companies arming apartheid Israel.
                            </p>
                            <div className={`BTN ${stylecampaigns["BTN"]}`}>
                              <a
                                className={`btn1 ${stylecampaigns["btn1"]}`}
                                href="/"
                              >
                                Find Out More
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`box col-md-4 ${stylecampaigns["box"]}`}
                        >
                          <div
                            className={`wrapper12 px-4 py-4 ${stylecampaigns["wrapper12"]}`}
                          >
                            <h4>LGPS Divest</h4>

                            <p>
                              Local authority pension funds, administered by
                              councils across Britain, invest over £4.4billion
                              in companies complicit in Israel's genocide and
                              apartheid.
                              <br />
                              <br />
                              Join us to demand they divest for Palestine now!
                            </p>
                            <div className={`BTN ${stylecampaigns["BTN"]}`}>
                              <a
                                className={`btn2 ${stylecampaigns["btn2"]}`}
                                href="/"
                              >
                                Find Out More
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`box col-md-4 ${stylecampaigns["box"]}`}
                        >
                          <div
                            className={`wrapper13 px-4 py-4 ${stylecampaigns["wrapper13"]}`}
                          >
                            <h4>Apartheid Off Campus</h4>
                            <p>
                              UK universities remain deeply complicit with
                              Israel’s apartheid regime through their investment
                              and institutional links. Join the campaign to get
                              #ApartheidOffCampus!
                              <br />
                              <br />
                            </p>
                            <div className={`BTN ${stylecampaigns["BTN"]}`}>
                              <a
                                className={`btn3 ${stylecampaigns["btn3"]}`}
                                href="/"
                              >
                                Find Out More
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <br />
                  <br />

                  <div
                    className={`flexible-content ${stylecampaigns["flexible-content"]}`}
                  >
                    <div className={`box_grid${stylecampaigns["box_grid"]}`}>
                      <div className="row px-6">
                        <div
                          className={`box col-md-4 ${stylecampaigns["box"]}`}
                        >
                          <div
                            className={`wrapper21 px-4 py-4  ${stylecampaigns["wrapper21"]}`}
                          >
                            <h4>Child Prisoners</h4>
                            <p>
                              Israel is the only country in the world that
                              systematically prosecutes children in military
                              courts – between 500 and 700 each year.
                              <br />
                              <br />
                              Join us in demanding that all children have their
                              rights protected.
                            </p>
                            <div className={`BTN ${stylecampaigns["BTN"]}`}>
                              <a
                                className={`btn1 ${stylecampaigns["btn1"]}`}
                                href="/"
                              >
                                Find Out More
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`box col-md-4 ${stylecampaigns["box"]}`}
                        >
                          <div
                            className={`wrapper22 px-4 py-4 ${stylecampaigns["wrapper22"]}`}
                          >
                            <h4>Settlements</h4>

                            <p>
                              Israeli settlements are built illegally on stolen
                              Palestinian land.
                              <br />
                              <br />
                              Our government calls them illegal and a barrier to
                              peace and yet they take no action.
                              <br />
                              <br />
                              Join us in calling for action from the UK
                              government.
                            </p>
                            <div className={`BTN ${stylecampaigns["BTN"]}`}>
                              <a
                                className={`btn2 ${stylecampaigns["btn2"]}`}
                                href="/"
                              >
                                Find Out More
                              </a>
                            </div>
                          </div>
                        </div>

                        <div
                          className={`box col-md-4 ${stylecampaigns["box"]}`}
                        >
                          <div
                            className={`wrapper23 px-4 py-4 ${stylecampaigns["wrapper23"]}`}
                          >
                            <h4>Stop the JNF UK</h4>
                            <p>
                              The Jewish National Fund is complicit in the
                              ethnic cleansing of Palestinians. Join the
                              campaign to get their charitable benefits revoked.
                              <br />
                              <br />
                            </p>
                            <div className={`BTN ${stylecampaigns["BTN"]}`}>
                              <a
                                className={`btn3 ${stylecampaigns["btn3"]}`}
                                href="/"
                              >
                                Find Out More
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
