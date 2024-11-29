import React, { Component, Fragment } from "react";
import './Events_2.css';
import posted_2 from '../../Assets/Barclays-Tesco-5-e1728552196270.png';
import Navbar from "../Navbar/Navbar";

export default class Events_2 extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <section className="event-2">
                    <div className="events-info-2">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="info-2">
                                    <h1 className="info-3"> Protest: No to Barclays Buying Tesco Bank </h1>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="social-media-2">
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

                <section className="posted-2">
                    <h6 className="heading-2">Posted on October 17, 2024</h6>
                    <div className="posted-info-2">
                        <div className="posted-image-2">
                            <img src={posted_2} alt="" />
                        </div>
                        <div className="posted-data-2">
                            <h4 className="event-details-2">When</h4>
                            <p><span>&#128197;</span>  17/10/2024    </p>
                            <p><span>&#128336;</span>10:00 am - 11:00 am </p>

                            <div class="info-2">
                                <p className="where">where</p>

                                <div className="posted-2-icons">
                                <i class="fa-solid fa-location-dot"></i>
                                </div>
                                <p className="location">7 Rolls Buildings, Fetter Lane, London, EC4A 1NL</p>
                            </div>


                        </div>

                        < div class="map-container">

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.4303951693817!2d-0.10776489030026244!3d51.515769914969844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b4cda2b77e1%3A0x71acc872546f64d5!2zRW1wbG95bWVudCBBcHBlYWwgVHJpYnVuYWwsIDcgUm9sbHMgQnVpbGRpbmdzLCBGZXR0ZXIgTG4sIExvbmRvbiBFQzRBIDFOTNiMINin2YTZhdmF2YTZg9ipINin2YTZhdiq2K3Yr9ip!5e0!3m2!1sar!2seg!4v1728844110824!5m2!1sar!2seg" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                        </div>
                        <div className="information-2">

                            <p><span>&#128197;</span>  Thursday 17 October 2024 </p>
                            <p><span>&#128336;</span>10:00 AM </p>
                            <p><span>📍</span>Outside Chancery Division of High Court, 7 Rolls Buildings, London, EC4A 1NL. </p>
                            <p>The High Court is holding a hearing to approve Barclays
                                attempts to buy Tesco Bank, and use its
                                branding to offer products to customers.</p>
                            <p>Join PSC, War on Want and Campaign Against Arms Trade to protest
                                outside the High Court to demand it rejects permission for the sale to
                                proceed. Barclays shouldn’t
                                be allowed to use the Tesco brand to hide its complicity in Israel’s genocide.</p>
                            <p>Barclays holds substantial financial ties to arms companies supplying Israel with the weapons and military technology it is using in its genocidal assault on Palestinians.</p>
                        </div>


                    </div>
                </section>


            </Fragment>
        );
    }
}