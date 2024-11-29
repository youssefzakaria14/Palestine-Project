import React, { Component, Fragment } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSquarePlus } from '@fortawesome/free-solid-svg-icons'
import Navbar from "../Navbar/Navbar";
import styleabout from "./about.module.css";
import picture from "../../Assets/about-pic.webp";
import Footer from "../Footer/Footer";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <section className={`container  ${styleabout["container"]}`}>
          <nav aria-label="breadcrumb ">
            <ol className={`breadcrumb ${styleabout["breadcrumb"]}`}>
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                About
              </li>
            </ol>
          </nav>

          <div className={`container mt-3 p-0  ${styleabout["container"]}`}>
            <h1>About</h1>
          </div>
        </section>

        <section
          className={`about-content py-4 px-2 ${styleabout["about-content"]}`}
        >
          <div className="wrap container">
            <div className="content row">
              <div className="main">
                <div className={`inner ${styleabout["inner"]}`}>
                  <img
                    className={`${styleabout["picture"]}`}
                    src={picture}
                    alt=""
                  />
                  <br />
                  <br />
                  <p className={`${styleabout["pp"]}`}>
                    Palestine Solidarity Campaign (PSC) is a community of people
                    working together for peace, equality, and justice and
                    against racism, occupation, and colonisation.
                    <br />
                    <br />
                    Together we are the biggest organisation in the UK dedicated
                    to securing Palestinian human rights.
                  </p>
                  <p>
                    PSC brings people from all walks of life together to
                    campaign for Palestinian rights and freedom.
                    <br />
                    <br />
                    We are united in our belief that Israel’s flouting of
                    international law, continued military occupation of
                    Palestine, and systematic discrimination against
                    Palestinians is unacceptable; so together we are taking
                    action.
                    <br />
                    <br />
                    We are taking on corporations that profit from the
                    occupation, our government that still refuses to hold Israel
                    to account, and the media that does not report the truth.
                    And we are building a mass movement for Palestine in the UK.
                    <br />
                    <br />
                    We believe in people power. The more of us standing
                    together, raising the call for justice and equality, the
                    louder our voice. We know that united we can take on the
                    might of governments, corporations, and the media – and we
                    can win.
                  </p>
                  <br />
                  <br />

                  <section>
                    <div className="question text-success">
                      <h3>What are PSC's aims?</h3>
                    </div>
                    <div className="answer">
                      <br />
                      <p>
                        Palestinians should have the same rights and freedoms as
                        anyone else. But right now they don’t.
                      </p>
                      <p>
                        <strong className="text-danger">We believe</strong> no
                        one should have their rights denied or be treated
                        differently because of their ethnicity or religion. But
                        this is happening to the Palestinian people at the hands
                        of the Israeli government right now.
                      </p>
                      <p>
                        <strong className="text-danger">We believe</strong>{" "}
                        there can be a peaceful and just end to the decades of
                        occupation and oppression, one that respects the rights
                        and dignity of Palestinians and Israelis. But until this
                        happens, we have a responsibility to stand up for
                        Palestinian rights.
                      </p>
                      <p>
                        <strong className="text-danger">We believe</strong> that
                        change in the UK can affect change in Palestine. The
                        Israeli occupation can only survive as long as the
                        international community supports it. As a key ally of
                        Israel the UK is well placed to have a significant
                        impact.
                      </p>
                      <p>
                        <strong className="text-danger">We believe</strong> that
                        when people stand together we have the power to change
                        the course of history. So we are building a mass
                        movement for Palestine, with people from all walks of
                        life. Together we are standing up to our government, big
                        business, and the media making it clear that occupation,
                        the flouting of international law, and state-sanctioned
                        discrimination are not acceptable.
                      </p>
                    </div>
                    <br />

                    <div className="question text-success">
                      <h3>What are PSC's aims?</h3>
                    </div>
                    <div className="answer">
                      <br />
                      <p>
                        PSC campaigns for an end to the Israeli occupation of
                        Palestine and for peace and justice for everyone living
                        in the region.
                      </p>
                      <p>
                        The Aim of the Palestine Solidarity Campaign is to
                        support the Palestinian people’s struggle for freedom
                        justice and equality. We campaign in support of:
                      </p>
                      <ul>
                        <li>
                          the right of self-determination for the Palestinian
                          people;
                        </li>
                        <li>the right of return of the Palestinian people;</li>
                        <li>
                          the Palestinian struggle to end the systems of settler
                          colonialism, apartheid, and military occupations,
                          motivated by Zionism, which deny the realisation of
                          those rights.
                        </li>
                      </ul>
                    </div>
                    <br />

                    <div className="question text-success">
                      <h3>Where does your money come from?</h3>
                    </div>
                    <div className="answer">
                      <br />
                      <p>
                        PSC is powered by donations from our members and
                        supporters, without which we simply wouldn’t exist. We
                        ask our supporters to donate to our work so that we can
                        keep campaigning for as long as we need to.
                      </p>
                      <p>
                        We don’t accept money from governments, political
                        parties, or big businesses so we are truly independent
                        in our campaigning.
                      </p>
                      <p>
                        We are not a charity. As a political campaign we are not
                        eligible for the financial benefits charitable status
                        brings, which makes it even harder to raise our funds.
                        However, political campaigning is vital to help bringing
                        about a solution, so Palestinians can determine their
                        own future and no longer rely on international aid or
                        charitable support.
                      </p>
                    </div>
                    <br />

                    <div className="question text-success">
                      <h3>What do you spend your money on?</h3>
                    </div>
                    <div className="answer">
                      <br />
                      <p>
                        Campaigns cost money – lobbying politicians, challenging
                        government policy, holding the media to account, taking
                        on corporations, and building a mass movement can’t be
                        done for free.
                      </p>
                      <p>
                        The majority of our funds are spent directly on our
                        campaigns: organising protests, meetings, lobbies, and
                        vigils; and paying for technology, leaflets, equipment,
                        our office, and small staff team.
                      </p>
                      <p>
                        As a grassroots organisation, every donation we receive
                        makes a big difference to what we are able to do.
                      </p>
                    </div>
                    <br />

                    <div className="question text-success">
                      <h3>Are you linked to a political party or faction?</h3>
                    </div>
                    <div className="answer">
                      <br />
                      <p>
                        No. PSC is not aligned to any political party either
                        here in the UK or in Palestine.
                      </p>
                      <p>
                        We work with political parties in the UK from across the
                        spectrum to achieve real change in UK government policy
                        towards Palestine and Israel.
                      </p>
                      <p>
                        We do not support a particular political party in
                        Palestine. We believe in democracy; it is for the
                        Palestinian people to determine their own future. We are
                        campaigning for Palestinian self-determination and are
                        not involved in internal Palestinian politics.
                      </p>
                    </div>
                    <br />

                    <div className="question text-success">
                      <h3>How do you decide what to campaign on?</h3>
                    </div>
                    <div className="answer">
                      <br />
                      <p>
                        We are a member-led democratic organisation – so our
                        campaigns are set by you. If you haven’t already join us
                        today!
                      </p>
                      <p>
                        Each year we have our Annual General Meeting (AGM) where
                        we decide our campaigning priorities for the coming
                        year. We also work with our colleagues in Palestine,
                        listening to them about what they think our campaigning
                        priorities should be.
                      </p>
                      <p>
                        We are guided by our aims (see above) and all campaigns
                        must further these aims.
                      </p>
                    </div>
                    <br />

                    <div className="question text-success">
                      <h3>How have you made a difference?</h3>
                    </div>
                    <div className="answer">
                      <br />
                      <p>
                        WFor over 30 years, PSC supporters have been at the
                        forefront of the UK movement for Palestinian rights, and
                        together we’ve had some incredible successes. Here are
                        just a few:
                      </p>
                      <p>
                        In October 2014,{" "}
                        <strong className="text-danger">
                          the UK Parliament voted to recognise Palestine
                        </strong>{" "}
                        – PSC supporters sent 57,000 emails petitioning our MPs
                        to vote, leading to the best attended back bench vote
                        ever. We persuaded{" "}
                        <strong className="text-danger">
                          John Lewis to stop selling Soda Stream
                        </strong>{" "}
                        – pickets and petitions finally forced John Lewis to
                        stop stocking their products made in illegal Israeli
                        settlements. With BDS partners from around the world we
                        made{" "}
                        <strong className="text-danger">
                          Veolia sell their shares in the Jerusalem light
                          railway and G4S promise to sell off their subsidiary
                          G4S Israel
                        </strong>
                        ; both companies are pulling out of Israel.
                      </p>
                      <p>
                        Complaints from our team of volunteers have{" "}
                        <strong className="text-danger">
                          forced apology after correction from the BBC in
                          recognition of their biased reporting.
                        </strong>{" "}
                        Flagship news and current affairs programmes including
                        Today and Newsnight have breached guidelines or been
                        forced to issue corrections.
                      </p>
                      <p>
                        At the 2015 General Election over 1,000 parliamentary
                        candidates responded to over 36,000 emails asking them
                        for their views, making{" "}
                        <strong className="text-danger">
                          Palestine the biggest foreign policy issue at the
                          election.
                        </strong>{" "}
                        In 2014 during the brutal Israeli bombing of Gaza we
                        brought over{" "}
                        <strong className="text-danger">
                          150,000 people to the streets to protest
                        </strong>{" "}
                        the bombing and stand in solidarity with the people in
                        Gaza.
                      </p>
                      <p>
                        In December 2018, following a sustained campaign by PSC
                        and other partner organisations, banking giant{" "}
                        <strong className="text-danger">
                          HSBC announced it had fully divested from Elbit
                          Systems
                        </strong>{" "}
                        – Israel’s largest arms manufacturer.
                      </p>
                      <p>
                        We know that each of these achievements are small and
                        alone they won’t end the occupation. But they all add
                        up.{" "}
                        <strong className="text-danger">
                          Each victory is a step towards justice. Each victory
                          brings us one step closer to a free Palestine.
                        </strong>
                      </p>
                    </div>
                    <br />

                    <div className="question text-success">
                      <h3>How are you governed?</h3>
                    </div>
                    <div className="answer">
                      <br />
                      <p>
                        PSC is a democratic organisation managed by an elected
                        board called the Executive Committee (EC). Each year
                        members, branches, and affiliates elect volunteers to
                        serve on the Executive Committee at our Annual General
                        Meeting. These members are joined by representatives of
                        our Student and Youth Committee and Trade Union Advisory
                        Committee.
                      </p>
                      <p>
                        Each year we have our Annual General Meeting (AGM) where
                        we decide our campaigning priorities for the coming
                        year. We also work with our colleagues in Palestine,
                        listening to them about what they think our campaigning
                        priorities should be.
                      </p>
                      <p>
                        We are guided by our aims (see above) and all campaigns
                        must further these aims.
                      </p>
                    </div>
                    <br />

                    <div className="question text-success">
                      <h3>
                        How do I find out more about what is going on in
                        Palestine and Israel?
                      </h3>
                    </div>
                    <div className="answer">
                      <br />
                      <p>
                        There is lots of information available in our{" "}
                        <strong className="text-danger">factsheets</strong> and
                        back copies of{" "}
                        <strong className="text-danger">Palestine News</strong>{" "}
                        and in the{" "}
                        <strong className="text-danger">resources</strong>{" "}
                        section of this website. For up to date information
                        about what is happening on the ground you can also
                        follow us on{" "}
                        <strong className="text-danger">Facebook</strong> or{" "}
                        <strong className="text-danger">Twitter</strong>.
                      </p>
                      <p>
                        <strong className="text-danger">
                          Jewish Voice for Peace (JVP)
                        </strong>{" "}
                        have some brilliant resources on their website including{" "}
                        <strong className="text-danger">factsheets</strong>, and
                        this guide on how to have difficult conversations with
                        people about Israel and Palestine.
                      </p>
                      <p>
                        The{" "}
                        <strong className="text-danger">
                          Visualizing Palestine
                        </strong>{" "}
                        website has some brilliant infographics that illustrate
                        the wide-ranging impact of Israeli colonisation on
                        Palestinians, including the shrinking of Palestinian
                        land, the discriminatory Israeli ID card system, and the
                        illegal separation Wall.
                      </p>
                      <p>
                        There are a number of news sites that offer excellent
                        coverage of Palestine including{" "}
                        <strong className="text-danger">
                          Middle East Monitor, Ma’an News Agency, Electronic
                          Intifada, and Middle East Eye
                        </strong>
                      </p>
                    </div>
                    <br />
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </Fragment>
    );
  }
}
