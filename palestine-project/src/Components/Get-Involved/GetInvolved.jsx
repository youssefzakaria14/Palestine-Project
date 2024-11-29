import React, { Component, Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import stylegetinvolved from "./getinvolved.module.css";
import Footer from "../Footer/Footer";

export default class GetInvolved extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <section className={`container ${stylegetinvolved["container"]}`}>
          <nav aria-label="breadcrumb ">
            <ol className={`breadcrumb ${stylegetinvolved["breadcrumb"]}`}>
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Get Involved
              </li>
            </ol>
          </nav>

          <div
            className={`container mt-3 p-0  ${stylegetinvolved["container"]}`}
          >
            <h1>Get Involved</h1>
          </div>
        </section>

        <section
          className={`getinvolved-content py-4 px-2 ${stylegetinvolved["getinvolved-content"]}`}
        >
          <div className="wrap container">
            <div className="content row">
              <div className="main">
                <div
                  className={`inner bg-light ${stylegetinvolved["inner"]}`}
                >
                  <p>
                    Our campaigns are only strong because of people across the
                    country and around the world working together for change.
                    There are many different ways for you to get involved in the
                    campaign for freedom, equality, and justice for Palestine.
                  </p>
                  <p>
                    You can become a member of PSC, take action on our
                    campaigns, get involved in your local branch, affiliate your
                    organisation, come to one of our events, or donate to our
                    work.
                  </p>

                  <div
                    className={`flexible-content ${stylegetinvolved["flexible-content"]}`}
                  >
                    <div className={`box_grid${stylegetinvolved["box_grid"]}`}>
                      <div className="row px-6">
                        <div className={`box col-md-4 ${stylegetinvolved['box']}`}>
                          <div
                            className={`wrapper1 px-4 py-4  ${stylegetinvolved["wrapper1"]}`}
                          >
                            <h4>Campaigns</h4>
                            <p>
                              With our campaigns we are taking on the
                              corporations that profit from occupation and
                              discrimination; our government that refuses to
                              hold Israel to account; and our media that does
                              not report the truth.
                              <br/><br/>
                              We are only powerful because we stand together.
                            </p>
                            <div className={`BTN ${stylegetinvolved['BTN']}`}>
                              <a className={`btn1 ${stylegetinvolved['btn1']}`} href="/">GET INVOLVED</a>
                            </div>
                          </div>
                        </div>

                        <div className={`box col-md-4 ${stylegetinvolved['box']}`}>
                          <div
                            className={`wrapper2 px-4 py-4 ${stylegetinvolved["wrapper2"]}`}
                          >
                            <h4>Our branches</h4>
                            <p>
                              Local branches are the bedrock of our campaign.
                              <br/><br/>
                              Across the country our activists are building a
                              mass movement for peace and justice. Many of our
                              members are a member of a local branch, find
                              yours.
                            </p>
                            <div className={`BTN ${stylegetinvolved['BTN']}`}>
                              <a className={`btn2 ${stylegetinvolved['btn2']}`} href="/">FIND YOUR LOCAL BRANCH</a>
                            </div>
                          </div>
                        </div>

                        <div className={`box col-md-4 ${stylegetinvolved['box']}`}>
                          <div
                            className={`wrapper3 px-4 py-4 ${stylegetinvolved["wrapper3"]}`}
                          >
                            <h4>Join us</h4>
                            <p>
                              We are led by our members who set campaigns and
                              vote on our priorities.
                              <br/><br/>
                              We are stronger together. Your membership is vital
                              for us to continue our work.
                            </p>
                            <div className={`BTN ${stylegetinvolved['BTN']}`}>
                              <a className={`btn3 ${stylegetinvolved['btn3']}`} href="/">JOIN US</a>
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

        <Footer/>
      </Fragment>
    );
  }
}
