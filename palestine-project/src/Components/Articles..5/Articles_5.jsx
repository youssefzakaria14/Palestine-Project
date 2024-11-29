import React, { Component, Fragment } from "react";
import './Articles_5.css';
import Navbar from "../Navbar/Navbar";





export default class Articles_5 extends Component {

    render() {
        return (
            <Fragment>
                <Navbar/>

                <section className="articles-5">
                    <div className="articles-5 menu">
                        <div className="row">
                            <div className="col-md-5">
                                <div className="opp-6">
                                    <h1>ICJ ruling finds Israel guilty of unlawful occupation and apartheid</h1>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="lore-5">
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

                <section className="post-5">
                    <div className="articles-menus-5">
                        <h1 className="waiting-5">Posted on October 1, 2024</h1>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="opp-7">

                                    <span><a href="/">in last news</a></span>

                                    <p className="lops5">Today the ICJ has issued a seismic
                                        judgement declaring Israel to be exercising an unlawful occupation
                                        of Palestinian land in the West Bank, Gaza and East Jerusalem.  It
                                        demands Israel withdraw immediately, dismantle settlements and
                                        pay reparations to the Palestinian people.  </p>


                                    <p className="lops5">
                                        This ruling confirms what Palestinians, the international
                                        solidarity
                                        movement, and human rights experts have long maintained –
                                        that Israel is practicing the crime of apartheid.
                                    </p>

                                    <p className="lops5">
                                    Whilst Palestinians, PSC and all who have been paying attention to the
                                     situation in Palestine have long known and said this, the ICJ’s judgement is unprecedented and has
                                     huge implications for the UK government and international community.  

                                    </p>

                                    <p className="lops5">
                                    Israel must be understood and responded to as a 
                                    rogue state operating outside the boundaries
                                     of international law.  
                                    </p>

                                    <p className="lops5">
                                    The international community must now take immediate action to 
                                    force Israel to end its illegal occupation and apartheid rule over 
                                    Palestinians. This must finally mark a turning point in the UK’s relationship with Israel.
                                      The UK government must act in compliance with this ruling, and immediately 
                                      meet the long-standing demand to end all arms trade with Israel 
                                    and cease all other trade which supports Israel’s illegal actions.  
                                    </p>

                                    <p className="lops5">

                                    Palestine Solidarity Campaign
                                    </p>
                                    


                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="write-5">

                                    <h1 className="categ-5">Categories</h1>
                                    <div className="section-5">

                                        <p>Actions</p>
                                        <p>Boycott, divestment & sanctions</p>
                                        <p>Coronavirus Bulletin</p>
                                        <p>Latest news</p>
                                        <p>Opinion</p>
                                        <p>Political updates</p>
                                        <p>Press Releases and Statements</p>
                                        <p>Uncategorized</p>
                                    </div>

                                </div>

                                <div class="newsletter-container-5">
                                    <h2 className="next-5">Newsletter</h2>
                                    <p className="fill-5">Fill out your e-mail address and name to receive our newsletter!</p>
                                    <p class="required-info-5"><strong>*</strong> indicates required fields</p>
                                    <form className="forme-5" action="#">
                                        <input className="pop-5" type="text" name="first_name" placeholder="First name*" required />
                                        <input className="pop-5" type="text" name="last_name" placeholder="Last name" required />
                                        <input className="pop-5" type="email" name="email" placeholder="Email*" required />
                                        <button className="btn-sumbit1-5" type="submit">SIGN UP</button>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }

}