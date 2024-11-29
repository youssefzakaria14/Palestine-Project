import React, { Component, Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import stylemedia from "./media.module.css";
export default class Media extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <section className={`container  ${stylemedia["container"]}`}>
          <nav aria-label="breadcrumb ">
            <ol className={`breadcrumb ${stylemedia["breadcrumb"]}`}>
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Media
              </li>
            </ol>
          </nav>

          <div className={`container mt-3 p-0  ${stylemedia["container"]}`}>
            <h1>Contact Us</h1>
          </div>
        </section>

        <section
          className={`media-content py-4 px-2 ${stylemedia["media-content"]}`}
        >
          <div className="wrap container">
            <div className="content row">
              <div className="main">
                <div className={`inner ${stylemedia["inner"]}`}>
                  <p>
                    The Palestine Solidarity Campaign is the largest UK civil
                    society organisation dedicated to securing Palestinian human
                    rights, established in 1982.
                    <br /><br />
                    With more than sixty branches across the country, we
                    campaign against Israel’s flouting of international law, the
                    continued military occupation of Palestine, and systematic
                    discrimination against Palestinians. We work to build
                    awareness amongst politicians and the public of the
                    continual injustices and advocate for peaceful and just
                    solutions that respect the rights and dignity of
                    Palestinians and Israelis.
                    <br /><br />
                    As an organisation, we aim to provide the public with up to
                    date information on Palestine and the occupation. We
                    regularly distribute press releases and statements on issues
                    relating to Palestine. We provide spokespeople for TV and
                    radio, and are also available to author tailored opinion
                    pieces. <br /><br />
                    To find out more, get in touch with our press team.
                  </p>
                  <span>E : 
                    <a className="text-success" href="/">media@palestinecampaign.org</a>
                  </span>
                  <p>T: 020 7700 6192 or (for media requests <strong>only</strong>) 07590862268</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}
