import React, { Component, Fragment } from "react";
import './Events_5.css';
import posted_5 from '../../Assets/download.png';
import Navbar from "../Navbar/Navbar";

export default class Events_5 extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <section className="event-5">
                    <div className="events-info-5">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="info-9">
                                    <h1 className="info-9">Wandsworth: Stop Funding Genocide </h1>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="social-media-5">
                                    <a href="/">
                                        <i className="fa-brands fa-square-facebook"></i> <span>facebook</span>
                                    </a>
                                    <a href="/">
                                        <i className="fa-brands fa-twitter"></i> <span>twitter</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="posted-5">
                    <h6 className="heading-5">Posted on October 15, 2024</h6>
                    <div className="posted-info-5">
                    <div className="posted-data-5">
                            <h4 className="event-details-5">When</h4>
                            <p><span>&#128197;</span>   09/10/2024 - 16/10/2024  </p>
                            <p><span>&#128336;</span> 6:15 pm - 7:00 pm </p>
                        </div>
                           
                        <div className="posted-image-5">
                            <img src={posted_5} alt="" />
                        </div>
                       
                            <div class="information-5">
                                <p className="span"> <span>Where:</span> Wandsworth Town Hall <br />
                               <span>When:</span>  Tuesday 15 October, 6.15pm</p>
                                <p>Join Richmond&Kingston PSC and Wandsworth Friends of Palestine on Tuesday 15th October to tell the Pensions Committee you support divestment.</p>
                                <p>The Pensions Committee will be meeting there and a small group of us will be present to make the case for divestment in person and answer questions from the councillors. Please join our supporters on Tuesday 15 October from 6:15pm at Wandsworth Town Hall, corner of Wandsworth High Street & Fairfield Street, to help put pressure on the council to divest. Bring flags or placards, wear your kuffiyeh, or just come as you are.</p>

                        </div>

                       
                        


                    </div>
                </section>


            </Fragment>
        );
    }
}