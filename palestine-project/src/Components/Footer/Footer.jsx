import React, { Component, Fragment } from "react";
import palestinePic from "../../Assets/fak.png";
import stylefooter from "./footer.module.css";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer>
          <section className={`sec11 p-3  text-white ${stylefooter["sec11"]}`}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12 ">
                  <div className="text mb-5">
                    <h4>
                      Palestine <br />
                      Solidarity <br />
                      Campaign
                    </h4>
                  </div>
                  <br />
                </div>
                <div className="col-lg-4">
                  <div className="text row">
                    <h5>ADDRESS</h5> <br />
                    <p>
                      Palestine Solidarity Campaign <br />
                      Box BM PSA <br />
                      London <br />
                      WC1N 3XX 
                    </p>
                    <br />
                    <br />
                    <br />
                    <h5>EMAIL</h5> <br />
                    <p>info@palestinecampaign.org</p>
                    <br />
                    <br />
                    <br />
                    <h5>TELEPHONE</h5> <br />
                    <p>020 7700 6192</p>
                  </div>
                </div>
                <div className="col-lg-2  ">
                  <div className="text row">
                    <h5>ABOUT</h5> <br />
                    <p>
                      About us <br />
                      Our aims <br />
                      Opportunities <br />
                      Our parptrons <br />
                      Get in touch <br />
                    </p>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="text row">
                    <h5>GET INVOLVED</h5> <br />
                    <p>
                      Our campaigns <br />
                      Join Us <br />
                      Donate <br />
                      Our local branches <br />
                      Event <br />
                      Advertising your event
                    </p>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="text row">
                    <h5>RESOURCES</h5> <br />
                    <p>
                      Leaflets, flyers, reports & action cards <br />
                      Films about Palestine <br />
                      Factsheets <br />
                      Latest news <br />
                      Shop
                    </p>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="text">
                    <h5>Using this site</h5>
                    <p>
                      Copyright Palestine Solidarity Campaign 2023. Palestine
                      Solidarity Campaign Ltd is limited by guarantee and
                      registered in England and Wales Number 5213508. Registered
                      Office (not for general correspondence): 27 Old Gloucester
                      Street, London WC1N 3AX.
                    </p>
                    <div className={`img pt-2  ${stylefooter["img"]}`}>
                      <img
                        src={palestinePic}
                        alt=""
                        width={"100px"}
                        height={"200px"}
                      />
                    </div>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          </section>

          <section className={`sec12 p-3 text-white ${stylefooter["sec12"]}`}>
            <div className="container">
              <div className="row">
                <div className="col-lg-10">
                  <div className="text">
                    <p>Copyright Palestine Solidarity Campaign 2016</p>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="text">
                    <a href="/">A Hands Up project</a>
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
