
import React, { Component, Fragment } from "react";
import './Events_1.css';
import posted_1 from '../../Assets/PSC-TU-Conf-24.jpg';
import Navbar from "../Navbar/Navbar";

export default class Events_1 extends Component {
    render() {
        return (
            <Fragment>
                <Navbar/>
                <section className="event">
                    <div className="events-info">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="info">
                                    <h1 className="info-1"> PSC Conference: Trade Unions Building Solidarity with Palestine </h1>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="social-media">
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

                <section className="posted">
                    <h6 className="heading">Posted on October 19, 2024</h6>
                    <div className="posted-info">
                        <div className="posted-image">
                            <img src={posted_1} alt="" />
                        </div>
                        <div className="posted-data">
                            <h4 className="event-details">When</h4>
                            <p><span>&#128197;</span> 19/10/2024</p>
                            <p><span>&#128336;</span> 10:00 am - 4:30 pm</p>
                        </div>

                        <div className="event-type">
                            <h3>Trade Unions Building Solidarity with Palestine</h3>
                            <p><strong>A conference for trade unionists to escalate their solidarity actions with the Palestinian people against genocide and apartheid</strong></p>
                            <p><strong>Date: Saturday 19th October, 10am – 4.30pm</strong></p>
                            <p><strong>Hamilton House, Mabledon Place, WC1H 9BB London</strong></p>
                            <p><strong>Speakers:</strong></p>
                            <p> <strong>Nadia Habash, President of the Palestinian Engineers’ Syndicate </strong> </p>
                            <p> <strong>Dr Samia Al-Botmeh, Palestinian academic at the
                                economics department at Birzeit University,
                                and BDS activist</strong> </p>
                            <p> <strong> Riya Al-Sanah, Palestinian researcher
                                and
                                organiser
                                with the Workers in Palestine initiative </strong> </p>
                            <p> <strong> Fran Heathcote, General Secretary PCS </strong> </p>
                            <p> <strong> Jeremy Corbyn MP </strong> </p>
                            <p> <strong> Phil Clarke, President NEU   </strong> </p>
                            <p> <strong>  Liz Wheatley, Chair International Committee UNISON   </strong> </p>
                            <p> <strong> Dooley Harte, Pension Official UCU </strong> </p>
                            <p> <strong> Ben Jamal, Director PSC </strong> </p>
                            <p> <strong> Louise Regan, Chair PSC & NEU EC </strong> </p>
                            <p className="last-child">  With more to be confirmed. </p>
                            <p><strong>Register by using the form below.</strong></p>
                            <p>Palestinian society is currently facing its most horrific challenge. Israel’s genocidal
                                assault has killed many tens of thousands and displaced more than 85% of Gaza’s
                                population since October. Across their homeland and in exile, Palestinians are
                                subjected to a system of oppression that is recognised internationally
                                as meeting the legal definition of the crime of apartheid.</p>
                            <p>Trade union members have been at the forefront of the fight back against
                                the increasingly genocidal actions of the state of Israel. Including the
                                tens of thousands who have joined the huge national protest in London and
                                around the country, leading actions of all kinds, including in their workplace
                                and in their local areas, demanding an end to British
                                state, corporate and institutional complicity in Israel’s crimes.</p>
                            <p>We need to continue the fight and it is our duty as trade unionists
                                and activists in the UK to escalate our solidarity, for freedom, equality
                                and justice for the Palestinian people.</p>
                            <p>This conference will hear from key Palestinian voices, as
                                well as leaders of the UK trade union movement, on what we need to do next in solidarity with
                                Palestine. This includes stepping up the divestment campaigns targeting all institutions complici
                                t with Israel’s crimes. There also needs to be renewed focus on the fightback against normalisation,
                                 to challenge the attempts to sidetrack the core solidarity work against Israel’s genocidal assault. And just as importantly we need to continue to engage and highlight the ongoing campaigns, taking place in all unions, to create the space and offer resources to support activists relentlessly championing justice,
                                equality and freedom for the Palestinian people in their unions.</p>
                            <p>We need to stand strong and united, against genocide and apartheid, for justice
                                 and peace in Palestine.</p>
                            <p></p>
                            <p>The conference will include panel sessions on Palestinian workers bearing
                                the weight of genocide
                                and apartheid and the next steps for the trade union movement.</p>
                            <p> And here will be seminar sessions discussing the following topics: <br />– Divest for Palestine – Focus on Divestment campaings as part of BDS <br />
                                – Defending Palestinian Rights: Solidarity – Not Normalisation and Apartheid <br />
                                – Organising for Palestine in your Trade Union – What you can do in your TU to continue to push for a free Palestine </p>


                        </div>

                        <div className="header-title">
                            <h3 className="form-title">PSC Trade Union Conference 2024</h3>
                            <p className="form-description">I wish to register as a trade union member for the PSC Trade Union Conference on Saturday 19 October 2024.</p>
                        </div>

                        <div class="form-container">
                            <form action="#">
                                <h2>Tickets</h2>

                                <div class="radio-group">
                                    <input type="radio" id="full-price" name="ticket" value="full-price" />
                                    <label for="full-price">Full price tickets £20</label><br />

                                    <input type="radio" id="psc-member" name="ticket" value="psc-member" />
                                    <label for="psc-member">PSC member and concession tickets £15</label>
                                </div>

                                <div class="input-group">
                                    <label for="first-name">Name *</label>
                                    <br />
                                    <div className="lolq">
                                    <input type="text" id="first-name" placeholder="First" required />
                                    <input type="text" id="last-name" placeholder="Last" required />
                                    </div>
                                </div>

                                <div class="input-group">
                                    <label for="member-of">I am a member of: *</label><br />
                                    <select id="member-of" required>
                                        <option value="union-affiliated">A national trade union affiliated to PSC</option>
                                        <option value="union-affiliated">A region of a national trade union affiliated to PSC</option>
                                        <option value="union-affiliated">A union branch that is affiliated to PSC</option>
                                        <option value="union-affiliated">Another trade union</option>
                                    </select>
                                </div>

                                <div class="input-group">
                                    <label for="union-name">Union name *</label><br />
                                    <input type="text" id="union-name" required />
                                </div>

                                <div class="input-group">
                                    <label for="branch-name">Branch name *</label><br />
                                    <input type="text" id="branch-name" required />
                                </div>
                                <div class="radio-group">
                                    
                                    
                                <p className="price">Are you a member of Palestine Solidarity Campaign*</p>
                                    <input type="radio" id="psc-member" name="ticket" value="psc-member" />
                                
                                    <label for="psc-member" className="yes">YES</label>
                                    <br />
                                    <input type="radio" id="psc-member" name="ticket" value="psc-member" />
                                    <label for="psc-member" className="yes">NO</label>
                                </div>
                                
                                <div class="radio-group">
                                    <p className="price">Is your trade union branch affiliated to Palestine Solidarity Campaign?*</p>
                                    <input type="radio" id="full-price" name="ticket" value="full-pric" />
                                    <label for="full-price" className="yes">YES</label><br />

                                    <input type="radio" id="psc-member" name="ticket" value="psc-member" />
                                    <label for="psc-member" className="yes" >NO</label>
                                    <br />
                                    <br />
                                <p className="space">For more information on how to affiliate to
                                     Palestine Solidarity Campaign, see here:
                                      https://www.palestinecampaign.org/affiliate-to-psc/</p>

                                      <div class="input-group-4">
                                    <label for="Address"> Address*</label><br />
                                    <input  type="text" id="branch-name" required />
                                </div>
                                
                                      <div class="input-group-4">
                                    <label for="branch-name">Street Address*</label><br />
                                    <input type="text" id="branch-name" required />
                                </div>
                                      <div class="input-group-4">
                                          
                                      <label for="branch-name">Address Line 2</label><br />
                                      <input type="text" id="branch-name" required />
                                </div>
                                      <div class="input-group-4">
                                    <label for="branch-name"> County / State / Region</label><br />
                                  
                                    <input type="text" id="branch-name" required />
                                    <p>ZIP / Postal Code</p>
                                </div>
                                      <div class="input-group-4">
                                    <label for="email"> Email**</label><br />
                                    <input type="email" id="email" required />
                                </div>
                                <div class="input-group-6">
                                    <label for="member-of">Payment type*</label><br />
                                    <select id="member-of" required>
                                        <option value="union-affiliated">Online</option>
                                        <option value="union-affiliated">BACS - read description below before submitting</option>
                                        <option value="union-affiliated">Cheque - read description below before submitting</option>
                                     </select>

                                     
                                </div>
                           
                                     <p className="end">You can pay by cheque, made out to Palestine Solidarity Campaign,
                                         our postal address is: Palestine Solidarity Campaign, PO Box BM PSA,
                                          London, WC1N 3XX. You can pay by BACS transfer to the following: Account name:
                                           Palestine Solidarity Campaign Ltd Account number: 20333702 Sort code: 60-83-01
                                            Please provide the reference: 'TUConf2024' for both BACS and Cheque payments. 
                                            You may be taken to the payment page after clicking submit. Please close that
                                             page if you are paying offline.
                                         Your registration will be logged once submit has been clicked.</p>

                                </div>
                                   <button className="sumbit ">sumbit </button>
                                   </form>
                                  </div>
                     
                                 
                    </div>
                </section>
            </Fragment>
        );
    }
}
