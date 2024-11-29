
import React, { Component, Fragment } from "react";
import './Articles.css';
import Navbar from "../Navbar/Navbar";






export default class Articles extends Component {

    render() {
        return (
            <Fragment>
                <Navbar/>


                <section className="articles">
                    <div className="articles-menu">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="opp-2">
                                    <h1>After One Year of Genocide – Uphold International Law, Stop Arming Israel Now</h1>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="lore">
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
                <section className="post">
                    <div className="articles-menus">
                        <h1 className="waiting">Posted on October 1, 2024</h1>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="opp">

                                    <span><a href="/">in last news</a></span>

                                    <p className="lops1">Today marks a year since the start of Israel’s ongoing
                                        genocidal assault against the Palestinian people in the Gaza Strip. Since 7
                                        October last year, at least 42,000 Palestinians, more than 2,000 Lebanese people
                                        and over 1,200 Israelis have been killed. In Gaza, over two million people have been displaced – many of them multiple times – and infrastructure including schools, mosques, hospitals and universities have been destroyed. The entire population has been left facing famine. As we pass this horrific milestone, the genocide in Gaza continues alongside attacks on Palestinians in the West Bank, Israel is attacking and invading Lebanon, and we are confronted with the imminent threat of an even wider war. </p>


                                    <p className="lops1">
                                        In our immediate response to the escalation of violence starting on
                                        7 October 2023, we spelled out our demand that international law and principles
                                        of human rights be applied consistently:

                                    </p>

                                    <p className="lops1">

                                        “International law must be the framework within which we judge acts
                                        of violence and their legitimacy. International law makes it clear
                                        that the deliberate killing of civilians, hostage-taking and
                                        collective punishment are war crimes. International law also enshrines the right of a people
                                        to resist oppression and military occupation.
                                    </p>

                                    <p className="lops1">
                                        The violence of the past year is the bitter fruit of repeated failures by western governments –
                                        including Britain – to support this legal framework without discrimination. Instead,
                                        British political leaders have provided diplomatic and military support for Israel’s
                                        repeated and grave violations of international law, including its mass killing and
                                        cutting off food, water, electricity and medical supplies; frustrated efforts to hold
                                        Israel to account for war crimes; and continued to license the export weapons to Israel
                                        that are used to carry out atrocities. There was a stark contrast between the British
                                        government’s recent wholesale condemnation of Iran, on the one hand, and the complete
                                        absence of any condemnation of Israel, on the other, let alone
                                        a willingness to take the necessary actions to hold it to account for its crimes.
                                    </p>

                                    <p className="lops1">
                                        For the past year those who have stood up for international law
                                        have been demonised in the press and by politicians. But the British
                                        government’s position is increasingly untenable as the realities of
                                        Israel’s crimes are exposed. In January, the International Court of
                                        Justice (ICJ) ruled it plausible that Israel is committing genocidal
                                        acts in its assault on Palestinians in Gaza. The prosecutor of the
                                        International Criminal Court (ICC) has applied for arrest warrants
                                        for senior Israeli leaders – including the Prime Minister Benjamin
                                        Netanyahu – for crimes against humanity and war crimes. In July,
                                        the ICJ further ruled that Israel’s decades-long occupation of
                                        Gaza and the West Bank including East Jerusalem is unlawful and
                                        found Israel guilty of violating the international prohibition
                                        on racial segregation and apartheid. In September, the United
                                        Nations General Assembly overwhelmingly adopted a resolution calling
                                        for the implementation of the July advisory opinion of the ICJ
                                        , including through sanctions against Israel.
                                    </p>

                                    <p className="lops1">

                                        Throughout this year we have asserted the truth that the current violence
                                        can only be understood in the context of Israel’s 76 year-long regime of
                                        settler-colonialism, military
                                        occupation and apartheid.  Violence will not end until this regime of oppression is dismantled.
                                    </p>

                                    <p className="lops1">

                                        The British government must not continue to treat Israel as an
                                        ally rather than using its influence to end impunity for a state that is practicing apartheid and is currently on trial for genocide. Today, we restate our demand for an immediate and permanent ceasefire to end Israel’s genocide, and for an end to all arms trade with Israel. In the face of Israel’s countless atrocities, Palestinians continue to steadfastly pursue their struggle for justice. We will continue to campaign in solidarity and uphold the right of the Palestinian
                                        people to freedom, self-determination and return.
                                    </p>


                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="write">

                                    <h1 className="categ">Categories</h1>
                                    <div className="section">
                                        <a href="/">Actions</a>
                                        <a href="/">Boycott, divestment & sanctions</a>
                                        <a href="/">Coronavirus Bulletin</a>
                                        <a href="/">Opinion</a>
                                        <a href="/">Political updates</a>
                                        <a href="/">Press Releases and Statements</a>
                                        <a href="/">Uncategorized </a>
                                    </div>
                                    <div class="newsletter-container">
                                        <h2 className="next">Newsletter</h2>
                                        <p className="fill">Fill out your e-mail address and name to receive our newsletter!</p>
                                        <p class="required-info"><strong>*</strong> indicates required fields</p>
                                        <form  className="forme" action="#">
                                            <input className="pop" type="text" name="first_name" placeholder="First name*" required/>
                                                <input className="pop" type="text" name="last_name" placeholder="Last name" required/>
                                                    <input className="pop" type="email" name="email" placeholder="Email*" required/>
                                                        <button className="btn-sumbit1" type="submit">SIGN UP</button>
                                                    </form>
                                                </div>


                                            </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Fragment>
                    );
    }

}