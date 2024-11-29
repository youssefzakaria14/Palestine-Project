import { Component , Fragment } from "react";
import './Problem.css'
import image1 from '../../Assets/image1.jpeg'
import image2 from '../../Assets/image2.webp'
import image3 from '../../Assets/image3.png'
import image4 from '../../Assets/image4.png'
import image5 from '../../Assets/image5.webp'
import image6 from '../../Assets/image6.webp'
import image7 from '../../Assets/image7.webp'
import Navbar from '../Navbar/Navbar'






 class Problem extends Component {

    render() {
        return (
            <Fragment>
                <Navbar/>
                <section className="sec1">
                    <div className="container">
                        <div className="row mt-5">
                            <div className="col-lg-6">
                                <div className="card-img">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="card-news">
                                    <div className="row">
                                        <div className="col-lg-6">

                                        </div>
                                        <div className="card-text2">
                                            <h1 className="text-white ms-3">Order a Freshers' Pack for 2024 We'll send you posters, badges and more!</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="card-text ms-3 pt-3">
                                    <h2>Now more than ever, we need to organise to kick #ApartheidOffCampus</h2>
                                    <br />
                                    <p>Many British universities are deeply complicit in Israel's current bombardment of the Palestinian people, its ongoing occupation and apartheid, through:</p>
                                    <p>1) Investments in companies complicit in the oppression of Palestine <br />
                                        2) Institutional ties with complicit institutions and companies <br /><br />
                                        Join the campaign for British universities to kick apartheid off campus. <br />
                                        <br />Find us on <a href="/">Instagram</a> and <a href="/">Twitter</a> - and get in touch if you want a workshop or materials for your university. <br />
                                        <br /> Scroll down for more info on upcoming days of action.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="sec2 mt-5">
                    <div className="container pt-4">
                        <div className="row">
                            <div className="card_img">
                                <img className="w-100 h-75" src={image2} alt="" />
                            </div>
                            <div className="card-text mt-5">
                                <h1>WHAT'S NEXT?</h1> <br />
                                <p>With the new academic year fast approaching, now is the time to consolidate wins, reflect, and plan for more action. The last months have seen incredible mobilisation on campuses across the country, and now it’s time to build the movement even further.</p>
                                <ul> <br />
                                    <li><a href="/">Get in touch</a> if you would like PSC to run a talk or workshop at your university in the new term.</li>
                                    <li><a href="/">Order a Freshers’ Pack,</a> with badges, stickers, leaflets, posters and more – everything you need to start off the year and recruit some new organisers.</li>
                                </ul>
                            </div>
                            <br />
                            <img className="" src={image3} alt="" />
                            <div className="card_img mt-5">
                                <img className="w-100 h-75" src={image2} alt="" />
                            </div>
                            <div className="card-text mt-5">
                                <h1>STUDENTS ARE RISING UP!</h1> <br />
                                <p>Students have been at the forefront of progressive struggles that have shaped society – from the <br />
                                    campaigns against the US war in Vietnam to the movement that toppled apartheid in South Africa. <br /><br />
                                    Today students are part of a truly global struggle for Palestinian rights. Across the world, from Columbia to Cairo, students are taking action. <br /><br />
                                    More and more student encampments are being set up, demanding that universities divest from Israel’s ongoing genocide.
                                    <br /><br />
                                    <a href="/"> Get in touch with us</a> if you want us to deliver a workshop in your encampment, check out our advice page, and take a look at our legal resources if you are in an encampment.</p>
                            </div>
                            <br />
                            <div className="card_img mt-5">
                                <img className="w-100 h-75" src={image2} alt="" />
                            </div>
                            <div className="card-text mt-5">
                                <h1>ISRAELI APARTHEID WEEK 2024 </h1>
                            </div>
                            <br />
                            <img src={image4} alt="" />
                            <div className="card-text mt-3">
                                <p>Israeli Apartheid Week is an international call to action from the Palestinian BDS National Committee. It’s a mobilisation of grassroots solidarity organisations to raise awareness about Israeli apartheid and to organise support for strategic BDS campaigns to end international complicity in Israel’s system of oppression.
                                    <br /><br />
                                    This year more than ever we must take action on the Palestinian call for BDS and ensure that we organise targeted campaigns to kick apartheid off campus once and for all.
                                    <br /><br />As students we say no more: no more university complicity in genocide; no more funding for apartheid; and no more investment in settler colonialism.
                                    <br /><br />
                                    Join us for our National Student Days of Action on the 21st and 22nd March. We’re taking action – holding walk-outs, sit-ins, occupations and more – to demand that our universities end their complicity in this massacre.
                                    <br /><br />
                                    Get involved:
                                    <br /><ol>
                                        <li>Organise a walk out, teach in or demonstration on the 21st or 22nd March to demand our universities end all complicity in Israel’s genocidal attacks – more resources linked here</li>
                                        <li>Join other students organising in your university e.g. the Palestine Society – join their actions on the 21st/22nd, head over to their next meeting, or message the group to find out more</li>
                                        <li>Do some research into your university’s complicity, and start a campaign to demand they divest from all complicit companies (check out our University Complicity Database for more information)</li>
                                        <li>Show your support for the students currently in occupation at UCL, Goldsmiths, Leeds, Bristol, and hopefully more! Follow them on social media, share their demands, and get involved.</li>
                                    </ol>
                                </p>
                            </div>
                            <div className="card_img mt-5">
                                <img className="w-100 h-75" src={image2} alt="" />
                            </div>
                            <div className="card-text">
                                <h1>APARTHEID OFF CAMPUS: MARCH DAYS OF ACTION </h1> <br />
                                <h4>Students across the country are calling for an end to our universities’ research, commercial and institutional partnerships with Israel. That means full divestment from weapons and technology manufacturers which arm Israel’s genocide in Gaza.</h4>
                            </div>
                            <div className="card-pic text-center mt-5">
                                <h5>Join us to take action on Friday 8th March:</h5> <br />
                                <div className="card-picture"> </div>
                                <br />
                            </div>
                            <div className="card-text">
                                <article>🇵🇸 STUDENTS JOIN THE 8TH MARCH WORKPLACE DAY OF ACTION 🇵🇸</article>
                                <br />
                                <p>Our universities invest hundreds of thousands of pounds in companies complicit in Israel’s genocide. Students at universities across the country have been standing up and saying that we will not allow our institutions to continue this complicity. We will continue to walk out of classes, to protest, to occupy, until our universities fully divest from Israel’s ongoing genocidal attacks.
                                    <br /><br /> Join us by taking action in your institution on the 8th!
                                </p>
                                <h5>Resources: <br />
                                    <br />
                                    <ul>
                                        <li>Day of action guide</li> <br />
                                        <li>Research your university’s complicity using our University Complicity Database</li> <br />
                                        <li><a href="/">Template BDS Student’s Union motion</a></li> <br />
                                        <li>Barclays is a current BDS priority target in this country – find out more information about the campaign here; and a template SU motion to get your SU to commit to not banking on apartheid is here</li><br />
                                        <li><a href="/">Information student walkouts here, including advice on how to organise your own</a></li> <br />
                                        <li>Get in touch with the European Legal Support Centre if you need support against repression on campus; or email our Youth and Student Campaign </li>

                                    </ul>
                                </h5>
                            </div>


                            <div className="card_img mt-5 ">
                                <img className="w-100 h-75" src={image2} alt="" />
                            </div>
                            <div className="card-text mt-5">
                                <h1>Student account with Barclays?</h1>
                                <h5>Help us campaign for them to divest from apartheid.</h5>
                                <br />
                                <p>
                                    We’ve uncovered that Barclays Bank holds over £1 billion in shares, and provides over £3 billion in loans and underwriting to 9 companies whose weapons, components, and military technology have been used in Israel’s armed violence against Palestinians. By providing investment and financial services to these arms companies, Barclays facilitates the provision of weapons and technology for Israel’s militarised repression of Palestinians.
                                    <br /><br /> Alongside War on Want and Campaign Against Arms Trade, we’re calling on Barclays Bank to #StopBankingOnApartheid
                                </p>
                                <br /><br />
                                <h5>
                                    So what can you do? <br /><br />
                                    <ul>
                                        <li>Pass a motion at your Students’ Union committing them to not banking with Barclays until they stop funding apartheid – <a href="/">template motion here.</a></li>
                                        <br />
                                        <li>If you have a Barclays account, use our template letter and write to your local bank manager – <a href="/">download here.</a></li>
                                        <br />
                                        <li>Spread the word! Put up leaflets, posters and stickers around your university – download here, here and here.</li>
                                        <br />
                                        <li>Get involved with your local PSC Branch in organising around our Barclays: Don’t Bank on Apartheid days of action – <a href="/">more information here.</a></li>
                                        <br />
                                    </ul>
                                </h5>
                            </div>
                            <img src={image5} alt="" />
                            <div className="card_img mt-5 ">
                                <img className="w-100 h-75" src={image2} alt="" />
                            </div>
                            <div className="card-text mt-5">
                                <h1>Students Protect the Right to Boycott</h1>
                                <br />
                                <p>
                                    The government has now tabled the ‘Economic Activity of Public Bodies (Overseas Matters) bill’ (often called the ‘anti-boycott’ bill) which could dramatically restrict campaigns for social and climate justice – it aims to prevent local authorities, universities, some pension funds, and other public institutions from exercising ethical discretion when making financial decisions.
                                    <br /><br />
                                    A broad coalition of nearly 70 civil society organisations made up of trade unions, charities, NGOs, faith, climate justice, human rights, and solidarity organisations are calling on MPs to reject this bill in parliament. But what can students do?
                                    <br /><br />
                                    Student organisers have long used divestment as a tactic, from targeting companies complicit in South African apartheid, to the arms trade, and fossil fuel extraction. Many see this bill as the latest attempt from the government to curtail the power of the student movement as a force for justice.
                                    <br /><br />
                                    We’re asking students to:
                                    <br /><br />
                                    <ul>
                                        <li><a href="/">Read and share our student briefing to find out how this bill could impact student campaigning</a></li>
                                        <li><a href="/">Sign the petition against the bill</a></li>
                                        <li><a href="/">Write to your local MP to oppose the bill in Parliament</a></li>
                                        <li><a href="/">Write to your Vice Chancellor to ask them to oppose the bill</a></li>
                                        <li><a href="/">Get your SU to pass a motion opposing the bill</a></li>
                                    </ul>
                                </p>
                            </div>
                            <div className="card_img mt-2 ">
                                <img className="w-100 h-75" src={image2} alt="" />
                            </div>
                            <div className="card-text mt-5">
                                <h1>‘Palestine will be free’: Student organizing in the face of repression</h1>
                                <br /><br />
                                <a href="/">Read our Youth and Student Campaigns Officer in Mondoweiss, discussing the vitality of student organising and its historic power to push for material change. </a>
                                <br /><br />
                                <h2>“The students who stood against apartheid in 1973 did so because they knew that what was happening in South Africa was a crime: they heeded the calls of the Black South African student movement for solidarity, and they acted to push the UK government and complicit companies into action. […] In the same way, students today stand with the Palestinian people against colonialism and oppression, and we know that the UK government sides with the oppressor.”</h2>
                            </div>
                            <div className="card_img mt-2 ">
                                <img className="w-100 h-75" src={image2} alt="" />
                            </div>
                            <div className="card-text mt-5 ">
                                <h1>Israeli Apartheid Week 2023</h1>
                                <br /><br />
                                <h5>In March 2023, students from at least 15 universities across the UK joined the international Israeli Apartheid Week.</h5>
                                <p>We ran film screenings, public meetings and stalls, hosted workshops and ran talks. This year’s theme was ‘People Against Apartheid’, highlighting popular grassroots struggles against Israeli apartheid, and platforming the intersectionality of the movement for a free Palestine.
                                    <br /><br />
                                    <a href="/">Find out more information about the week here.</a>
                                </p>
                            </div>
                            <div className="card_img mt-5 ">
                                <img className="w-100 h-75" src={image2} alt="" />
                            </div>
                            <div className="card-text">
                                <h1>UK universities complicity</h1>
                                <br /><br />
                                <p>UK universities remain deeply complicit with Israel’s apartheid practises through their investment and institutional links.
                                    <br /><br />
                                    Universities invest directly in companies which:
                                    <br />
                                    <ul>
                                        <li>Supply the Israeli military with arms and military technology</li>
                                        <li>Assist in the building of illegal Israeli settlements in the OPT</li>
                                        <li>Develop the infrastructure of Israel’s military occupation</li>
                                    </ul>
                                    <br />
                                    UK universities also collaborate with complicit Israeli academic institutions, such as Technion – State of Technology. Technion is the leading research institute in Israel who develop weapons for companies such as Elbit Systems. These weapons are often tested on Palestinian civilians Gaza and then marketed as “field-tested” or “combat-tested” to the world.
                                    <br /><br />
                                    These investments and collaborations exist despite the majority of UK universities holding strong ethical policies that exist to prevent complicity with human rights abuses.
                                </p>
                            </div>
                            <img src={image6} alt="" />
                            <div className="card_img mt-4 ">
                                <img className="w-100 h-75" src={image2} alt="" />
                            </div>
                            <div className="card-text">
                                <h1>Apartheid Off Campus</h1>
                                <br /><br />
                                <p>
                                    Students in the UK have been at the forefront of campaigning for social justice for decades, including in the anti-apartheid in South Africa movement. However, the world is not free from the crime of apartheid.
                                    <br />
                                </p>
                                <br />
                                <h6>Get involved in the Palestine Society on your campus and join the campaign!</h6>
                                <br />
                            </div>
                            <img src={image7} alt="" />
                            <div className="card_img mt-5 ">
                                <img className="w-100 h-75" src={image2} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

            </Fragment>
        );
    }

}
export default Problem;
