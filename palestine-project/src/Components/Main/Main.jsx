import { Component, Fragment } from "react";
import imagef from "../../Assets/4.jpeg";
import images from "../../Assets/palestine.jpeg";
import imagel from "../../Assets/download (12).jpeg";
import 'react-router-dom';
import "./Main.css";

export default class Main extends Component {
  render() {
    return (
      <Fragment>
        <section className="main-page">
          <div className="flex-container p-5">
            <div className="row">
              <div className="Main">
                <h1>Main</h1>
              </div>
              <div className="campaign-boxes col-3 ">
                <div className="campaign-intro">
                  <h3>Our campaigns</h3>
                  <p>
                    Together we can take on the might of governments,
                    corporations, and the media - and we can win.
                  </p>
                  <a href="/Campaingns" className="btn btn-success btn-lg">
                    {" "}
                    VIEW ALL
                  </a>
                </div>
              </div>
              <div className="col-9">
                <div className="campaign-box col-3">
                  <a href="/Test">
                    <div className="wrapper">
                      <div className="campaign-image">
                        <img src={imagef} alt="" />
                      </div>
                      <h4>Journalist and Counter</h4>
                    </div>
                  </a>
                </div>
                <div className="campaign-box col-3">
                  <a href="/Historyy">
                    <div className="wrapper">
                      <div className="campaign-image">
                        <img src={images} alt="" />
                      </div>
                      <h4>History of the Question of Palestine</h4>
                    </div>
                  </a>
                </div>
                <div className="campaign-box col-3 ">
                  <a href="/Problem">
                    <div className="wrapper">
                      <div className="campaign-image">
                        <img src={imagel} alt="" />
                      </div>
                      <h4>Apartheid Off Campus</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
