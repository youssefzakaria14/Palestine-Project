import React, { Component, Fragment } from "react";
import './Events_4.css';
import posted_4 from '../../Assets/PSC-Event-Poster-1-e1727257634918.jpg';
import Navbar from "../Navbar/Navbar";

export default class Events_4 extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <section className="event-4">
                    <div className="events-info-4">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="info-4">
                                    <h1 className="info-4">Lambeth for Divestment Lobbies </h1>
                                </div>

                            </div>

                            <div className="col-md-6">
                            <div className="social-media-4">
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

                <section className="posted-4">
                    <h6 className="heading-4">Posted on October 9, 2024 </h6>
                    <div className="posted-info-4">
                        <div className="posted-image-4">
                            <img src={posted_4} alt="" />
                        </div>
                        <div className="posted-data-4">
                            <h4 className="event-details-4">When</h4>
                            <p><span>&#128197;</span>   09/10/2024 - 16/10/2024      </p>
                            <p><span>&#128336;</span> 6:00 pm - 8:00 pm </p>
                        </div>
                        <div class="information-4">
                            <p>Join the lobbies at Lambeth Town Hall calling on Lambeth Council to divest its Local Government Pension Scheme fund from companies complicit in Israel’s genocide, occupation and apartheid.</p>
                            <p> Lambeth Council holds at least £10.4 million of their Local Government
                                 Pension Scheme (LGPS) in companies complicit in Israel’s oppression and illegal occupation of the Palestinian people. As residents, workers, students,
                                 and trade unionists, we demand they divest!</p>
                            <p>We’re calling for everyone who work, live, or study in the borough to sign this petition and ask their local councillors to back their demands.</p>
                            <p className="p-1" ><span>when:</span> On Wednesday 9 October lobby Lambeth Pensions Committee from 6pm. On Wednesday 16 October lobby Lambeth Full Council from 6.30pm</p>
                            <p  className="p-2"> <span>Where:</span> Lambeth Town Hall, 1 Brixton Hill, SW2 1RW</p>

                        </div>





                    </div>
                </section>


            </Fragment>
        );
    }
}