import React, { Component, Fragment } from "react";
import './Events_3.css';
import posted_3 from '../../Assets/DoA19Oct-e1728635564684.jpg';
import Navbar from "../Navbar/Navbar";

export default class Events_3 extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <section className="event-3">
                    <div className="events-info-3">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="info-8">
                                    <h1 className="info-8">Day of Action for Palestine – 19 October 2024 </h1>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="social-media-3">
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

                <section className="posted-3">
                    <h6 className="heading-3">Posted on October 17, 2024</h6>
                    <div className="posted-info-3">
                        <div className="posted-image-3">
                            <img src={posted_3} alt="" />
                        </div>
                        <div className="posted-data-3">
                            <h4 className="event-details-3">When</h4>
                            <p><span>&#128197;</span>   19/10/2024      </p>
                            <p><span>&#128336;</span> All Day</p>
                                </div>
                            <div class="information-3">
                                <p>Join the day of action for Palestine on Saturday 19 October to demand that Britain ends its complicity in Israel’s genocide in Palestine, and its bombing and ground invasion of Lebanon.</p>
                                <p>The year long genocide in Gaza continues, alongside attacks on Palestinians in the occupied West Bank. Israel is attacking and invading Lebanon, and we are confronted with the imminent threat of an even wider war. </p>
                                <p>We will take action in our communities to demand: stop the genocide in Gaza, hands off Lebanon, don’t attack Iran!</p>
                                <p className="TBA">List of actions TBA</p>

                        </div>

                       
                        


                    </div>
                </section>


            </Fragment>
        );
    }
}