import React, { Component, Fragment } from "react";
import './Articles_2.css';
import Navbar from "../Navbar/Navbar";





export default class Articles_2 extends Component {

    render() {
        return (
            <Fragment>
                <Navbar/>

                <section className="articles-2">
                    <div className="articles-2 menu">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="opp-10">
                                    <h1>PSC calls for sanctions in response to Israel’s bombing and invasion of Lebanon</h1>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="lore-2">
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

                <section className="post-2">
                    <div className="articles-menus-2">
                        <h1 className="waiting-2">Posted on October 1, 2024</h1>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="opp-2">

                                    <span><a href="/">in last news</a></span>

                                    <p className="lops2">For the past year, Israel has unleashed a genocidal assault on Palestinians
                                        in Gaza, which has killed at least 41,000
                                        Palestinians, displaced 90% of Gaza’s population, many time and time again, and caused
                                        mass devastation, with two-thirds of buildings in Gaza being damaged or destroyed.</p>


                                    <p className="lops2">
                                        Emboldened by the impunity afforded to it by Western governments,
                                        including the UK – an impunity that stretches back decades –
                                        Israel has now launched a major bombardment and ground invasion of Lebanon.
                                        This follows the simultaneous explosion of hundreds of pagers and electronic devices
                                        in Lebanon, killing dozens including two children, in what can only be described as
                                        an act of terrorism on a massive scale.

                                    </p>

                                    <p className="lops2">
                                        Hundreds have been killed in Israel’s attacks on Lebanon, while
                                        around one million people, nearly a fifth of the entire population,
                                        has been displaced, among them 100,000 people, including 60,000 children,
                                        pushed into Syria. In the last 24 hours, Israel has bombed at least two
                                        Palestinian refugee camps in Lebanon, Ein El Hilweh near Sidon and El Buss
                                        near Tyre. As in Gaza, Israel is carrying out extensive bombing campaigns, while issuing
                                        evacuation orders for dozens of villages in southern Lebanon.

                                    </p>

                                    <p className="lops2">
                                        Since launching its genocidal assault on Palestinians in Gaza, Israel has repeatedly
                                        bombed Lebanon, killing over 750 people before this latest round of bombing. Since October
                                        2023, Israel launched 81% of all cross-border fire between Israel
                                        and Hezbollah and other armed groups in Lebanon.
                                    </p>

                                    <p className="lops2">
                                        This is not the first time Israel has launched a major assault
                                        on Lebanon, which is home to over 480,000 Palestinian refugees,
                                        mostly descendants of those expelled by Zionist forces in the Nakba. In June 1982, Israel invaded Lebanon and supported the Lebanese Forces militia to massacre thousands of Palestinians in Sabra and Shatila refugee camp in Beirut. Israel went on to occupy southern Lebanon for 18 years. In 2006, Israel again invaded southern Lebanon, killing over 1,100 civilians and destroying large
                                        amounts of civilian infrastructure.
                                    </p>

                                    <p className="lops2">

                                        We demand meaningful action including sanctions to put pressure on Israel to immediately  end its genocide in Gaza and its attacks on Lebanon. The UK government’s calls for restraint are clearly insufficient when Britain continues to export weapons to Israel to carry out its attacks.
                                        We continue to demand a full two-way arms embargo on Israel now.
                                    </p>
                                    <p className="lops2">Join us on 5 October in London as we march, once again, in our hundreds of thousands through London to demand an end to the genocide, an end to Israel’s attacks in Lebanon and neighbouring states, and freedom and justice for all.</p>


                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="write-2">

                                    <h1 className="categ-2">Categories</h1>
                                    <div className="section-2">

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
                                
                                <div class="newsletter-container-2">
                                        <h2 className="next-2">Newsletter</h2>
                                        <p className="fill-2">Fill out your e-mail address and name to receive our newsletter!</p>
                                        <p class="required-info-2"><strong>*</strong> indicates required fields</p>
                                        <form  className="forme-2" action="#">
                                            <input className="pop-2" type="text" name="first_name" placeholder="First name*" required/>
                                                <input className="pop-2" type="text" name="last_name" placeholder="Last name" required/>
                                                    <input className="pop-2" type="email" name="email" placeholder="Email*" required/>
                                                        <button className="btn-sumbit1-2" type="submit">SIGN UP</button>
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