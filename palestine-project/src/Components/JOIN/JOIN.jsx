import React, { Component, Fragment } from "react";
import styleJOIN from "./JOIN.module.css";

export default class JOIN extends Component {
  render() {
    return (
      <Fragment>
        <section className={`container ${styleJOIN["container"]}`}>
          <nav aria-label="breadcrumb ">
            <ol className={`breadcrumb ${styleJOIN["breadcrumb"]}`}>
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                JOIN US
              </li>
            </ol>
          </nav>

          <div className={`container mt-3 p-0  ${styleJOIN["container"]}`}>
            <h1>Join or Renew Your Membership</h1>
          </div>
        </section>
        <section
          className={`join-content py-4 px-2 ${styleJOIN["join-content"]}`}
        >
          <div className="wrap container">
            <div className="content row">
              <div className="main">
                <div className={`inner bg-light ${styleJOIN["inner"]}`}>
                  <h1>Join PSC!</h1>
                  <p>
                    PSC campaigns for justice, peace, and self-determination for
                    Palestinians, in support of international law and human
                    rights and against all racism.
                  </p>
                  <p>
                    Your membership is vital for us to continue our work. Join
                    us now and become part of a mass movement for peace and
                    justice for the Palestinian people.
                  </p>

                  <div
                    className={`membership-boxes d-flex justify-content-between ${styleJOIN["membership-boxes"]}`}
                  >
                    <div className={`box one ${styleJOIN["one"]}`}>
                      <div className={`details ${styleJOIN["details"]}`}>
                        <div className={`box-title ${styleJOIN["box-title"]}`}>
                          Standard membership
                        </div>
                        <br />
                        <p>From £30 a year.</p>
                        <p>This membership is available to everyone.</p>
                      </div>
                      <div className={`btn-links ${styleJOIN["btn-links"]}`}>
                        <a className={`btn  ${styleJOIN["btn"]}`} href="/JoinUs">
                          JOIN
                        </a>
                        <a className={`btn  ${styleJOIN["btn"]}`} href="/">
                          RENEW
                        </a>
                      </div>
                    </div>

                    <div className={`box two ${styleJOIN["two"]}`}>
                      <div className={`details ${styleJOIN["details"]}`}>
                        <div className={`box-title ${styleJOIN["box-title"]}`}>
                          Concession membership
                        </div>
                        <br />
                        <p>From £15 a year.</p>
                        <p>
                          For those who are unwaged, unemployed, or retired.
                        </p>
                      </div>
                      <div className={`btn-links ${styleJOIN["btn-links"]}`}>
                        <a className={`btn  ${styleJOIN["btn"]}`} href="/">
                          JOIN
                        </a>
                        <a className={`btn  ${styleJOIN["btn"]}`} href="/">
                          RENEW
                        </a>
                      </div>
                    </div>

                    <div className={`box one ${styleJOIN["one"]}`}>
                      <div className={`details ${styleJOIN["details"]}`}>
                        <div className={`box-title ${styleJOIN["box-title"]}`}>
                          Student or Youth membership
                        </div>
                        <br />
                        <p>From £10 a year.</p>
                        <p>
                          For supporters in full time education or who are under
                          30
                        </p>
                      </div>
                      <div className={`btn-links ${styleJOIN["btn-links"]}`}>
                        <a className={`btn  ${styleJOIN["btn"]}`} href="/">
                          JOIN
                        </a>
                        <a className={`btn  ${styleJOIN["btn"]}`} href="/">
                          RENEW
                        </a>
                      </div>
                    </div>
                  </div>

                  <br />

                  <div className={`text ${styleJOIN["text"]}`}>
                    <h1>By joining you will:</h1>
                    <div className="row p-4">
                    <p>
                      Have the chance to join in local, national, and
                      international action in the fight for justice
                    </p>
                    <ul>
                      <li>
                        Be part of a movement whose voice is heard in Parliament
                        and in Europe
                      </li>
                      <li>
                        Receive information about events in Palestine and in the
                        UK
                      </li>
                      <li>
                        Have access to materials and speakers from PSC to
                        organise your own event
                      </li>
                      <li>
                        Become part of one of the most vibrant, fastest-growing
                        political campaigns in the country
                      </li>
                      <li>To be a PSC member you must agree with our aims.</li>
                    </ul>
                    </div>

                    <h1>Frequently asked questions:</h1>
                    <div className="row p-4">
                    <h3>Are you a charity?</h3>
                    <p>
                      No, PSC is not a charity. As a political campaign, PSC is
                      not eligible for the financial benefits charitable status
                      brings, which makes it even harder to raise our funds.
                      However, political campaigning is vital to help bring
                      about a solution, so Palestinians can determine their own
                      future and no longer rely on international aid or
                      charitable support.
                    </p>
                    <h3>Can I join offline?</h3>
                    <p>
                      Yes, you can. Please call us on 020 7700 6192 to pay by
                      debit or credit card over the phone OR send a cheque made
                      out to Palestine Solidarity Campaign OR print and return
                      by email or post a Standing Order form. Our postal address
                      is Palestine Solidarity Campaign, PO Box BM PSA, London,
                      WC1N 3XX.
                    </p>
                    <h3>Can I donate but not join?</h3>
                    <p>
                      Yes, if you want to support our campaigns but not become a
                      member you can make an online donation here, or call us on
                      020 7700 6192 to donate over the phone with your credit or
                      debit card.
                    </p>
                    <h3>What method of payment can I use online?</h3>
                    <p>
                      You can make a recurring online payment for your
                      membership via Direct Debit or bank card by clicking the
                      relevant JOIN button above, on this page.
                    </p>
                    <h3>How are my membership subscription fees used?</h3>
                    <p>
                      PSC is powered by subscriptions from our members and
                      donations from our wide range of supporters, without which
                      we simple wouldn’t exist. Campaigns cost money- lobbying
                      politicians, challenging government policy, holding the
                      media to account, taking on corporations, and building a
                      mass movement can’t be done for free. The majority of our
                      funds, including your membership subs, are spent directly
                      on our campaigns: organising protests, meetings, lobbies,
                      and vigils; and paying for technology, leaflets,
                      equipment, our office and small staff team. As a
                      grassroots organisation, every donation and membership sub
                      we receive makes a big difference to what we are able to
                      do.
                    </p>
                    <h3>How does my membership make a difference?</h3>
                    <p>
                      Our members have always been at the heart of PSC, building
                      a powerful campaign for Palestine. We know that we are
                      stronger when we stand together, by joining PSC you help
                      grow our movement and strengthen our voice. We know that
                      the more of us join together in solidarity the better able
                      we are to stand up to the government and take on corporate
                      giants- and to win. Together, we can challenge key
                      decision makers and bring about change for Palestinians
                      living under Israeli occupation and on the end of
                      discriminatory Israeli policies.
                      <br />
                      <br />
                      By joining PSC and helping us grow the campaign, you are
                      sending a powerful message to Westminster that the people
                      in the UK are united behind freedom, rights, justice and
                      equality for Palestine. And together, we send a heartfelt
                      message to the Palestinian people that they have our
                      support.
                    </p>
                    </div>
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
